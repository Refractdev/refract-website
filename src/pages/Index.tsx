import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Features from "@/components/site/Features";
import HowItWorks from "@/components/site/HowItWorks";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="page-enter">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;