"use strict";

const fs = require("fs");
const path = require("path");

const REPOSITORY_ID = process.argv[2];
const USER_ID = process.argv[3];

if (!REPOSITORY_ID || !USER_ID) {
  console.error("Usage: node analysis-worker.js <repository-id> <user-id>");
  process.exit(1);
}

const repositoryDir = path.join(__dirname, "..", "..", "tmp", REPOSITORY_ID);

if (!fs.existsSync(repositoryDir)) {
  console.error("Repository directory not found:", repositoryDir);
  process.exit(1);
}

async function runAnalysis() {
  try {
    const files = getAllFiles(repositoryDir);
    const totalFiles = files.length;

    console.error("Starting analysis for repository", REPOSITORY_ID);
    console.error("Found", totalFiles, "files to analyze");

    let analyzedFiles = 0;
    let issuesFound = 0;

    for (let i = 0; i < totalFiles; i++) {
      const filePath = files[i];
      const relativePath = path.relative(repositoryDir, filePath);

      const progress = Math.round(((i + 1) / totalFiles) * 100);
      console.log("PROGRESS:" + JSON.stringify({
        analyzed_files: i + 1,
        total_files: totalFiles,
        progress: progress,
        current_file: relativePath,
      }));

      try {
        // Dynamic import of compiled code-analyzer module
        const { analyzeFile } = require("./code-analyzer");
        const analysis = await analyzeFile(filePath, relativePath);
        analyzedFiles++;

        if (analysis.issues && analysis.issues.length > 0) {
          issuesFound += analysis.issues.length;

          for (const issue of analysis.issues) {
            console.log("ISSUE:" + JSON.stringify({
              id: relativePath + "-" + i,
              category: issue.category,
              severity: issue.severity,
              impact: issue.impact,
              effort: issue.effort,
              blast_radius: issue.blastRadius,
              priority: issue.priority,
              title: issue.title,
              description: issue.description,
              location: {
                file: relativePath,
                line: issue.location.line,
                column: issue.location.column,
              },
              suggestion: {
                title: issue.suggestion.title,
                description: issue.suggestion.description,
                code_changes: issue.suggestion.codeChanges,
              },
            }));
          }
        }
      } catch (error) {
        console.log("ERROR:" + JSON.stringify({
          type: "file_analysis_error",
          file: relativePath,
          message: error instanceof Error ? error.message : "Unknown error",
        }));
      }
    }

    console.error("Analysis completed for repository", REPOSITORY_ID);
    console.error("Files analyzed:", analyzedFiles + "/" + totalFiles);
    console.error("Issues found:", issuesFound);
    console.log("DONE:" + JSON.stringify({
      status: "completed",
      analyzed_files: analyzedFiles,
      total_files: totalFiles,
      issues_found: issuesFound,
    }));

  } catch (error) {
    console.error("Analysis failed for repository", REPOSITORY_ID, error);
    console.log("ERROR:" + JSON.stringify({
      type: "analysis_error",
      message: error instanceof Error ? error.message : "Unknown error",
    }));
    process.exit(1);
  }
}

function getAllFiles(dir) {
  const files = [];

  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const itemPath = path.join(currentDir, item);

      if (fs.statSync(itemPath).isDirectory()) {
        if (!item.startsWith(".") && item !== "node_modules" && item !== ".git" && item !== "__tests__" && item !== "__mocks__") {
          scanDirectory(itemPath);
        }
      } else {
        const ext = path.extname(item).toLowerCase();
        if ([".js", ".jsx", ".ts", ".tsx", ".json", ".md"].includes(ext)) {
          files.push(itemPath);
        }
      }
    }
  }

  scanDirectory(dir);
  return files;
}

runAnalysis();
