"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { PageKey } from "../../content/types";
import type { NavItem } from "../../routes/navigation";

type DesktopNavProps = {
  items: NavItem[];
  activeKey: PageKey;
};

type IndicatorPosition = { left: number; width: number };

/** Inset horizontal do link (px-3), para a barra acompanhar só o texto. */
const LINK_INSET_PX = 12;

/** Navegação desktop com uma barra verde que desliza até o item em hover e volta para a página atual. */
export function DesktopNav({ items, activeKey }: DesktopNavProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const [hoveredKey, setHoveredKey] = useState<PageKey | null>(null);
  const [indicator, setIndicator] = useState<IndicatorPosition | null>(null);
  const [canAnimate, setCanAnimate] = useState(false);

  const targetKey = hoveredKey ?? (items.some((item) => item.key === activeKey) ? activeKey : null);

  const measure = useCallback(() => {
    const link = targetKey ? navRef.current?.querySelector<HTMLElement>(`[data-nav-key="${targetKey}"]`) : null;
    setIndicator(link ? { left: link.offsetLeft + LINK_INSET_PX, width: link.offsetWidth - LINK_INSET_PX * 2 } : null);
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

  return (
    <nav
      ref={navRef}
      className="relative hidden items-center gap-1 text-sm font-medium lg:flex"
      onMouseLeave={() => setHoveredKey(null)}
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <Link
            key={item.key}
            href={item.href}
            data-nav-key={item.key}
            onMouseEnter={() => setHoveredKey(item.key)}
            onFocus={() => setHoveredKey(item.key)}
            onBlur={() => setHoveredKey(null)}
            aria-current={isActive ? "page" : undefined}
            className={`whitespace-nowrap rounded-sm px-3 py-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green ${
              isActive
                ? "text-text-primary group-data-[on-dark=true]/header:text-mint-white"
                : "text-text-secondary hover:text-text-primary group-data-[on-dark=true]/header:text-mint-white/60 group-data-[on-dark=true]/header:hover:text-mint-white"
            }`}
          >
            {item.label}
          </Link>
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
