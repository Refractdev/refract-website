"use strict";

import WebSocket from "ws";
import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import path from "path";
import fs from "fs";
import logger from "./logger";

interface AnalysisWorker {
  id: string;
  repositoryId: string;
  userId: string;
  process: ChildProcessWithoutNullStreams;
  ws?: WebSocket;
  status: "idle" | "running" | "completed" | "failed";
  progress: number;
  currentFile?: string;
  totalFiles: number;
  analyzedFiles: number;
}

class AnalysisWorkerManager {
  private workers: Map<string, AnalysisWorker> = new Map();
  private readonly workerScriptPath: string;

  constructor() {
    this.workerScriptPath = path.join(__dirname, "analysis-worker.js");
  }

  public async startAnalysis(
    workerId: string,
    repositoryId: string,
    userId: string,
    ws: WebSocket
  ): Promise<void> {
    try {
      // Check if worker already exists for this analysis
      if (this.workers.has(workerId)) {
        throw new Error("Analysis already in progress");
      }

      // Get repository details
      const repoDir = path.join(__dirname, "..", "..", "tmp", repositoryId);
      if (!fs.existsSync(repoDir)) {
        throw new Error("Repository not found locally");
      }

      // Spawn worker process
      const workerProcess = spawn("node", [this.workerScriptPath, repositoryId, userId]);

      const worker: AnalysisWorker = {
        id: workerId,
        repositoryId,
        userId,
        process: workerProcess,
        ws,
        status: "running",
        progress: 0,
        totalFiles: 0,
        analyzedFiles: 0,
      };

      this.workers.set(workerId, worker);

      // Setup process event handlers
      workerProcess.stdout.on("data", (data) => {
        this.handleWorkerOutput(worker, data.toString());
      });

      workerProcess.stderr.on("data", (data) => {
        logger.error(`Worker ${workerId} stderr:", data.toString()`);
      });

      workerProcess.on("close", (code) => {
        this.handleWorkerExit(worker, code ?? 0);
      });

      workerProcess.on("error", (error) => {
        logger.error(`Worker ${workerId} error:", error`);
        this.handleWorkerError(worker, error);
      });

      logger.info(`Started analysis worker ${workerId} for repository ${repositoryId}`);
    } catch (error) {
      logger.error(`Failed to start analysis worker ${workerId}:", error`);
      throw error;
    }
  }

  private handleWorkerOutput(worker: AnalysisWorker, output: string): void {
    try {
      const lines = output.trim().split("\n");

      for (const line of lines) {
        if (line.startsWith("PROGRESS:")) {
          const progressData = JSON.parse(line.substring(9));
          worker.progress = progressData.progress;
          worker.totalFiles = progressData.totalFiles;
          worker.analyzedFiles = progressData.analyzedFiles;
          worker.currentFile = progressData.currentFile;

          if (worker.ws && worker.ws.readyState === WebSocket.OPEN) {
            worker.ws.send(JSON.stringify({
              type: "analysis-progress",
              payload: {
                analyzed_files: worker.analyzedFiles,
                total_files: worker.totalFiles,
                progress: worker.progress,
                current_file: worker.currentFile,
              },
            }));
          }
        } else if (line.startsWith("ISSUE:")) {
          const issueData = JSON.parse(line.substring(6));
          this.handleIssueUpdate(worker, issueData);
        } else if (line.startsWith("ERROR:")) {
          const errorData = JSON.parse(line.substring(6));
          if (worker.ws && worker.ws.readyState === WebSocket.OPEN) {
            worker.ws.send(JSON.stringify({
              type: "error",
              payload: errorData,
            }));
          }
        }
      }
    } catch (error) {
      logger.error(`Error parsing worker output for worker ${worker.id}:", error`);
    }
  }

  private handleIssueUpdate(worker: AnalysisWorker, issueData: any): void {
    // TODO: Store issue in database
    logger.info(`Received issue from worker ${worker.id}:", issueData`);

    if (worker.ws && worker.ws.readyState === WebSocket.OPEN) {
      worker.ws.send(JSON.stringify({
        type: "issue-update",
        payload: issueData,
      }));
    }
  }

  private handleWorkerExit(worker: AnalysisWorker, code: number): void {
    logger.info(`Analysis worker ${worker.id} exited with code ${code}`);

    if (code !== 0) {
      worker.status = "failed";
      if (worker.ws && worker.ws.readyState === WebSocket.OPEN) {
        worker.ws.send(JSON.stringify({
          type: "error",
          payload: { message: `Analysis failed with code ${code}` },
        }));
      }
    } else {
      worker.status = "completed";
      if (worker.ws && worker.ws.readyState === WebSocket.OPEN) {
        worker.ws.send(JSON.stringify({
          type: "analysis-completed",
          payload: { analyzed_files: worker.analyzedFiles },
        }));
      }
    }

    // Clean up worker
    setTimeout(() => {
      this.workers.delete(worker.id);
    }, 5000);
  }

  private handleWorkerError(worker: AnalysisWorker, error: Error): void {
    worker.status = "failed";

    if (worker.ws && worker.ws.readyState === WebSocket.OPEN) {
      worker.ws.send(JSON.stringify({
        type: "error",
        payload: { message: error.message },
      }));
    }
  }

  public getWorker(workerId: string): AnalysisWorker | undefined {
    return this.workers.get(workerId);
  }

  public getAllWorkers(): AnalysisWorker[] {
    return Array.from(this.workers.values());
  }
}

export { AnalysisWorker, AnalysisWorkerManager };
