import { defaultLocale, resolveLocale, type Locale } from "./config";
import { de } from "./packs/de";
import { en } from "./packs/en";
import { es } from "./packs/es";
import { fr } from "./packs/fr";
import { ja } from "./packs/ja";
import { pt } from "./packs/pt";
import { zh } from "./packs/zh";
import type { ContentPack } from "./types";

const packs: Record<Locale, ContentPack> = { en, pt, es, fr, de, ja, zh };

export function loadPack(locale?: string): ContentPack {
  return packs[resolveLocale(locale)] ?? packs[defaultLocale];
}
