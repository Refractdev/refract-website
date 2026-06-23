const months = ["FEB", "MAR", "APR", "MAY", "JUN", "JUL"];
const weeks = ["2", "9", "16", "23", "2", "9", "16", "23", "30"];

const bars = [
  { label: "Q1 Refactor", start: 5, width: 35, row: 0 },
  { label: "API cleanup", start: 25, width: 30, row: 1 },
  { label: "Component split", start: 45, width: 40, row: 2 },
  { label: "Docs sprint", start: 62, width: 25, row: 3 },
];

const initiatives = [
  { name: "Type Safety", count: 24, color: "var(--ld-primary)" },
  { name: "Architecture", count: 16, color: "var(--ld-success)" },
  { name: "Documentation", count: 9, color: "var(--ld-warning)" },
  { name: "Test Coverage", count: 12, color: "var(--ld-muted)" },
];

const PlanMock = () => {
  return (
    <div className="min-h-[320px] bg-ld-surface p-4">
      <div className="mb-2 flex gap-6 text-caption text-ld-muted">
        {months.map((m) => (
          <span key={m} className="flex-1 text-center font-medium text-ld-tertiary">
            {m}
          </span>
        ))}
      </div>
      <div className="mb-4 flex gap-1 border-b border-ld-border pb-2">
        {weeks.map((w, i) => (
          <span key={i} className="flex-1 text-center text-[9px] text-ld-muted">
            {w}
          </span>
        ))}
      </div>
      <div className="relative mb-6 h-[140px]">
        {bars.map((bar) => (
          <div
            key={bar.label}
            className="absolute flex h-[22px] items-center overflow-hidden whitespace-nowrap rounded-sm border border-ld-primary/40 bg-ld-primary/20 px-2 text-[10px] text-ld-on-surface"
            style={{
              left: `${bar.start}%`,
              width: `${bar.width}%`,
              top: bar.row * 32 + 4,
            }}
          >
            {bar.label}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {initiatives.map((init) => (
          <div key={init.name} className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-sm" style={{ background: init.color }} />
            <span className="text-body-sm">{init.name}</span>
            <span className="text-mono-label text-[10px]">{init.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanMock;
