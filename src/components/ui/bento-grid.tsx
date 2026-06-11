import { cn } from "@/lib/utils";

// Custom unique icons for Refract features
const ModularizeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="7" height="7" rx="1.5" className="fill-white/10" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" className="fill-white/10" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" className="fill-white/10" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" className="fill-white/5" strokeDasharray="2 2" />
    <path d="M10.5 6.5h3M6.5 10.5v3M17.5 10.5v3M10.5 17.5h3" strokeLinecap="round" />
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 8c0-2 1.5-4 4-4s4 2 4 4-1.5 4-4 4H4" className="fill-white/10" stroke="currentColor" />
    <path d="M12 16c0-2 1.5-4 4-4s4 2 4 4-1.5 4-4 4h-4" className="fill-white/10" stroke="currentColor" />
    <circle cx="8" cy="12" r="1.5" className="fill-white/80" />
    <circle cx="16" cy="8" r="1.5" className="fill-white/80" />
  </svg>
);

const TypescriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="3" className="fill-white/10" />
    <path d="M12 7v10M8 11h8" strokeLinecap="round" strokeWidth="2" />
    <path d="M16 15c1.5 0 2.5-1 2.5-2.5S17.5 10 16 10" strokeLinecap="round" />
    <path d="M18.5 17.5c-1.5 1-3.5.5-4-.5s0-2.5 1.5-3" strokeLinecap="round" />
  </svg>
);

const DocsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h12l4 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" className="fill-white/10" />
    <path d="M14 4v4h4" />
    <path d="M8 12h8M8 16h5" strokeLinecap="round" />
    <circle cx="17" cy="17" r="2" className="fill-white/80" />
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" className="fill-white/20" />
    <circle cx="12" cy="14" r="3" className="fill-white/10" strokeDasharray="3 2" />
    <path d="M12 17v3M8 21h8" strokeLinecap="round" />
    <path d="M5 10l-2 1M19 10l2 1M12 5V3" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="9" ry="7" className="fill-white/10" />
    <path d="M7 12c0 2.5 2 4 5 4s5-1.5 5-4" strokeLinecap="round" />
    <circle cx="9" cy="10" r="1" className="fill-white/80" />
    <circle cx="15" cy="10" r="1" className="fill-white/80" />
    <path d="M12 16v3M10 19h4" strokeLinecap="round" />
    <path d="M4 12l-1-2M20 12l1-2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const CodeMapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="6" width="8" height="5" rx="1.5" className="fill-white/10" />
    <rect x="14" y="4" width="8" height="5" rx="1.5" className="fill-white/10" />
    <rect x="14" y="15" width="8" height="5" rx="1.5" className="fill-white/10" />
    <rect x="2" y="13" width="8" height="5" rx="1.5" className="fill-white/5" strokeDasharray="2 1" />
    <path d="M10 8.5h4M6 13v-2M18 9v2M10 15.5h4" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" className="fill-white/80" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3l8 4v6c0 5-4 8-8 10-4-2-8-5-8-10V7l8-4z" className="fill-white/10" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="8" r="1.5" className="fill-white/80" />
    <path d="M12 3v2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const HealthScoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" className="fill-white/10" />
    <path d="M12 7v5l3 3" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" className="fill-white/80" />
  </svg>
);

const DegradationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 12h4l3-9 6 18 3-9h2" className="fill-white/10" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="12" r="2" className="fill-white/80" />
  </svg>
);

const AnomalyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3l9 16H3L12 3z" className="fill-white/10" />
    <circle cx="12" cy="13" r="1.5" className="fill-white/80" />
    <path d="M12 9v2" strokeLinecap="round" />
  </svg>
);

const InstabilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" className="fill-white/10" />
    <path d="M8 12h2v5H8zM11 8h2v9h-2zM14 14h2v3h-2z" className="fill-white/80" />
  </svg>
);

const PatternIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white/70" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="6" height="6" rx="1" className="fill-white/10" />
    <rect x="14" y="4" width="6" height="6" rx="1" className="fill-white/10" />
    <rect x="4" y="14" width="6" height="6" rx="1" className="fill-white/10" />
    <rect x="14" y="14" width="6" height="6" rx="1" className="fill-white/20" />
    <path d="M10 7h4M7 10v4M17 10v4M10 17h4" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

