import { Card } from "@/components/ui/card";
import PageShell from "@/components/site/PageShell";
import StatusPill from "@/components/site/StatusPill";

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

const phaseVariant: Record<Phase, "success" | "warning" | "info" | "neutral"> = {
  shipped: "success",
  in_progress: "warning",
  planned: "info",
  future: "neutral",
};

const phaseColor: Record<Phase, string> = {
  shipped: "bg-ld-success",
  in_progress: "bg-ld-warning",
  planned: "bg-ld-primary",
  future: "bg-ld-muted",
};

export default function Roadmap() {
  return (
    <PageShell
      label="Roadmap"
      title="What we're building."
      description={
        <>
          Our public roadmap. Priorities shift based on user feedback — have a feature request?{" "}
          <a href="mailto:refractcode@gmail.com" className="link-accent">
            Tell us.
          </a>
        </>
      }
    >
      <div className="relative">
        <div className="absolute bottom-2 left-[18px] top-2 w-px bg-ld-border" />

        <div className="flex flex-col gap-12">
          {items.map((item) => (
            <div key={item.quarter} className="flex gap-8">
              <div className="flex w-9 shrink-0 justify-center pt-1">
                <div className={`size-3 rounded-full border-2 border-ld-neutral ${phaseColor[item.phase]}`} />
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-2.5">
                  <span className="text-mono-label font-medium">{item.quarter}</span>
                  <StatusPill variant={phaseVariant[item.phase]}>
                    {item.phase === "in_progress"
                      ? "In Progress"
                      : item.phase.charAt(0).toUpperCase() + item.phase.slice(1).replace("_", " ")}
                  </StatusPill>
                </div>
                <h2 className="text-section-subtitle mb-4">{item.title}</h2>
                <Card className="overflow-hidden p-0">
                  {item.items.map((feat, i) => (
                    <div
                      key={feat}
                      className={`flex items-center gap-3 px-4 py-3.5 ${
                        i < item.items.length - 1 ? "border-b border-ld-border" : ""
                      }`}
                    >
                      <span
                        className={`size-1.5 shrink-0 rounded-full ${
                          item.phase === "shipped" ? "bg-ld-success" : "bg-ld-border-strong"
                        }`}
                      />
                      <span
                        className={`text-body-sm ${
                          item.phase === "shipped" ? "text-ld-on-surface" : "text-ld-tertiary"
                        }`}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
