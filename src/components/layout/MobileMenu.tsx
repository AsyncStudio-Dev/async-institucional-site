"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { PageKey, SiteContent } from "../../content/types";
import { getActiveNavKey, type NavItem } from "../../routes/navigation";
import { CTAWhatsApp } from "../ui/CTAWhatsApp";

type MobileMenuProps = {
  content: SiteContent;
  page: PageKey;
  navItems: NavItem[];
};

export function MobileMenu({ content, page, navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuId = "mobile-navigation";
  const menuLabel = open ? content.ui.mobileMenu.close : content.ui.mobileMenu.open;
  const activeNavKey = getActiveNavKey(navItems, page);

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border text-text-primary transition duration-200 hover:border-async-green group-data-[on-dark=true]/header:border-border-dark group-data-[on-dark=true]/header:text-mint-white"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={menuLabel}
      >
        <span className="grid gap-1.5" aria-hidden="true">
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>
      <div
        id={menuId}
        className={`absolute left-5 right-5 top-full mt-2 origin-top rounded-md border border-border bg-white p-5 shadow-card transition-[opacity,transform,visibility] duration-200 ease-out ${
          open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-[0.98] opacity-0"
        }`}
      >
        <nav className="grid gap-1 text-sm font-medium text-text-secondary">
          {navItems.map((item) => {
            // Com subpáginas, o item vira um título de grupo e as subpáginas (incluindo a visão geral) aparecem recuadas
            if (item.children?.length) {
              return (
                <div key={item.key} className="py-1">
                  <p className={`px-3 py-2 ${activeNavKey === item.key ? "text-text-primary" : ""}`}>{item.label}</p>
                  <div className="ml-3 grid gap-1 border-l border-border pl-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.key}
                        onClick={() => setOpen(false)}
                        href={child.href}
                        className={`flex items-center justify-between gap-3 rounded-sm px-3 py-2 transition duration-200 hover:bg-surface hover:text-text-primary ${
                          page === child.key ? "bg-surface-soft text-text-primary" : ""
                        }`}
                        aria-current={page === child.key ? "page" : undefined}
                      >
                        {child.label}
                        {child.badge ? (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-text-secondary">
                            <span className="h-1.5 w-1.5 rounded-full bg-async-green" aria-hidden="true" />
                            {child.badge}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.key}
                onClick={() => setOpen(false)}
                href={item.href}
                className={`flex items-center justify-between rounded-sm px-3 py-2.5 transition duration-200 hover:bg-surface hover:text-text-primary ${
                  page === item.key ? "bg-surface-soft text-text-primary" : ""
                }`}
                aria-current={page === item.key ? "page" : undefined}
              >
                {item.label}
                {page === item.key ? <span className="h-1.5 w-1.5 rounded-full bg-async-green" aria-hidden="true" /> : null}
              </Link>
            );
          })}
        </nav>
        <CTAWhatsApp content={content} label={content.nav.cta} message={content.whatsappMessages.header} className="mt-5 w-full" />
      </div>
    </div>
  );
}
