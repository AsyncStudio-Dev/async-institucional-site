import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "secondary" | "dark-glass";
    size?: "default" | "large";
  }
>;

export function Button({ children, variant = "primary", size = "default", className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-async font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-async-frost focus:ring-offset-2";
  const sizes = {
    default: "min-h-11 px-5 py-3 text-sm",
    large: "min-h-12 px-6 py-3.5 text-base",
  };
  const variants = {
    primary:
      "bg-gradient-to-r from-async-frost to-ice-glacier text-white shadow-frost hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(138,108,255,0.28)]",
    secondary:
      "border border-ice-mist bg-white/80 text-async-ink shadow-sm hover:-translate-y-0.5 hover:border-async-frost hover:bg-white hover:text-async-frost",
    "dark-glass":
      "border border-white/20 bg-white/10 text-white shadow-sm hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15",
  };

  return (
    <a className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
