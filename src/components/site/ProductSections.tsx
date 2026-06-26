import IntakeMock from "./mocks/IntakeMock";
import BuildMock from "./mocks/BuildMock";
import HealthScoreMock from "./mocks/HealthScoreMock";
import SectionBand from "./SectionBand";

const steps = [
  {
    number: "1",
    label: "Detect",
    description:
      "Refract parses the AST. Finds the oversized component, the hardcoded Stripe key, the fetch call living inside the UI. File, line, category.",
    Mock: IntakeMock,
    mockPath: "refract — detect",
  },
  {
    number: "2",
    label: "Propose",
    description:
      "Generates a refactor. Shows a before/after diff, the rationale, the risk score, which files are affected. You read it. You decide.",
    Mock: BuildMock,
    mockPath: "refract — propose",
  },
  {
    number: "3",
    label: "Approve",
    description:
      "Manual. Bulk. Hunk-level. Auto-approve rules. You control what ships.",
    Mock: IntakeMock,
    mockPath: "refract — approve",
  },
  {
    number: "4",
    label: "Execute",
    description:
      "Refract applies the change. Atomic. Idempotent. A snapshot is taken before anything moves.",
    Mock: BuildMock,
    mockPath: "refract — execute",
  },
  {
    number: "5",
    label: "Test",
    description:
      "Generates unit, component, integration, contract, and security tests for the changed code.",
    Mock: IntakeMock,
    mockPath: "refract — test",
  },
  {
    number: "6",
    label: "Document",
    description:
      "Adds JSDoc, inline comments, changelog entries.",
    Mock: BuildMock,
    mockPath: "refract — document",
  },
  {
    number: "7",
    label: "Deliver",
    description:
      "Safety gate runs: typecheck, tests, secrets scan, lint, breaking change detection. If it passes, Refract opens the PR.",
    Mock: HealthScoreMock,
    mockPath: "refract — deliver",
  },
];

const ProductSections = () => {
  return (
    <SectionBand id="pipeline" wide>
      <div className="mb-12 max-w-[640px]">
        <h2 className="text-section-title text-balance">From messy to mergeable.</h2>
        <p className="text-body mt-4 text-ld-tertiary">
          Seven steps. One pipeline. The code changes and you stay in control.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border-t border-ld-border pt-5"
          >
            <p className="text-mono-label text-ld-muted">Step {step.number}</p>
            <h3 className="text-headline-md mt-2">{step.label}</h3>
            <p className="text-body-sm mt-2 text-ld-tertiary">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionBand>
  );
};

export default ProductSections;