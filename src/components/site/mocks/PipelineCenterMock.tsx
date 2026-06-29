import React, { useState } from "react";

const initialRepos = [
  {
    id: 1,
    name: "refract-dev/refract-website",
    branch: "main",
    status: "healthy",
    lastScan: "2m ago",
    score: 98,
    issues: 0,
    source: "GitHub",
  },
  {
    id: 2,
    name: "refract-dev/api-gateway",
    branch: "main",
    status: "warning",
    lastScan: "15m ago",
    score: 84,
    issues: 3,
    source: "GitHub",
  },
  {
    id: 3,
    name: "refract-dev/auth-service",
    branch: "staging",
    status: "scanning",
    lastScan: "Scanning...",
    score: null,
    issues: 0,
    source: "GitHub",
  },
];

const PipelineCenterMock = () => {
  const [repos, setRepos] = useState(initialRepos);
  const [search, setSearch] = useState("");

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-[350px] bg-ld-surface text-caption flex flex-col font-sans">
      {/* Mock Header/Toolbar */}
      <div className="flex flex-wrap items-center justify-between border-b border-ld-border px-4 py-3 bg-ld-panel gap-3">
        <div className="flex items-center gap-2 flex-1 max-w-xs">
          <svg
            className="size-4 text-ld-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search repositories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none text-[11px] text-ld-on-surface focus:outline-none placeholder-ld-muted w-full"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-ld-primary text-white text-[10px] font-medium hover:bg-ld-primary/95 transition-all">
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Import
          </button>
          <button className="flex items-center gap-1 px-2.5 py-1.5 rounded border border-ld-border bg-ld-overlay text-ld-on-surface text-[10px] font-medium hover:bg-ld-panel transition-all">
            <svg
              className="size-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create
          </button>
        </div>
      </div>

      {/* Repositories List */}
      <div className="flex-1 p-4 space-y-2.5 overflow-y-auto">
        {filteredRepos.length > 0 ? (
          filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-md border border-ld-border bg-ld-panel hover:border-ld-primary/30 transition-all gap-3"
            >
              {/* Left Column: Details */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 size-7 rounded-md bg-ld-chip flex items-center justify-center border border-ld-border">
                  <svg
                    className="size-4 text-ld-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-ld-on-surface text-[13px] hover:text-ld-primary transition-all cursor-pointer">
                      {repo.name}
                    </span>
                    <span className="text-[10px] text-ld-muted px-1.5 py-0.5 bg-ld-overlay border border-ld-border rounded">
                      {repo.branch}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-1 text-[10px] text-ld-tertiary">
                    <span>Source: {repo.source}</span>
                    <span>•</span>
                    <span>Last scan: {repo.lastScan}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Status & Quality Score */}
              <div className="flex items-center gap-4 self-end sm:self-auto">
                <div className="flex items-center gap-1.5">
                  {repo.status === "healthy" && (
                    <>
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-emerald-500 font-medium">Healthy</span>
                    </>
                  )}
                  {repo.status === "warning" && (
                    <>
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full size-2 bg-amber-500"></span>
                      </span>
                      <span className="text-amber-500 font-medium">{repo.issues} issues</span>
                    </>
                  )}
                  {repo.status === "scanning" && (
                    <>
                      <span className="relative flex size-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ld-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full size-2 bg-ld-primary"></span>
                      </span>
                      <span className="text-ld-primary font-medium animate-pulse">Scanning...</span>
                    </>
                  )}
                </div>

                <div className="flex flex-col items-center justify-center size-10 rounded-full border border-ld-border bg-ld-overlay">
                  <span className="text-[12px] font-bold text-ld-on-surface">
                    {repo.score !== null ? repo.score : "—"}
                  </span>
                  <span className="text-[7px] text-ld-muted uppercase font-bold -mt-0.5">
                    Score
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-ld-muted text-[11px]">
            No repositories match your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default PipelineCenterMock;
