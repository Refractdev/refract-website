import Hero from "@/components/site/Hero";
import ManifestoSection from "@/components/site/ManifestoSection";
import FeaturesTabs from "@/components/site/FeaturesTabs";
import ProductSections from "@/components/site/ProductSections";
import HomeChangelog from "@/components/site/HomeChangelog";
import Testimonials from "@/components/site/Testimonials";
import CTA from "@/components/site/CTA";

const Index = () => {
  return (
    <>
      <Hero />
      <ManifestoSection />
      <FeaturesTabs />
      <ProductSections />
      <HomeChangelog />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Index;
