import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedContainer } from "@/components/ui/animated-container";

const faqs = [
  {
    q: "Who is Refract for?",
    a: "Indie hackers using Lovable/Bolt to launch fast but want to scale later, mid-level devs auditing AI code before production, and teams dealing with accumulated legacy vibe coding.",
  },
  {
    q: "What problems does it actually fix?",
    a: "It fixes the classic vibe coding mess: components with 400+ lines, 'any' types everywhere, forgotten console.logs, useEffect loops without dependency arrays, unused states, bad variable names, circular dependencies, and zero documentation.",
  },
  {
    q: "How does the review process work?",
    a: "Refract presents issues one by one. For each, you get a side-by-side before/after view, an explanation of why it's a problem, AI-generated suggestions, the impact level, and the blast radius. You decide what to accept.",
  },
  {
    q: "How do I apply the changes?",
    a: "Once you accept the fixes, you can either export a changelog with all modifications or have Refract create a Pull Request directly on GitHub.",
  },
  {
    q: "Does Refract upload my code?",
    a: "No. Your code is primarily processed locally on your machine.",
  },
  {
    q: "How does annual billing work?",
    a: "Our annual plans offer a ~20% discount (Pro is $16/mo, Team is $39/mo) and are billed once per year.",
  },
  {
    q: "Can I upgrade, downgrade, or switch billing later?",
    a: "Yes. Upgrades are prorated immediately, and downgrades take effect at the end of your current billing period.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="w-full py-24 md:py-32"
      style={{
        borderTop: "1px solid #1a1b1c",
      }}
    >
      <AnimatedContainer className="mx-auto max-w-[720px] px-5 md:px-6">
        <div className="mb-16 text-center">
          <p
            style={{
              marginBottom: 12,
              fontSize: "clamp(13px, 2vw, 15px)",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "#9a9a9a",
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 7vw, 34px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.06em",
              color: "#fff",
            }}
          >
            Questions, answered.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <AccordionTrigger
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#fff",
                  textAlign: "left",
                  padding: "20px 0",
                  textDecoration: "none",
                  lineHeight: 1.4,
                  transition: "color 0.18s ease",
                }}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent
                style={{
                  fontSize: 15,
                  color: "#999",
                  lineHeight: 1.7,
                  paddingBottom: 20,
                }}
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedContainer>
    </section>
  );
};

export default FAQ;
