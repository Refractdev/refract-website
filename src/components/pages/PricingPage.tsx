import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";

const PricingPage = () => {
  return (
    <>
      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-[1300px] px-5 md:px-6">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="tp-section-label">Pricing</p>
            <h1 className="text-tp-heading text-balance mt-1">
              Simple and fair pricing for every need
            </h1>
            <p className="text-tp-desc mt-4 max-w-[560px] mx-auto">
              Cheapest prices in the space
            </p>
          </div>
        </div>
      </section>
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
};

export default PricingPage;
