import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

type Phase = "shipped" | "in_progress" | "planned" | "future";

const items: { phase: Phase; quarter: string; title: string; items: string[] }[] = [
  {
    phase: "shipped",
    quarter: "Q1 2026",
    title: "Foundation",
    items: [
      "Core analysis engine (any types, dead state, console.log)",
      "Live Health Score",
      "CI/CD Drift Monitor & alerting",
      "Side-by-side diff review system",
      "Changelog export",
    ],
  },
  {
    phase: "shipped",
    quarter: "Q2 2026",
    title: "Advanced Detectors",
    items: [
      "Local AST Analysis (useEffect loops, circular deps)",
      "Auto-Refract (400+ line components)",
      "Auto-PR Creation & automatic PRs",
      "AI Explain generation",
      "Pattern Consistency analysis",
    ],
  },
  {
    phase: "in_progress",
    quarter: "Q3 2026",
    title: "Monitoring & Teams",
    items: [
      "Instability Tracking per file",
      "Branch comparison reports",
      "Team dashboard & shared Health Score",
      "Role-based access control",
      "Slack & GitHub notification hooks",
    ],
  },
  {
    phase: "planned",
    quarter: "Q4 2026",
    title: "Intelligence",
    items: [
      "CodeMap — visual architecture graph",
      "Self-healing transformations",
      "Semantic renaming engine",
      "Tailwind class consolidation",
      "Test coverage gap detection",
    ],
  },
  {
    phase: "future",
    quarter: "2027",
    title: "Platform",
    items: [
      "VS Code extension",
      "CI/CD pipeline integration",
      "Vue & Svelte support",
      "Custom detector plugins",
      "On-premise deploy option",
    ],
  },
];

const phaseConfig: Record<Phase, { color: string; bg: string; label: string }> = {
  shipped:     { color: "#34d89a", bg: "rgba(52,216,154,0.10)",  label: "Shipped" },
  in_progress: { color: "#f54e00", bg: "rgba(245,78,0,0.12)",    label: "In Progress" },
  planned:     { color: "#5b9cf6", bg: "rgba(91,156,246,0.10)",  label: "Planned" },
  future:      { color: "#6b6a66", bg: "rgba(107,106,102,0.10)", label: "Future" },
};

export default function Roadmap() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)", color: "var(--color-ink)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 128, paddingBottom: 96 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <div className="animate-fade-up" style={{ marginBottom: 72 }}>
            <span className="badge-pill" style={{ marginBottom: 16, display: "inline-block" }}>Roadmap</span>
            <h1 className="text-display-lg" style={{ marginTop: 12, color: "var(--color-ink)" }}>
              What we're building.
            </h1>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, maxWidth: 520 }}>
              Our public roadmap. Priorities shift based on user feedback — have a feature request?{" "}
              <a href="mailto:refractcode@gmail.com" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>Tell us.</a>
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: 18, top: 8, bottom: 8, width: 1, backgroundColor: "var(--color-hairline)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
              {items.map((item, idx) => {
                const cfg = phaseConfig[item.phase];
                return (
                  <div
                    key={item.quarter}
                    className="animate-fade-up"
                    style={{ animationDelay: `${idx * 80}ms`, display: "flex", gap: 32 }}
                  >
                    {/* Dot */}
                    <div style={{ flexShrink: 0, width: 36, display: "flex", justifyContent: "center", paddingTop: 4 }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: cfg.color, boxShadow: `0 0 10px ${cfg.color}60`, border: "2px solid var(--color-canvas)" }} />
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted)" }}>{item.quarter}</span>
                        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: cfg.color, backgroundColor: cfg.bg, padding: "2px 8px", borderRadius: 4 }}>
                          {cfg.label}
                        </span>
                      </div>
                      <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>{item.title}</h2>
                      <div style={{ borderRadius: 10, border: "1px solid var(--color-hairline)", backgroundColor: "var(--color-surface-card)", overflow: "hidden" }}>
                        {item.items.map((feat, i) => (
                          <div
                            key={feat}
                            style={{
                              display: "flex", alignItems: "center", gap: 12, padding: "13px 18px",
                              borderBottom: i < item.items.length - 1 ? "1px solid var(--color-hairline)" : "none",
                            }}
                          >
                            <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: item.phase === "shipped" ? cfg.color : "var(--color-hairline-strong)", flexShrink: 0 }} />
                            <span style={{ fontSize: 14, color: item.phase === "shipped" ? "var(--color-ink)" : "var(--color-body)" }}>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
