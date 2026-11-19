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
    "group/button font-display inline-flex items-center justify-center gap-2 text-center font-medium leading-snug transition-[transform,background-color,border-color,color] duration-200 ease-out active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const textSizes = {
    default: "text-[15px]",
    large: "text-base",
  };

  if (variant === "tertiary") {
    const tertiaryColor = tone === "dark" ? "text-async-green hover:text-light-mint" : "text-[#15803d] hover:text-deep-forest";
    return (
      <a className={`${base} rounded-sm ${textSizes[size]} ${tertiaryColor} ${className}`} {...props}>
        {children}
        {withArrow ? <ButtonArrow /> : null}
      </a>
    );
  }

  const sizes = {
    default: `min-h-11 px-6 py-2.5 sm:whitespace-nowrap ${textSizes.default}`,
    large: `min-h-12 px-7 py-3 sm:whitespace-nowrap ${textSizes.large}`,
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
      {withArrow ? <ButtonArrow /> : null}
    </a>
  );
}

function ButtonArrow() {
  return (
    <span aria-hidden="true" className="transition-transform duration-200 ease-out group-hover/button:translate-x-1">
      →
    </span>
  );
}
