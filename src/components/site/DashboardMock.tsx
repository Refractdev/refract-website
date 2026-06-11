import {
  GitBranch,
  Zap,
  FileCode2,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

const DashboardMock = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--color-hairline)",
        backgroundColor: "var(--color-surface-card)",
        borderRadius: 12,
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--color-hairline)",
          backgroundColor: "var(--color-canvas-soft)",
          padding: "12px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "var(--color-hairline-strong)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "var(--color-hairline-strong)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "var(--color-hairline-strong)" }} />
          </div>
          <span
            className="text-code"
            style={{ fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            refract — ~/projects/acme-web
          </span>
        </div>
        <div className="hidden sm:flex" style={{ alignItems: "center", gap: 10 }}>
          <span
            style={{
              border: "1px solid var(--color-hairline-strong)",
              padding: "3px 10px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              borderRadius: 9999,
            }}
          >
            <GitBranch style={{ width: 10, height: 10, display: "inline", marginRight: 6, verticalAlign: "middle" }} />
            main
          </span>
          <span
            style={{
              border: "1px solid var(--color-hairline-strong)",
              padding: "3px 10px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-ink)",
              borderRadius: 9999,
              backgroundColor: "var(--color-surface-strong)",
            }}
          >
            <Zap style={{ width: 10, height: 10, display: "inline", marginRight: 6, verticalAlign: "middle" }} />
            Optimized
          </span>
        </div>
      </div>

      {/* Suggestions list */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--color-hairline)",
            padding: "12px 20px",
          }}
        >
          <p className="text-code" style={{ fontSize: 11, color: "var(--color-ink)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Refactor Suggestions
          </p>
          <p className="text-code" style={{ fontSize: 11, color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Sorted by impact
          </p>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { icon: FileCode2, title: "Extract oversized `ProductCard` component", file: "src/components/Shop.tsx", impact: "High" },
            { icon: Zap, title: "Consolidate 12 repeated Tailwind classes", file: "src/pages/Landing.tsx", impact: "Medium" },
            { icon: AlertTriangle, title: "Infer types for `useCart` hook", file: "src/hooks/useCart.ts", impact: "High" },
            { icon: CheckCircle2, title: "Remove 4 redundant state variables", file: "src/lib/state.ts", impact: "Low" },
          ].map((s, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "16px 20px",
                borderBottom: i < 3 ? "1px solid var(--color-hairline-soft)" : "none",
                transition: "background-color 0.12s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-canvas-soft)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <s.icon style={{ width: 16, height: 16, flexShrink: 0, color: "var(--color-muted)" }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: "var(--color-ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {s.title}
                </p>
                <p className="text-code" style={{ fontSize: 11, color: "var(--color-muted)", marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {s.file}
                </p>
              </div>
              <span
                className="hidden sm:inline"
                style={{
                  padding: "3px 10px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  border: "1px solid var(--color-hairline)",
                  borderRadius: 9999,
                  flexShrink: 0,
                }}
              >
                {s.impact} Impact
              </span>
              <button
                style={{
                  padding: "5px 14px",
                  fontSize: 11,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-ink)",
                  backgroundColor: "transparent",
                  border: "1px solid var(--color-hairline-strong)",
                  borderRadius: 9999,
                  cursor: "pointer",
                  transition: "background-color 0.12s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-surface-strong)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Refactor
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardMock;
