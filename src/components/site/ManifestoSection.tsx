import SectionBand from "./SectionBand";

const ManifestoSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[720px]">
        <div className="divide-y divide-[#1f1f1f]">
          <div className="py-6 first:pt-0">
            <p className="text-lg text-white">
              You know this pattern.
            </p>
          </div>

          <div className="py-6">
            <p className="text-tp-body-sm">
              Month 1: Features ship in hours.
            </p>
          </div>

          <div className="py-6">
            <p className="text-tp-body-sm">
              Month 3: Every change breaks something.
            </p>
          </div>

          <div className="py-6">
            <p className="text-tp-body-sm">
              Month 6: The team is slower than before AI. Nobody knows why.
            </p>
          </div>

          <div className="py-6">
            <p className="text-tp-body-sm text-white">
              This is the vibe coding hangover.
            </p>
          </div>
        </div>
      </div>
    </SectionBand>
  );
};

export default ManifestoSection;