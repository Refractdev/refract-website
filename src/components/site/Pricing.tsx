import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SectionBand from "./SectionBand";

const plans = [
  {
    name: "Free",
    price: "€0",
    description: "See what AI left behind.",
    badge: null,
    features: [
      "1 connected repository",
      "Scan & issue inbox",
      "Patch preview (view fix, no PR)",
      "Health score",
      "MCP refract_scan — 3 scans/day, local workspace",
    ],
    cta: "Get started",
    href: "https://refract-dev.vercel.app",
  },
  {
    name: "Pro",
    price: "€20",
    period: "/mo",
    description: "Your repo remembers every push.",
    badge: "Most popular",
    features: [
      "Unlimited repositories",
      "Continuous monitor on every push & PR",
      "Create PR — safe transform server-side",
      "Quality gate on pull requests (alert mode)",
      "Scan history & push delta",
    ],
    cta: "Upgrade to Pro",
    href: "https://refract-dev.vercel.app",
  },
  {
    name: "Max",
    price: "€40",
    period: "/mo",
    description: "Same memory, inside Cursor.",
    badge: null,
    features: [
      "Everything in Pro",
      "MCP: project issues in Cursor (cloud sync)",
      "MCP: apply patch inline",
      "MCP: open PR from Cursor",
      "CLI refract check",
      "Branch compare",
      "Extended history & export",
      "Priority scan queue",
    ],
    comingSoon: ["CLI refract check", "Branch compare", "Extended history & export", "Priority scan queue"],
    cta: "Upgrade to Max",
    href: "https://refract-dev.vercel.app",
  },
  {
    name: "Teams",
    price: "€120",
    period: "/mo",
    description: "Your whole team on one rail.",
    badge: "Coming soon",
    features: [
      "Everything in Max",
      "8 seats included (+€10/seat/month)",
      "Organization workspace",
      "Author per issue",
      "Team activity feed",
      "Shared guidelines across repos",
      "Merge policies",
      "Required quality gate (blocks merge)",
      "Roles: admin, member, viewer",
      "Per-developer dashboard",
      "Organization repositories",
    ],
    cta: "Join waitlist",
    href: "/contact",
    waitlist: true,
  },
];

const isComingSoon = (plan: (typeof plans)[0], feature: string) => {
  if (!("comingSoon" in plan)) return false;
  return (plan as { comingSoon?: string[] }).comingSoon?.includes(feature);
};

const Pricing = () => {
  return (
    <SectionBand id="pricing" wide>
      <div className="mb-16 max-w-[640px]">
        <p className="section-label">Pricing</p>
        <h2 className="text-section-title text-balance">Refract lives on your code.</h2>
        <p className="text-body mt-4">
          Continuous code health on GitHub. Issues from every push. Fixes ship as pull requests. Same memory in Cursor.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {plans.map((plan) => (
          <FadeIn key={plan.name}>
            <Card
              className={`flex flex-col overflow-hidden p-0 ${
                plan.badge === "Most popular" ? "border-ld-border-strong" : ""
              }`}
            >
              {plan.badge === "Coming soon" && (
                <div className="border-b border-ld-border px-4 py-2 text-center">
                  <span className="status-pill status-pill--neutral">{plan.badge}</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-headline-md mb-1">{plan.name}</h3>
                <p className="text-body-sm mb-5">{plan.description}</p>

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
                      className={`flex items-start gap-2 py-1 text-body-sm ${
                        isComingSoon(plan, text) ? "text-ld-muted" : "text-ld-tertiary"
                      }`}
                    >
                      <span className="shrink-0 text-caption text-ld-muted">
                        {isComingSoon(plan, text) ? "○" : "✓"}
                      </span>
                      <span>
                        {text}
                        {isComingSoon(plan, text) && (
                          <span className="ml-1.5 text-caption text-ld-muted">(Coming soon)</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={
                    plan.waitlist ? "outline" : plan.badge === "Most popular" ? "default" : "secondary"
                  }
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
