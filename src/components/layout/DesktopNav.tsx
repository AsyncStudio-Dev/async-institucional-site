"use client";

import { useCallback, useEffect, useRef, useState, type FocusEvent } from "react";
import Link from "next/link";
import type { PageKey } from "../../content/types";
import { getActiveNavKey, type NavItem } from "../../routes/navigation";

type DesktopNavProps = {
  items: NavItem[];
  activeKey: PageKey;
  /** Rótulo acessível do botão que abre um submenu. */
  submenuToggleLabel: string;
};

type IndicatorPosition = { left: number; width: number };

/** Inset horizontal do link (px-3), para a barra acompanhar só o texto. */
const LINK_INSET_PX = 12;
/** Tempo para o mouse atravessar o vão entre o item e o painel sem fechar o submenu. */
const SUBMENU_CLOSE_DELAY_MS = 140;

/** Navegação desktop com uma barra verde que desliza até o item em hover e volta para a página atual. */
export function DesktopNav({ items, activeKey, submenuToggleLabel }: DesktopNavProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | undefined>(undefined);
  const [hoveredKey, setHoveredKey] = useState<PageKey | null>(null);
  const [openKey, setOpenKey] = useState<PageKey | null>(null);
  const [indicator, setIndicator] = useState<IndicatorPosition | null>(null);
  const [canAnimate, setCanAnimate] = useState(false);

  const activeNavKey = getActiveNavKey(items, activeKey);
  const targetKey = hoveredKey ?? activeNavKey;

  const measure = useCallback(() => {
    const nav = navRef.current;
    const link = targetKey ? nav?.querySelector<HTMLElement>(`[data-nav-key="${targetKey}"]`) : null;
    if (!nav || !link) {
      setIndicator(null);
      return;
    }
    // Relativo ao nav (e não offsetLeft), porque itens com submenu ficam dentro de um wrapper posicionado
    const left = link.getBoundingClientRect().left - nav.getBoundingClientRect().left;
    setIndicator({ left: left + LINK_INSET_PX, width: link.offsetWidth - LINK_INSET_PX * 2 });
  }, [targetKey]);

  useEffect(() => {
    measure();
    const frame = requestAnimationFrame(() => setCanAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [measure]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!openKey) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenKey(null);
      navRef.current?.querySelector<HTMLElement>(`[data-submenu-toggle="${openKey}"]`)?.focus();
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenKey(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [openKey]);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  const openSubmenu = (key: PageKey) => {
    window.clearTimeout(closeTimerRef.current);
    setOpenKey(key);
  };
  const scheduleSubmenuClose = () => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenKey(null), SUBMENU_CLOSE_DELAY_MS);
  };
  const closeWhenFocusLeaves = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenKey(null);
  };

  const linkClassName = (isActive: boolean) =>
    `whitespace-nowrap rounded-sm px-3 py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green ${
      isActive
        ? "text-text-primary group-data-[on-dark=true]/header:text-mint-white"
        : "text-text-secondary hover:text-text-primary group-data-[on-dark=true]/header:text-mint-white/60 group-data-[on-dark=true]/header:hover:text-mint-white"
    }`;

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center gap-1 text-sm font-medium lg:flex"
      onMouseLeave={() => setHoveredKey(null)}
    >
      {items.map((item) => {
        const isActive = item.key === activeNavKey;
        const link = (
          <Link
            href={item.href}
            data-nav-key={item.key}
            onMouseEnter={() => setHoveredKey(item.key)}
            onFocus={() => setHoveredKey(item.key)}
            onBlur={() => setHoveredKey(null)}
            aria-current={item.key === activeKey ? "page" : undefined}
            className={linkClassName(isActive)}
          >
            {item.label}
          </Link>
        );

        if (!item.children?.length) return <div key={item.key}>{link}</div>;

        const isOpen = openKey === item.key;
        const submenuId = `nav-submenu-${item.key}`;

        return (
          <div
            key={item.key}
            className="relative flex items-center"
            onMouseEnter={() => openSubmenu(item.key)}
            onMouseLeave={scheduleSubmenuClose}
            onBlur={closeWhenFocusLeaves}
          >
            {link}
            <button
              type="button"
              data-submenu-toggle={item.key}
              aria-label={submenuToggleLabel}
              aria-expanded={isOpen}
              aria-controls={submenuId}
              onClick={() => (isOpen ? setOpenKey(null) : openSubmenu(item.key))}
              className="-ml-2 rounded-sm p-1 text-text-secondary transition-colors duration-200 hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green group-data-[on-dark=true]/header:text-mint-white/60 group-data-[on-dark=true]/header:hover:text-mint-white"
            >
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              id={submenuId}
              className={`absolute left-1/2 top-full z-40 w-80 -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-200 ease-out ${
                isOpen ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0"
              }`}
            >
              <ul className="rounded-md border border-border bg-white p-2 shadow-card">
                {item.children.map((child) => {
                  const isCurrent = child.key === activeKey;
                  return (
                    <li key={child.key}>
                      <Link
                        href={child.href}
                        onClick={() => setOpenKey(null)}
                        aria-current={isCurrent ? "page" : undefined}
                        className={`block rounded-sm px-3 py-2.5 transition-colors duration-200 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green ${
                          isCurrent ? "bg-surface-soft" : ""
                        }`}
                      >
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-semibold text-text-primary">{child.label}</span>
                          {child.badge ? (
                            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-text-secondary">
                              <span className="h-1.5 w-1.5 rounded-full bg-async-green" aria-hidden="true" />
                              {child.badge}
                            </span>
                          ) : null}
                        </span>
                        <span className="mt-0.5 block text-xs font-normal leading-5 text-text-secondary">{child.description}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0.5 left-0 h-0.5 rounded-full bg-async-green ${
          canAnimate ? "transition-[transform,width,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" : ""
        } ${indicator ? "opacity-100" : "opacity-0"}`}
        style={indicator ? { width: indicator.width, transform: `translateX(${indicator.left}px)` } : undefined}
      />
    </nav>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
