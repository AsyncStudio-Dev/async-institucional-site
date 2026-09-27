"use client";

import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type HeaderFrameProps = PropsWithChildren<{
  /** Evita o flash branco → escuro na Home, cujo hero começa logo abaixo do header. */
  startsOverDark?: boolean;
}>;

const SCROLLED_THRESHOLD_PX = 8;
const DARK_SECTION_SELECTOR = '[data-header-theme="dark"]';

/**
 * Casca do header: fica escura enquanto passa por cima de uma seção marcada
 * com data-header-theme="dark" (o hero) e compacta ao rolar. Os filhos reagem
 * via variantes `group-data-[on-dark=true]/header:` e `group-data-[scrolled=true]/header:`.
 */
export function HeaderFrame({ startsOverDark = false, children }: HeaderFrameProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(startsOverDark);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      setIsScrolled(window.scrollY > SCROLLED_THRESHOLD_PX);
      setIsOverDark(isDarkSectionAt(headerBottom));
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const surfaceClass = isOverDark
    ? "border-border-dark bg-deep-forest"
    : `border-border bg-white/85 backdrop-blur-md ${isScrolled ? "shadow-[0_8px_24px_rgba(11,15,11,0.06)]" : ""}`;

  return (
    <header
      ref={headerRef}
      data-scrolled={isScrolled}
      data-on-dark={isOverDark}
      className={`group/header sticky top-0 z-30 border-b transition-[background-color,border-color,box-shadow] duration-300 ${surfaceClass}`}
    >
      {children}
    </header>
  );
}

function isDarkSectionAt(y: number) {
  return Array.from(document.querySelectorAll(DARK_SECTION_SELECTOR)).some((section) => {
    const { top, bottom } = section.getBoundingClientRect();
    return top <= y && bottom > y;
  });
}
