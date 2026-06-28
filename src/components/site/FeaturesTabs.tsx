import IntakeMock from "./mocks/IntakeMock";
import BuildMock from "./mocks/BuildMock";
import HealthScoreMock from "./mocks/HealthScoreMock";
import SectionBand from "./SectionBand";

const sections = [
  {
    title: "Transforms",
    description:
      "Detect → Propose → Approve → Execute → Test → Document → Deliver. Refract parses the AST, finds issues, generates diffs, and opens a PR. Every step reviewable. Every change atomic.",
    Mock: IntakeMock,
    mockPath: "refract — transforms",
  },
  {
    title: "Security",
    description:
      "Hardcoded secrets, missing auth, no rate limiting, no RLS. Refract catches what AI introduced that Snyk and Dependabot weren't built to find. Configurable gate: alert on PR or block the merge.",
    Mock: HealthScoreMock,
    mockPath: "refract — security",
  },
  {
    title: "Activity",
    description:
      "Not a dashboard of vanity metrics. A per-commit record: what got better, what got worse. Push delta, health score trends, drift detection across architecture, quality, security, and dependencies.",
    Mock: BuildMock,
    mockPath: "refract — activity",
  },
  {
    title: "Guidelines",
    description:
      "Rules your team agreed on — max component size, strict TypeScript, auth on all routes. Stored in .refract/guidelines.json, versioned in Git. Enforced on every scan.",
    Mock: HealthScoreMock,
    mockPath: "refract — guidelines",
  },
];

const notAnother = [
  { name: "Not a linter", description: "ESLint and Biome catch style issues. Refract finds structural debt." },
  { name: "Not a formatter", description: "Prettier handles that." },
  { name: "Not a vulnerability scanner", description: "Snyk and Dependabot catch known CVEs in dependencies. Refract finds what AI introduced in your source." },
  { name: "Not a code review bot", description: "Copilot PR review reacts to what's there. Refract proposes what should change — and does it." },
  { name: "Not an AI coding tool", description: "Cursor, Windsurf, and Lovable write the code. Refract makes it shippable." },
];

const FeaturesTabs = () => {
  return (
    <>
      {/* Alternating feature sections (Tradespad style) */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="mb-16 max-w-[680px]">
            <h2 className="text-section-title text-balance">Every push scanned. Every fix reviewable.</h2>
          </div>

          <div className="space-y-24">
            {sections.map((s, i) => {
              const Mock = s.Mock;
              const reversed = i % 2 === 1;
              return (
                <div
                  key={s.title}
                  className="tp-feature-section"
                >
                  <div className={`flex flex-col items-center gap-12 lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}>
                    {/* Mockup side */}
                    <div className="w-full lg:w-1/2">
                      <div className="tp-frame">
                        <div className="tp-frame__bar">
                          <div className="tp-frame__dots">
                            <span className="tp-frame__dot" />
                            <span className="tp-frame__dot" />
                            <span className="tp-frame__dot" />
                          </div>
                          <span className="ml-3 font-mono text-[11px] text-ld-muted">{s.mockPath}</span>
                        </div>
                        <Mock activePanel={0} />
                      </div>
                    </div>

                    {/* Text side */}
                    <div className="w-full lg:w-1/2">
                      <p className="tp-eyebrow">{`0${i + 1}`}</p>
                      <h3 className="text-manifesto mt-1">{s.title}</h3>
                      <p className="text-body-lg mt-4 max-w-[460px] text-ld-tertiary">{s.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* "Not another…" section */}
      <SectionBand>
        <div className="mx-auto max-w-[720px]">
          <p className="section-label">Not another…</p>
          <div className="mt-8 space-y-6">
            {notAnother.map((item) => (
              <div key={item.name} className="border-t border-ld-border pt-5">
                <p className="text-label-lg text-ld-on-surface">{item.name}</p>
                <p className="text-body-sm mt-1 text-ld-tertiary">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="text-body-lg mt-10 text-ld-on-surface">
            Refract runs after all of those — and before merge.
          </p>
        </div>
      </SectionBand>
    </>
  );
};

export default FeaturesTabs;