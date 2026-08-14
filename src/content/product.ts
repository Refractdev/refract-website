import { SIGNUP_PATH } from "@/lib/constants";

export const productSeo = {
  title: "How Refract works — AI code cleanup on GitHub",
  description:
    "Refract reviews AI-generated code on GitHub pull requests, prepares a cleanup when it’s safe, and waits for your approval.",
  ogTitle: "How Refract works",
  ogDescription:
    "Connect GitHub. Keep shipping. Refract cleans AI-generated code when it’s safe — and asks before it touches anything.",
};

export const productHero = {
  headline: "From generated code to code you can keep.",
  subhead:
    "Refract reads the project, finds what will get messy, and prepares a cleanup you approve. You never leave GitHub to decide.",
  cta: { label: "Get started", href: SIGNUP_PATH },
};

export const productLoop = {
  headline: "A simple loop",
  beats: [
    {
      number: "1",
      title: "See the project",
      body: "Refract looks at the software as a whole, so a change in one screen can respect the rest.",
    },
    {
      number: "2",
      title: "Find what will hurt later",
      body: "It looks for the patterns that show up when code is generated quickly: copied logic, tangled screens, leftover state, structure that won’t age well. If something sensitive was left in the code — like a credential — it tells you. It does not quietly “fix” secrets.",
    },
    {
      number: "3",
      title: "Clean what it can",
      body: "When the cleanup is safe, you get a concrete change to approve. When it isn’t, you get a clear explanation instead of a guess.",
    },
    {
      number: "4",
      title: "Check, then remember",
      body: "After you approve, Refract applies the change and looks again. Over time you can see whether the project is getting cleaner — or still shipping the mess.",
    },
  ],
};

export const productPlaces = {
  headline: "Decide on GitHub. Use the website for the rest.",
  columns: {
    github: {
      title: "On GitHub",
      items: [
        "See the result on the pull request",
        "Approve a cleanup",
        "Dismiss when it doesn’t apply",
        "Merge when you’re ready",
      ],
    },
    web: {
      title: "On the website",
      items: [
        "Create your account",
        "Connect the GitHub App",
        "Choose repositories",
        "See what’s connected, over time",
      ],
    },
  },
  close: "The website is not a second place to accept cleanups. The decision stays next to the code.",
};

export const productResults = {
  headline: "You’ll see one of a few honest results",
  items: [
    { title: "Still working", body: "Wait. This is not a pass." },
    { title: "Looks clear", body: "Nothing from Refract needs you on this change." },
    { title: "Cleanup ready", body: "A safe cleanup is prepared. Approve it on GitHub." },
    {
      title: "Have a look",
      body: "Something matters, and Refract will not change it for you. Read the explanation.",
    },
    {
      title: "Something went wrong",
      body: "Analysis failed. Refract will say so. It will not paint a fake success.",
    },
  ],
};

export const productCleans = {
  headline: "What “cleaner” means in practice",
  body: "On React and TypeScript projects, Refract is especially good at the leftovers of fast generation:",
  bullets: [
    "data fetching mixed into the interface",
    "the same logic written twice",
    "state that is never really used",
    "effects that don’t clean up after themselves",
    "missing timeouts and missing error handling at the edges",
    "screens doing work that belongs elsewhere",
  ],
  close:
    "Some of that, it can clean for you. Some of that, it will only point out — on purpose. A bad automatic rewrite is worse than an honest note.",
};

export const productStart = {
  headline: "Live in minutes",
  steps: [
    "Create an account",
    "Install the GitHub App and pick repositories",
    "Open a pull request",
  ],
  note: "Connecting GitHub does not sign you into Refract, and signing into Refract does not install GitHub access. Two steps, two jobs.",
  cta: { label: "Create your account", href: SIGNUP_PATH },
};

export const productFaqs = [
  {
    q: "Will this fight my AI tools?",
    a: "No. Keep generating. Refract is the pass that keeps the result maintainable.",
  },
  {
    q: "Will it change code without me?",
    a: "No. You approve. You merge.",
  },
  {
    q: "Do I have to learn a new workspace?",
    a: "No. Day to day, you stay on GitHub.",
  },
] as const;
