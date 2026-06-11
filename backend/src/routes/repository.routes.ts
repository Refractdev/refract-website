import express, { Router } from "express";
import { createDatabaseConnection } from "../config/database";
import { Repository, CreateRepositoryRequest } from "../types";
import { authenticateToken } from "../middleware/auth.middleware";
import logger from "../lib/logger";

const router = Router();

// GET /api/repositories
router.get("/", authenticateToken, async (req, res) => {
  try {
    const pool = await createDatabaseConnection();
    try {
      const result = await pool.query(
        "SELECT * FROM repositories WHERE user_id = $1 ORDER BY updated_at DESC",
        [(req as any).user.id]
      );

      res.json({
        success: true,
        repositories: result.rows,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Get repositories error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// POST /api/repositories
router.post("/", authenticateToken, async (req, res) => {
  try {
    const {
      provider,
      provider_id,
      name,
      full_name,
      description,
      private: isPrivate,
      html_url,
      clone_url,
      default_branch,
      branch,
    } = req.body as CreateRepositoryRequest;

    if (!provider || !provider_id || !name || !full_name || !html_url || !clone_url || !default_branch) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const pool = await createDatabaseConnection();
    try {
      // Check if repository already exists
      const existing = await pool.query(
        "SELECT id FROM repositories WHERE user_id = $1 AND provider = $2 AND provider_id = $3",
        [(req as any).user.id, provider, provider_id]
      );

      if (existing.rows.length > 0) {
        return res.status(409).json({ success: false, error: "Repository already connected" });
      }

      // Create repository
      const result = await pool.query(
        `INSERT INTO repositories (
          user_id, provider, provider_id, name, full_name, description,
          private, html_url, clone_url, default_branch, branch, status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
        [
          (req as any).user.id,
          provider,
          provider_id,
          name,
          full_name,
          description || null,
          isPrivate || false,
          html_url,
          clone_url,
          default_branch,
          branch || default_branch,
          "connected",
        ]
      );

      res.status(201).json({
        success: true,
        repository: result.rows[0],
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Create repository error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// PUT /api/repositories/:id
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { branch } = req.body;

    const pool = await createDatabaseConnection();
    try {
      // Check if repository belongs to user
      const existing = await pool.query(
        "SELECT * FROM repositories WHERE id = $1 AND user_id = $2",
        [id, (req as any).user.id]
      );

      if (existing.rows.length === 0) {
        return res.status(404).json({ success: false, error: "Repository not found" });
      }

      // Update repository
      const result = await pool.query(
        "UPDATE repositories SET branch = $1, updated_at = NOW() WHERE id = $2 RETURNING *",
        [branch || existing.rows[0].branch, id]
      );

      res.json({
        success: true,
        repository: result.rows[0],
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Update repository error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// DELETE /api/repositories/:id
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await createDatabaseConnection();
    try {
      // Check if repository belongs to user
      const existing = await pool.query(
        "SELECT id FROM repositories WHERE id = $1 AND user_id = $2",
        [id, (req as any).user.id]
      );

      if (existing.rows.length === 0) {
        return res.status(404).json({ success: false, error: "Repository not found" });
      }

      // Delete repository (cascade delete related analyses and issues)
      await pool.query("DELETE FROM repositories WHERE id = $1", [id]);

      res.json({
        success: true,
        message: "Repository deleted successfully",
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Delete repository error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// POST /api/repositories/:id/start-analysis
router.post("/:id/start-analysis", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await createDatabaseConnection();
    try {
      // Check if repository belongs to user
      const repoResult = await pool.query(
        "SELECT * FROM repositories WHERE id = $1 AND user_id = $2",
        [id, (req as any).user.id]
      );

      if (repoResult.rows.length === 0) {
        return res.status(404).json({ success: false, error: "Repository not found" });
      }

      const repository = repoResult.rows[0] as Repository;

      // Create analysis record
      const analysisResult = await pool.query(
        `INSERT INTO analyses (
          repository_id, status, progress, total_files, analyzed_files, health_score, issues_found
        ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [
          id,
          "pending",
          0,
          0, // Will be updated when we parse the repository
          0,
          0,
          0,
        ]
      );

      const analysis = analysisResult.rows[0];

      // Update repository status
      await pool.query(
        "UPDATE repositories SET status = 'analyzing', last_analysis = NOW() WHERE id = $1",
        [id]
      );

      res.json({
        success: true,
        analysis: {
          id: analysis.id,
          status: analysis.status,
          progress: analysis.progress,
          health_score: analysis.health_score,
          issues_found: analysis.issues_found,
        },
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Start analysis error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
