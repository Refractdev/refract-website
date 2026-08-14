# Refract Backend API

## Overview

This is the backend API for Refract - a code analysis and refactoring tool that transforms AI-generated code into production-ready software.

## Features

### Core Functionality

- **Code Analysis Engine** - AST-based parsing with 15+ built-in detectors
- **Repository Management** - Connect GitHub and GitLab repositories
- **Real-time Analysis** - Live progress updates via WebSocket
- **Issue Tracking** - Comprehensive issue categorization and prioritization
- **Authentication** - GitHub/GitLab OAuth and email/password login
- **Webhooks** - Automatic triggering on repository changes

### Analysis Detectors

The Refract backend includes 15+ built-in detectors:

1. **Any type usage** - Detects TypeScript `any` type annotations
2. **Oversized components** - Identifies components exceeding size limits
3. **Dead state** - Finds unused state variables
4. **Missing documentation** - Detects undocumented components
5. **Console log leak** - Identifies debug console statements
6. **Effect dependencies** - Checks for missing React useEffect dependencies
7. **Prop drilling** - Detects excessive prop passing
8. **Generic naming** - Identifies non-descriptive variable/function names
9. **Circular dependencies** - Detects circular import dependencies
10. **State explosion** - Identifies components with too many state variables
11. **API in component** - Finds API calls directly in components
12. **Missing error boundary** - Detects missing error boundaries
13. **Memory leak** - Identifies potential memory leaks
14. **Duplicate logic** - Finds duplicate code patterns
15. **Unsafe cast** - Detects unsafe type casting

### API Endpoints

#### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/github/callback` - GitHub OAuth callback

#### Repositories

- `GET /api/repositories` - List user repositories
- `POST /api/repositories` - Connect new repository
- `PUT /api/repositories/:id` - Update repository
- `DELETE /api/repositories/:id` - Disconnect repository
- `POST /api/repositories/:id/start-analysis` - Start analysis

#### Analysis

- `GET /api/analysis/:id` - Get analysis details
- `GET /api/analysis/:id/issues` - Get issues for analysis
- `GET /api/analysis/:id/health-score` - Get health score
- `POST /api/analysis/:id/start` - Start analysis
- `POST /api/analysis/:id/resolve` - Resolve issues

#### Webhooks

- `POST /api/webhooks/github` - GitHub webhook handler
- `POST /api/webhooks/gitlab` - GitLab webhook handler

#### Health

- `GET /health` - Health check endpoint

### Data Models

#### Users

- `id` - UUID
- `email` - Email address (unique)
- `name` - User name
- `avatar_url` - Avatar URL
- `provider` - Authentication provider (github/gitlab/email)
- `provider_id` - Provider-specific user ID
- `created_at` - Creation timestamp
- `updated_at` - Last update timestamp

#### Repositories

- `id` - UUID
- `user_id` - Foreign key to users
- `provider` - Repository provider (github/gitlab)
- `provider_id` - Provider-specific repository ID
- `name` - Repository name
- `full_name` - Full name (owner/name)
- `description` - Repository description
- `private` - Whether repository is private
- `html_url` - Repository URL
- `clone_url` - Git clone URL
- `default_branch` - Default branch
- `branch` - Branch to analyze
- `status` - Connection status
- `last_analysis` - Last analysis timestamp

#### Analyses

- `id` - UUID
- `repository_id` - Foreign key to repositories
- `status` - Analysis status (pending/running/completed/failed)
- `progress` - Analysis progress percentage
- `total_files` - Total files to analyze
- `analyzed_files` - Files analyzed so far
- `health_score` - Health score (0-100)
- `issues_found` - Number of issues found
- `started_at` - Analysis start timestamp
- `completed_at` - Analysis completion timestamp
- `error_message` - Error message if analysis failed

#### Issues

- `id` - UUID
- `analysis_id` - Foreign key to analyses
- `category` - Issue category
- `severity` - Issue severity (low/medium/high)
- `impact` - Impact level
- `effort` - Effort required
- `blast_radius` - Impact radius
- `priority` - Priority score
- `title` - Issue title
- `description` - Issue description
- `location` - File and line information
- `suggestion` - Suggested fix
- `created_at` - Creation timestamp
- `resolved_at` - Resolution timestamp
- `is_resolved` - Whether issue is resolved
- `is_ignored` - Whether issue is ignored

### Installation

#### Prerequisites

- Node.js 18+
- PostgreSQL 12+
- GitHub/GitLab account (for OAuth)

#### Setup

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration:
   - `DATABASE_URL` - PostgreSQL connection string
   - `JWT_SECRET` - Secret for JWT tokens
   - `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` - GitHub OAuth credentials
   - `GITLAB_CLIENT_ID` and `GITLAB_CLIENT_SECRET` - GitLab OAuth credentials
   - `ALLOWED_ORIGINS` - Allowed frontend origins
   - `GITHUB_WEBHOOK_SECRET` - GitHub webhook secret
   - `GITLAB_WEBHOOK_SECRET` - GitLab webhook secret

5. Set up database:
   ```bash
   npm run seed
   ```

6. Start the backend:
   ```bash
   npm run dev
   ```

### Frontend Integration

The frontend connects to this backend using the following base URL:

- Development: `http://localhost:3001`
- Production: `https://refract-ia.vercel.app/api`

### Deployment

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend/ ./
EXPOSE 3001
CMD ["npm", "start"]
```

#### Vercel

```bash
# Deploy using Vercel CLI
vercel deploy
```

### Testing

Run tests to verify the backend functionality:

```bash
npm test
```

### Monitoring

The backend includes logging and monitoring:

- **Winston logging** - Structured logging with different levels
- **Health check endpoint** - `/health` endpoint
- **Error handling** - Comprehensive error handling middleware
- **Rate limiting** - API rate limiting

### Security

- **Authentication** - JWT-based authentication with tokens
- **Authorization** - Role-based access control
- **HTTPS** - SSL/TLS encryption
- **Input validation** - Zod schema validation
- **CORS** - Cross-origin resource sharing configuration
- **Rate limiting** - API rate limiting to prevent abuse

### Performance

- **WebSocket real-time updates** - Real-time progress updates
- **Database connection pooling** - Efficient database connections
- **Caching** - Response caching where appropriate
- **Parallel processing** - Multiple analysis workers
- **Streaming** - Large file streaming support

### Future Enhancements

1. **CLI tool** - Command-line interface for local analysis
2. **IDE integration** - VS Code extension for direct analysis
3. **Machine learning** - AI-powered code suggestions
4. **Custom detectors** - Plugin system for custom detectors
5. **Advanced refactoring** - Automated refactoring capabilities
6. **Team collaboration** - Shared repositories and team features
7. **Git history analysis** - Analysis of git commit history
8. **Integration with other tools** - Integration with CI/CD pipelines
