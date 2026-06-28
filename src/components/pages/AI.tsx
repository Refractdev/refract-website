import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const models = [
  {
    name: "Refract Core",
    role: "The analysis brain",
    desc: "A fine-tuned model trained specifically on code quality patterns across thousands of JavaScript and TypeScript repositories. It identifies anti-patterns, infers semantically correct types, and generates contextual documentation — all without sending your code to a generic LLM.",
  },
  {
    name: "Type Inference Engine",
    role: "Static + AI hybrid",
    desc: "Combines static analysis (TypeScript compiler APIs) with AI-guided inference to resolve ambiguous types. When the TypeScript compiler cannot determine a type from context alone, the inference engine proposes candidates based on actual data flow and usage patterns.",
  },
  {
    name: "Degradation Detector",
    role: "Continuous monitoring model",
    desc: "A lightweight model that runs locally and watches your codebase for regressions. It tracks your Health Score over time and learns the typical patterns of your project, alerting you only when something genuinely deviates from your baseline.",
  },
  {
    name: "Documentation Generator",
    role: "Contextual explanation layer",
    desc: "Instead of describing what code does (which any developer can read), this model focuses on why decisions were made. It reasons about patterns, trade-offs, and intent — producing comments that genuinely help future maintainers.",
  },
];

const principles = [
  {
    title: "Local-first processing",
    desc: "All analysis runs on your hardware. Your code is not uploaded to external servers by default. AI features that require cloud inference send only minimal, anonymized snippets — never full files.",
  },
  {
    title: "Explainability",
    desc: "Every Refract suggestion includes a clear explanation of the problem, the proposed fix, and why the change improves code quality. No black-box outputs.",
  },
  {
    title: "Human review is mandatory",
    desc: "AI suggestions are proposals, not automatic changes. You inspect every diff and decide what to accept. Refract is a collaborator, not an autonomous agent.",
  },
  {
    title: "No model training on your code",
    desc: "We do not use your proprietary code to train or fine-tune our models. Your intellectual property stays yours.",
  },
];

export default function AI() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-canvas)", color: "var(--color-ink)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 128, paddingBottom: 96 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <div className="animate-fade-up" style={{ marginBottom: 72 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>AI</span>
            <h1 className="text-section-title" style={{ marginTop: 12, color: "var(--color-ink)" }}>
              How AI powers Refract.
            </h1>
            <p style={{ marginTop: 16, fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
              Refract uses a suite of purpose-built AI models — not generic LLMs — trained specifically on code quality tasks. Here is how they work and the principles that guide their design.
            </p>
          </div>

          {/* Models */}
          <div className="animate-fade-up" style={{ animationDelay: "80ms", marginBottom: 72 }}>
            <h2 className="text-section-subtitle" style={{ color: "var(--color-ink)", marginBottom: 32 }}>The models</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {models.map((m, i) => (
                <div
                  key={m.name}
                  className="animate-fade-up"
                  style={{
                    animationDelay: `${i * 70}ms`,
                    borderRadius: 12, border: "1px solid var(--color-hairline)",
                    backgroundColor: "var(--color-surface-card)", padding: "28px 24px",
                    transition: "border-color 0.2s ease, background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-hairline-strong)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-hairline)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--color-surface-card)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--color-ink)" }}>{m.name}</h3>
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--color-primary)", backgroundColor: "var(--color-primary-glow)", padding: "2px 8px", borderRadius: 4 }}>
                      {m.role}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--color-body)", lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            <h2 className="text-section-subtitle" style={{ color: "var(--color-ink)", marginBottom: 32 }}>Our AI principles</h2>
            <div style={{ borderRadius: 12, border: "1px solid var(--color-hairline)", backgroundColor: "var(--color-surface-card)", overflow: "hidden" }}>
              {principles.map((p, i) => (
                <div key={p.title} style={{ padding: "24px", borderBottom: i < principles.length - 1 ? "1px solid var(--color-hairline)" : "none" }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-ink)", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-body)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="animate-fade-up" style={{ animationDelay: "240ms", marginTop: 56, fontSize: 14, color: "var(--color-body)", lineHeight: 1.7, padding: "24px", borderRadius: 12, border: "1px solid var(--color-hairline-strong)", backgroundColor: "var(--color-surface-card)" }}>
            Questions about how AI is used in Refract? We are transparent about our approach.{" "}
            <a href="mailto:refractcode@gmail.com" style={{ color: "var(--color-primary)", textDecoration: "underline", textUnderlineOffset: 3 }}>
              Get in touch.
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
