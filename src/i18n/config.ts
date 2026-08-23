export const defaultLocale = "en" as const;

export const locales = ["en", "pt", "es", "fr", "de", "ja", "zh"] as const;

export type Locale = (typeof locales)[number];

export const localeMeta: Record<
  Locale,
  { label: string; htmlLang: string; og: string; hreflang: string }
> = {
  en: { label: "English", htmlLang: "en", og: "en_US", hreflang: "en" },
  pt: { label: "Português", htmlLang: "pt", og: "pt_PT", hreflang: "pt" },
  es: { label: "Español", htmlLang: "es", og: "es_ES", hreflang: "es" },
  fr: { label: "Français", htmlLang: "fr", og: "fr_FR", hreflang: "fr" },
  de: { label: "Deutsch", htmlLang: "de", og: "de_DE", hreflang: "de" },
  ja: { label: "日本語", htmlLang: "ja", og: "ja_JP", hreflang: "ja" },
  zh: { label: "简体中文", htmlLang: "zh-CN", og: "zh_CN", hreflang: "zh-Hans" },
};

export const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value && (locales as readonly string[]).includes(value));

export const otherLocales = (): Locale[] => locales.filter((locale) => locale !== defaultLocale);

export function localeFromPath(pathname: string): Locale {
  const first = pathname.replace(/\/$/, "").split("/").filter(Boolean)[0];
  if (first && isLocale(first) && first !== defaultLocale) return first;
  return defaultLocale;
}

export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}
