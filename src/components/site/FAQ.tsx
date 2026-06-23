import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/ui/fade-in";
import SectionBand from "./SectionBand";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "Is Refract a linter?",
    a: "No. Linters enforce rules. Refract is infrastructure: persistent issues per commit, patches, and PRs — built for patterns that accumulate when coding with AI.",
  },
  {
    q: "Do I need to open Refract for it to work?",
    a: "No (Pro+). Push triggers a scan. Open the app to triage and transform.",
  },
  {
    q: "Does Refract replace Cursor?",
    a: "No. Cursor generates. Refract monitors and transforms. Max adds MCP so your agent sees repo memory.",
  },
  {
    q: "What happens on Free?",
    a: "You see issues and patch previews. You don't get automatic PRs or continuous monitor on every push.",
  },
  {
    q: "Will the quality gate block my merge?",
    a: "Pro: alert only at launch — check visible, merge not blocked. Teams: admin can require block (coming soon).",
  },
  {
    q: "Is Teams available?",
    a: "On waitlist. Pricing shown; features marked Coming soon.",
  },
  {
    q: "Can I upgrade, downgrade, or switch billing later?",
    a: "Yes. Upgrades are prorated immediately, and downgrades take effect at the end of your current billing period.",
  },
];

const FAQ = () => {
  return (
    <SectionBand id="faq" elevated>
      <div className="mx-auto max-w-[720px]">
        <SectionHeader label="FAQ" title="Questions, answered." />

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-ld-border">
                <AccordionTrigger className="py-4 text-left text-headline-sm hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-body-sm pb-4 text-ld-tertiary">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </SectionBand>
  );
};

export default FAQ;
