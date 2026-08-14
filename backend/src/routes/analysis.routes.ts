import express, { Router } from "express";
import { createDatabaseConnection } from "../config/database";
import { Analysis, Issue, Repository } from "../types";
import { authenticateToken } from "../middleware/auth.middleware";
import logger from "../lib/logger";

const router = Router();

// GET /api/analysis/:id
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await createDatabaseConnection();
    try {
      // Get analysis with repository info
      const analysisResult = await pool.query(
        `SELECT a.*, r.name as repository_name, r.full_name as repository_full_name, r.provider
         FROM analyses a
         JOIN repositories r ON a.repository_id = r.id
         WHERE a.id = $1 AND r.user_id = $2`,
        [id, (req as any).user.id]
      );

      if (analysisResult.rows.length === 0) {
        return res.status(404).json({ success: false, error: "Analysis not found" });
      }

      const analysis = analysisResult.rows[0] as Analysis;

      res.json({
        success: true,
        analysis,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Get analysis error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// GET /api/analysis/:id/issues
router.get("/:id/issues", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await createDatabaseConnection();
    try {
      // Verify analysis belongs to user
      const analysisResult = await pool.query(
        `SELECT a.id FROM analyses a
         JOIN repositories r ON a.repository_id = r.id
         WHERE a.id = $1 AND r.user_id = $2`,
        [id, (req as any).user.id]
      );

      if (analysisResult.rows.length === 0) {
        return res.status(404).json({ success: false, error: "Analysis not found" });
      }

      // Get issues for this analysis
      const issuesResult = await pool.query(
        `SELECT * FROM issues
         WHERE analysis_id = $1
         ORDER BY priority DESC, created_at ASC`,
        [id]
      );

      res.json({
        success: true,
        issues: issuesResult.rows,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Get issues error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// GET /api/analysis/:id/health-score
router.get("/:id/health-score", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await createDatabaseConnection();
    try {
      // Verify analysis belongs to user
      const analysisResult = await pool.query(
        `SELECT a.*, r.name as repository_name
         FROM analyses a
         JOIN repositories r ON a.repository_id = r.id
         WHERE a.id = $1 AND r.user_id = $2`,
        [id, (req as any).user.id]
      );

      if (analysisResult.rows.length === 0) {
        return res.status(404).json({ success: false, error: "Analysis not found" });
      }

      const analysis = analysisResult.rows[0] as Analysis;

      // Get health score data
      const healthScoreResult = await pool.query(
        `SELECT
           COUNT(*) as total_issues,
           COUNT(CASE WHEN severity = 'high' THEN 1 END) as high_issues,
           COUNT(CASE WHEN severity = 'medium' THEN 1 END) as medium_issues,
           COUNT(CASE WHEN severity = 'low' THEN 1 END) as low_issues,
           COUNT(CASE WHEN category = 'any-type' THEN 1 END) as any_type_issues,
           COUNT(CASE WHEN category = 'oversized-component' THEN 1 END) as oversized_component_issues,
           COUNT(CASE WHEN category = 'dead-state' THEN 1 END) as dead_state_issues,
           COUNT(CASE WHEN category = 'missing-docs' THEN 1 END) as missing_docs_issues,
           COUNT(CASE WHEN category = 'circular-deps' THEN 1 END) as circular_deps_issues
         FROM issues
         WHERE analysis_id = $1`,
        [id]
      );

      const healthScoreData = healthScoreResult.rows[0];

      // Calculate health score (simplified formula)
      const totalIssues = parseInt(healthScoreData.total_issues) || 0;
      const highImpactIssues = parseInt(healthScoreData.high_issues) || 0;
      const mediumImpactIssues = parseInt(healthScoreData.medium_issues) || 0;
      const lowImpactIssues = parseInt(healthScoreData.low_issues) || 0;

      // Formula: base score 100 - (high_issues * 10 + medium_issues * 5 + low_issues * 2)
      const healthScore = Math.max(0, Math.min(100, 100 - (highImpactIssues * 10 + mediumImpactIssues * 5 + lowImpactIssues * 2)));

      // Get previous health score for trend calculation
      const previousScore = analysis.health_score || 100;
      const scoreChange = healthScore - previousScore;
      const scoreChangePercentage = previousScore > 0 ? (scoreChange / previousScore) * 100 : 0;

      const healthScoreResponse = {
        total_issues: totalIssues,
        issues_by_severity: {
          high: parseInt(healthScoreData.high_issues) || 0,
          medium: parseInt(healthScoreData.medium_issues) || 0,
          low: parseInt(healthScoreData.low_issues) || 0,
        },
        issues_by_category: {
          "any-type": parseInt(healthScoreData.any_type_issues) || 0,
          "oversized-component": parseInt(healthScoreData.oversized_component_issues) || 0,
          "dead-state": parseInt(healthScoreData.dead_state_issues) || 0,
          "missing-docs": parseInt(healthScoreData.missing_docs_issues) || 0,
          "circular-deps": parseInt(healthScoreData.circular_deps_issues) || 0,
        },
        health_score: Math.round(healthScore),
        trend: {
          previous_score: previousScore,
          change: Math.round(scoreChange),
          change_percentage: Math.round(scoreChangePercentage),
        },
      };

      res.json({
        success: true,
        health_score: healthScoreResponse,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Get health score error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// POST /api/analysis/:id/start
router.post("/:id/start", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await createDatabaseConnection();
    try {
      // Update analysis status to running — only if the analysis belongs to the authenticated user
      const updateResult = await pool.query(
        `UPDATE analyses SET status = 'running', started_at = NOW()
         WHERE id = $1
           AND repository_id IN (SELECT id FROM repositories WHERE user_id = $2)`,
        [id, (req as any).user.id]
      );

      if (updateResult.rowCount === 0) {
        return res.status(403).json({ success: false, error: "Forbidden" });
      }

      // TODO: Trigger analysis worker via WebSocket
      // setupAnalysisWorker(req.app, id, (req as any).user.id);

      res.json({
        success: true,
        message: "Analysis started successfully",
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Start analysis error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// POST /api/analysis/:id/resolve
router.post("/:id/resolve", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { issueIds, action } = req.body;

    if (!Array.isArray(issueIds) || issueIds.length === 0) {
      return res.status(400).json({ success: false, error: "Issue IDs array is required" });
    }

    if (!issueIds.every((id) => typeof id === "string" && /^[a-zA-Z0-9_-]+$/.test(id))) {
      return res.status(400).json({ success: false, error: "issueIds inválidos" });
    }

    const pool = await createDatabaseConnection();
    try {
      // Verify analysis belongs to user
      const analysisResult = await pool.query(
        `SELECT a.id FROM analyses a
         JOIN repositories r ON a.repository_id = r.id
         WHERE a.id = $1 AND r.user_id = $2`,
        [id, (req as any).user.id]
      );

      if (analysisResult.rows.length === 0) {
        return res.status(404).json({ success: false, error: "Analysis not found" });
      }

      let updateQuery = "UPDATE issues SET is_resolved = true, resolved_at = NOW() WHERE id IN (";
      const params: any[] = issueIds;

      for (let i = 0; i < issueIds.length; i++) {
        updateQuery += `$${i + 1},
        `;
      }

      updateQuery = updateQuery.slice(0, -2) + " ) AND analysis_id = $" + (issueIds.length + 1);
      params.push(id);

      await pool.query(updateQuery, params);

      // Update analysis status if all issues are resolved
      const unresolvedIssuesResult = await pool.query(
        "SELECT COUNT(*) FROM issues WHERE analysis_id = $1 AND is_resolved = false",
        [id]
      );

      const unresolvedCount = parseInt(unresolvedIssuesResult.rows[0].count);
      if (unresolvedCount === 0) {
        await pool.query(
          "UPDATE analyses SET status = 'completed', completed_at = NOW() WHERE id = $1",
          [id]
        );
      }

      res.json({
        success: true,
        message: "Issues resolved successfully",
        unresolved_count: unresolvedCount,
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    logger.error("Resolve issues error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
