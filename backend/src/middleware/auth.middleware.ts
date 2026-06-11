import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { createDatabaseConnection } from "../config/database";
import { User } from "../types";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET não definido");

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ success: false, error: "Access token required" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;

    const pool = await createDatabaseConnection();
    try {
      const result = await pool.query("SELECT * FROM users WHERE id = $1", [decoded.userId]);

      if (result.rows.length === 0) {
        return res.status(401).json({ success: false, error: "Invalid token" });
      }

      const user = result.rows[0] as User;

      // Attach user to request object
      (req as any).user = user;
    } finally {
      await pool.end();
    }

    next();
  } catch (error) {
    res.status(403).json({ success: false, error: "Invalid token" });
  }
};

export const optionalAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET) as any;

      const pool = await createDatabaseConnection();
      try {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [decoded.userId]);

        if (result.rows.length > 0) {
          const user = result.rows[0] as User;
          (req as any).user = user;
        }
      } finally {
        await pool.end();
      }
    }

    next();
  } catch (error) {
    // Silently fail for optional auth
    next();
  }
};
