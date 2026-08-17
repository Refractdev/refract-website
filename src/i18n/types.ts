import type { DocPage } from "@/content/docs";
import type { Plan } from "@/content/pricing";

export type Link = { label: string; href: string };

export type SeoBlock = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

export type UiStrings = {
  backToHome: string;
  billingPeriod: string;
  monthly: string;
  yearly: string;
  twoMonthsFree: string;
  individuals: string;
  forTeams: string;
  allDocs: string;
  documentation: string;
  privacyFooterBefore: string;
  privacyFooterLink: string;
  language: string;
  skipToContent: string;
  homeCrumb: string;
  shortVersion: string;
  contactHeading: string;
  changesHeading: string;
  legalLabel: string;
  bestFor: string;
  homeAria: string;
  openMenu: string;
  githubHeading: string;
  connectHeading: string;
};

export type ContentPack = {
  ui: UiStrings;
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    jsonLdDescription: string;
  };
  nav: {
    marketingLinks: Link[];
    footerSections: { title: string; links: Link[] }[];
    footerBrandLine: string;
    footerFinePrint: string;
    githubAppLabel: string;
    discordLabel: string;
    signIn: string;
    getStarted: string;
  };
  brand: {
    attribution: string;
    copyrightLine: string;
    operatorSentence: string;
    about: {
      title: string;
      description: string;
      label: string;
      headline: string;
      intro: string;
      sections: { title: string; body: string }[];
      founder: {
        label: string;
        name: string;
        role: string;
        story: string;
        company: string;
        linkedinLabel: string;
      };
    };
  };
  home: {
    seo: SeoBlock;
    hero: {
      pill: Link;
      headline: string;
      subhead: string;
      primary: Link;
      secondary: Link;
      trust: string;
      caption: string;
      stack: string;
    };
    problem: {
      headline: string;
      bullets: string[];
      close: string;
    };
    turn: {
      headline: string;
      lede: string;
      more: Link;
    };
    result: {
      headline: string;
      points: { title: string; body: string }[];
    };
    does: {
      headline: string;
      more: Link;
      points: { number: string; title: string; body: string }[];
    };
    world: {
      headline: string;
      lede: string;
      caption: string;
      decide: string;
      close: string;
    };
    trust: {
      headline: string;
      points: { title: string; body: string }[];
    };
    steps: {
      headline: string;
      note: string;
      cta: Link;
      steps: { number: string; title: string; body: string }[];
    };
    audience: {
      headline: string;
      points: { title: string; body: string }[];
    };
    ships: {
      headline: string;
      more: Link;
      items: { date: string; title: string; href: string }[];
    };
    social: {
      headline: string;
      line: string;
      discord: { kicker: string; title: string; body: string; cta: string };
      github: { kicker: string; title: string; body: string; cta: string };
    };
    honesty: {
      headline: string;
      paragraphs: string[];
    };
    cta: {
      headline: string;
      body: string;
      primary: Link;
      secondary: Link;
    };
  };
  product: {
    seo: SeoBlock;
    hero: { headline: string; subhead: string; cta: Link };
    loop: {
      headline: string;
      beats: { number: string; title: string; body: string }[];
    };
    places: {
      headline: string;
      close: string;
      github: { title: string; items: string[] };
      web: { title: string; items: string[] };
    };
    results: {
      headline: string;
      items: { title: string; body: string }[];
    };
    cleans: {
      headline: string;
      body: string;
      bullets: string[];
      close: string;
    };
    start: {
      headline: string;
      steps: string[];
      note: string;
      cta: Link;
    };
    faqs: { q: string; a: string }[];
  };
  pricing: {
    seo: SeoBlock;
    hero: {
      headline: string;
      subhead: string;
      priceLine: string;
      banner: string;
    };
    individualPlans: Plan[];
    teamPlans: Plan[];
    footnote: string;
    value: { headline: string; paragraphs: string[] };
    faqs: { q: string; a: string }[];
  };
  docs: {
    seo: SeoBlock;
    headline: string;
    intro: string;
    groups: { title: string; numbered?: boolean; links: Link[] }[];
    pages: DocPage[];
  };
  faq: {
    seo: SeoBlock;
    title: string;
    groups: { title: string; items: { q: string; a: string }[] }[];
  };
  legal: {
    security: {
      title: string;
      description: string;
      headline: string;
      paragraphs: string[];
      operator: string;
      reportLabel: string;
      reportHtml: string;
    };
    contact: {
      title: string;
      description: string;
      headline: string;
      intro: string;
      fields: { name: string; email: string; topic: string; message: string; link: string };
      topics: string[];
      submit: string;
      success: string;
      error: string;
      bugs: string;
    };
    privacy: {
      title: string;
      description: string;
      headline: string;
      updated: string;
      short: string[];
      collectHeadline: string;
      collect: string;
      operator: string;
      contactHtml: string;
      changes: string;
    };
    terms: {
      title: string;
      description: string;
      headline: string;
      updated: string;
      short: string[];
      sections: { title: string; paragraphs: string[] }[];
      operator: string;
      contactHtml: string;
      changes: string;
    };
    notFound: {
      title: string;
      description: string;
      headline: string;
      body: string;
      cta: string;
    };
  };
};
