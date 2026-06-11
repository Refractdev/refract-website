import express, { Router } from "express";
import { timingSafeEqual, createHmac } from "crypto";
import logger from "../lib/logger";

const router = Router();

// POST /api/webhooks/github
router.post("/github", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    const signature = req.headers["x-hub-signature-256"];
    const secret = process.env.GITHUB_WEBHOOK_SECRET;

    if (!signature || !secret) {
      return res.status(401).json({ success: false, error: "Missing signature or secret" });
    }

    // Verify webhook signature
    const hash = createHmac("sha256", secret).update(req.body).digest("hex");
    const signatureHash = `sha256=${hash}`;

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(signatureHash))) {
      return res.status(401).json({ success: false, error: "Invalid signature" });
    }

    const event = req.headers["x-github-event"];
    const payload = JSON.parse(req.body.toString());

    // Handle different webhook events
    switch (event) {
      case "push":
        await handleGitHubPushEvent(payload);
        break;
      case "pull_request":
        await handleGitHubPREvent(payload);
        break;
      case "pull_request_closed":
        await handleGitHubPRClosedEvent(payload);
        break;
      default:
        logger.info(`Unhandled GitHub webhook event: ${event}`);
    }

    res.json({ success: true, message: "Webhook processed successfully" });
  } catch (error) {
    logger.error("GitHub webhook error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// POST /api/webhooks/gitlab
router.post("/gitlab", express.raw({ type: "application/json" }), async (req, res) => {
  try {
    const token = req.headers["x-gitlab-token"] as string | undefined;
    const secret = process.env.GITLAB_WEBHOOK_SECRET;

    if (!token || !secret) {
      return res.status(401).json({ success: false, error: "Invalid token" });
    }

    const a = Buffer.from(token);
    const b = Buffer.from(secret);
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      return res.status(401).json({ success: false, error: "Invalid token" });
    }

    const event = req.headers["x-gitlab-event"];
    const payload = JSON.parse(req.body.toString());

    // Handle different webhook events
    switch (event) {
      case "Push Hook":
        await handleGitLabPushEvent(payload);
        break;
      case "Merge Request Hook":
        await handleGitLabMREvent(payload);
        break;
      default:
        logger.info(`Unhandled GitLab webhook event: ${event}`);
    }

    res.json({ success: true, message: "Webhook processed successfully" });
  } catch (error) {
    logger.error("GitLab webhook error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Helper functions
async function handleGitHubPushEvent(payload: any) {
  logger.info("Processing GitHub push event", { repository: payload.repository.full_name, ref: payload.ref });
  
  // TODO: Trigger analysis for pushed repository
  // Check if this repository is connected to Refract
  // Start new analysis job
}

async function handleGitHubPREvent(payload: any) {
  logger.info("Processing GitHub pull request event", { repository: payload.repository.full_name, action: payload.action });
  
  // TODO: Handle pull request events
  if (payload.action === "opened" || payload.action === "synchronize") {
    // Trigger analysis for updated branch
  }
}

async function handleGitHubPRClosedEvent(payload: any) {
  logger.info("Processing GitHub pull request closed event", { repository: payload.repository.full_name });
  
  // TODO: Handle pull request closed events
}

async function handleGitLabPushEvent(payload: any) {
  logger.info("Processing GitLab push event", { repository: payload.repository.name, ref: payload.ref });
  
  // TODO: Trigger analysis for pushed repository
}

async function handleGitLabMREvent(payload: any) {
  logger.info("Processing GitLab merge request event", { repository: payload.repository.name, action: payload.object_attributes.action });
  
  // TODO: Handle merge request events
}

export default router;
