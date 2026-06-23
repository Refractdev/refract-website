const categories = [
  { label: "High", count: 4, color: "var(--ld-error)", width: "28%" },
  { label: "Medium", count: 8, color: "var(--ld-warning)", width: "52%" },
  { label: "Low", count: 3, color: "var(--ld-muted)", width: "20%" },
];

interface HealthScoreMockProps {
  activePanel?: number;
}

const HealthScoreMock = ({ activePanel = 0 }: HealthScoreMockProps) => {
  return (
    <div className="min-h-[280px] bg-ld-surface p-4">
      <div
        className={`mb-5 flex items-center gap-5 rounded-sm transition-colors ${
          activePanel === 0 ? "ring-1 ring-ld-primary/40" : ""
        }`}
      >
        <div className="flex size-[72px] shrink-0 flex-col items-center justify-center rounded-full border-2 border-ld-border-strong">
          <span className="text-headline-lg leading-none text-ld-on-surface">78</span>
          <span className="text-mono-label mt-0.5 text-[9px]">/ 100</span>
        </div>
        <div>
          <p className="text-headline-sm mb-1">Code Health</p>
          <p className="text-body-sm">+6 pts since last scan</p>
        </div>
      </div>

      <p className="text-mono-label mb-2.5">Issues by severity</p>
      <div
        className={`mb-3 flex h-1.5 overflow-hidden rounded-sm transition-colors ${
          activePanel === 1 ? "ring-1 ring-ld-primary/40" : ""
        }`}
      >
        {categories.map((cat) => (
          <div key={cat.label} style={{ width: cat.width, background: cat.color }} />
        ))}
      </div>
      <div className="flex gap-4">
        {categories.map((cat) => (
          <div key={cat.label} className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full" style={{ background: cat.color }} />
            <span className="text-mono-label text-[11px]">
              {cat.label} · {cat.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthScoreMock;
