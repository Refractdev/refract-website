import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { tabContentTransition } from "@/lib/motion";
import IntakeMock from "./mocks/IntakeMock";
import BuildMock from "./mocks/BuildMock";
import HealthScoreMock from "./mocks/HealthScoreMock";
import MockChrome from "./MockChrome";
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
  const [active, setActive] = useState(0);
  const current = sections[active];

  return (
    <>
      <SectionBand id="features" elevated>
        <div className="max-w-[720px]">
          <h2 className="text-section-title text-balance">Every push scanned. Every fix reviewable.</h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {sections.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive(i)}
              className={`features-tab ${i === active ? "features-tab--active" : ""}`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <p className="text-body-sm mt-4 max-w-[560px] text-ld-tertiary">{current.description}</p>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={tabContentTransition}
            >
              <MockChrome path={current.mockPath} className="rounded-lg">
                <current.Mock activePanel={0} />
              </MockChrome>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionBand>

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