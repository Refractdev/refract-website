import SectionBand from "./SectionBand";

const steps = [
  {
    number: "1.0",
    label: "Connect",
    title: "Connect your GitHub repo",
    description:
      "GitHub OAuth, pick repo and branch. Webhook registers automatically (Pro). No config files, no CI setup.",
  },
  {
    number: "2.0",
    label: "Monitor",
    title: "Every push is scanned",
    description:
      "Issues persist with severity, file, line, and patch when available. The monitor runs silently — no manual triggers.",
  },
  {
    number: "3.0",
    label: "Triage",
    title: "Inbox-style issue triage",
    description:
      "Linear-style issue inbox. Accept, reject, or ignore. Link to the commit that introduced them (Teams).",
  },
  {
    number: "4.0",
    label: "Transform",
    title: "Accepted fixes ship as PRs",
    description:
      "Accepted fixes go to a branch refract/\u2026, then a pull request with safety checks. Merge when ready. The cycle closes in Git.",
  },
];

const ValueProps = () => {
  return (
    <SectionBand elevated>
      <div className="mx-auto max-w-[800px] text-center">
        <p className="text-mono-label" style={{ marginBottom: 16 }}>PUSH → MONITOR → ISSUES → TRANSFORM → PR → PUSH</p>
        <h2 className="text-section-title text-balance">
          Code health CI for the AI era.
        </h2>
        <p className="text-body" style={{ marginTop: 16, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Push triggers a scan. Issues persist with patches. Accept fixes and Refract opens a safe pull request. The loop lives in GitHub.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
        {steps.map((item) => (
          <div key={item.number} style={{ paddingTop: 20, borderTop: "1px solid var(--color-hairline)" }}>
            <p className="text-mono-label" style={{ marginBottom: 12 }}>
              {item.number}
            </p>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-ink)", marginBottom: 8 }}>
              {item.title}
            </h3>
            <p className="text-body" style={{ fontSize: 14 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionBand>
  );
};

export default ValueProps;
