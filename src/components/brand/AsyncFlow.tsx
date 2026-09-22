"use client";

import { useId } from "react";

type AsyncFlowProps = {
  variant?: "hero" | "divider" | "mono";
  className?: string;
};

/**
 * Async Flow — elemento gráfico proprietário da marca (Brand Book §12):
 * faixas contínuas que entram, mudam de direção e continuam. Recriado a
 * partir da especificação do design system (curvas em camadas, gradiente
 * Deep Forest → Async Green → Light Mint) já que os SVGs originais do
 * grupo de assets "Graphics" não puderam ser baixados por este canal.
 *
 * Regra de intensidade: se o efeito é percebido antes do conteúdo, está
 * forte demais — por isso opacidades baixas e uso decorativo, nunca atrás
 * de texto sem controle de contraste.
 */
export function AsyncFlow({ variant = "hero", className = "" }: AsyncFlowProps) {
  const uid = useId();
  const gradientId = `async-flow-gradient-${uid}`;

  if (variant === "divider") {
    return (
      <svg viewBox="0 0 1600 160" className={className} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--async-green)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--async-green)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--light-mint)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 90 C 260 40, 420 140, 700 90 S 1140 30, 1600 90"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "mono") {
    return (
      <svg viewBox="0 0 1600 600" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="var(--mint-white)" strokeLinecap="round">
          <path d="M-80 260 C 220 140, 420 400, 720 260 S 1220 120, 1680 260" strokeWidth="2" opacity="0.10" />
          <path d="M-80 360 C 260 460, 480 220, 800 360 S 1300 480, 1680 360" strokeWidth="1.5" opacity="0.07" />
          <path d="M-80 180 C 300 100, 560 300, 900 180 S 1400 60, 1680 180" strokeWidth="1.5" opacity="0.06" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1600 600" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="var(--deep-forest)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--async-green)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--light-mint)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`${gradientId}-soft`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--light-mint)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--light-mint)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--async-green)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        <path
          d="M-100 300 C 220 160, 460 440, 780 300 S 1280 150, 1700 300"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
        />
        <path
          d="M-100 400 C 260 500, 520 260, 860 400 S 1360 520, 1700 400"
          stroke={`url(#${gradientId}-soft)`}
          strokeWidth="2"
        />
        <path
          d="M-100 200 C 300 120, 600 300, 940 200 S 1440 100, 1700 200"
          stroke="var(--light-mint)"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
