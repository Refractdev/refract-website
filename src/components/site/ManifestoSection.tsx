import SectionBand from "./SectionBand";

const ManifestoSection = () => {
  return (
    <SectionBand>
      <div className="mx-auto max-w-[720px]">
        <h2 className="text-manifesto max-w-[900px] text-balance">
          You're shipping faster than ever.{" "}
          <span className="text-ld-tertiary">The codebase is getting harder to change.</span>
        </h2>

        <div className="mt-12 space-y-8">
          <div className="border-t border-ld-border pt-6">
            <p className="text-body-lg text-ld-on-surface">
              The features land. Sprint velocity looks great. But three months in, something shifts.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              Adding a button takes a day. The component that should handle it is 800 lines and nobody wants to touch it.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              The checkout flow works. It also has a hardcoded Stripe key, no error boundary, and a fetch call inside the render. It works until it doesn't.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              Every dev on the team uses AI differently. The codebase looks like it was written by ten people who never spoke to each other.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              The tests passed. Something broke in production. Nobody knows what.
            </p>
          </div>

          <div className="border-t border-ld-border pt-6">
            <p className="text-body text-ld-tertiary">
              The team is moving faster than ever. And slower than ever. At the same time.
            </p>
          </div>
        </div>

        <p className="text-body-lg mt-12 text-ld-on-surface">
          This is the part nobody talks about. AI ships the feature. Nobody refactors. And the cost compounds on every push.
        </p>
      </div>
    </SectionBand>
  );
};

export default ManifestoSection;