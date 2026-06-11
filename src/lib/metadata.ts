import type { Metadata } from "next";
import { metaAssets } from "../assets";
import { siteConfig } from "../config/site";
import { getContent } from "../content";
import type { Locale, PageKey } from "../content/types";
import { localizedPaths } from "../routes/paths";

const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

function getMetadataBase() {
  return new URL(siteConfig.domain);
}

export function createPageMetadata(locale: Locale, page: PageKey): Metadata {
  const content = getContent(locale);
  const seo = content.seo[page];
  const path = localizedPaths[locale][page];

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: getMetadataBase(),
    alternates: {
      canonical: path,
      languages: {
        [htmlLang.pt]: localizedPaths.pt[page],
        [htmlLang.en]: localizedPaths.en[page],
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      siteName: siteConfig.name,
      images: [metaAssets.ogImagePublicPath],
      type: "website",
      locale: htmlLang[locale],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [metaAssets.ogImagePublicPath],
    },
  };
}
