import type { Locale, PageKey } from "../content/types";

export const localizedPaths: Record<Locale, Record<PageKey, string>> = {
  pt: {
    home: "/",
    services: "/servicos",
    projects: "/projetos",
    about: "/sobre",
    contact: "/contato",
    privacy: "/privacidade",
    terms: "/termos",
  },
  en: {
    home: "/en",
    services: "/en/services",
    projects: "/en/projects",
    about: "/en/about",
    contact: "/en/contact",
    privacy: "/en/privacy",
    terms: "/en/terms",
  },
};

export function getAlternatePath(locale: Locale, page: PageKey) {
  return localizedPaths[locale === "pt" ? "en" : "pt"][page];
}
