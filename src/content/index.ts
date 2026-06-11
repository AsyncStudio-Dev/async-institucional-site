import { en } from "./en";
import { pt } from "./pt";
import type { Locale, SiteContent } from "./types";

export const contentByLocale: Record<Locale, SiteContent> = {
  pt,
  en,
};

export function getContent(locale: Locale) {
  return contentByLocale[locale];
}
