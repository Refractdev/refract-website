export const faqSeo = {
  title: "FAQ — Refract",
  description:
    "Answers about what Refract is, how it works on GitHub, trust, accounts, and pricing.",
};

export const faqGroups = [
  {
    title: "Product",
    items: [
      {
        q: "What is Refract?",
        a: "The step after AI writes the code. It turns generated software into cleaner, more maintainable code — on the GitHub pull requests you already open.",
      },
      {
        q: "Is this an AI reviewer?",
        a: "No. It is not a chatbot leaving essays on your diff. It looks for specific messes, explains them, and when it can, prepares a cleanup you approve.",
      },
      {
        q: "Will it make my code better or just nag me?",
        a: "When a cleanup is safe, it can apply it after you approve. When it isn’t safe, it tells you. The point is a better project, not a longer comment thread.",
      },
      {
        q: "Does it work with Cursor / Copilot / ChatGPT?",
        a: "Yes in the only way that matters: those tools write into GitHub. Refract watches the result. We don’t need to live in your editor.",
      },
      {
        q: "What languages do you support?",
        a: "React and TypeScript first. Other stacks are not a silent “yes.”",
      },
      {
        q: "Does it replace code review?",
        a: "No. It takes a class of maintainability problems off your plate so humans can review the work that still needs a human.",
      },
    ],
  },
  {
    title: "Trust",
    items: [
      {
        q: "Can it change my repository without asking?",
        a: "No.",
      },
      {
        q: "Will you merge my pull request?",
        a: "No. Approve a cleanup, then you merge.",
      },
      {
        q: "Do you train models on our code?",
        a: 'We process code to review it and to apply the cleanups you approve. We do not sell your repository as training data. See <a href="/security">Security</a>.',
      },
      {
        q: "What if it’s wrong?",
        a: "It would rather miss than invent. You can dismiss a cleanup. You always see the change before it is part of the project.",
      },
    ],
  },
  {
    title: "Account",
    items: [
      {
        q: "Do I sign in with GitHub?",
        a: "No. Email and password for Refract. GitHub access is the App you install.",
      },
      {
        q: "Why two steps?",
        a: "Logging in and granting repository access are different jobs. Keeping them apart keeps permissions clear.",
      },
      {
        q: "Can I try without GitHub?",
        a: "You can create an account. The product stays closed until a repository is connected — there is nothing to clean otherwise.",
      },
    ],
  },
  {
    title: "Money",
    items: [
      {
        q: "Is pricing live?",
        a: "The plans are real. Card checkout is rolling out. Start free.",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        q: "Who makes Refract?",
        a: "Refract is built by Devrefract, a Lintel company. Lintel is the parent technology company. Devrefract builds developer technology. Refract is its current product.",
      },
    ],
  },
] as const;
