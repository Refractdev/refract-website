const agents = [
  { name: "Refract Agent", active: true },
  { name: "Cursor Agent", active: false },
  { name: "GitHub Copilot", active: false },
];

interface BuildMockProps {
  activePanel?: number;
}

const BuildMock = ({ activePanel = 0 }: BuildMockProps) => {
  return (
    <div className="relative min-h-[340px] bg-ld-surface font-mono text-[11px]">
      <div
        className={`border-b px-4 py-2.5 transition-colors ${
          activePanel === 0 ? "border-ld-primary/40 bg-ld-primary/5" : "border-ld-border"
        }`}
      >
        <span className="font-sans text-label-sm text-ld-on-surface">Refract Agent</span>
        <span className="mock-pill mock-pill--active ml-2 font-sans">Running</span>
      </div>
      <div className="p-4 leading-relaxed text-ld-tertiary">
        <p className="text-ld-muted">On it! I&apos;ve received your request.</p>
        <p className="mt-2">Kicked off analysis in my-app/src environment.</p>
        <p className="mt-3 text-ld-primary">Searching for circular dependencies...</p>
        <p className="mt-2">my-app$ rg --files -g &apos;*.tsx&apos; | wc -l</p>
        <p className="mt-1 text-ld-on-surface">247</p>
        <p className="mt-3 text-ld-muted">Thought for 3s</p>
        <p className="mt-2">Found 12 structural issues across 8 files.</p>
        <p className="mt-3 text-ld-success">Changed 3 files · Draft PR ready</p>
      </div>

      <div
        className={`absolute right-6 top-16 w-[180px] rounded-md border bg-ld-overlay p-2 transition-colors ${
          activePanel === 1 ? "border-ld-primary/50" : "border-ld-border"
        }`}
      >
        <p className="mb-2 px-2 text-caption text-ld-muted">Assign to...</p>
        {agents.map((a) => (
          <div
            key={a.name}
            className={`flex items-center gap-2 rounded-sm px-2 py-1.5 text-caption ${
              a.active ? "bg-ld-primary/15 text-ld-on-surface" : "text-ld-tertiary"
            }`}
          >
            <div className="size-4 rounded-full bg-ld-chip" />
            {a.name}
            {a.active && <span className="ml-auto text-ld-primary">✓</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildMock;
