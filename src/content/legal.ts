import { CONTACT_EMAIL } from "@/lib/constants";
import { operatorSentence } from "@/content/brand";

export const security = {
  title: "Security — Refract",
  description:
    "How Refract accesses GitHub, what it reads on a pull request, and what it will never do without your approval.",
  headline: "Your code. Your approval. Nothing silent.",
  paragraphs: [
    "You sign in to Refract with email and password.",
    "GitHub access is only the App you install, on the repositories you allow.",
    "We read pull requests to review them. We post one result. We apply a cleanup only after you approve.",
    "We do not merge for you.",
    "We do not sign you in with GitHub just to open the website.",
    "We do not sell your repository as a product.",
    "We do not pretend a review succeeded when it failed.",
    "If we see credentials in a pull request, we tell you. Rotate anything that was exposed.",
    "You can uninstall the GitHub App and narrow which repositories we see.",
  ],
  operator: operatorSentence,
  reportLabel: "Report a problem",
  reportHtml: `Use <a href="/contact">Contact</a> and choose Security. We treat that as priority.`,
};

export const contact = {
  title: "Contact — Refract",
  description: "Questions about Refract, early teams, billing, or something that broke on a pull request.",
  headline: "Contact",
  intro: "Questions about Refract, early teams, billing, or something that broke on a pull request.",
  fields: {
    name: "Name",
    email: "Email",
    topic: "Topic",
    message: "Message",
    link: "Repository or pull request link (optional)",
  },
  topics: ["Product", "Billing", "Security", "Other"] as const,
  submit: "Send message",
  success: "Thanks — we’ll reply to that email.",
  error: "Something went wrong. Try again.",
  bugs: "For bugs, include what you expected, what happened, the pull request link, and the time.",
  mailto: CONTACT_EMAIL,
};

export const privacy = {
  title: "Privacy — Refract",
  description:
    "What Refract collects, how it handles repository access through the GitHub App, and how to reach us with privacy questions.",
  headline: "Privacy",
  status:
    "This is a working description of how Refract handles accounts and code. A final policy will replace it after legal review.",
  short: [
    "Website account: email and password.",
    "Code access: only through the GitHub App, on repositories you allow.",
    "We process pull request content to review it, to apply cleanups you approve, and to show you history in the product.",
    "We do not merge for you.",
    "We do not sell your repository contents.",
  ],
  collectHeadline: "What we collect",
  collect:
    "Account email and name. GitHub installation and repository selection. Review results and the history the product needs.",
  operator: operatorSentence,
  contactHtml: `Privacy questions go through <a href="/contact">Contact</a>.`,
  changes: "When this policy changes, we update this page and the date.",
};

export const terms = {
  title: "Terms — Refract",
  description:
    "Using Refract means you connect only repositories you are allowed to connect, and use the product as offered.",
  headline: "Terms",
  body: "The full terms will live here. Until they do, using Refract means you agree to connect only repositories you are allowed to connect, and to use the product as offered.",
  operator: operatorSentence,
  contactHtml: `For now, <a href="/contact">Contact</a> with legal questions.`,
};

export const notFound = {
  title: "Page Not Found — Refract",
  description: "This page isn’t here.",
  headline: "This page isn’t here.",
  body: "The link may be old. The product is not.",
  cta: "Back to home",
};
