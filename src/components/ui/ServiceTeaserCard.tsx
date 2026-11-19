import Link from "next/link";
import { cardClassName } from "./Card";

type ServiceTeaserCardProps = {
  index: number;
  title: string;
  summary: string;
  href: string;
};

/** Card de serviço da Home: resumo curto que leva ao detalhe em /servicos#slug. */
export function ServiceTeaserCard({ index, title, summary, href }: ServiceTeaserCardProps) {
  return (
    <Link href={href} className={`group flex h-full flex-col ${cardClassName({ interactive: true })}`}>
      <span className="font-mono-brand text-sm text-[#15803d]">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="font-display mt-4 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">{summary}</p>
      <span
        aria-hidden="true"
        className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary transition-[transform,border-color,color,background-color] duration-300 group-hover:translate-x-1 group-hover:border-async-green group-hover:bg-async-green group-hover:text-deep-forest"
      >
        →
      </span>
    </Link>
  );
}
