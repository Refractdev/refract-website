import { BRAND_NAME, COMPANY_NAME, PRODUCT_NAME } from "@/lib/constants";

/** Canonical relationship line for footer and secondary surfaces. */
export const attribution = `${PRODUCT_NAME} is built by ${BRAND_NAME}, a ${COMPANY_NAME} company.`;

export const copyrightLine = `${BRAND_NAME}, a ${COMPANY_NAME} company.`;

/** One sentence for legal pages. Product policies stay about the product. */
export const operatorSentence = `${PRODUCT_NAME} is a product of ${BRAND_NAME}, a ${COMPANY_NAME} company.`;

export const about = {
  title: `About — ${PRODUCT_NAME}`,
  description: `${PRODUCT_NAME} is the step after AI writes the code. It is built by ${BRAND_NAME}, a ${COMPANY_NAME} company.`,
  label: "Company",
  headline: PRODUCT_NAME,
  intro: `${PRODUCT_NAME} reviews AI-generated code on GitHub pull requests, prepares a cleanup when it is safe, and waits for your approval.`,
  sections: [
    {
      title: "Who builds it",
      body: `${PRODUCT_NAME} is a product of ${BRAND_NAME}, a ${COMPANY_NAME} company.`,
    },
  ],
} as const;

export const founder = {
  label: "The person behind it",
  name: "Adilson Lopes",
  role: "Founder of Lintel · Creator of Refract",
  story:
    "Refract is built by Adilson Lopes, founder of Lintel. Originally from Angola and now based in Portugal, he is building it around a simple conviction: as AI changes how software is written, the tools developers use to keep that software — to review it, clean it, and let it grow — have to change too.",
  company: "Lintel is the company behind Refract.",
  linkedinLabel: "LinkedIn",
} as const;
