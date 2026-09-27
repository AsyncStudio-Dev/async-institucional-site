import type { ReactNode } from "react";
import type { SiteContent } from "../../content/types";
import { AsyncFlow } from "../brand/AsyncFlow";
import { CTAWhatsApp } from "./CTAWhatsApp";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type FinalCTAProps = {
  content: SiteContent;
  title: string;
  description: string;
  ctaLabel: string;
  message: string;
  eyebrow?: string;
  /** Linha extra abaixo do botão (ex.: e-mail e Instagram na Home). */
  footnote?: ReactNode;
};

/** Fechamento padrão das páginas: seção Deep Forest com o Async Flow animado ao fundo. */
export function FinalCTA({ content, title, description, ctaLabel, message, eyebrow, footnote }: FinalCTAProps) {
  return (
    <Section tone="dark">
      <AsyncFlow variant="mono" className="pointer-events-none absolute inset-x-[-20%] top-1/2 h-[28rem] w-[140%] -translate-y-1/2" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        {eyebrow ? <p className="eyebrow text-async-green">{eyebrow}</p> : null}
        <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-mint-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-mint-white/70">{description}</p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CTAWhatsApp content={content} label={ctaLabel} message={message} size="large" />
          {footnote}
        </div>
      </Reveal>
    </Section>
  );
}
