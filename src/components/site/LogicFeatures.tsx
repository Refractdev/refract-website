import SectionBand from "./SectionBand";

const features = [
  {
    label: "TRANSFORM",
    title: "Detect debt. Ship the fix.",
    desc: "Scans for 7 structural issue types and turns accepted proposals into PRs automatically.",
  },
  {
    label: "SECURITY",
    title: "Nothing ships with a secret in it.",
    desc: "Secret scanning, injection detection, dependency audits, and a configurable gate on every PR.",
  },
  {
    label: "MONITOR",
    title: "Know what every push costs you.",
    desc: "A real-time feed of issues introduced, resolved, and trending — per repo, per author, per AI tool.",
  },
  {
    label: "MCP + CLI",
    title: "Use it where you already work.",
    desc: "Native MCP support for Cursor, Windsurf, and Claude Desktop. GitHub Actions in one line.",
  },
  {
    label: "GOVERN",
    title: "Set the rules. Enforce them automatically.",
    desc: "Guidelines as code, org-wide policies, and team analytics for teams shipping AI at scale.",
  },
];

const LogicFeatures = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[1100px]">
        <p className="tp-section-label">Features</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.label} className="tp-card">
              <p className="tp-eyebrow">{f.label}</p>
              <h3 className="text-headline-md mt-1">{f.title}</h3>
              <p className="text-body-sm mt-2 text-ld-tertiary">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBand>
  );
};

export default LogicFeatures;