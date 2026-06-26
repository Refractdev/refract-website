import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionBand from "./SectionBand";

const plans = [
  {
    name: "Free",
    price: "€0",
    headline: "See what AI left behind.",
    subheadline: "Connect one repo. Scan it. See every structural and security issue Cursor or Windsurf didn't fix.",
    features: [
      "1 connected repository",
      "Sample sandbox (doesn't count toward limit)",
      "Manual scan / rescan",
      "Transforms — Detect",
      "Transforms — Propose (diff preview)",
      "Transforms — Approve (manual)",
      "Transforms — Bulk approve (preview only)",
      "Security — Secret scanning",
      "Security — Vulnerability detection (view findings)",
      "Security — Dependency audit (view only)",
      "Security — Security gate on PRs (view status only)",
      "Activity — Health score",
      "Activity — Push delta (latest push only)",
      "Guidelines — View repo guidelines",
      "MCP — Local scan (refract_scan)",
      "MCP — Cloud project scan (3/day)",
      "CLI — Local refract check",
      "API keys",
      "Command palette & keyboard shortcuts",
    ],
    cta: "Start free",
    href: "https://refract-dev.vercel.app",
  },
  {
    name: "Pro",
    price: "€20",
    period: "/mo",
    headline: "Accepted fixes ship as PRs.",
    subheadline: "The full pipeline. Every push scanned. Every approved proposal becomes a PR.",
    badge: "Most popular",
    features: [
      "Unlimited repositories",
      "Sample sandbox",
      "Manual scan / rescan",
      "Scan on every push (GitHub webhook)",
      "Transforms — Detect",
      "Transforms — Propose (diff preview)",
      "Transforms — Approve (manual)",
      "Transforms — Bulk approve",
      "Transforms — Hunk-level approval",
      "Transforms — Auto-approve rules",
      "Transforms — Execute",
      "Transforms — Test generation",
      "Transforms — Document generation",
      "Transforms — Deliver (Create PR)",
      "Security — Secret scanning",
      "Security — Vulnerability detection",
      "Security — Dependency audit (with CVE detail)",
      "Security — Security gate on PRs",
      "Security — Gate modes (Alert / Block)",
      "Security — GitHub PR status check",
      "Activity — Health score",
      "Activity — Push delta (all pushes)",
      "Activity — Full commit history",
      "Activity — Drift detection",
      "Activity — Alerts (webhook / Slack)",
      "Guidelines — View repo guidelines",
      "Guidelines — Edit org guidelines",
      "MCP — Local scan (refract_scan)",
      "MCP — Cloud project scan (unlimited)",
      "MCP — refract_prepare_pr",
      "CLI — Local refract check",
      "CLI — Cloud PR delivery",
      "GitHub Action (CI gate)",
      "Export activity history (CSV/JSON)",
      "API keys",
      "Command palette & keyboard shortcuts",
    ],
    cta: "Upgrade to Pro",
    href: "https://refract-dev.vercel.app",
  },
];

const Pricing = () => {
  return (
    <SectionBand id="pricing" wide>
      <div className="mb-16 max-w-[640px]">
        <p className="section-label">Pricing</p>
        <h2 className="text-section-title text-balance">Two plans. One pipeline.</h2>
        <p className="text-body mt-4">
          Free: see every issue. Pro: fixes ship as PRs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <FadeIn key={plan.name}>
            <Card
              className={`flex flex-col overflow-hidden p-0 ${
                plan.badge === "Most popular" ? "border-ld-border-strong" : ""
              }`}
            >
              <div className="flex flex-1 flex-col p-8">
                {plan.badge && (
                  <div className="mb-4">
                    <span className="status-pill status-pill--neutral">{plan.badge}</span>
                  </div>
                )}

                <h3 className="text-headline-md mb-1">{plan.name}</h3>
                <p className="text-headline-sm text-ld-tertiary mb-1">{plan.headline}</p>
                <p className="text-body-sm text-ld-muted mb-5">{plan.subheadline}</p>

                <div className="mb-7">
                  <span className="text-headline-lg text-ld-on-surface">{plan.price}</span>
                  {plan.period && (
                    <span className="text-body-sm ml-1.5 text-ld-muted">{plan.period}</span>
                  )}
                </div>

                <ul className="m-0 flex-1 list-none p-0">
                  {plan.features.map((text) => (
                    <li
                      key={text}
                      className="flex items-start gap-2 py-1 text-body-sm text-ld-tertiary"
                    >
                      <span className="shrink-0 text-caption text-ld-muted">✓</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.badge === "Most popular" ? "default" : "secondary"}
                  className="mt-8 w-full"
                  asChild
                >
                  <a href={plan.href}>{plan.cta}</a>
                </Button>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </SectionBand>
  );
};

export default Pricing;