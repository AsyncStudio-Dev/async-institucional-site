import type { PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<{
  className?: string;
  variant?: "default" | "quiet" | "elevated" | "tinted" | "dark";
}>;

export function GlassCard({ children, className = "", variant = "default" }: GlassCardProps) {
  const variants = {
    default: "liquid-glass",
    quiet: "liquid-glass liquid-glass-quiet",
    elevated: "liquid-glass liquid-glass-elevated",
    tinted: "liquid-glass liquid-glass-tinted",
    dark: "liquid-glass liquid-glass-dark",
  };

  return (
    <div className={`rounded-2xl ${variants[variant]} p-6 ${className}`}>
      {children}
    </div>
  );
}
