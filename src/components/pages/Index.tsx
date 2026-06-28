import { useEffect, useRef } from "react";
import Hero from "@/components/site/Hero";
import ManifestoSection from "@/components/site/ManifestoSection";
import ReliefSection from "@/components/site/ReliefSection";
import ProofSection from "@/components/site/ProofSection";
import TrustSection from "@/components/site/TrustSection";
import ProductSections from "@/components/site/ProductSections";
import LogicFeatures from "@/components/site/LogicFeatures";
import CTA from "@/components/site/CTA";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("tp-reveal--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Section({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="tp-reveal">
      {children}
    </div>
  );
}

const Index = () => {
  return (
    <>
      <Hero />
      <Section><ManifestoSection /></Section>
      <Section><ReliefSection /></Section>
      <Section><ProofSection /></Section>
      <Section><TrustSection /></Section>
      <Section><ProductSections /></Section>
      <Section><LogicFeatures /></Section>
      <Section><CTA /></Section>
    </>
  );
};

export default Index;