import { SITE_URL } from "@/lib/constants";
import { individualPlans, teamPlans, type Plan } from "@/content/pricing";

type QA = { q: string; a: string };

/** Answers may carry inline markup; schema.org wants plain text. */
const toPlainText = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const numericPrice = (raw: string) => raw.replace(/[^0-9.]/g, "") || undefined;

export const planOffers = (plans: readonly Plan[]) =>
  plans.map((plan) => {
    const price = numericPrice(plan.monthlyPrice);
    const offer: Record<string, unknown> = {
      "@type": "Offer",
      name: plan.name,
      priceCurrency: "USD",
      url: new URL("/pricing/", SITE_URL).toString(),
      description: plan.description,
    };
    if (price) offer.price = price;
    if (plan.custom && price) {
      offer.priceSpecification = {
        "@type": "PriceSpecification",
        minPrice: price,
        priceCurrency: "USD",
      };
    }
    return offer;
  });

export const allPlanOffers = () => planOffers([...individualPlans, ...teamPlans]);

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
