// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  provider: "github" | "gitlab" | "email";
  provider_id?: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

// Repository types
export interface Repository {
  id: string;
  user_id: string;
  provider: "github" | "gitlab";
  provider_id: string;
  name: string;
  full_name: string;
  description?: string;
  private: boolean;
  html_url: string;
  clone_url: string;
  default_branch: string;
  branch: string;
  status: "connected" | "disconnected" | "error";
  last_analysis?: Date;
  created_at: Date;
  updated_at: Date;
}

// Analysis types
export interface Analysis {
  id: string;
  repository_id: string;
  status: "pending" | "running" | "completed" | "failed";
  progress: number;
  total_files: number;
  analyzed_files: number;
  health_score: number;
  issues_found: number;
  started_at: Date;
  completed_at?: Date;
  error_message?: string;
}

// Issue types
export interface Issue {
  id: string;
  analysis_id: string;
  category:
    | "any-type"
    | "oversized-component"
    | "dead-state"
    | "missing-docs"
    | "console-log-leak"
    | "effect-deps"
    | "prop-drilling"
    | "generic-naming"
    | "circular-deps"
    | "state-explosion"
    | "api-in-component"
    | "missing-error-boundary"
    | "memory-leak"
    | "duplicate-logic"
    | "unsafe-cast";
  severity: "low" | "medium" | "high";
  impact: "Low" | "Medium" | "High";
  effort: "Low" | "Medium" | "High";
  blast_radius: number;
  priority: number;
  title: string;
  description: string;
  location: {
    file: string;
    line: number;
    column?: number;
    end_line?: number;
    end_column?: number;
  };
  suggestion: {
    title: string;
    description: string;
    code_changes: CodeChange[];
  };
  created_at: Date;
  resolved_at?: Date;
}

// Code change types
export interface CodeChange {
  type: "add" | "remove" | "replace";
  file: string;
  old_value?: string;
  new_value?: string;
  line?: number;
  column?: number;
}

// Authentication types
export interface AuthToken {
  id: string;
  user_id: string;
  provider: "github" | "gitlab";
  access_token: string;
  refresh_token?: string;
  expires_at?: Date;
  created_at: Date;
  updated_at: Date;
}

// API Request/Response types
export interface CreateRepositoryRequest {
  provider: "github" | "gitlab";
  provider_id: string;
  name: string;
  full_name: string;
  html_url: string;
  clone_url: string;
  default_branch: string;
  branch?: string;
}

export interface AnalysisResponse {
  id: string;
  status: string;
  progress: number;
  health_score: number;
  issues_found: number;
  estimated_time: number;
}

export interface IssuesResponse {
  id: string;
  category: Issue["category"];
  severity: Issue["severity"];
  impact: Issue["impact"];
  effort: Issue["effort"];
  blast_radius: number;
  priority: number;
  title: string;
  description: string;
  location: Issue["location"];
  suggestion: Issue["suggestion"];
  created_at: Date;
}

export interface HealthScoreResponse {
  total_issues: number;
  issues_by_severity: {
    high: number;
    medium: number;
    low: number;
  };
  issues_by_category: Record<string, number>;
  health_score: number;
  trend: {
    previous_score: number;
    change: number;
    change_percentage: number;
  };
}

// WebSocket types
export interface WebSocketMessage {
  type: "analysis-started" | "analysis-progress" | "analysis-completed" | "issue-update" | "error";
  payload: any;
}

export interface AnalysisProgressPayload {
  analyzed_files: number;
  total_files: number;
  progress: number;
  current_file?: string;
}

export interface IssueUpdatePayload {
  issue_id: string;
  status: "new" | "resolved" | "ignored";
  resolved_at?: Date;
}
