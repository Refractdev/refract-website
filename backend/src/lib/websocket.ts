import { Server as HTTPServer } from "http";
import { Server as WebSocketServer, WebSocket } from "ws";
import jwt from "jsonwebtoken";
import { createDatabaseConnection } from "../config/database";
import logger from "./logger";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export function setupWS(server: HTTPServer): WebSocketServer {
  const wss = new WebSocketServer({ server });

  wss.on("connection", async (ws: WebSocket, req) => {
    const url = new URL(req.url || "", `http://${req.headers.host}`);
    const token = url.searchParams.get("token");

    if (!token) {
      ws.close(4001, "Authentication required");
      return;
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      const pool = await createDatabaseConnection();
      const result = await pool.query("SELECT * FROM users WHERE id = $1", [decoded.userId]);

      if (result.rows.length === 0) {
        ws.close(4001, "Invalid token");
        await pool.end();
        return;
      }

      const user = result.rows[0];
      (ws as any).user = user;
      (ws as any).userId = user.id;

      logger.info(`WebSocket client connected: ${user.email}`);
      await pool.end();

      ws.send(JSON.stringify({
        type: "connection-established",
        payload: { userId: user.id, email: user.email },
      }));
    } catch (error) {
      logger.error("WebSocket auth error:", error);
      ws.close(4001, "Authentication failed");
      return;
    }

    ws.on("message", (data: Buffer) => {
      try {
        const message = JSON.parse(data.toString());
        handleMessage(ws, message);
      } catch (error) {
        logger.error("WebSocket message error:", error);
        ws.send(JSON.stringify({ type: "error", payload: { message: "Invalid message format" } }));
      }
    });

    ws.on("close", () => {
      logger.info("WebSocket client disconnected");
    });

    ws.on("error", (error) => {
      logger.error("WebSocket error:", error);
    });
  });

  return wss;
}

function handleMessage(ws: WebSocket, message: any): void {
  switch (message.type) {
    case "subscribe-analysis": {
      const { analysisId } = message.payload;
      (ws as any).subscribedAnalysisId = analysisId;
      logger.info(`Client subscribed to analysis: ${analysisId}`);
      ws.send(JSON.stringify({
        type: "subscribed",
        payload: { analysisId },
      }));
      break;
    }

    case "unsubscribe-analysis": {
      (ws as any).subscribedAnalysisId = null;
      ws.send(JSON.stringify({
        type: "unsubscribed",
        payload: {},
      }));
      break;
    }

    case "ping": {
      ws.send(JSON.stringify({ type: "pong", payload: { timestamp: new Date().toISOString() } }));
      break;
    }

    default:
      ws.send(JSON.stringify({ type: "error", payload: { message: `Unknown message type: ${message.type}` } }));
  }
}

export function sendAnalysisProgress(
  wss: WebSocketServer,
  analysisId: string,
  payload: any
): void {
  wss.clients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN &&
      (client as any).subscribedAnalysisId === analysisId
    ) {
      client.send(JSON.stringify({
        type: "analysis-progress",
        payload,
      }));
    }
  });
}

export function sendIssueUpdate(
  wss: WebSocketServer,
  analysisId: string,
  issue: any
): void {
  wss.clients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN &&
      (client as any).subscribedAnalysisId === analysisId
    ) {
      client.send(JSON.stringify({
        type: "issue-update",
        payload: issue,
      }));
    }
  });
}

export function sendAnalysisComplete(
  wss: WebSocketServer,
  analysisId: string,
  payload: any
): void {
  wss.clients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN &&
      (client as any).subscribedAnalysisId === analysisId
    ) {
      client.send(JSON.stringify({
        type: "analysis-completed",
        payload,
      }));
    }
  });
}
