import { Card } from "@/components/ui/card";
import PageShell from "@/components/site/PageShell";

const faqs = [
  {
    q: "What is Refract?",
    a: "Refract is an AST-powered code analysis tool that finds structural issues in AI-generated code and generates clean, documented pull requests.",
  },
  {
    q: "How does the analysis work?",
    a: "Refract clones or fetches your repository, parses every file into an AST, runs 15+ detectors, and surfaces prioritized issues with before/after diffs.",
  },
  {
    q: "Is my code safe?",
    a: "Yes. Analysis is read-only and runs client-side. We never modify your repository without explicit action, and all parsing happens locally.",
  },
  {
    q: "What languages are supported?",
    a: "Refract supports TypeScript and JavaScript (.ts, .tsx, .js, .jsx) via Babel's TypeScript plugin.",
  },
  {
    q: "How do I apply changes?",
    a: "Free users can copy patches manually. Pro and Team users can generate a pull request with all accepted changes applied.",
  },
  {
    q: "Can I use Refract with monorepos?",
    a: "Yes. Refract treats the repository as a flat file system for import resolution.",
  },
  {
    q: "How long does analysis take?",
    a: "Typical repositories (under 10,000 files) complete in under 5 minutes. Incremental analysis takes under 30 seconds.",
  },
];

const HelpCenter = () => {
  return (
    <PageShell
      label="Help Center"
      title="How can we help?"
      description="Find answers to common questions about Refract."
    >
      <div className="flex flex-col gap-3">
        {faqs.map((f) => (
          <Card key={f.q} className="p-5">
            <h3 className="text-headline-sm mb-1.5">{f.q}</h3>
            <p className="text-body-sm">{f.a}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
};

export default HelpCenter;
