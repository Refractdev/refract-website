import { motion } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";
import FeatureDemo from "@/components/site/FeatureDemo";

const features = [
  {
    label: "Code Analysis",
    title: "AI-powered analysis that understands your codebase",
    description:
      "You can scan your repositories and find structural issues with our AST-powered detectors. Cross-file analysis detects patterns no linter catches.",
    embed: "issues" as const,
    height: 420,
  },
  {
    label: "Quality Dashboard",
    title: "Health scores that track your progress over time",
    description:
      "Health scores per project with trend tracking and drill-down into specific issues by file. See exactly where your codebase needs attention.",
    embed: "quality" as const,
    height: 480,
  },
  {
    label: "Smart Refactoring",
    title: "Before/after diffs with one-click pull requests",
    description:
      "Each issue comes with a before/after diff, impact scoring, and priority ordering. Accept suggestions individually or in batch.",
    embed: "diff" as const,
    height: 360,
  },
  {
    label: "Drift Monitoring",
    title: "Automatic alerts when quality starts to decay",
    description:
      "Track code quality over time with category trends, anomaly detection, and decay hotspots. Get alerted when scores drop.",
    embed: "quality" as const,
    height: 480,
  },
  {
    label: "Code Map",
    title: "Visualize your project structure at a glance",
    description:
      "Understand how files connect and identify architectural issues with an interactive code map built for complex codebases.",
    embed: "project" as const,
    height: 420,
  },
];

const Features = () => {
  return (
    <section id="features" style={{ background: "#000000" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">

        {/* Section header */}
        <FadeIn>
          <div className="mb-16 max-w-[680px]">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-mute)",
                marginBottom: 12,
              }}
            >
              Everything you need
            </p>
            <h2
              className="text-balance"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
              }}
            >
              Built for teams that ship with AI.
            </h2>
          </div>
        </FadeIn>

        {/* Feature rows — alternate slide direction */}
        <div className="flex flex-col gap-10 md:gap-14">
          {features.map((feature, i) => (
            <FadeIn
              key={feature.label}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={0.05}
            >
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                {/* Copy */}
                <div className="flex flex-col justify-center" style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-mute)",
                      marginBottom: 12,
                    }}
                  >
                    {feature.label}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(20px, 3vw, 28px)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      color: "var(--color-ink)",
                      marginBottom: 12,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter Tight', 'Inter', sans-serif",
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: "var(--color-body)",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Interactive demo */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    order: i % 2 === 0 ? 2 : 1,
                    background: "var(--color-surface-card)",
                    border: "1px solid var(--color-hairline-strong)",
                    borderRadius: 12,
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  <FeatureDemo type={feature.embed} height={feature.height} />
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
