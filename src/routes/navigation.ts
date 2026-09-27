import type { PageKey, SiteContent } from "../content/types";
import { localizedPaths } from "./paths";

export type NavItem = { key: PageKey; label: string; href: string };

export function getMainNavItems(content: SiteContent): NavItem[] {
  const paths = localizedPaths[content.locale];
  return [
    { key: "home", label: content.nav.home, href: paths.home },
    { key: "services", label: content.nav.services, href: paths.services },
    { key: "projects", label: content.nav.projects, href: paths.projects },
    { key: "about", label: content.nav.about, href: paths.about },
    { key: "contact", label: content.nav.contact, href: paths.contact },
  ];
}
