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
    "The terms for using Refract: accounts, GitHub access, approval, plans, and what we will and will not do with your code.",
  headline: "Terms",
  status:
    "This is a working description of using Refract. A final agreement will replace it after legal review.",
  updated: "Last updated: 15 August 2026",
  operator: operatorSentence,
  short: [
    "Connect only repositories you are allowed to connect.",
    "You approve every cleanup. Refract does not merge for you, and it does not rewrite a project on its own.",
    "Code access is only through the GitHub App, on repositories you allow.",
    "You keep your code. We do not sell repository contents.",
    "Start free. Checkout is coming; you will not be charged at signup.",
  ],
  sections: [
    {
      title: "These terms",
      paragraphs: [
        "These terms apply when you use Refract: the website, the product, and the GitHub App. If you do not agree, do not use the product.",
        "GitHub’s terms still apply to GitHub. These terms cover Refract.",
      ],
    },
    {
      title: "The product",
      paragraphs: [
        "Refract reviews pull requests for patterns that make AI-generated code hard to keep. When a cleanup is safe, it prepares a change for you to approve on GitHub. When it is not safe, it explains. It does not pretend a review succeeded when it failed.",
        "Refract is not a replacement for human review, your editor, or GitHub. It does not merge for you.",
      ],
    },
    {
      title: "Your account",
      paragraphs: [
        "You create an account with email and password. You are responsible for that account. Keep the password to yourself.",
        "If you use Refract for an organization, you confirm you have the right to connect its repositories and to accept these terms for that organization.",
      ],
    },
    {
      title: "GitHub and your repositories",
      paragraphs: [
        "GitHub access is only the App you install, on the repositories you allow. We do not sign you in with GitHub just to open the website.",
        "You represent that you are allowed to connect those repositories. If you are not, do not connect them.",
        "You can uninstall the GitHub App or narrow which repositories we see at any time.",
      ],
    },
    {
      title: "Approval",
      paragraphs: [
        "We process pull request content to review it, to apply cleanups you approve, and to show you history in the product.",
        "A cleanup lands only after you approve it on GitHub. The decision stays next to the code. You remain responsible for what you merge.",
      ],
    },
    {
      title: "Acceptable use",
      paragraphs: [
        "Do not connect code you do not have the right to connect. Do not try to break, scrape, or overload the service. Do not use Refract to hide malware or to ignore exposed credentials.",
        "If we see credentials in a pull request, we tell you. Rotating anything that was exposed is on you.",
      ],
    },
    {
      title: "Plans and billing",
      paragraphs: [
        "Plans and limits are described on Pricing. Free exists so you can try Refract on a real repository.",
        "Paid plans are listed so you know where this goes. Checkout is coming; you will not be charged at signup. When billing starts, the site and checkout will say so before you pay.",
      ],
    },
    {
      title: "Your code",
      paragraphs: [
        "You keep your code. Connecting a repository does not transfer ownership to us.",
        "We do not sell your repository contents. We do not use them as a product.",
        "The Refract name, website, and product belong to Devrefract, a Lintel company.",
      ],
    },
    {
      title: "Availability",
      paragraphs: [
        "We work to keep Refract running. We do not promise it will always be up, or that every review will be complete or correct.",
        "Treat a result as something you still have to judge. Refract is a tool, not a guarantee.",
      ],
    },
    {
      title: "If something goes wrong",
      paragraphs: [
        "Refract is provided as it is. To the extent the law allows, we are not liable for lost profits, lost code, delay, or other indirect damage from using — or not using — the product.",
      ],
    },
    {
      title: "Stopping",
      paragraphs: [
        "You can stop using Refract at any time. Uninstall the GitHub App to cut access to your repositories.",
        "We can suspend or end access if you break these terms or abuse the service. For account questions, use Contact.",
      ],
    },
  ],
  contactHtml: `Legal questions go through <a href="/contact">Contact</a>.`,
  changes:
    "When these terms change, we update this page and the date. If you keep using Refract after a change, you accept the updated terms.",
};

export const notFound = {
  title: "Page Not Found — Refract",
  description: "This page isn’t here.",
  headline: "This page isn’t here.",
  body: "The link may be old. The product is not.",
  cta: "Back to home",
};
