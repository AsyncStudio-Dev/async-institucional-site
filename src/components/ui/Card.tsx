import type { PropsWithChildren } from "react";

type CardTone = "light" | "dark";

type CardProps = PropsWithChildren<{
  className?: string;
  /** light: card claro (fundo branco/mint-white). dark: card sobre seção Deep Forest. */
  tone?: CardTone;
}>;

/**
 * Card claro: fundo branco/Mint White, texto Deep Forest, borda suave, sombra mínima.
 * Card escuro: Deep Forest, borda Light Mint com opacidade baixa, título Mint White.
 * Sem glassmorphism, blur ou gradientes — Brand Book §16/§42.
 */
export function Card({ children, className = "", tone = "light" }: CardProps) {
  return <div className={`${cardClassName({ tone })} ${className}`}>{children}</div>;
}

/**
 * Classes do card, para elementos clicáveis (links) que precisam do mesmo visual.
 * `interactive` dá o retorno de hover: leve elevação e borda Async Green — só
 * borda, sombra e movimento, mantendo a regra de não usar gradiente/blur.
 */
export function cardClassName({ tone = "light", interactive = false }: { tone?: CardTone; interactive?: boolean }) {
  const toneClass =
    tone === "dark"
      ? "border-light-mint/[0.12] bg-white/[0.03] text-mint-white"
      : "border-border bg-white text-text-primary shadow-card";
  const interactiveClass = interactive
    ? "transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-async-green/50 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green"
    : "";

  return `rounded-md border p-6 ${toneClass} ${interactiveClass}`;
}
