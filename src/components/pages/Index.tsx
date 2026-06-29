import Hero from "@/components/site/Hero";
import FeatureBlock from "@/components/site/FeatureBlock";
import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import PipelineCenterMock from "@/components/site/mocks/PipelineCenterMock";

const MockFrame = ({ label = "app screenshot" }: { label?: string }) => (
  <div className="tp-frame">
    <div className="tp-frame__bar">
      <div className="tp-frame__dots">
        <span className="tp-frame__dot" />
        <span className="tp-frame__dot" />
        <span className="tp-frame__dot" />
      </div>
    </div>
    <div className="flex aspect-video items-center justify-center bg-[#0d0d0d] text-sm text-[#555555]">
      {label}
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <Hero />

      <FeatureBlock
        label="PIPELINE CENTER"
        title="All your repositories, organised in a single place"
        description="You can connect your repositories, import your code via GitHub, or create projects manually."
        image={
          <div className="tp-frame">
            <div className="tp-frame__bar">
              <div className="tp-frame__dots">
                <span className="tp-frame__dot" />
                <span className="tp-frame__dot" />
                <span className="tp-frame__dot" />
              </div>
            </div>
            <PipelineCenterMock />
          </div>
        }
      />

      <FeatureBlock
        label="DASHBOARD"
        title="Seamless dashboard to check your results"
        description="With Refract dashboard you can check your code quality and recent activity for the month."
        imagePosition="left"
        image={
          <div className="tp-frame">
            <div className="tp-frame__bar">
              <div className="tp-frame__dots">
                <span className="tp-frame__dot" />
                <span className="tp-frame__dot" />
                <span className="tp-frame__dot" />
              </div>
            </div>
            <img
              src="/dashboard-screenshot.png"
              alt="Refract dashboard — code quality and activity"
              style={{ display: "block", width: "100%", borderRadius: "0 0 8px 8px" }}
            />
          </div>
        }
      />


      <FeatureBlock
        label="ANALYTICS"
        title="Analytics to understand the data behind your code"
        description="Automatically generated analytics, filtered by category, to surface the data you need to improve your code quality."
        image={
          <div className="tp-frame">
            <div className="tp-frame__bar">
              <div className="tp-frame__dots">
                <span className="tp-frame__dot" />
                <span className="tp-frame__dot" />
                <span className="tp-frame__dot" />
              </div>
            </div>
            <img
              src="/health.png"
              alt="Refract analytics — health score overview"
              style={{ display: "block", width: "100%", borderRadius: "0 0 8px 8px" }}
            />
          </div>
        }
      />


      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
};

export default Index;
