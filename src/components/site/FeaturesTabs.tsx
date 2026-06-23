import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { tabContentTransition } from "@/lib/motion";
import IntakeMock from "./mocks/IntakeMock";
import BuildMock from "./mocks/BuildMock";
import HealthScoreMock from "./mocks/HealthScoreMock";
import MockChrome from "./MockChrome";
import SectionBand from "./SectionBand";

const tabs = [
  {
    title: "Built for purpose",
    label: "FIG 0.2",
    description:
      "Refract is shaped by the practices of modern engineering teams shipping with AI. Persistent issues per commit, actionable patches, and automated PRs.",
    Mock: IntakeMock,
    mockPath: "refract — intake",
  },
  {
    title: "Powered by AI agents",
    label: "FIG 0.3",
    description:
      "Designed for workflows shared by humans and agents. From scanning every push to preparing pull requests — Cursor agents see the same memory as your Refract project.",
    Mock: BuildMock,
    mockPath: "Refract Agent",
  },
  {
    title: "Designed for speed",
    label: "FIG 0.4",
    description:
      "Reduces noise and restores momentum. No config files, no CI setup. Connect a repo, push code, and issues appear automatically with severity, file, and patch.",
    Mock: HealthScoreMock,
    mockPath: "refract — health",
  },
];

const FeaturesTabs = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <SectionBand id="features" className="!pt-12">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab, i) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => setActive(i)}
            className={`features-tab ${i === active ? "features-tab--active" : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <p className="text-mono-label mt-4">{current.label}</p>
      <p className="text-body-sm mt-2 max-w-[560px] text-ld-tertiary">{current.description}</p>

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
  );
};

export default FeaturesTabs;
