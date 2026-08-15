import { SIGNUP_PATH } from "@/lib/constants";

export const pricingSeo = {
  title: "Pricing — Refract | Free, $12 Starter, $24 Pro",
  description:
    "Free $0. Starter $12. Pro $24/month. Ultimate $49. Team plans from $149. Start free — you won’t be charged at signup.",
  ogTitle: "Refract pricing — Free to Pro $24/month",
  ogDescription:
    "Free $0. Starter $12. Pro $24/month. Teams from $149. Checkout is coming; you won’t be charged at signup.",
};

export const pricingHero = {
  headline: "Pay for cleaner software — not for more noise.",
  subhead: "Start on a real repository. Upgrade when the project — or the team — needs more room.",
  priceLine: "Free $0. Starter $12. Pro $24/month. Ultimate $49. Teams from $149.",
  banner:
    "Start free today. Paid plans are listed so you know where this goes. Checkout is coming; you won’t be charged at signup.",
};

export type Plan = {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: string;
  yearlyPeriod: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  badge: string | null;
  bestFor: string;
  highlight?: boolean;
  custom?: boolean;
};

export const individualPlans: Plan[] = [
  {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    period: "",
    yearlyPeriod: "",
    description: "Try Refract on a real project.",
    features: [
      "2 repositories",
      "50 reviews / month",
      "5 cleanups you can approve / month",
      "Advisory results on GitHub",
    ],
    cta: "Get started",
    href: SIGNUP_PATH,
    badge: null,
    bestFor: "Seeing it on your own code",
  },
  {
    name: "Starter",
    monthlyPrice: "$12",
    yearlyPrice: "$120",
    period: "/ month",
    yearlyPeriod: "/ year",
    description: "For a solo developer using AI every day on a small set of projects.",
    features: [
      "5 repositories",
      "150 reviews / month",
      "Unlimited cleanups within that review limit",
      "Required check on up to 2 repositories",
    ],
    cta: "Get started",
    href: SIGNUP_PATH,
    badge: null,
    bestFor: "One person, a few active repos",
  },
  {
    name: "Pro",
    monthlyPrice: "$24",
    yearlyPrice: "$240",
    period: "/ month",
    yearlyPeriod: "/ year",
    description: "For people shipping a real product with AI.",
    features: [
      "15 repositories",
      "400 reviews / month",
      "Unlimited cleanups within that review limit",
      "Required check on every connected repository",
      "Full history of what got cleaner over time",
    ],
    cta: "Get started",
    href: SIGNUP_PATH,
    badge: "Most popular",
    bestFor: "The default plan",
    highlight: true,
  },
  {
    name: "Ultimate",
    monthlyPrice: "$49",
    yearlyPrice: "$490",
    period: "/ month",
    yearlyPeriod: "/ year",
    description: "For operators with many repos or client projects.",
    features: [
      "40 repositories",
      "1,000 reviews / month",
      "Unlimited cleanups within that review limit",
      "Priority review",
      "Full protection options",
    ],
    cta: "Get started",
    href: SIGNUP_PATH,
    badge: null,
    bestFor: "Many projects, one operator",
  },
];

export const teamPlans: Plan[] = [
  {
    name: "Team",
    monthlyPrice: "$149",
    yearlyPrice: "$1,490",
    period: "/ month",
    yearlyPeriod: "/ year",
    description: "A small company, one GitHub organization, AI in daily use.",
    features: [
      "10 people",
      "30 repositories",
      "1 GitHub organization",
      "1,000 reviews / month",
    ],
    cta: "Talk to us",
    href: "/contact",
    badge: null,
    bestFor: "A small company",
  },
  {
    name: "Business",
    monthlyPrice: "$399",
    yearlyPrice: "$3,990",
    period: "/ month",
    yearlyPeriod: "/ year",
    description: "More services, more volume, a real commercial relationship.",
    features: [
      "30 people",
      "100 repositories",
      "2 GitHub organizations",
      "4,000 reviews / month",
      "Priority review",
      "Onboarding call",
    ],
    cta: "Talk to us",
    href: "/contact",
    badge: null,
    bestFor: "More volume",
  },
  {
    name: "Scale",
    monthlyPrice: "$999",
    yearlyPrice: "$9,990",
    period: "/ month",
    yearlyPeriod: "/ year",
    description: "Multiple projects, high volume, a named person who knows your account.",
    features: [
      "75 people",
      "250 repositories",
      "5 GitHub organizations",
      "12,000 reviews / month",
    ],
    cta: "Talk to us",
    href: "/contact",
    badge: null,
    bestFor: "High volume",
  },
  {
    name: "Enterprise",
    monthlyPrice: "From $2,500",
    yearlyPrice: "From $2,500",
    period: "/ month",
    yearlyPeriod: "/ month",
    description: "When you need a contract, custom limits, or a security review.",
    features: [],
    cta: "Talk to us",
    href: "/contact",
    badge: null,
    bestFor: "Contract and custom limits",
    custom: true,
  },
];

export const pricingFootnote =
  "Annual is two months free. “Reviews” means each time new code on a pull request is analyzed. Unlimited cleanups still sit inside that monthly review limit.";

export const pricingValue = {
  headline: "You’re not paying for comments.",
  paragraphs: [
    "You’re paying for a project that stays maintainable while you keep generating.",
    "Free is how you feel a real cleanup on a real repository. Pro is how that becomes normal. Teams is how a group of people generating at once doesn’t turn the repo into twelve styles of first draft.",
    "We don’t charge you extra because a change was healthy. Silence is part of the product.",
  ],
};

export const pricingFaqs = [
  {
    q: "Can I pay today?",
    a: "Create an account and start. Card checkout is rolling out. You will not be surprised by a charge at signup.",
  },
  {
    q: "Is GitHub included?",
    a: "No. GitHub is separate. Refract is ours.",
  },
  {
    q: "What happens if I hit a limit?",
    a: "You’ll see a clear upgrade prompt. We don’t silently stop and pretend everything is fine.",
  },
  {
    q: "Do you charge per person on Pro?",
    a: "No. Individual plans are priced on repositories and monthly reviews, not on how many people typed.",
  },
  {
    q: "Can I use this on a company repo?",
    a: "Yes, if you can install GitHub Apps there. For shared billing and seats, use Team or talk to us.",
  },
  {
    q: "Is Accept / cleanup locked on Free?",
    a: "Free includes a small number of cleanups each month so you can feel the real product — not a demo that never changes code.",
  },
] as const;
