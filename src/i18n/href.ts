import { SITE_URL } from "@/lib/constants";
import { defaultLocale, isLocale, type Locale } from "./config";

const APP_PATHS = new Set(["/login", "/signup", "/dashboard"]);

export function stripLocalePrefix(pathname: string): string {
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const parts = clean.split("/");
  if (parts[1] && isLocale(parts[1]) && parts[1] !== defaultLocale) {
    const rest = `/${parts.slice(2).join("/")}`;
    return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
  }
  return clean === "/" ? "/" : clean.replace(/\/$/, "") || "/";
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/")) return href;
  if (href.startsWith("//")) return href;
  const [path, hash] = href.split("#");
  const [pathname, search] = path.split("?");
  if (APP_PATHS.has(pathname.replace(/\/$/, "") || "/")) {
    return href;
  }
  const bare = stripLocalePrefix(pathname);
  const prefixed = locale === defaultLocale ? bare : bare === "/" ? `/${locale}` : `/${locale}${bare}`;
  return `${prefixed}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}

export function switchLocalePath(pathname: string, next: Locale): string {
  return localizeHref(stripLocalePrefix(pathname) || "/", next);
}

export function absoluteUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withSlash = path === "/" || /\.[a-z0-9]+$/i.test(path) || path.endsWith("/") ? path : `${path}/`;
  return new URL(withSlash, SITE_URL).toString();
}

export function localizeHtml(html: string, locale: Locale): string {
  return html.replace(/href="(\/[^"]*)"/g, (_, path: string) => `href="${localizeHref(path, locale)}"`);
}
