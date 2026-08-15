import { BRAND_NAME, COMPANY_NAME, PRODUCT_NAME } from "@/lib/constants";

/** Canonical relationship line for footer and secondary surfaces. */
export const attribution = `${PRODUCT_NAME} is built by ${BRAND_NAME}, a ${COMPANY_NAME} company.`;

export const copyrightLine = `${BRAND_NAME}, a ${COMPANY_NAME} company.`;

/** One sentence for legal pages. Product policies stay about the product. */
export const operatorSentence = `${PRODUCT_NAME} is a product of ${BRAND_NAME}, a ${COMPANY_NAME} company.`;

export const about = {
  title: `About — ${BRAND_NAME}`,
  description: `${PRODUCT_NAME} is built by ${BRAND_NAME}, a ${COMPANY_NAME} company focused on developer technology.`,
  label: "Company",
  headline: BRAND_NAME,
  intro: `${PRODUCT_NAME} is our current product. ${BRAND_NAME} is the developer technology brand behind it. ${COMPANY_NAME} is the company that builds ${BRAND_NAME}.`,
  sections: [
    {
      title: COMPANY_NAME,
      body: `${COMPANY_NAME} is the parent technology company. It builds and operates its products and future technology ventures. It is not a product competing with ${PRODUCT_NAME}.`,
    },
    {
      title: BRAND_NAME,
      body: `${BRAND_NAME} is the developer-focused technology brand built by ${COMPANY_NAME}. It builds software development infrastructure and tools that help teams build, maintain, understand, and evolve software.`,
    },
    {
      title: PRODUCT_NAME,
      body: `${PRODUCT_NAME} is the current flagship product from ${BRAND_NAME}: the step after AI writes the code.`,
    },
  ],
} as const;
