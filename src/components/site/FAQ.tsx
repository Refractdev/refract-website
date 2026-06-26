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
    q: "What is Refract?",
    a: "Refract scans your repo after every push. It finds structural debt, security gaps, and quality issues that AI coding tools leave behind. It proposes fixes as diffs. You approve. Refract opens the PR.",
  },
  {
    q: "How is Refract different from a linter?",
    a: "Linters enforce style and catch basic errors. Refract finds structural problems — oversized components, prop drilling, fetch calls in UI, missing error boundaries, hardcoded secrets. ESLint flags a missing semicolon. Refract finds the 800-line component that should be five.",
  },
  {
    q: "How is Refract different from Snyk or Dependabot?",
    a: "Snyk and Dependabot scan your dependencies for known CVEs. Refract scans your source code for what AI introduced — hardcoded API keys, missing authentication, no rate limiting, secrets in strings. Different targets. Different tools.",
  },
  {
    q: "Do I need to leave my IDE?",
    a: "No. Connect your repo, push code, and results appear in the Refract app. If you use Cursor, Windsurf, or Claude, Refract works through MCP — your agent can scan and propose without leaving the editor.",
  },
  {
    q: "What AI tools does Refract work with?",
    a: "All of them. Cursor, Windsurf, Lovable, Claude, Cline, Continue — any AI coding tool. Refract scans what they produce. It also works alongside any MCP-compatible agent.",
  },
  {
    q: "What languages and frameworks are supported?",
    a: "TypeScript and JavaScript are primary. React and Node.js as frameworks. JSX, TSX, ESM, CJS. Broader language support is on the roadmap.",
  },
  {
    q: "What is the safety gate?",
    a: "A set of checks that run before Refract opens a PR: typecheck, test suite, secrets scan, lint errors, and breaking change detection. If any check fails, the PR is not created and you see the failure.",
  },
  {
    q: "What are Guidelines?",
    a: "Rules your team agrees on — max component size, strict TypeScript, auth required on all routes. Stored in .refract/guidelines.json, versioned in Git. Refract enforces them on every scan. Suggested guidelines can be inferred from your existing repo conventions.",
  },
  {
    q: "What is drift detection?",
    a: "Drift is when the codebase gradually moves away from the patterns you agreed on. Not in one commit, but across dozens. Refract tracks architectural drift, quality drift, security drift, and dependency drift — and alerts you before it becomes a problem.",
  },
  {
    q: "Can agents merge code without my approval?",
    a: "No. Agents can scan and propose. Executing changes, opening PRs, and merging require human approval — unless you've configured auto-approve rules for specific refactor types below a risk threshold.",
  },
  {
    q: "What's included in Free vs Pro?",
    a: "Free: one repo, manual scan, view issues and diff previews, health score, local MCP scan (3/day). Pro (€20/mo): unlimited repos, scan on every push, full pipeline (execute, test, document, PR), security gate with block mode, drift detection, alerts, MCP cloud scan (unlimited), CLI PR delivery, GitHub Action.",
  },
  {
    q: "How does billing work?",
    a: "Pro is €20/month per workspace, billed monthly. No annual commitments. Upgrades take effect immediately. Downgrades take effect at the end of your billing period. Cancel anytime.",
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