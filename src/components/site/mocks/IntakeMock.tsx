const columns = [
  { name: "Backlog", count: 8, items: ["Reduce UI flicker...", "Add buffering for...", "Fix delayed route..."] },
  { name: "Todo", count: 71, items: ["Remove UI inconsistencies", "TypeError: Cannot read...", "Optimize load times"] },
  { name: "In Progress", count: 3, items: ["Remove contentData from API", "Launch page assets", "Prevent duplicate requests"] },
  { name: "Done", count: 53, items: ["Clean up deprecated APIs", "Reduce latency in...", "Improve fallback messaging"] },
];

const thread = [
  { who: "didier", msg: "Has anyone looked into the prop drilling?" },
  { who: "lena", msg: "Refract flagged it in the last scan" },
  { who: "andreas", msg: "@Refract create issues and assign to me" },
];

interface IntakeMockProps {
  activePanel?: number;
}

const IntakeMock = ({ activePanel = 0 }: IntakeMockProps) => {
  const highlightCol = [0, 3, 1, 2][activePanel] ?? 0;

  return (
    <div className="relative flex min-h-[360px] bg-ld-surface">
      <div className="flex flex-1 gap-2 overflow-hidden p-3">
        {columns.map((col, i) => (
          <div
            key={col.name}
            className={`min-w-0 flex-1 rounded-sm transition-colors ${
              i === highlightCol ? "ring-1 ring-ld-primary/40" : ""
            }`}
          >
            <div className="mb-2 flex items-center gap-1.5 px-1">
              <span className="text-label-sm text-ld-on-surface">{col.name}</span>
              <span className="text-mono-label text-[10px]">{col.count}</span>
            </div>
            {col.items.map((item) => (
              <div
                key={item}
                className="mb-1.5 truncate rounded-sm border border-ld-border bg-ld-panel px-2.5 py-2 text-[11px] leading-snug text-ld-tertiary"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        className={`absolute bottom-4 right-4 w-[200px] rounded-md border bg-ld-overlay p-3 transition-colors ${
          activePanel === 1 ? "border-ld-primary/50" : "border-ld-border"
        }`}
      >
        <p className="mb-2 text-caption text-ld-muted">Thread in #code-review</p>
        {thread.map((t) => (
          <div key={t.who} className="mb-2 flex gap-2">
            <div className="size-5 shrink-0 rounded-full bg-ld-chip" />
            <p className="text-[10px] leading-snug text-ld-tertiary">
              <span className="font-medium text-ld-on-surface">{t.who}</span> {t.msg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntakeMock;
