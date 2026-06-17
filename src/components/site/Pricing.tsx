import React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles } from 'lucide-react';

type PricingCardProps = {
  titleBadge: string;
  priceLabel: string;
  priceSuffix?: string;
  features: string[];
  cta?: string;
  className?: string;
};

function FilledCheck() {
  return (
    <div className="bg-primary text-primary-foreground rounded-full p-0.5">
      <Check className="size-3" strokeWidth={3} />
    </div>
  );
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = '/month',
  features,
  cta = 'Subscribe',
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'bg-background border-foreground/10 relative overflow-hidden rounded-md border',
        'supports-[backdrop-filter]:bg-background/10 backdrop-blur',
        className,
      )}
    >
      <div className="flex items-center gap-3 p-4">
        <Badge variant="secondary">{titleBadge}</Badge>
        <div className="ml-auto">
          <Button variant="outline">{cta}</Button>
        </div>
      </div>

      <div className="flex items-end gap-2 px-4 py-2">
        <span className="font-mono text-5xl font-semibold tracking-tight">
          {priceLabel}
        </span>
        {priceLabel.toLowerCase() !== 'free' && (
          <span className="text-muted-foreground text-sm">{priceSuffix}</span>
        )}
      </div>

      <ul className="text-muted-foreground grid gap-4 p-4 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <FilledCheck />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 max-w-[680px]">
          <p className="mb-2 font-serif italic" style={{ fontSize: 15, color: "var(--color-theme-text-sec)" }}>
            Pricing
          </p>
          <h2 className="text-balance" style={{ fontSize: "clamp(28px, 5vw, 38px)", fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.03em", color: "var(--color-theme-text)" }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: 15, color: "var(--color-theme-text-sec)", marginTop: 12 }}>
            Start for free, upgrade when you need more power.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8">
          <div
            className={cn(
              'bg-background border-foreground/10 relative w-full overflow-hidden rounded-md border',
              'supports-[backdrop-filter]:bg-background/10 backdrop-blur',
              'lg:col-span-5',
            )}
          >
            <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
              <div className="from-foreground/5 to-foreground/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                <div
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-0 size-full mix-blend-overlay',
                    'bg-[linear-gradient(to_right,--theme(--color-foreground/.1)_1px,transparent_1px)]',
                    'bg-[size:24px]',
                  )}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4">
              <Badge variant="secondary">PRO</Badge>
              <Badge variant="outline" className="hidden lg:flex">
                <Sparkles className="me-1 size-3" /> Most Popular
              </Badge>
              <div className="ml-auto">
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="flex flex-col p-4 lg:flex-row">
              <div className="pb-4 lg:w-[30%]">
                <span className="font-mono text-5xl font-semibold tracking-tight">
                  €20
                </span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <ul className="text-muted-foreground grid gap-4 text-sm lg:w-[70%]">
                {[
                  'Unlimited projects and files per analysis',
                  '16 detectors with blast radius calculation',
                  'Patch preview with before/after diffs',
                  'AI Briefing, Explain, and name suggestions',
                  'Full Markdown report with Mermaid graph',
                  'Drift monitoring with auto alerts',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FilledCheck />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <PricingCard
            titleBadge="FREE"
            priceLabel="Free"
            features={[
              'Up to 2 projects',
              'Up to 200 files per analysis',
              '10 basic detectors',
              'Health score (0–100)',
              'Summary by category',
            ]}
            cta="Get Started"
            className="lg:col-span-3"
          />

          <PricingCard
            titleBadge="TEAMS"
            priceLabel="€40"
            features={[
              'Everything in Pro',
              'Unlimited members with roles',
              'GitHub Action + status checks',
              'Webhooks and scheduled analysis',
              'SSO (SAML/OIDC) and audit log',
              'API access and data export',
            ]}
            className="lg:col-span-4"
          />

          <PricingCard
            titleBadge="ENTERPRISE"
            priceLabel="Custom"
            features={[
              'Everything in Teams',
              'Custom rules engine',
              'Dedicated support and SLA',
              'On-premise deployment option',
              'Custom contracting and invoicing',
            ]}
            cta="Contact Us"
            className="lg:col-span-4"
          />
        </div>
      </div>
    </section>
  );
}
