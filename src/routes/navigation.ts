import type { PageKey, SiteContent } from "../content/types";
import { getBizManagerLaunchCopy } from "../lib/bizmanager";
import { localizedPaths } from "./paths";

export type NavSubItem = {
  key: PageKey;
  label: string;
  description: string;
  href: string;
  /** Selo curto ao lado do nome (ex.: "Lançamento em breve"). */
  badge?: string;
};

export type NavItem = {
  key: PageKey;
  label: string;
  href: string;
  /** Subpáginas mostradas no dropdown (desktop) e recuadas no menu mobile. */
  children?: NavSubItem[];
};

export function getMainNavItems(content: SiteContent): NavItem[] {
  const paths = localizedPaths[content.locale];
  return [
    { key: "home", label: content.nav.home, href: paths.home },
    { key: "services", label: content.nav.services, href: paths.services },
    {
      key: "projects",
      label: content.nav.projects,
      href: paths.projects,
      children: [
        { key: "projects", label: content.nav.projectsOverview, description: content.nav.projectsOverviewDescription, href: paths.projects },
        {
          key: "bizManager",
          label: content.bizManager.name,
          description: content.bizManager.tagline,
          href: paths.bizManager,
          badge: getBizManagerLaunchCopy(content).badge,
        },
      ],
    },
    { key: "about", label: content.nav.about, href: paths.about },
    { key: "contact", label: content.nav.contact, href: paths.contact },
  ];
}

/** Item do menu principal que representa a página atual (o pai, quando a página é uma subpágina). */
export function getActiveNavKey(items: NavItem[], page: PageKey): PageKey | null {
  const match = items.find((item) => item.key === page || item.children?.some((child) => child.key === page));
  return match?.key ?? null;
}