const BentoCard = ({ item, index }: { item: BentoItem; index: number }) => {
  return (
    <div
      className={cn(
        "group relative p-6 transition-all duration-300 animate-fade-up bg-[#0a0a0a] rounded-2xl",
        "border border-white/5",
        "hover:border-white/10 hover:bg-[#111]",
        item.colSpan || "col-span-1",
        item.colSpan === 2 ? "md:col-span-2" : "",
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="relative flex flex-col space-y-5">
        {/* Icon + status row */}
        <div className="flex items-center justify-between">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/5 bg-[#1a1a1a] text-[#888] group-hover:text-white transition-colors">
            {item.icon}
          </div>
          <span
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-[#1a1a1a] border border-white/5 rounded-sm",
              "text-[#555]",
            )}
          >
            {item.status || "Active"}
          </span>
        </div>

        {/* Title + description */}
        <div className="space-y-2">
          <h3 className="font-sans text-[16px] font-bold text-white">
            {item.title}
            {item.meta && (
              <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-[#444]">
                {item.meta}
              </span>
            )}
          </h3>
          <p className="text-[14px] text-[#666] leading-relaxed font-sans">
            {item.description}
          </p>
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-1.5 pt-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm border border-white/5 text-[#444] bg-[#1a1a1a]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <BentoCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}

const refractFeatures: BentoItem[] = [
  {
    title: "Auto-Refract",
    meta: "AI-Powered",
    description:
      "Automatically extract components, resolve unused states, and refactor code safely with our background compiler loop.",
    icon: <ModularizeIcon />,
    status: "Core",
    tags: ["Refactoring", "Architecture"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Live Health Score",
    meta: "0-100",
    description:
      "Real-time codebase health score calculated after each analysis. Track improvements and catch regressions before they accumulate.",
    icon: <HealthScoreIcon />,
    status: "New",
    tags: ["Monitoring", "Metrics"],
    colSpan: 1,
  },
  {
    title: "CI/CD Drift Monitor",
    meta: "Teams",
    description:
      "Analyze every PR automatically. Detect health degradation and block merges before code quality drops.",
    icon: <DegradationIcon />,
    status: "Active",
    tags: ["Alerts", "Monitoring"],
  },
  {
    title: "Tailwind Cleanup",
    meta: "Instant",
    description:
      "Groups repeated utility classes into consistent design patterns. No more 47-class divs scattered across your codebase.",
    icon: <TailwindIcon />,
    status: "Popular",
    tags: ["CSS", "Design System"],
  },
  {
    title: "TypeScript-First",
    meta: "Smart Inference",
    description:
      "Replaces generic 'any' types and generic variable names with real, inferred TypeScript types and semantic naming based on actual data flow.",
    icon: <TypescriptIcon />,
    status: "Core",
    tags: ["Types", "Naming"],
    colSpan: 1,
  },
  {
    title: "Local AST Analysis",
    meta: "Free",
    description:
      "Instantly detect console logs, unsafe any types, circular imports, render loops, and oversized components directly in the browser.",
    icon: <AnomalyIcon />,
    status: "Free",
    tags: ["Security", "AST Detection"],
  },
  {
    title: "Instability Tracking",
    meta: "Pro",
    description:
      "Identifies your most modified and unstable files. Know where your codebase is churning and which areas need architectural attention.",
    icon: <InstabilityIcon />,
    status: "Pro",
    tags: ["Analytics", "Churn"],
  },
  {
    title: "Pattern Consistency",
    meta: "Pro",
    description:
      "Detects naming inconsistencies, state management mismatches, and style deviations vs the rest of your codebase. Enforce team conventions automatically.",
    icon: <PatternIcon />,
    status: "Pro",
    tags: ["Consistency", "Standards"],
    colSpan: 1,
  },
  {
    title: "AI Explain",
    meta: "Context-Aware",
    description:
      "Receive clear didactic explanations of why specific patterns are bad and exactly how your code should be structured.",
    icon: <DocsIcon />,
    status: "Beta",
    tags: ["Explain", "Learn"],
  },
  {
    title: "AI-Native Refactors",
    meta: "Bolt, v0, Cursor",
    description:
      "Designed from the ground up to understand the quirks and patterns of modern AI codegen tools. Speaks their language.",
    icon: <AIIcon />,
    status: "Core",
    tags: ["AI-Ready", "Patterns"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Auto-PR Creation",
    meta: "1-Click",
    description:
      "Connect your repository and let the AI generate clean refactored branches and Pull Requests with a single click.",
    icon: <GitHubIcon />,
    status: "Pro",
    tags: ["Git", "PRs"],
  },
  {
    title: "CodeMap Visualization",
    meta: "Structure",
    description:
      "Understand your project structure at a glance. Navigate complex AI-generated codebases with an interactive visual map.",
    icon: <CodeMapIcon />,
    status: "New",
    tags: ["Navigation", "Overview"],
  },
  {
    title: "Safe Review System",
    meta: "Controlled",
    description:
      "Review every change before it's applied. No surprises, no broken code. You stay in control of what gets modified.",
    icon: <ShieldIcon />,
    status: "Core",
    tags: ["Security", "Control"],
    colSpan: 1,
  },
];

export { BentoGrid, BentoCard, refractFeatures };
export type { BentoGridProps };
