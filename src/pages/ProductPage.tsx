import ProductSections from "@/components/site/ProductSections";
import MCPSection from "@/components/site/MCPSection";
import CTA from "@/components/site/CTA";
import SectionBand from "@/components/site/SectionBand";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <>
      <SectionBand className="!border-t-0 pt-32">
        <div className="max-w-[640px]">
          <p className="section-label">Product</p>
          <h1 className="text-section-title text-balance">
            Code health infrastructure for teams and agents.
          </h1>
          <p className="text-body mt-4">
            From connecting your repo to monitoring drift — every push analyzed, every fix reviewable, every agent in sync.
          </p>
          <Link
            to="/#connect"
            className="mt-6 inline-block text-label-sm text-ld-muted transition-colors hover:text-ld-on-surface"
          >
            View full tour on homepage →
          </Link>
        </div>
      </SectionBand>
      <MCPSection />
      <CTA />
    </>
  );
};

export default ProductPage;
