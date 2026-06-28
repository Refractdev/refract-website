import SectionBand from "./SectionBand";

const steps = [
  {
    number: "1",
    label: "Detect",
    description:
      "AST scan on every push. God components, dead imports, exposed secrets, missing auth — all surfaced.",
  },
  {
    number: "2",
    label: "Propose",
    description:
      "Full diff preview, rationale, risk score. Nothing runs yet.",
  },
  {
    number: "3",
    label: "Approve",
    description:
      "You decide. One at a time, in bulk, or by rule. Partial diffs supported.",
  },
  {
    number: "4",
    label: "Execute",
    description:
      "Atomic. Idempotent. Reversible. Snapshot taken before. Typecheck runs after.",
  },
  {
    number: "5",
    label: "Test",
    description:
      "Unit, component, integration, contract. Sandboxed. Automated.",
  },
  {
    number: "6",
    label: "Document",
    description:
      "JSDoc, inline comments, CHANGELOG. Written for you.",
  },
  {
    number: "7",
    label: "Deliver",
    description:
      "Branch created. PR opened. Typecheck + tests + secrets scan must pass first.",
  },
];

const ProductSections = () => {
  return (
    <SectionBand id="pipeline" wide>
      <div className="mb-16 max-w-[640px]">
        <p className="tp-section-label">How it works</p>
        <h2 className="text-tp-heading text-balance mt-1">Seven steps. One safe PR.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="tp-card">
            <p className="tp-eyebrow">Step {step.number}</p>
            <h3 className="text-xl font-medium text-white mt-2">{step.label}</h3>
            <p className="text-body-sm mt-2 text-[#999999]">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionBand>
  );
};

export default ProductSections;