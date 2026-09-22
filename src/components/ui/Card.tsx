import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
  /** light: card claro (fundo branco/mint-white). dark: card sobre seção Deep Forest. */
  tone?: "light" | "dark";
}>;

/**
 * Card claro: fundo branco/Mint White, texto Deep Forest, borda suave, sombra mínima.
 * Card escuro: Deep Forest, borda Light Mint com opacidade baixa, título Mint White.
 * Sem glassmorphism, blur ou gradientes — Brand Book §16/§42.
 */
export function Card({ children, className = "", tone = "light" }: CardProps) {
  const toneClass =
    tone === "dark"
      ? "border-light-mint/[0.12] bg-white/[0.03] text-mint-white"
      : "border-border bg-white text-text-primary shadow-card";

  return <div className={`rounded-md border p-6 ${toneClass} ${className}`}>{children}</div>;
}
