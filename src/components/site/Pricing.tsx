import { Button } from "@/components/ui/button";

const APP_URL = "https://refract-dev.vercel.app";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "/mo",
    sub: "free forever",
    description: "See what AI left behind. One repo, manual scan, view issues.",
    features: [
      "Up to 1 connected repository",
      "Manual scan / rescan",
      "Automatic issue detection",
      "Up to 1 guideline set",
      "Automatic Analytics",
      "Local MCP scan (3/day)",
      "CLI: local refract check",
      "API keys",
    ],
    cta: "Get Free",
    href: APP_URL,
    badge: null,
  },
  {
    name: "Early access",
    price: "€20",
    period: "/mo",
    sub: "10% off with yearly billing",
    description: "The full pipeline. Every push scanned. Unlimited everything.",
    features: [
      "Unlimited repositories",
      "Scan on every push",
      "Full pipeline: propose, approve, execute, test, document, PR",
      "Unlimited security scans",
      "Unlimited MCP cloud scans",
      "Unlimited guidelines & policies",
      "Drift detection & alerts",
      "GitHub Action (CI gate)",
      "Limited to early access spots, price locked forever",
    ],
    cta: "Join early access",
    href: APP_URL,
    badge: "EARLY ACCESS OFFER",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    sub: "tailored to your team",
    description: "Org-wide deployment, SSO, dedicated support, custom policies.",
    features: [
      "Everything in Early access",
      "Unlimited workspaces",
      "SSO / SAML",
      "Dedicated support",
      "Custom policy engine",
      "On-premise option",
      "SLA guarantee",
      "Team onboarding & training",
    ],
    cta: "Contact sales",
    href: "/contact",
    badge: null,
  },
];

const comparisonRows = [
  { feature: "Repositories", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Auto-scan on push", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Automatic Analytics", free: "Limited", pro: "✓", enterprise: "✓" },
  { feature: "Detect issues", free: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Propose fixes (diff)", free: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Approve & execute", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Test generation", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Auto PR delivery", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Secret scanning", free: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Vulnerability detection", free: "View only", pro: "✓", enterprise: "✓" },
  { feature: "Dependency audit", free: "View only", pro: "Full", enterprise: "Full" },
  { feature: "Security gate on PRs", free: "View status", pro: "Alert / Block", enterprise: "Full" },
  { feature: "MCP cloud scan", free: "3/day", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "CLI PR delivery", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Guidelines & policies", free: "1 set", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Drift detection", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Alerts (Slack/webhook)", free: "—", pro: "✓", enterprise: "✓" },
  { feature: "Team management", free: "—", pro: "—", enterprise: "✓" },
  { feature: "SSO / SAML", free: "—", pro: "—", enterprise: "✓" },
  { feature: "Dedicated support", free: "—", pro: "—", enterprise: "✓" },
];

const Pricing = () => {
  return (
    <section id="pricing" className="tp-feature-section">
      <div className="mx-auto max-w-[1300px] px-5 md:px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="tp-section-label">Pricing</p>
          <h2 className="text-tp-heading text-balance mt-1 max-w-[640px] mx-auto">
            Simple and fair pricing for every need
          </h2>
          <p className="text-tp-desc mt-4 max-w-[560px] mx-auto">
            Cheapest prices in the space
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl border ${
                plan.badge ? "border-[#2f2f2f]" : "border-[#1a1a1a]"
              } bg-[#0d0d0d] p-6`}
            >
              {plan.badge && (
                <div className="mb-3">
                  <span className="tp-badge tp-badge-soon">{plan.badge}</span>
                </div>
              )}
              <h3 className="text-lg font-medium text-white">{plan.name}</h3>
              <div className="mt-3">
                <span className="text-3xl font-medium text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-[#888888] ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-sm text-[#888888] mt-1">{plan.sub}</p>
              <p className="text-sm text-[#999999] mt-4 leading-relaxed">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="text-sm text-[#d2d2d2] flex items-start gap-2">
                    <span className="text-[#555555] mt-0.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.badge ? "default" : "secondary"}
                className="mt-8 w-full"
                asChild
              >
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#888888] mt-8 max-w-[640px] mx-auto">
          Unlock the full Refract experience with our Early access plan, access every advanced feature, and become an early Refract user at a discounted €20/mo price for life.{" "}
          <a href={APP_URL} className="text-white underline">See full comparison</a>
        </p>

        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#1f1f1f]">
                <th className="py-3 pr-6 text-[13px] font-medium text-[#888888]">Feature</th>
                <th className="py-3 px-4 text-[13px] font-medium text-white">Free</th>
                <th className="py-3 px-4 text-[13px] font-medium text-white">Early access</th>
                <th className="py-3 pl-4 text-[13px] font-medium text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-[#1f1f1f]/60">
                  <td className="py-3 pr-6 text-[14px] text-white">{row.feature}</td>
                  <td className="py-3 px-4 text-[14px] text-[#888888]">{row.free}</td>
                  <td className="py-3 px-4 text-[14px] text-[#d2d2d2]">{row.pro}</td>
                  <td className="py-3 pl-4 text-[14px] text-[#d2d2d2]">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
