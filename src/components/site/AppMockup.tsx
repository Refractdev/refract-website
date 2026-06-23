import { MockFrame } from "./MockFrame";

const issues = [
  {
    id: "REF-142",
    title: "Prop drilling: 4 levels deep",
    file: "src/components/Table.tsx",
    priority: "high",
    status: "Todo",
  },
  {
    id: "REF-141",
    title: "Missing error boundary",
    file: "src/hooks/useData.ts",
    priority: "high",
    status: "Todo",
  },
  {
    id: "REF-138",
    title: "`any` type leakage",
    file: "src/utils/transform.ts",
    priority: "medium",
    status: "In Progress",
  },
  {
    id: "REF-135",
    title: "Circular dependency detected",
    file: "src/App.tsx",
    priority: "medium",
    status: "Todo",
  },
  {
    id: "REF-129",
    title: "Unused state variable",
    file: "src/components/Card.tsx",
    priority: "low",
    status: "Backlog",
  },
];

const priorityClass = (p: string) =>
  p === "high" ? "mock-priority-high" : p === "medium" ? "mock-priority-medium" : "mock-priority-low";

const AppMockup = () => {
  const active = issues[0];

  return (
    <MockFrame
      title="refract — analysis"
      headerRight={<span className="mock-pill mock-pill--active">12 issues</span>}
    >
      <div style={{ display: "flex", minHeight: 340, background: "var(--color-surface-card)" }}>
        <div
          style={{
            width: "42%",
            borderRight: "1px solid var(--color-hairline)",
            background: "var(--color-surface-deep)",
          }}
        >
          <div
            style={{
              padding: "10px 12px",
              borderBottom: "1px solid var(--color-hairline)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--color-ink)" }}>Issues</span>
            <span className="mock-pill">Filter</span>
          </div>
          {issues.map((item, i) => (
            <div
              key={item.id}
              style={{
                padding: "10px 12px",
                borderBottom: "1px solid var(--color-hairline)",
                background: i === 0 ? "rgba(94, 106, 210, 0.08)" : "transparent",
                borderLeft: i === 0 ? "2px solid var(--color-accent)" : "2px solid transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span className="text-mono-label" style={{ fontSize: 10, color: "var(--color-accent)" }}>
                  {item.id}
                </span>
                <span className={`mock-pill ${priorityClass(item.priority)}`} style={{ fontSize: 10, padding: "1px 6px" }}>
                  {item.priority}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--color-ink)", marginBottom: 2 }}>{item.title}</p>
              <p className="text-mono-label" style={{ fontSize: 10 }}>{item.file}</p>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, padding: "16px 18px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span className="text-mono-label" style={{ color: "var(--color-accent)" }}>{active.id}</span>
            <span className="mock-pill mock-pill--active">{active.status}</span>
          </div>
          <h3 style={{ fontSize: 16, fontWeight: 500, color: "var(--color-ink)", marginBottom: 8 }}>
            {active.title}
          </h3>
          <p className="text-body" style={{ fontSize: 13, marginBottom: 16 }}>
            Props passed through 4 component layers without context. Refactor to use React Context or composition.
          </p>
          <div className="surface-card" style={{ padding: 12, marginBottom: 12 }}>
            <p className="text-mono-label" style={{ marginBottom: 8 }}>Affected files</p>
            <p className="text-mono-label" style={{ fontSize: 11, color: "var(--color-accent)" }}>
              src/components/Table.tsx
            </p>
            <p className="text-mono-label" style={{ fontSize: 11, color: "var(--color-body)" }}>
              src/components/Row.tsx · src/components/Cell.tsx
            </p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span className="mock-pill mock-pill--active">View diff</span>
            <span className="mock-pill">Accept fix</span>
          </div>
        </div>
      </div>
    </MockFrame>
  );
};

export default AppMockup;
