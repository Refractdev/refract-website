import { GITHUB_APP_INSTALL_URL } from "@/lib/constants";

export const docsSeo = {
  title: "Documentation — Refract",
  description:
    "Create a Refract account, connect GitHub, and start cleaning AI-generated code on the pull requests you already open.",
};

export const docsHome = {
  headline: "Documentation",
  intro: "Everything you need to use Refract.",
  groups: [
    {
      title: "Start here",
      links: [
        { label: "Getting started", href: "/docs/getting-started" },
        { label: "Create an account", href: "/docs/account" },
        { label: "Connect GitHub", href: "/docs/connect-github" },
        { label: "Your first cleanup", href: "/docs/first-cleanup" },
      ],
    },
    {
      title: "Using Refract",
      links: [
        { label: "What you’ll see on a pull request", href: "/docs/on-github" },
        { label: "Approve or dismiss", href: "/docs/approve" },
        { label: "The website", href: "/docs/web" },
        { label: "Repositories", href: "/docs/repositories" },
      ],
    },
    {
      title: "Reference",
      links: [
        { label: "FAQ", href: "/docs/faq" },
        { label: "Security", href: "/security" },
        { label: "Limits", href: "/docs/limits" },
        { label: "Troubleshooting", href: "/docs/troubleshooting" },
      ],
    },
  ],
};

export type DocBlock =
  | { type: "lede"; text: string }
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }
  | { type: "html"; html: string };

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  blocks: DocBlock[];
};

