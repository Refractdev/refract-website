import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I contact customer service if I have a question or issue?",
    a: "Reach us anytime from the in-app help menu or by email at refractcode@gmail.com. We typically reply within one business day.",
  },
  {
    q: "What if it doesn't meet my expectations?",
    a: "If Refract is not a fit, you can cancel your plan from your account settings. We also welcome feedback so we can improve.",
  },
  {
    q: "Can I safely use Refract with my production repositories?",
    a: "Refract is a code analysis tool. It scans your source code and never deploys to production without your explicit approval. Before connecting a sensitive repository, review what permissions you grant. All scans run in isolated sandboxes with no network access.",
  },
  {
    q: "What if my CI tool does not support Refract natively?",
    a: "You can use our CLI tool or GitHub Action. We are continuously improving integrations; contact support with your CI provider if something looks off.",
  },
  {
    q: "Is my code data safe? Can Refract see my secrets?",
    a: "Your code is encrypted in transit and at rest. Secret scanning runs locally by default — secrets are detected but never stored or transmitted. Cloud features use encrypted API connections with read-only access where applicable.",
  },
  {
    q: "How do I request a feature or integration?",
    a: "Use the feedback link in the app or email refractcode@gmail.com with your request. We prioritize based on demand.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-20">
      <div className="mx-auto max-w-[720px] px-5 md:px-6">
        <p className="tp-section-label text-center">FAQ</p>
        <h2 className="text-tp-heading text-balance mt-1 text-center max-w-[640px] mx-auto tracking-[-0.05em]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 divide-y divide-zinc-800/60 border-y border-zinc-800/60">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0">
                <AccordionTrigger className="py-4 text-left text-sm font-medium text-white hover:no-underline hover:text-white/80">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm pb-4 text-[#888888] leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
