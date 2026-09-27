import type { PropsWithChildren } from "react";

type SectionTone = "light" | "surface" | "dark";

type SectionProps = PropsWithChildren<{
  tone?: SectionTone;
  /** "page-top": primeira seção da página, com respiro menor abaixo do header. */
  spacing?: "default" | "page-top";
  className?: string;
  containerClassName?: string;
  id?: string;
}>;

const toneClasses: Record<SectionTone, string> = {
  light: "bg-white",
  surface: "bg-surface",
  dark: "bg-deep-forest text-mint-white",
};

const spacingClasses = {
  default: "py-20 md:py-28",
  "page-top": "pt-16 pb-20 md:pt-20 md:pb-28",
};

/** Seção com espaçamento e fundo padronizados — mantém o mesmo ritmo vertical em todas as páginas. */
export function Section({ tone = "light", spacing = "default", className = "", containerClassName = "", id, children }: SectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${toneClasses[tone]} ${spacingClasses[spacing]} ${className}`}>
      <div className={`relative mx-auto max-w-7xl px-5 ${containerClassName}`}>{children}</div>
    </section>
  );
}
