import { LOGIN_PATH, SIGNUP_PATH } from "@/lib/constants";

export const marketingLinks = [
  { label: "Product", href: "/product" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
] as const;

export const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Product", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Getting started", href: "/docs/getting-started" },
      { label: "Approve", href: "/docs/approve" },
      { label: "FAQ", href: "/docs/faq" },
      { label: "All docs", href: "/docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const footerBrandLine = "Refract — the step after AI writes the code.";
export const footerFinePrint = "Built for React and TypeScript on GitHub.";
export const githubAppLink = {
  label: "Connect GitHub",
  href: "/docs/connect-github",
} as const;

export const chrome = {
  signIn: { label: "Sign in", href: LOGIN_PATH },
  getStarted: { label: "Get started", href: SIGNUP_PATH },
} as const;
