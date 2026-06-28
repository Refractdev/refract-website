import SectionBand from "./SectionBand";

const ReliefSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[900px]">
        <p className="tp-section-label">Solution</p>
        <h2 className="text-section-title text-balance max-w-[680px]">
          The layer the AI doesn't have.
        </h2>

        <p className="text-body mt-4 max-w-[640px] text-ld-tertiary">
          Cursor writes the code. Refract makes sure it's safe to ship. Every push. Every file. Every time. Nothing merges without passing the gate.
        </p>

        {/* Pipeline visual */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-label-sm text-ld-muted">
          {["Push", "Detect", "Propose", "Approve", "Execute", "Test", "Document", "PR"].map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="rounded-md border border-ld-border bg-ld-surface px-3 py-1.5 text-ld-on-surface">
                {step}
              </span>
              {i < 7 && <span className="text-ld-muted">→</span>}
            </span>
          ))}
        </div>

        <p className="text-body-sm mt-8 text-center text-ld-tertiary">
          You approve. Refract executes.
        </p>
      </div>
    </SectionBand>
  );
};

export default ReliefSection;