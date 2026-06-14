import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section id="faq" className="section" style={{ borderTop: "1px solid var(--color-theme-border)" }}>
      <div className="mx-auto max-w-[720px] px-6">
        <div className="mb-14">
          <p className="mb-2 font-serif italic" style={{ fontSize: 15, color: "var(--color-theme-text-sec)" }}>
            FAQ
          </p>
          <h2 className="text-balance" style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
            Questions, answered.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              style={{
                borderBottom: "1px solid var(--color-theme-border)",
              }}
            >
              <AccordionTrigger
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--color-theme-text)",
                  textAlign: "left",
                  padding: "18px 0",
                  textDecoration: "none",
                  lineHeight: 1.4,
                  transition: "color 0.15s ease",
                }}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent
                style={{
                  fontSize: 15,
                  color: "var(--color-theme-text-sec)",
                  lineHeight: 1.7,
                  paddingBottom: 18,
                }}
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
