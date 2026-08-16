import { SITE_URL } from "@/lib/constants";

type QA = { q: string; a: string };

/** Answers may carry inline markup; schema.org wants plain text. */
const toPlainText = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

export const faqPageSchema = (items: readonly QA[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: toPlainText(a) },
  })),
});

export const breadcrumbSchema = (trail: readonly { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(({ name, path }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: new URL(path, SITE_URL).toString(),
  })),
});
