import { useState } from "react";

const APP_URL = "https://refract-dev.vercel.app";

const plans = [
  {
    name: "Free",
    monthlyPrice: "€0",
    yearlyPrice: "€0",
    period: "/mo",
    sub: "free forever",
    yearlySub: "free forever",
    description: "See what AI left behind. One repo, manual scan, view issues.",
    features: [
      { label: "Connected repositories", included: "1" },
      { label: "Auto-scan on push", included: false },
      { label: "Automatic issue detection", included: true },
      { label: "Guideline sets", included: "1" },
      { label: "Automatic Analytics", included: true },
      { label: "MCP cloud scan", included: "3/day" },
      { label: "CLI: local refract check", included: true },
      { label: "Security scanning", included: true },
      { label: "API keys", included: true },
    ],
    cta: "Get Free",
    href: APP_URL,
    badge: null,
  },
  {
    name: "Early access",
    monthlyPrice: "€29",
    yearlyPrice: "€20",
    period: "/mo",
    sub: "billed monthly",
    yearlySub: "billed yearly (10% off)",
    description: "The full pipeline. Every push scanned. Unlimited everything.",
    features: [
      { label: "Repositories", included: "Unlimited" },
      { label: "Scan on every push", included: true },
      { label: "Full pipeline: propose, approve, execute, test, document, PR", included: true },
      { label: "Unlimited security scans", included: true },
      { label: "Unlimited MCP cloud scans", included: true },
      { label: "Unlimited guidelines & policies", included: true },
      { label: "Drift detection & alerts", included: true },
      { label: "GitHub Action (CI gate)", included: true },
      { label: "Early access price locked forever", included: true },
    ],
    cta: "Get started",
    href: APP_URL,
    badge: "EARLY ACCESS OFFER",
  },
  {
    name: "Enterprise",
    monthlyPrice: "",
    yearlyPrice: "",
    period: "",
    sub: "",
    yearlySub: "tailored to your team",
    description: "Org-wide deployment, SSO, dedicated support, custom policies.",
    features: [
      { label: "Everything in Early access", included: true },
      { label: "Unlimited workspaces", included: true },
      { label: "SSO / SAML", included: true },
      { label: "Dedicated support", included: true },
      { label: "Custom policy engine", included: true },
      { label: "On-premise option", included: true },
      { label: "SLA guarantee", included: true },
      { label: "Team onboarding & training", included: true },
    ],
    cta: "Contact sales",
    href: "/contact",
    badge: null,
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

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

        {/* Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          <span className={yearly ? "text-[#555555]" : "text-white"}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors ${
              yearly ? "bg-white" : "bg-[#2a2a2a]"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-black transition-transform ${
                yearly ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={yearly ? "text-white" : "text-[#555555]"}>
            Yearly <span className="text-[11px] text-[#888888]">(save 10%)</span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
            const sub = yearly ? plan.yearlySub : plan.sub;
            const hasStrikethrough = yearly && plan.monthlyPrice !== plan.yearlyPrice;

            return (
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
                <div className="mt-3 flex items-baseline gap-2">
                  {hasStrikethrough && (
                    <span className="text-lg text-[#555555] line-through">
                      {plan.monthlyPrice}
                    </span>
                  )}
                  <span className="text-3xl font-medium text-white">{price}</span>
                  {plan.period && (
                    <span className="text-sm text-[#888888]">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-[#888888] mt-1">{sub}</p>
                <p className="text-sm text-[#999999] mt-4 leading-relaxed">{plan.description}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat.label} className="text-sm flex items-start gap-2">
                      {typeof feat.included === "boolean" ? (
                        feat.included ? (
                          <span className="text-white mt-0.5 shrink-0">✓</span>
                        ) : (
                          <span className="text-[#555555] mt-0.5 shrink-0">—</span>
                        )
                      ) : (
                        <span className="text-[#555555] mt-0.5 shrink-0 text-xs">{feat.included}</span>
                      )}
                      <span className={typeof feat.included === "boolean" && !feat.included ? "text-[#555555]" : "text-[#d2d2d2]"}>
                        {feat.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    plan.badge
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Pricing;
