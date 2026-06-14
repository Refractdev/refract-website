const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Link a GitHub repository and select a branch. Refract indexes your codebase and prepares for analysis.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Refract scans every file, runs 15+ AST-powered detectors, and builds a complete import map. Results in minutes.",
  },
  {
    number: "03",
    title: "Review & Refactor",
    description:
      "Browse issues sorted by priority, preview before/after diffs, accept suggestions, and generate a PR with a single click.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section" style={{ borderTop: "1px solid var(--color-theme-border)" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 max-w-[680px]">
          <p className="mb-2 font-serif italic" style={{ fontSize: 15, color: "var(--color-theme-text-sec)" }}>
            How it works
          </p>
          <h2 className="text-balance" style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
            From messy code to production-ready in three steps.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="anim-fade-up flex flex-col rounded-md p-8"
              style={{
                background: "var(--color-theme-card)",
                border: "1px solid var(--color-theme-border)",
                animationDelay: `${i * 80}ms`,
              }}
            >
              <span className="mb-4 font-serif italic" style={{ fontSize: 32, color: "var(--color-theme-text-ter)", lineHeight: 1 }}>
                {step.number}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 500, color: "var(--color-theme-text)", marginBottom: 8 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--color-theme-text-sec)", lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
