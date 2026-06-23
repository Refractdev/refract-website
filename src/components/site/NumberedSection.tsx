import { ComponentType, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { tabContentTransition } from "@/lib/motion";
import MockChrome from "./MockChrome";
import LazyMock from "./LazyMock";

interface SubFeature {
  number: string;
  label: string;
}

interface NumberedSectionProps {
  number: string;
  label: string;
  sectionTitle: string;
  description: string;
  subFeatures?: SubFeature[];
  Mock: ComponentType<{ activePanel?: number }>;
  mockPath?: string;
  linkHref?: string;
  lazy?: boolean;
}

const NumberedSection = ({
  number,
  label,
  sectionTitle,
  description,
  subFeatures = [],
  Mock,
  mockPath,
  linkHref,
  lazy = true,
}: NumberedSectionProps) => {
  const [activePanel, setActivePanel] = useState(0);
  const sectionLink = linkHref ?? `/product#${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
        <h2 className="text-headline-lg text-balance">{sectionTitle}</h2>
        <div>
          <p className="text-body text-ld-tertiary">{description}</p>
          <Link
            to={sectionLink}
            className="mt-5 inline-block text-label-sm text-ld-muted transition-colors hover:text-ld-on-surface"
          >
            {number} {label} →
          </Link>
        </div>
      </div>

      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={tabContentTransition}
          >
            <MockChrome path={mockPath} className="rounded-lg">
              {lazy ? (
                <LazyMock Mock={Mock} activePanel={activePanel} />
              ) : (
                <Mock activePanel={activePanel} />
              )}
            </MockChrome>
          </motion.div>
        </AnimatePresence>
      </div>

      {subFeatures.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {subFeatures.map((feat, i) => {
            const isActive = i === activePanel;
            return (
              <button
                key={feat.number}
                type="button"
                onClick={() => setActivePanel(i)}
                className={`sub-feature-pill ${isActive ? "sub-feature-pill--active" : ""}`}
              >
                {feat.number} {feat.label}
                {!isActive ? " +" : ""}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NumberedSection;
