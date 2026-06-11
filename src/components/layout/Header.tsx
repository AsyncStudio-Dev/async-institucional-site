import Link from "next/link";
import type { PageKey, SiteContent } from "../../content/types";
import { localizedPaths } from "../../routes/paths";
import { CTAWhatsApp } from "../ui/CTAWhatsApp";
import { BrandLogo } from "./BrandLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

type HeaderProps = {
  content: SiteContent;
  page: PageKey;
};

export function Header({ content, page }: HeaderProps) {
  const paths = localizedPaths[content.locale];
  const navItems: Array<{ key: PageKey; label: string; href: string }> = [
    { key: "home", label: content.nav.home, href: paths.home },
    { key: "services", label: content.nav.services, href: paths.services },
    { key: "projects", label: content.nav.projects, href: paths.projects },
    { key: "about", label: content.nav.about, href: paths.about },
    { key: "contact", label: content.nav.contact, href: paths.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-ice-mist/80 bg-ice-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <BrandLogo to={paths.home} />
        <nav className="hidden items-center gap-1 text-sm font-medium text-async-graphite md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`rounded-async px-3 py-2 transition hover:bg-ice-blue/45 hover:text-async-ink ${
                page === item.key ? "bg-ice-blue/55 text-async-ink shadow-sm ring-1 ring-ice-mist" : ""
              }`}
              aria-current={page === item.key ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={content.locale} page={page} />
          <CTAWhatsApp className="hidden md:inline-flex" content={content} label={content.nav.cta} message={content.whatsappMessages.header} />
          <MobileMenu content={content} page={page} />
        </div>
      </div>
    </header>
  );
}