export const docPages: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    description: "Create an account, connect GitHub, and open a pull request. About 10 minutes.",
    blocks: [
      { type: "lede", text: "About 10 minutes." },
      {
        type: "p",
        text: "You need a GitHub account, a React / TypeScript repository you can connect, and an email address.",
      },
      { type: "h2", text: "1. Create your account" },
      {
        type: "p",
        text: "Go to Get started. Name, email, password. Confirm email if we ask, then sign in.",
      },
      { type: "p", text: "This is not “Sign in with GitHub.”" },
      { type: "h2", text: "2. Connect GitHub" },
      {
        type: "p",
        text: "You’ll land on Connect GitHub. Install the GitHub App, pick the account and repositories, come back, choose which projects Refract should watch.",
      },
      {
        type: "p",
        text: "Until this is done, the main screens stay closed. That’s intentional.",
      },
      { type: "h2", text: "3. Open a pull request" },
      {
        type: "p",
        text: "On a connected repo, open a PR. Wait for Refract. If a cleanup is ready, approve it on GitHub.",
      },
      { type: "h2", text: "4. Use the website when you want the longer view" },
      {
        type: "p",
        text: "Overview shows what’s connected. Day to day, you stay on the pull request.",
      },
      {
        type: "html",
        html: 'Next: <a href="/docs/connect-github">Connect GitHub</a> · <a href="/docs/first-cleanup">Your first cleanup</a>',
      },
    ],
  },
  {
    slug: "account",
    title: "Your Refract account",
    description: "Sign up with name, email, and password. GitHub is a separate step.",
    blocks: [
      { type: "p", text: "Sign up with name, email, and password." },
      { type: "html", html: 'Sign in at <a href="/login">/login</a>.' },
      {
        type: "p",
        text: "Forgot password: we’ll email a reset link if that address has an account.",
      },
      { type: "p", text: "Sign out from the app." },
      {
        type: "p",
        text: "This account is not GitHub permission. Connecting repositories is a separate step.",
      },
      {
        type: "p",
        text: "Under Settings → Account you can edit the name we show in the product.",
      },
    ],
  },
  {
    slug: "connect-github",
    title: "Connect GitHub",
    description:
      "Install the GitHub App so Refract can read the pull request, post one result, and apply a cleanup after you approve.",
    blocks: [
      {
        type: "p",
        text: "Refract needs the GitHub App to read the pull request, post one result, and — only after you approve — apply a cleanup.",
      },
      {
        type: "html",
        html: `<ol>
          <li>Sign in to Refract</li>
          <li>Open Connect GitHub</li>
          <li>Install the app: <a href="${GITHUB_APP_INSTALL_URL}">${GITHUB_APP_INSTALL_URL}</a></li>
          <li>Choose specific repositories (recommended)</li>
          <li>Return to Refract and confirm which ones to watch</li>
        </ol>`,
      },
      { type: "h2", text: "Installed vs required" },
      {
        type: "p",
        text: "Connected means Refract reviews new code. It does not block merges by itself. If you want GitHub to wait on Refract, that’s a required check you set in GitHub — we can point you there in Settings. We never flip that on during install.",
      },
      { type: "h2", text: "Uninstall" },
      {
        type: "p",
        text: "Remove the App in GitHub → Settings → Applications. Refract will stop watching those repositories.",
      },
    ],
  },
  {
    slug: "first-cleanup",
    title: "Your first cleanup",
    description: "Open a pull request, wait for Refract, and approve a cleanup on GitHub.",
    blocks: [
      {
        type: "p",
        text: "Before you start: account created, GitHub connected, at least one React / TypeScript repository selected.",
      },
      {
        type: "ol",
        items: [
          "Open a pull request",
          "Find Refract in Checks",
          "Wait until it finishes — pending is not success",
          "Read the short result",
        ],
      },
      { type: "h2", text: "If a cleanup is ready" },
      {
        type: "p",
        text: "Approve on the check. Refract applies the change to the branch. It looks again. You still merge.",
      },
      { type: "h2", text: "If it asks you to look" },
      {
        type: "p",
        text: "It found something it will not change automatically. Read the explanation. Fix it yourself, or leave it — that’s your call.",
      },
      { type: "h2", text: "If something went wrong" },
      {
        type: "p",
        text: "We’ll say so. Push a small commit to try again. We will not show a fake green result.",
      },
    ],
  },
  {
    slug: "on-github",
    title: "On GitHub",
    description: "One check. One summary comment, updated in place — not a stack of bot noise.",
    blocks: [
      {
        type: "p",
        text: "One check. One summary comment, updated in place — not a stack of bot noise.",
      },
      {
        type: "p",
        text: "The check can still be working, look clear, have a cleanup ready, ask you to look, or report an error.",
      },
      {
        type: "p",
        text: "When a cleanup is ready, Accept (and Dismiss) appear on the check.",
      },
      { type: "h2", text: "Required checks" },
      {
        type: "p",
        text: "Optional. Set in GitHub branch rules if you want merges to wait. Connecting the app does not do this for you.",
      },
    ],
  },
  {
    slug: "approve",
    title: "Approve or dismiss",
    description: "Approve applies a cleanup on GitHub. Dismiss means you choose not to apply it.",
    blocks: [
      {
        type: "p",
        text: "This happens on GitHub, on the Refract check — not as the main button on the website.",
      },
      { type: "h2", text: "Approve" },
      {
        type: "p",
        text: "Applies the prepared cleanup to the branch. The check runs again. You merge when you’re ready. This is not auto-merge.",
      },
      { type: "h2", text: "Dismiss" },
      {
        type: "p",
        text: "Use when you understand the note and choose not to apply it. It is not a permanent “ignore this forever” for the whole project.",
      },
      { type: "h2", text: "When Approve is missing" },
      {
        type: "p",
        text: "There is no safe automatic cleanup. Read the explanation, or wait if the check failed.",
      },
    ],
  },
  {
    slug: "web",
    title: "The website",
    description: "After setup, the website shows what’s connected. Approve still happens on GitHub.",
    blocks: [
      { type: "p", text: "After setup, you’ll see:" },
      {
        type: "html",
        html: "<p><strong>Overview</strong> — what’s connected, and later a simple picture of whether the project is getting cleaner. Early accounts often have little history. That’s honest, not broken.</p>",
      },
      {
        type: "html",
        html: "<p><strong>Repositories</strong> — the projects you chose.</p>",
      },
      {
        type: "html",
        html: "<p><strong>Pull requests</strong> — recent results, for memory. Live approve still happens on GitHub.</p>",
      },
      {
        type: "html",
        html: "<p><strong>Insights</strong> — patterns over time, once there is enough history. We don’t invent a score to look healthy.</p>",
      },
      {
        type: "html",
        html: "<p><strong>Settings</strong> — account, which repositories, and how strictly each one is treated. Billing will live here when checkout ships.</p>",
      },
      { type: "p", text: "The website is not a second accept inbox." },
    ],
  },
  {
    slug: "repositories",
    title: "Repositories",
    description: "Installing the App gives permission. Selecting repositories chooses what Refract watches.",
    blocks: [
      { type: "p", text: "Start with one active product repo. Add more later in Settings." },
      {
        type: "p",
        text: "Installing the App on GitHub gives permission. Selecting repositories in Refract chooses what the product watches. You need both.",
      },
      { type: "h2", text: "Languages" },
      {
        type: "p",
        text: "Best on React / TypeScript. Other stacks may get little or no coverage. We would rather say that than fake confidence.",
      },
    ],
  },
  {
    slug: "limits",
    title: "Limits",
    description: "What Refract is good at — and what it will not pretend to do.",
    blocks: [
      {
        type: "p",
        text: "Refract is good at specific messes that show up in AI-generated React and TypeScript — and at applying a cleanup when that cleanup is safe.",
      },
      {
        type: "p",
        text: "It is not a guarantee that every bug is found. It is not a full human review. It is not a rebuild of your architecture.",
      },
      {
        type: "p",
        text: "If we cannot prove a problem, we stay quiet. If we cannot clean something safely, we don’t offer Approve.",
      },
      {
        type: "html",
        html: 'Very large changes may take longer. Plan limits are on the <a href="/pricing">pricing</a> page.',
      },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description: "Common setup and GitHub check problems, and how to get unstuck.",
    blocks: [
      { type: "h2", text: "I keep getting sent to Connect GitHub" },
      {
        type: "p",
        text: "Setup isn’t finished until the App is installed and at least one repository is selected in Refract.",
      },
      { type: "h2", text: "Wrong GitHub account" },
      {
        type: "p",
        text: "Install from a browser session logged into the account that owns the repositories.",
      },
      { type: "h2", text: "The check never appears" },
      {
        type: "p",
        text: "Confirm the repo is both installed on GitHub and selected in Refract. Wait a minute. Refresh Checks.",
      },
      { type: "h2", text: "Approve did nothing" },
      {
        type: "p",
        text: "Use the action on the check, not only the comment. Confirm the App still has permission to write. GitHub branch rules can block the apply — read GitHub’s error.",
      },
      { type: "h2", text: "Reset email never arrives" },
      { type: "p", text: "Check spam. Confirm the address. Try again." },
      { type: "h2", text: "Still stuck" },
      {
        type: "html",
        html: '<a href="/contact">Contact</a> with: what you expected, what happened, the pull request link, and the time (with timezone).',
      },
    ],
  },
];

export function getDocPage(slug: string) {
  return docPages.find((page) => page.slug === slug);
}
