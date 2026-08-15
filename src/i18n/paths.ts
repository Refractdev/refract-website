import { otherLocales } from "./config";
import { en } from "./packs/en";

export const localeStaticPaths = () => otherLocales().map((locale) => ({ params: { locale } }));

export const localeDocPaths = () =>
  otherLocales().flatMap((locale) =>
    en.docs.pages.map((page) => ({ params: { locale, slug: page.slug } })),
  );
