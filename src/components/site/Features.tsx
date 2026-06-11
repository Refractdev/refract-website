import { AnimatedContainer } from "@/components/ui/animated-container";

const features = [
  {
    label: "Code Analysis",
    title: "AI-powered analysis that\nunderstands your codebase",
    description: "You can scan your repositories and find structural issues with our AST-powered detectors. Cross-file analysis detects patterns no linter catches.",
    image: "/analysis rules.png",
  },
  {
    label: "Quality Dashboard",
    title: "Health scores that track\nyour progress over time",
    description: "Health scores per project with trend tracking and drill-down into specific issues by file. See exactly where your codebase needs attention.",
    image: "/code health.png",
  },
  {
    label: "Smart Refactoring",
    title: "Before/after diffs with\none-click pull requests",
    description: "Each issue comes with a before/after diff, impact scoring, and priority ordering. Accept suggestions individually or in batch.",
    image: "/diff view.png",
  },
  {
    label: "Drift Monitoring",
    title: "Automatic alerts when\nquality starts to decay",
    description: "Track code quality over time with category trends, anomaly detection, and decay hotspots. Get alerted when scores drop.",
    image: "/category trends.png",
  },
  {
    label: "Code Map",
    title: "Visualize your project\nstructure at a glance",
    description: "Understand how files connect and identify architectural issues with an interactive code map built for complex codebases.",
    image: "/codemap.png",
  },
];

const FeatureSection = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const isLeft = index % 2 === 0;

  return (
    <section className="w-full py-16 md:py-24 xl:py-28">
      <div className="relative mx-auto w-full max-w-[1500px] md:min-h-[600px] md:py-8">
        {/* Text */}
        <div
          className={`relative z-20 mx-auto mb-10 flex w-full max-w-[1300px] px-5 md:mb-0 md:min-h-[520px] md:items-center md:px-0 ${
            isLeft ? "justify-start" : "justify-end"
          }`}
        >
          <div className="pointer-events-auto w-full max-w-[560px]" style={{ textAlign: isLeft ? "left" : "right" }}>
            <AnimatedContainer delay={0.1}>
            <p
              style={{
                marginBottom: 8,
                fontSize: "clamp(13px, 2vw, 15px)",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: "#9a9a9a",
              }}
            >
              {feature.label}
            </p>
            <h2
              style={{
                fontSize: "clamp(24px, 7vw, 34px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.06em",
                color: "#fff",
                whiteSpace: "pre-line",
              }}
            >
              {feature.title}
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: "clamp(13px, 2.85vw, 15px)",
                color: "#999",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              {feature.description}
            </p>
            </AnimatedContainer>
          </div>
        </div>

        {/* Screenshot */}
        <div
          className={`relative z-10 overflow-hidden bg-[#0f0f0f] md:absolute md:top-1/2 md:z-10 md:h-[600px] md:w-[800px] md:max-w-none md:-translate-y-1/2 ${
            isLeft
              ? "w-full md:right-0 md:left-auto md:rounded-l-2xl"
              : "w-full md:left-0 md:right-auto md:rounded-r-2xl"
          }`}
          style={{
            aspectRatio: "16/10",
          }}
        >
          <AnimatedContainer delay={0.2}>
            <img
            src={feature.image}
            alt={feature.label}
            className="h-full w-full object-cover"
          />
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features">
      <div className="w-full">
        <div className="h-36 md:h-40" />
        <div className="w-full border-t border-[#1a1b1c]" />
        <div className="h-24 md:h-28" />
      </div>
      {features.map((feature, index) => (
        <FeatureSection key={feature.label} feature={feature} index={index} />
      ))}
      <div className="w-full border-t border-[#1a1b1c]" />
    </section>
  );
};

export default Features;
