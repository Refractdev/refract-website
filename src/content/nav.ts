import { GITHUB_APP_URL, LOGIN_PATH, SIGNUP_PATH } from "@/lib/constants";

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
      { label: "Docs", href: "/docs" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const footerBrandLine = "Refract — the step after AI writes the code.";
export const footerFinePrint = "Built for React and TypeScript on GitHub.";
export const githubAppLink = {
  label: "Install on GitHub",
  href: GITHUB_APP_URL,
} as const;

export const chrome = {
  signIn: { label: "Sign in", href: LOGIN_PATH },
  getStarted: { label: "Get started", href: SIGNUP_PATH },
} as const;
