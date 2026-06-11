"use client";

import { useState } from "react";
import Link from "next/link";
import type { PageKey, SiteContent } from "../../content/types";
import { localizedPaths } from "../../routes/paths";
import { CTAWhatsApp } from "../ui/CTAWhatsApp";

type MobileMenuProps = {
  content: SiteContent;
  page: PageKey;
};

export function MobileMenu({ content, page }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const paths = localizedPaths[content.locale];
  const menuId = "mobile-navigation";
  const menuLabel = open ? content.ui.mobileMenu.close : content.ui.mobileMenu.open;

  const navItems: Array<{ key: PageKey; label: string; href: string }> = [
    { key: "home", label: content.nav.home, href: paths.home },
    { key: "services", label: content.nav.services, href: paths.services },
    { key: "projects", label: content.nav.projects, href: paths.projects },
    { key: "about", label: content.nav.about, href: paths.about },
    { key: "contact", label: content.nav.contact, href: paths.contact },
  ];

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-async border border-ice-mist bg-white/80 text-async-ink shadow-sm transition hover:border-async-frost hover:bg-white"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={menuLabel}
      >
        <span className="grid gap-1.5" aria-hidden="true">
          <span className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>
      {open ? (
        <div
          id={menuId}
          className="liquid-glass absolute left-5 right-5 top-20 rounded-2xl p-5"
        >
          <nav className="grid gap-4 text-sm font-medium text-async-graphite">
            {navItems.map((item) => (
              <Link
                key={item.key}
                onClick={() => setOpen(false)}
                href={item.href}
                className={`rounded-async px-3 py-2 ${page === item.key ? "bg-ice-blue/55 text-async-ink" : ""}`}
                aria-current={page === item.key ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <CTAWhatsApp content={content} label={content.nav.cta} message={content.whatsappMessages.header} className="mt-5 w-full" />
        </div>
      ) : null}
    </div>
  );
}
