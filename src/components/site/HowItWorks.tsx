import { AnimatedContainer } from "@/components/ui/animated-container";

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
    <section id="how-it-works" className="w-full py-24 md:py-32">
      <AnimatedContainer className="mx-auto max-w-[1300px] px-5 md:px-6">
        <div className="mb-20 text-center md:mb-24">
          <p
            style={{
              marginBottom: 12,
              fontSize: "clamp(13px, 2vw, 15px)",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#9a9a9a",
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 7vw, 34px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.06em",
              color: "#fff",
            }}
          >
            From messy code to production-ready<br />in three steps
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {steps.map((step, i) => (
            <AnimatedContainer key={step.number} delay={0.1 + i * 0.1}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 300,
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 24,
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#999",
                  lineHeight: 1.6,
                  maxWidth: 280,
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </AnimatedContainer>
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
};

export default HowItWorks;
