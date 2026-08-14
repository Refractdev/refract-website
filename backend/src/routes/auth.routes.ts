import express, { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { QueryResult } from "pg";
import { User, AuthToken } from "../types";
import { createDatabaseConnection } from "../config/database";
import logger from "../lib/logger";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET não definido");

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({ success: false, error: "Email, name, and password are required" });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const pool = await createDatabaseConnection();
    try {
      // Check if user already exists
      const existingUser = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
      if (existingUser.rows.length > 0) {
        return res.status(409).json({ success: false, error: "User already exists" });
      }

      // Create user — FIX 6: persist password_hash
      const result = await pool.query(
        "INSERT INTO users (email, name, provider, password_hash) VALUES ($1, $2, $3, $4) RETURNING *",
        [email, name, "email", hashedPassword]
      );

      const user = result.rows[0];

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.status(201).json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar_url: user.avatar_url,
        },
        token,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Registration error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Email and password are required" });
    }

    const pool = await createDatabaseConnection();
    try {
      // Find user
      const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
      if (result.rows.length === 0) {
        return res.status(401).json({ success: false, error: "Invalid credentials" });
      }

      const user = result.rows[0] as User;

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password || "");
      if (!isValidPassword) {
        return res.status(401).json({ success: false, error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          avatar_url: user.avatar_url,
        },
        token,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Login error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// POST /api/auth/github/callback
router.post("/github/callback", async (req, res) => {
  try {
    const { code, redirect_uri } = req.body;

    // Exchange code for access token (implement with GitHub OAuth)
    const githubAccessToken = await exchangeGitHubCodeForToken(code, redirect_uri);

    // Get user info from GitHub
    const githubUser = await getGitHubUser(githubAccessToken);

    const pool = await createDatabaseConnection();
    try {
      // Find or create user
      let user = await pool.query("SELECT * FROM users WHERE email = $1", [githubUser.email]);

      if (user.rows.length === 0) {
        // Create new user
        const result = await pool.query(
          "INSERT INTO users (email, name, avatar_url, provider, provider_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [githubUser.email, githubUser.name, githubUser.avatar_url, "github", githubUser.id]
        );
        user = result;
      } else {
        user = await pool.query("SELECT * FROM users WHERE id = $1", [user.rows[0].id]);
      }

      const userData = user.rows[0];

      // Generate JWT token
      const token = jwt.sign(
        { userId: userData.id, email: userData.email },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      // Store GitHub access token
      await pool.query(
        "INSERT INTO auth_tokens (user_id, provider, access_token) VALUES ($1, $2, $3)",
        [userData.id, "github", githubAccessToken]
      );

      res.json({
        success: true,
        user: {
          id: userData.id,
          email: userData.email,
          name: userData.name,
          avatar_url: userData.avatar_url,
        },
        token,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("GitHub OAuth callback error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Helper functions
async function exchangeGitHubCodeForToken(code: string, redirect_uri: string): Promise<string> {
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code,
      redirect_uri,
    }),
  });

  const data = await response.json();

  if (!data.access_token) {
    throw new Error("Failed to exchange GitHub code for access token");
  }

  return data.access_token;
}

async function getGitHubUser(accessToken: string): Promise<any> {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${accessToken}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user info");
  }

  return await response.json();
}

export default router;
