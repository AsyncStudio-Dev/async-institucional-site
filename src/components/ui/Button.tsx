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
    "font-display inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,border-color,color] duration-200 ease-out active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const textSizes = {
    default: "text-[15px]",
    large: "text-base",
  };

  if (variant === "tertiary") {
    const tertiaryColor = tone === "dark" ? "text-async-green hover:text-light-mint" : "text-async-green hover:text-async-green/80";
    return (
      <a className={`${base} rounded-sm ${textSizes[size]} ${tertiaryColor} ${className}`} {...props}>
        {children}
        {withArrow ? <span aria-hidden="true">→</span> : null}
      </a>
    );
  }

  const sizes = {
    default: `h-11 px-6 ${textSizes.default}`,
    large: `h-12 px-7 ${textSizes.large}`,
  };

  const variants = {
    primary: "bg-async-green text-deep-forest hover:bg-light-mint",
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
