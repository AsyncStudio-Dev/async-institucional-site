import type { MetadataRoute } from "next";
import { siteConfig } from "../config/site";
import type { PageKey } from "../content/types";
import { localizedPaths } from "../routes/paths";

const PRIORITY: Record<PageKey, number> = {
  home: 1.0,
  offers: 0.95,
  services: 0.9,
  bizManager: 0.9,
  projects: 0.85,
  about: 0.75,
  contact: 0.8,
  privacy: 0.3,
  terms: 0.3,
};

const CHANGE_FREQUENCY: Record<PageKey, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  home: "weekly",
  offers: "weekly",
  services: "monthly",
  bizManager: "weekly",
  projects: "monthly",
  about: "monthly",
  contact: "monthly",
  privacy: "yearly",
  terms: "yearly",
};

const LAST_MODIFIED = new Date("2026-11-19T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(localizedPaths.pt) as PageKey[];

  return keys.flatMap((page) => {
    const ptPath = localizedPaths.pt[page];
    const enPath = localizedPaths.en[page];
    const ptUrl = `${siteConfig.domain}${ptPath === "/" ? "" : ptPath}` || siteConfig.domain;
    const enUrl = `${siteConfig.domain}${enPath}`;

    return [
      {
        url: ptUrl,
        lastModified: LAST_MODIFIED,
        changeFrequency: CHANGE_FREQUENCY[page],
        priority: PRIORITY[page],
        alternates: {
          languages: {
            "pt-BR": ptUrl,
            en: enUrl,
          },
        },
      },
      {
        url: enUrl,
        lastModified: LAST_MODIFIED,
        changeFrequency: CHANGE_FREQUENCY[page],
        priority: Number(Math.max(0.2, PRIORITY[page] - 0.1).toFixed(2)),
        alternates: {
          languages: {
            "pt-BR": ptUrl,
            en: enUrl,
          },
        },
      },
    ];
  });
}
