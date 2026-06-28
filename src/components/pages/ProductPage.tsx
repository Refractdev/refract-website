import FeatureBlock from "@/components/site/FeatureBlock";
import CTA from "@/components/site/CTA";

const ProductPage = () => {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1300px] px-5 md:px-6">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="tp-section-label">Product</p>
            <h1 className="text-tp-heading text-balance mt-1">
              From messy to mergeable
            </h1>
            <p className="text-tp-desc mt-4 max-w-[560px] mx-auto">
              Refract connects to your repo. Every push triggers a scan. Every fix is reviewable. Every approved proposal becomes a PR.
            </p>
            <a
              href="/#pricing"
              className="mt-6 inline-block text-sm font-medium text-[#888888] transition-colors hover:text-white"
            >
              View pricing →
            </a>
          </div>
        </div>
      </section>

      <FeatureBlock
        label="TRANSFORM"
        title="Detect debt. Ship the fix."
        description="Scans for 7 structural issue types and turns accepted proposals into PRs automatically."
      >
        <div className="tp-frame">
          <div className="tp-frame__bar">
            <div className="tp-frame__dots">
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
            </div>
          </div>
          <div className="flex aspect-video items-center justify-center bg-[#0d0d0d] text-sm text-[#555555]">
            transform pipeline screenshot
          </div>
        </div>
      </FeatureBlock>

      <FeatureBlock
        label="SECURITY"
        title="Nothing ships with a secret in it"
        description="Secret scanning, injection detection, dependency audits, and a configurable gate on every PR."
      >
        <div className="tp-frame">
          <div className="tp-frame__bar">
            <div className="tp-frame__dots">
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
            </div>
          </div>
          <div className="flex aspect-video items-center justify-center bg-[#0d0d0d] text-sm text-[#555555]">
            security scan screenshot
          </div>
        </div>
      </FeatureBlock>

      <FeatureBlock
        label="ANALYTICS"
        title="Know what every push costs you"
        description="A real-time feed of issues introduced, resolved, and trending — per repo, per author, per AI tool."
      >
        <div className="tp-frame">
          <div className="tp-frame__bar">
            <div className="tp-frame__dots">
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
            </div>
          </div>
          <div className="flex aspect-video items-center justify-center bg-[#0d0d0d] text-sm text-[#555555]">
            analytics dashboard screenshot
          </div>
        </div>
      </FeatureBlock>

      <FeatureBlock
        label="GUIDELINES"
        title="Set the rules. Enforce them automatically."
        description="Guidelines as code, org-wide policies, and team analytics for teams shipping AI at scale."
        soon
      >
        <div className="tp-frame">
          <div className="tp-frame__bar">
            <div className="tp-frame__dots">
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
              <span className="tp-frame__dot" />
            </div>
          </div>
          <div className="flex aspect-video items-center justify-center bg-[#0d0d0d] text-sm text-[#555555]">
            guidelines configuration screenshot
          </div>
        </div>
      </FeatureBlock>

      <CTA />
    </>
  );
};

export default ProductPage;
