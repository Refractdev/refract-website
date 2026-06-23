import { TrendingDown, TrendingUp, Minus, Play } from "lucide-react";

const sparklinePoints = "4,28 12,24 20,26 28,18 36,20 44,14 52,16 60,10 68,12 76,8";

const categories = [
  { name: "Type Safety", delta: "+4", icon: TrendingUp, color: "var(--ld-success)" },
  { name: "Architecture", delta: "-2", icon: TrendingDown, color: "var(--ld-error)" },
  { name: "Documentation", delta: "0", icon: Minus, color: "var(--ld-muted)" },
];

const projects = [
  { name: "my-app refactor", status: "At risk", author: "alex", time: "1 day ago", note: "Score dropped 8pts since last merge" },
  { name: "api-service", status: "On track", author: "sam", time: "3 hours ago", note: "All categories trending up" },
];

interface DriftMockProps {
  activePanel?: number;
}

const DriftMock = ({ activePanel = 0 }: DriftMockProps) => {
  return (
    <div className="min-h-[340px] bg-ld-surface">
      <div
        className={`border-b border-ld-border p-4 transition-colors ${
          activePanel === 0 ? "ring-1 ring-inset ring-ld-primary/40" : ""
        }`}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-headline-sm">Score trend — 30 days</p>
          <span className="text-mono-label text-ld-success">+6 pts</span>
        </div>
        <svg viewBox="0 0 80 32" className="h-14 w-full">
          <polyline fill="none" stroke="var(--ld-tertiary)" strokeWidth="1.5" points={sparklinePoints} />
        </svg>
        <div className="mt-4 flex flex-wrap gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-1.5">
              <cat.icon className="size-2.5" style={{ color: cat.color }} />
              <span className="text-[11px] text-ld-tertiary">{cat.name}</span>
              <span className="text-mono-label text-[10px]" style={{ color: cat.color }}>
                {cat.delta}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`border-b border-ld-border p-4 transition-colors ${
          activePanel === 2 ? "ring-1 ring-inset ring-ld-primary/40" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-headline-sm">Weekly Pulse</p>
            <p className="text-body-sm mt-1 text-ld-tertiary">Team health summary · 12 min</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-full border border-ld-border bg-ld-overlay text-ld-on-surface"
              aria-label="Play Weekly Pulse"
            >
              <Play className="size-3 fill-current" />
            </button>
            <span className="text-mono-label text-[10px]">1.0x</span>
          </div>
        </div>
      </div>

      <div
        className={`p-4 transition-colors ${
          activePanel === 1 ? "ring-1 ring-inset ring-ld-primary/40" : ""
        }`}
      >
        <p className="mb-3 text-label-sm text-ld-muted">Projects</p>
        {projects.map((p) => (
          <div key={p.name} className="border-b border-ld-border py-3 last:border-0">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-headline-sm">{p.name}</span>
              <span className={`flex items-center gap-1.5 text-caption ${p.status === "At risk" ? "text-ld-warning" : "text-ld-success"}`}>
                <span className={`size-1.5 rounded-full ${p.status === "At risk" ? "bg-ld-warning" : "bg-ld-success"}`} />
                {p.status}
              </span>
            </div>
            <p className="text-body-sm">{p.note}</p>
            <p className="text-mono-label mt-1 text-[10px]">
              By {p.author} · {p.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriftMock;
