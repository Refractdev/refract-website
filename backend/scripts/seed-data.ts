#!/usr/bin/env node

import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

async function setupDatabase() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  });

  try {
    console.log("Setting up database...");

    // Create extensions if not exists
    await pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await pool.query('CREATE EXTENSION IF NOT EXISTS "pgcrypto"');

    // Run migrations
    const migrationFiles = [
      "./src/migrations/001_initial_schema.sql",
    ];

    for (const migrationFile of migrationFiles) {
      const sql = require("fs").readFileSync(migrationFile, "utf8");
      await pool.query(sql);
      console.log(`Applied migration: ${migrationFile}`);
    }

    // Create admin user
    const adminUserExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      ["admin@refract.dev"]
    );

    if (adminUserExists.rows.length === 0) {
      const bcrypt = require("bcryptjs");
      const hashedPassword = await bcrypt.hash("admin123", 12);

      await pool.query(
        "INSERT INTO users (email, name, password, provider) VALUES ($1, $2, $3, $4)",
        ["admin@refract.dev", "Admin User", hashedPassword, "email"]
      );

      console.log("Created admin user: admin@refract.dev");
    }

    console.log("Database setup completed successfully!");

    await pool.end();
  } catch (error) {
    console.error("Database setup failed:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  setupDatabase();
}

export { setupDatabase };
