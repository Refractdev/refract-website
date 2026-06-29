import Hero from "@/components/site/Hero";
import FeatureBlock from "@/components/site/FeatureBlock";
import Pricing from "@/components/site/Pricing";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";

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
        image={<MockFrame label="repo overview" />}
      />

      <FeatureBlock
        label="DASHBOARD"
        title="Seamless dashboard to check your results"
        description="With Refract dashboard you can check your code quality and recent activity for the month."
        imagePosition="left"
        image={<MockFrame label="P&L-style activity chart" />}
      />

      <FeatureBlock
        label="CODE SCANNER"
        title="A new way to scan your code, simple and clean"
        description="Press any issue to inspect it, with diffs, notes, AST entry points, structural analysis, and more."
        image={<MockFrame label="code scan detail view" />}
      />

      <FeatureBlock
        label="ANALYTICS"
        title="Analytics to understand the data behind your code"
        description="Automatically generated analytics, filtered by category, to surface the data you need to improve your code quality."
        imagePosition="left"
        image={<MockFrame label="analytics dashboard" />}
      />

      <FeatureBlock
        label="MCP INTEGRATION"
        title="Use Refract from your favourite editor"
        description="Native MCP support for Cursor, Windsurf, Claude Desktop, Cline, and any MCP-compatible agent."
        soon
        image={<MockFrame label="MCP agent in action" />}
      />

      <FeatureBlock
        label="GOVERN"
        title="Set team rules. Enforce them automatically."
        description="Create guidelines and policies as code, stored in .refract/guidelines.json, versioned in Git. Enforced on every scan."
        soon
        imagePosition="left"
        image={<MockFrame label="policies configuration" />}
      />

      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
};

export default Index;
