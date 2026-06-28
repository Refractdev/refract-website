import SectionBand from "./SectionBand";

const ReliefSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[900px]">
        <p className="tp-section-label">Solution</p>
        <h2 className="text-tp-heading text-balance max-w-[680px] mt-1">
          The layer the AI doesn't have.
        </h2>

        <p className="text-tp-desc mt-4 max-w-[640px]">
          Cursor writes the code. Refract makes sure it's safe to ship. Every push. Every file. Every time. Nothing merges without passing the gate.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
          {["Push", "Detect", "Propose", "Approve", "Execute", "Test", "Document", "PR"].map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="rounded-md border border-[#1a1a1a] bg-[#121212] px-3 py-1.5 text-[13px] text-white font-medium">
                {step}
              </span>
              {i < 7 && <span className="text-[#555555]">→</span>}
            </span>
          ))}
        </div>

        <p className="text-body-sm mt-8 text-center text-[#777777]">
          You approve. Refract executes.
        </p>
      </div>
    </SectionBand>
  );
};

export default ReliefSection;