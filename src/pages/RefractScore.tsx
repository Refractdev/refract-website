import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const categories = [
  {
    name: "Type Safety",
    weight: "25%",
    desc: "Measures elimination of unsafe patterns: any types, implicit returns, missing prop types, and partial type coverage.",
    checks: ["No any types", "Explicit return types", "Full prop type coverage", "No implicit any from tsconfig"],
  },
  {
    name: "Code Structure",
    weight: "25%",
    desc: "Evaluates component size, responsibility separation, and module cohesion.",
    checks: ["Components under 300 lines", "Single responsibility", "No circular dependencies", "Clean import graph"],
  },
  {
    name: "Documentation",
    weight: "20%",
    desc: "Tracks presence and quality of inline documentation and JSDoc comments.",
    checks: ["Function-level comments", "Component descriptions", "Hook documentation", "Exported API coverage"],
  },
  {
    name: "Code Hygiene",
    weight: "20%",
    desc: "Detects leftover debug artifacts, dead code, and bad naming conventions.",
    checks: ["No console.log statements", "No dead state", "Semantic variable names", "No commented-out code"],
  },
  {
    name: "Pattern Consistency",
    weight: "10%",
    desc: "Checks that patterns (error handling, data fetching, state management) are applied consistently across the codebase.",
    checks: ["Consistent error handling", "Uniform data fetching", "State patterns match", "No style inconsistencies"],
  },
];

const tiers = [
  { range: "90–100", label: "Production Ready", color: "#34d89a", desc: "Exceptional quality. Minimal debt. Ready for scale and team collaboration." },
  { range: "75–89",  label: "Solid",            color: "#5b9cf6", desc: "Good foundation. A few issues to clean up but shippable and maintainable." },
  { range: "60–74",  label: "Fair",             color: "#f59e0b", desc: "Functional but accumulating debt. Address high-impact issues soon." },
  { range: "40–59",  label: "Needs Work",       color: "#f97316", desc: "Significant structural or type problems. Schedule a refactor sprint." },
  { range: "0–39",   label: "Critical",         color: "#f04c67", desc: "High-risk codebase. Deep issues across multiple dimensions." },
];

export default function RefractScore() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)", color: "var(--color-ink)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 128, paddingBottom: 96 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <div className="animate-fade-up" style={{ marginBottom: 72 }}>
            <span className="badge-pill" style={{ marginBottom: 16, display: "inline-block" }}>Refract Score</span>
            <h1 className="text-display-lg" style={{ marginTop: 12, color: "var(--color-ink)" }}>
              How we measure code health.
            </h1>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
              The Refract Score is a composite metric from 0 to 100 that reflects your codebase's overall production readiness. It is calculated across five dimensions, each weighted by its impact on long-term maintainability.
            </p>
          </div>

          {/* Score visual */}
          <div className="animate-fade-up" style={{ animationDelay: "60ms", marginBottom: 72, borderRadius: 16, border: "1px solid var(--color-hairline)", backgroundColor: "var(--color-surface-card)", padding: "40px 32px", textAlign: "center" }}>
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 140, height: 140 }}>
              <svg viewBox="0 0 140 140" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
                <circle cx="70" cy="70" r="58" fill="none" stroke="var(--color-hairline-strong)" strokeWidth="8" />
                <circle cx="70" cy="70" r="58" fill="none" stroke="#f54e00" strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 58 * 0.82} ${2 * Math.PI * 58 * 0.18}`}
                  strokeLinecap="round"
                  style={{ filter: "drop-shadow(0 0 8px rgba(245,78,0,0.5))" }}
                />
              </svg>
              <div style={{ position: "relative", textAlign: "center" }}>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", color: "var(--color-ink)", lineHeight: 1 }}>82</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>Example</div>
              </div>
            </div>
            <p style={{ marginTop: 24, fontSize: 14, color: "var(--color-body)" }}>Your Health Score is live-updated after every analysis run.</p>
          </div>

          {/* Categories */}
          <div className="animate-fade-up" style={{ animationDelay: "120ms", marginBottom: 72 }}>
            <h2 className="text-display-sm" style={{ color: "var(--color-ink)", marginBottom: 32 }}>Score dimensions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {categories.map((cat, i) => (
                <div key={cat.name} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms`, borderRadius: 12, border: "1px solid var(--color-hairline)", backgroundColor: "var(--color-surface-card)", padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-ink)" }}>{cat.name}</h3>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-primary)", backgroundColor: "var(--color-primary-glow)", padding: "3px 10px", borderRadius: 4 }}>Weight {cat.weight}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--color-body)", lineHeight: 1.65, marginBottom: 14 }}>{cat.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {cat.checks.map((c) => (
                      <span key={c} style={{ fontSize: 12, color: "var(--color-muted)", backgroundColor: "var(--color-surface-strong)", padding: "3px 10px", borderRadius: 4, border: "1px solid var(--color-hairline)" }}>{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Score tiers */}
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-display-sm" style={{ color: "var(--color-ink)", marginBottom: 32 }}>Score tiers</h2>
            <div style={{ borderRadius: 12, border: "1px solid var(--color-hairline)", backgroundColor: "var(--color-surface-card)", overflow: "hidden" }}>
              {tiers.map((t, i) => (
                <div key={t.range} style={{ display: "flex", alignItems: "flex-start", gap: 20, padding: "20px 24px", borderBottom: i < tiers.length - 1 ? "1px solid var(--color-hairline)" : "none" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: t.color, minWidth: 52, paddingTop: 1 }}>{t.range}</span>
                  <div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: t.color }}>{t.label}</span>
                    <p style={{ marginTop: 4, fontSize: 13, color: "var(--color-body)", lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
