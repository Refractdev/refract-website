import { Request, Response, NextFunction } from "express";
import logger from "./logger";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error("Error occurred:", {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
  });

  const statusCode = (err as any).statusCode || 500;
  const message = statusCode === 500 ? "Internal Server Error" : err.message;

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};


