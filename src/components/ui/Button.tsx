import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "tertiary";
    tone?: "light" | "dark";
    size?: "default" | "large";
    withArrow?: boolean;
  }
>;

/**
 * Três níveis de ênfase (Brand Book §22 / componente Button do design system):
 * primário (fundo async-green, texto deep-forest — nunca branco, contraste
 * insuficiente), secundário (borda, transparente) e terciário (link com seta).
 */
export function Button({
  children,
  variant = "primary",
  tone = "light",
  size = "default",
  withArrow = variant === "tertiary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "font-display inline-flex items-center justify-center gap-2 font-medium transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  if (variant === "tertiary") {
    const tertiaryColor = tone === "dark" ? "text-async-green hover:text-light-mint" : "text-async-green hover:text-async-green/80";
    return (
      <a className={`${base} rounded-sm text-[15px] ${tertiaryColor} ${className}`} {...props}>
        {children}
        {withArrow ? <span aria-hidden="true">→</span> : null}
      </a>
    );
  }

  const sizes = {
    default: "min-h-11 px-5 py-3 text-[15px]",
    large: "min-h-12 px-6 py-3.5 text-base",
  };

  const variants = {
    primary: "bg-async-green text-deep-forest hover:brightness-105 active:brightness-95",
    secondary:
      tone === "dark"
        ? "border border-mint-white/25 text-mint-white hover:border-mint-white/50 hover:bg-mint-white/5"
        : "border border-sage-gray/30 text-text-primary hover:border-async-green hover:text-deep-forest",
  };

  return (
    <a className={`${base} rounded-sm ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
      {withArrow ? <span aria-hidden="true">→</span> : null}
    </a>
  );
}
