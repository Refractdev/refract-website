import { Link } from "react-router-dom";
import SectionBand from "@/components/site/SectionBand";
import ProductSections from "@/components/site/ProductSections";
import MCPSection from "@/components/site/MCPSection";
import CTA from "@/components/site/CTA";

const ProductPage = () => {
  return (
    <>
      <SectionBand className="!border-t-0 pt-32">
        <div className="max-w-[640px]">
          <p className="section-label">Product</p>
          <h1 className="text-section-title text-balance">
            From messy to mergeable.
          </h1>
          <p className="text-body mt-4 text-ld-tertiary">
            Refract connects to your repo. Every push triggers a scan. Every fix is reviewable. Every approved proposal becomes a PR.
          </p>
          <Link
            to="/#features"
            className="mt-6 inline-block text-label-sm text-ld-muted transition-colors hover:text-ld-on-surface"
          >
            View features →
          </Link>
        </div>
      </SectionBand>

      <section className="border-t border-ld-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="space-y-16">
            <div>
              <h2 className="text-headline-lg">Transforms</h2>
              <div className="mt-6 max-w-[640px] space-y-4 text-body text-ld-tertiary">
                <p>Refract parses the AST — it doesn't lint, it doesn't guess. It walks the syntax tree and finds structural problems by file, line, and category.</p>
              </div>

              <h3 className="text-headline-md mt-10 mb-4">Categories detected</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Structure", "Oversized components, functions, and files; deep JSX nesting; business logic in UI components; layer violations"],
                  ["State", "Prop drilling; state explosion; dead state; incorrect effect dependencies; direct state mutation"],
                  ["Dead code", "Unused imports, variables, functions, types; commented-out code"],
                  ["Duplication", "Duplicate logic blocks; similar logic across modules"],
                  ["Types", "Explicit and implicit any; missing return types; untyped React props; inconsistent interfaces"],
                  ["API & data", "Fetch calls inside UI components; inline error handling; scattered retry logic; hardcoded URLs; missing request timeouts"],
                  ["Security (in-transform)", "Hardcoded secrets in source"],
                  ["Quality signals", "Console logs in production paths; missing documentation; generic naming; missing error boundaries; memory leak patterns"],
                ].map(([cat, desc]) => (
                  <div key={cat} className="border-t border-ld-border pt-3">
                    <p className="text-label-md">{cat}</p>
                    <p className="text-body-sm text-ld-tertiary mt-1">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-headline-md mt-10 mb-4">Proposal types</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Decompose", "Split large components; extract hooks; separate UI from business logic"],
                  ["Consolidate state", "Fix prop drilling; remove duplicate state"],
                  ["Clean imports", "Remove unused imports; resolve circular imports"],
                  ["Centralize API", "Move fetch to service layer; unify error handling"],
                  ["Modularize", "Split large files; clean export structure"],
                  ["Eliminate duplication", "Extract shared utilities"],
                  ["Type strengthen", "Replace any; add interfaces and prop types"],
                ].map(([prop, desc]) => (
                  <div key={prop} className="border-t border-ld-border pt-3">
                    <p className="text-label-md">{prop}</p>
                    <p className="text-body-sm text-ld-tertiary mt-1">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-headline-md mt-10 mb-4">Approval modes</h3>
              <ul className="list-disc pl-5 space-y-1 text-body text-ld-tertiary">
                <li>Manual approve / reject</li>
                <li>Bulk approve</li>
                <li>Hunk-level approval (accept part of a diff)</li>
                <li>Auto-approve rules (by refactor type and breaking risk)</li>
                <li>Snooze and ignore (per file/line)</li>
                <li>Modify diff before accepting</li>
              </ul>

              <h3 className="text-headline-md mt-10 mb-4">Execution & delivery</h3>
              <ul className="list-disc pl-5 space-y-1 text-body text-ld-tertiary">
                <li>Idempotent, atomic execution with pre-transform snapshot</li>
                <li>Typecheck validation after execute</li>
                <li>Safety gate before PR: typecheck, tests, secrets scan, lint errors, breaking change detection</li>
                <li>GitHub PR creation with structured commit message</li>
                <li>PR description auto-generated (what changed, why, test results)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-headline-lg">Security</h2>
              <p className="text-body mt-4 max-w-[640px] text-ld-tertiary">
                Not a replacement for Snyk or Dependabot. Those catch known CVEs in dependencies. Refract catches what AI introduced in your source.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  ["Secret scanning", "API keys, auth tokens, passwords, connection strings, private keys. Entropy-based detection. Scans all files including .env.example."],
                  ["Vulnerability detection", "Injection, broken auth, sensitive data exposure, insecure references, security misconfiguration, broken access control, cryptographic failures."],
                  ["AI-specific checks", "Missing Supabase RLS policies, missing auth on API routes, missing input validation, missing rate limiting, missing CSRF protection."],
                  ["Dependency audit", "CVE detection via OSV database, outdated packages, typosquatting detection, license checks, abandoned package detection."],
                ].map(([title, desc]) => (
                  <div key={title} className="border-t border-ld-border pt-3">
                    <p className="text-label-md">{title}</p>
                    <p className="text-body-sm text-ld-tertiary mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-headline-lg">Activity</h2>
              <p className="text-body mt-4 max-w-[640px] text-ld-tertiary">
                Activity is not a dashboard of vanity metrics. It's a per-commit record of what got better and what got worse.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  ["Commit quality tracking", "Per-commit analysis linked to SHA, author, message, timestamp. Delta: issues introduced / resolved."],
                  ["Push delta", "Immediate summary after each push: files changed, issues added, security findings, type coverage change."],
                  ["Drift detection", "Architectural, quality, security, and dependency drift tracked across dozens of commits — not just one."],
                  ["Alert system", "Critical (secret detected), High (multiple issues on push), Medium (drift growing). Channels: email, webhook, Slack."],
                ].map(([title, desc]) => (
                  <div key={title} className="border-t border-ld-border pt-3">
                    <p className="text-label-md">{title}</p>
                    <p className="text-body-sm text-ld-tertiary mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-headline-lg">Guidelines</h2>
              <p className="text-body mt-4 max-w-[640px] text-ld-tertiary">
                Guidelines are the rules your team agreed on — max component size, strict TypeScript, auth required on all routes — stored in <code>.refract/guidelines.json</code> and versioned in Git. Refract enforces them on every scan.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  ["Guidelines as code", "Stored in .refract/guidelines.json, versioned in Git. Configurable per path. Org-level and repo-level editing."],
                  ["Policies (Pro)", "Trigger on push, PR, scan, or all. Actions: block, warn, notify, auto-fix. Scope by path, author, or agent. Exception workflow with expiry."],
                ].map(([title, desc]) => (
                  <div key={title} className="border-t border-ld-border pt-3">
                    <p className="text-label-md">{title}</p>
                    <p className="text-body-sm text-ld-tertiary mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSections />
      <MCPSection />
      <CTA />
    </>
  );
};

export default ProductPage;