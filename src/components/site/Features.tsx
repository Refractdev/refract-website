const features = [
  {
    label: "Code Analysis",
    title: "AI-powered analysis that understands your codebase",
    description: "You can scan your repositories and find structural issues with our AST-powered detectors. Cross-file analysis detects patterns no linter catches.",
    image: "/analysis rules.png",
  },
  {
    label: "Quality Dashboard",
    title: "Health scores that track your progress over time",
    description: "Health scores per project with trend tracking and drill-down into specific issues by file. See exactly where your codebase needs attention.",
    image: "/code health.png",
  },
  {
    label: "Smart Refactoring",
    title: "Before/after diffs with one-click pull requests",
    description: "Each issue comes with a before/after diff, impact scoring, and priority ordering. Accept suggestions individually or in batch.",
    image: "/diff view.png",
  },
  {
    label: "Drift Monitoring",
    title: "Automatic alerts when quality starts to decay",
    description: "Track code quality over time with category trends, anomaly detection, and decay hotspots. Get alerted when scores drop.",
    image: "/category trends.png",
  },
  {
    label: "Code Map",
    title: "Visualize your project structure at a glance",
    description: "Understand how files connect and identify architectural issues with an interactive code map built for complex codebases.",
    image: "/codemap.png",
  },
];

const Features = () => {
  return (
    <section id="features">
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="mb-16 max-w-[680px]">
          <p className="mb-2 font-serif italic" style={{ fontSize: 15, color: "var(--color-theme-text-sec)" }}>
            Everything you need
          </p>
          <h2 className="text-balance" style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
            Built for teams that ship with AI.
          </h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {features.map((feature, i) => (
            <div
              key={feature.label}
              className="anim-fade-up grid gap-6 md:grid-cols-2 md:gap-10"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex flex-col justify-center" style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <p className="mb-2 font-serif italic" style={{ fontSize: 14, color: "var(--color-theme-text-sec)" }}>
                  {feature.label}
                </p>
                <h3 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em", color: "var(--color-theme-text)", marginBottom: 10 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--color-theme-text-sec)", lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
              <div
                className="overflow-hidden rounded-md"
                style={{
                  order: i % 2 === 0 ? 2 : 1,
                  background: "var(--color-theme-card)",
                  border: "1px solid var(--color-theme-border)",
                }}
              >
                <img src={feature.image} alt={feature.label} className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
