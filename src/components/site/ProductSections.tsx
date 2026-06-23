import IntakeMock from "./mocks/IntakeMock";
import HealthScoreMock from "./mocks/HealthScoreMock";
import BuildMock from "./mocks/BuildMock";
import DiffMock from "./mocks/DiffMock";
import DriftMock from "./mocks/DriftMock";
import SectionBand from "./SectionBand";
import NumberedSection from "./NumberedSection";

const sections = [
  {
    id: "connect",
    number: "1.0",
    label: "Connect",
    sectionTitle: "Connect your repo. Every push triggers a scan.",
    description:
      "Connect a GitHub repo. Every push and PR is scanned automatically. Issues persist with severity, file, line, and patch. No manual rescanning needed.",
    Mock: IntakeMock,
    mockPath: "refract — intake",
    subFeatures: [
      { number: "1.1", label: "GitHub OAuth" },
      { number: "1.2", label: "Webhooks" },
      { number: "1.3", label: "Push triggers" },
      { number: "1.4", label: "Persistent state" },
    ],
  },
  {
    id: "triage",
    number: "2.0",
    label: "Triage",
    sectionTitle: "Inbox-style issue management. Accept, reject, or ignore.",
    description:
      "Linear-style issue inbox. Each issue shows severity, file, line, impact score, and a before/after patch preview. Triage fast, focus on what matters.",
    Mock: HealthScoreMock,
    mockPath: "refract — health",
    subFeatures: [
      { number: "2.1", label: "Issue inbox" },
      { number: "2.2", label: "Patch preview" },
      { number: "2.3", label: "Priority scoring" },
      { number: "2.4", label: "Commit attribution" },
    ],
  },
  {
    id: "transform",
    number: "3.0",
    label: "Transform",
    sectionTitle: "Accepted fixes ship as pull requests.",
    description:
      "Accept fixes and Refract creates a branch refract/... with safety-validated patches. Open a PR directly on GitHub with checks. Merge when ready.",
    Mock: BuildMock,
    mockPath: "Refract Agent",
    subFeatures: [
      { number: "3.1", label: "Safe transforms" },
      { number: "3.2", label: "Auto PR" },
      { number: "3.3", label: "Safety checks" },
      { number: "3.4", label: "Batch accept" },
    ],
  },
  {
    id: "review",
    number: "4.0",
    label: "Review",
    sectionTitle: "Understand every change before it merges.",
    description:
      "Side-by-side structural diffs for every fix. See exactly what changed, line by line, before merging. Review, discuss, and approve — all within the diff.",
    Mock: DiffMock,
    mockPath: "src/components/UserProfile.tsx",
    subFeatures: [
      { number: "4.1", label: "Side-by-side diff" },
      { number: "4.2", label: "Impact scoring" },
      { number: "4.3", label: "Review" },
      { number: "4.4", label: "Merge checks" },
    ],
  },
  {
    id: "monitor",
    number: "5.0",
    label: "Monitor",
    sectionTitle: "Track code health over time.",
    description:
      "Take the guesswork out of code quality with health trends, push deltas, and dashboards that surface what needs your attention.",
    Mock: DriftMock,
    mockPath: "refract — monitor",
    subFeatures: [
      { number: "5.1", label: "Push delta" },
      { number: "5.2", label: "Health trends" },
      { number: "5.3", label: "Quality gate" },
      { number: "5.4", label: "Team dashboard" },
    ],
  },
];

const ProductSections = () => {
  return (
    <>
      {sections.map((section, i) => (
        <SectionBand
          key={section.number}
          id={section.id}
          elevated={i % 2 === 1}
          wide
        >
          <NumberedSection {...section} linkHref={`/#${section.id}`} />
        </SectionBand>
      ))}
    </>
  );
};

export default ProductSections;
