import SectionBand from "./SectionBand";

const entries = [
  {
    title: "Auto-PR generation",
    description:
      "One-click pull requests with documented changes, impact scoring, and safety gate validation for every transform.",
    date: "Jun 17, 2026",
  },
  {
    title: "Push delta",
    description:
      "See what each commit introduced or fixed. No more manual comparison between scans.",
    date: "Jun 10, 2026",
  },
  {
    title: "Cross-file analysis",
    description:
      "Detect circular dependencies, duplicate logic, and architectural issues that span multiple files.",
    date: "Jun 3, 2026",
  },
  {
    title: "Structural diffs",
    description:
      "Before/after code views with priority ordering, blast radius scoring, and batch accept for multiple fixes.",
    date: "May 27, 2026",
  },
];

const HomeChangelog = () => {
  return (
    <SectionBand>
      <h2 className="text-section-title mb-12">Changelog</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {entries.map((entry) => (
          <a
            key={entry.title}
            href="/changelog"
            className="tp-card group"
          >
            <h3 className="text-headline-sm mb-2 group-hover:text-ld-on-surface">{entry.title}</h3>
            <p className="text-body-sm text-ld-tertiary">{entry.description}</p>
            <time className="text-mono-label mt-4 block text-[11px]">{entry.date}</time>
          </a>
        ))}
      </div>

      <a
        href="/changelog"
        className="mt-10 inline-block text-label-sm text-ld-muted transition-colors hover:text-ld-on-surface"
      >
        View all →
      </a>
    </SectionBand>
  );
};

export default HomeChangelog;
