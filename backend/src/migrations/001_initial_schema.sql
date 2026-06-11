-- SQL for creating users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  provider VARCHAR(50) NOT NULL,
  provider_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SQL for creating repositories table
CREATE TABLE IF NOT EXISTS repositories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(50) NOT NULL,
  provider_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  description TEXT,
  private BOOLEAN DEFAULT FALSE,
  html_url TEXT NOT NULL,
  clone_url TEXT NOT NULL,
  default_branch VARCHAR(100) NOT NULL,
  branch VARCHAR(100) DEFAULT 'main',
  status VARCHAR(50) DEFAULT 'connected',
  last_analysis TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (provider, provider_id, name)
);

-- SQL for creating analyses table
CREATE TABLE IF NOT EXISTS analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  repository_id UUID NOT NULL REFERENCES repositories(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'pending',
  progress DECIMAL(5,2) DEFAULT 0,
  total_files INTEGER DEFAULT 0,
  analyzed_files INTEGER DEFAULT 0,
  health_score INTEGER DEFAULT 0,
  issues_found INTEGER DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT,
  CONSTRAINT check_progress CHECK (progress >= 0 AND progress <= 100),
  CONSTRAINT check_health_score CHECK (health_score >= 0 AND health_score <= 100)
);

-- SQL for creating issues table
CREATE TABLE IF NOT EXISTS issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  analysis_id UUID NOT NULL REFERENCES analyses(id) ON DELETE CASCADE,
  category VARCHAR(100) NOT NULL,
  severity VARCHAR(50) NOT NULL,
  impact VARCHAR(50) NOT NULL,
  effort VARCHAR(50) NOT NULL,
  blast_radius INTEGER DEFAULT 0,
  priority INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  location_file VARCHAR(500) NOT NULL,
  location_line INTEGER NOT NULL,
  location_column INTEGER,
  location_end_line INTEGER,
  location_end_column INTEGER,
  suggestion_title VARCHAR(255) NOT NULL,
  suggestion_description TEXT NOT NULL,
  suggestion_changes JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved_at TIMESTAMP WITH TIME ZONE,
  is_resolved BOOLEAN DEFAULT FALSE,
  is_ignored BOOLEAN DEFAULT FALSE
);

-- SQL for creating auth_tokens table
CREATE TABLE IF NOT EXISTS auth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  provider VARCHAR(50) NOT NULL,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SQL for creating indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_repositories_user_id ON repositories(user_id);
CREATE INDEX IF NOT EXISTS idx_repositories_provider_provider_id ON repositories(provider, provider_id);
CREATE INDEX IF NOT EXISTS idx_analyses_repository_id ON analyses(repository_id);
CREATE INDEX IF NOT EXISTS idx_analyses_status ON analyses(status);
CREATE INDEX IF NOT EXISTS idx_issues_analysis_id ON issues(analysis_id);
CREATE INDEX IF NOT EXISTS idx_issues_category ON issues(category);
CREATE INDEX IF NOT EXISTS idx_issues_severity ON issues(severity);
CREATE INDEX IF NOT EXISTS idx_auth_tokens_user_id ON auth_tokens(user_id);
