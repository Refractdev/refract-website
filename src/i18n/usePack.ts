import { localeFromPath, type Locale } from "./config";
import { localizeHref, localizeHtml } from "./href";
import { loadPack } from "./load";
import type { ContentPack } from "./types";

export function usePack(pathname: string): {
  locale: Locale;
  pack: ContentPack;
  href: (path: string) => string;
  html: (markup: string) => string;
} {
  const locale = localeFromPath(pathname);
  const pack = loadPack(locale);
  return {
    locale,
    pack,
    href: (path) => localizeHref(path, locale),
    html: (markup) => localizeHtml(markup, locale),
  };
}
