import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import { getContent } from "../content";
import type { Locale, PageKey } from "../content/types";
import { localizedPaths } from "../routes/paths";

const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

const ogImageAlt: Record<Locale, string> = {
  pt: "Async Studio — Sites e sistemas sob medida para pequenos negócios no Vale do Rio dos Sinos e atendimento remoto",
  en: "Async Studio — Custom websites and software for small businesses",
};

function getMetadataBase() {
  return new URL(siteConfig.domain);
}

export function createPageMetadata(locale: Locale, page: PageKey): Metadata {
  const content = getContent(locale);
  const seo = content.seo[page];
  const path = localizedPaths[locale][page];
  const canonicalUrl = `${siteConfig.domain}${path === "/" ? "" : path}` || siteConfig.domain;

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: getMetadataBase(),
    alternates: {
      canonical: canonicalUrl === siteConfig.domain ? "/" : path,
      languages: {
        [htmlLang.pt]: localizedPaths.pt[page],
        [htmlLang.en]: localizedPaths.en[page],
        "x-default": localizedPaths.pt[page],
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      locale: htmlLang[locale],
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt[locale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [siteConfig.ogImage],
    },
  };
}
