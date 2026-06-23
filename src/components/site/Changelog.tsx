import { Link } from "react-router-dom";
import SectionBand from "./SectionBand";

const entries = [
  {
    title: "Auto-PR generation",
    description:
      "One-click pull requests with documented changes, impact scoring, and safety gate validation for every transform.",
    date: "JUN 17, 2026",
    type: "Automation",
    status: "Live",
  },
  {
    title: "Push delta",
    description:
      "See what each commit introduced or fixed. No more manual comparison between scans.",
    date: "JUN 10, 2026",
    type: "Review",
    status: "Live",
  },
  {
    title: "Cross-file analysis",
    description:
      "Detect circular dependencies, duplicate logic, and architectural issues that span multiple files and modules.",
    date: "JUN 3, 2026",
    type: "Detection",
    status: "Live",
  },
  {
    title: "Structural diffs",
    description:
      "Before/after code views with priority ordering, blast radius scoring, and batch accept for multiple fixes.",
    date: "MAY 27, 2026",
    type: "Diffs",
    status: "Improved",
  },
];

const Changelog = () => {
  return (
    <SectionBand elevated>
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="section-label">Latest changes</p>
          <h2 className="text-section-title max-w-[620px] text-balance">Shipped work, tied to product surface.</h2>
        </div>
        <Link to="/roadmap" className="premium-link">
          View roadmap
        </Link>
      </div>

      <div className="relative">
        <div className="absolute bottom-6 left-4 top-6 hidden w-px bg-ld-border md:block" />
        <div className="grid gap-3">
          {entries.map((entry) => (
            <Link
              key={entry.title}
              to="/roadmap"
              className="timeline-card group grid gap-4 p-4 no-underline md:grid-cols-[160px_1fr_auto] md:items-center md:pl-12"
            >
              <span className="absolute left-4 top-6 hidden size-2 -translate-x-1/2 rounded-full border-2 border-ld-neutral bg-ld-muted transition-colors group-hover:bg-ld-primary md:block" />
              <div>
                <span className="text-mono-label text-[10px] uppercase">{entry.date}</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="chip">{entry.type}</span>
                  <span className="status-pill status-pill--info">{entry.status}</span>
                </div>
              </div>
              <div>
                <h3 className="text-headline-sm mb-1 transition-colors group-hover:text-ld-primary">
                  {entry.title}
                </h3>
                <p className="text-body-sm max-w-[620px]">{entry.description}</p>
              </div>
              <span className="text-label-md text-ld-muted transition-transform group-hover:translate-x-1 group-hover:text-ld-on-surface">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </SectionBand>
  );
};

export default Changelog;
