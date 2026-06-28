import SectionBand from "./SectionBand";

const ManifestoSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[720px]">
        <div className="space-y-8">
          <div className="border-t border-ld-border pt-6">
            <p className="text-body-lg text-ld-on-surface">
              You know this pattern.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              Month 1: Features ship in hours.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              Month 3: Every change breaks something.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              Month 6: The team is slower than before AI. Nobody knows why.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              This is the vibe coding hangover.
            </p>
          </div>
        </div>
      </div>
    </SectionBand>
  );
};

export default ManifestoSection;