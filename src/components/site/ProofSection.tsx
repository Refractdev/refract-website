import SectionBand from "./SectionBand";

const screenshots = [
  {
    label: "SCAN",
    title: "Every push, x-rayed.",
    desc: "Issues introduced, security findings, AI tool used — all in one card.",
    badge: "push delta",
  },
  {
    label: "REVIEW",
    title: "Review before anything runs.",
    desc: "Full diff, rationale, risk score. Nothing executes until you say so.",
    badge: "proposal review",
  },
  {
    label: "DELIVER",
    title: "Approve. PR delivered.",
    desc: "Branch created, commits structured, pull request opened with everything verified.",
    badge: "auto-pr",
  },
];

const ProofSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[1100px]">
        <p className="tp-section-label">Demo</p>
        <h2 className="text-section-title text-balance max-w-[640px]">
          See Refract in action.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {screenshots.map((s) => (
            <div key={s.title} className="tp-card">
              <div className="mb-4">
                <span className="tp-badge">{s.badge}</span>
              </div>
              <p className="tp-eyebrow">{s.label}</p>
              <h3 className="text-headline-md mt-1">{s.title}</h3>
              <p className="text-body-sm mt-2 text-ld-tertiary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionBand>
  );
};

export default ProofSection;