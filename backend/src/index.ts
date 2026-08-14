import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "ws";
import logger from "./lib/logger";
import authRoutes from "./routes/auth.routes";
import repositoryRoutes from "./routes/repository.routes";
import analysisRoutes from "./routes/analysis.routes";
import webhookRoutes from "./routes/webhook.routes";
import { setupWS } from "./lib/websocket";
import { errorHandler } from "./middleware/error.middleware";
import { notFound } from "./middleware/not-found.middleware";
import { createDatabaseConnection } from "./config/database";

const app: Express = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
    },
  },
}));

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(logger.expressMiddleware);

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/repositories", repositoryRoutes);
app.use("/api/analysis", analysisRoutes);
app.use("/api/webhooks", webhookRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Create HTTP server and WebSocket server
const server = createServer(app);
const wss = setupWS(server);

// Initialize database
createDatabaseConnection()
  .then(() => {
    logger.info("Database connected successfully");

    // Start server
    server.listen(PORT, () => {
      logger.info(`Refract backend running on port ${PORT}`);
      logger.info(`Health check: http://localhost:${PORT}/health`);
    });
  })
  .catch((error) => {
    logger.error("Failed to connect to database:", error);
    process.exit(1);
  });

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM received, shutting down gracefully");
  server.close(() => {
    logger.info("Server closed");
    process.exit(0);
  });
});

export { app, server, wss };
