import type { SiteContent } from "../content/types";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { FinalCTA } from "../components/ui/FinalCTA";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ServiceRow } from "../components/ui/ServiceRow";

type ServicesProps = {
  content: SiteContent;
};

const pageCopy = {
  pt: {
    eyebrow: "Serviços Async Studio",
    heroTitle: "Soluções digitais para empresas que querem sair do improviso",
    heroSubtitle:
      "Da presença digital ao sistema sob medida, a Async Studio cria soluções para empresas que precisam vender melhor, organizar processos e crescer com mais clareza.",
    primaryCta: "Falar com a Async",
    listEyebrow: "O que fazemos",
    listTitle: "Nossos serviços",
    listDescription: "Da visibilidade comercial à operação interna, cada frente se conecta ao momento certo do negócio.",
    finalTitle: "Pronto para transformar uma ideia, processo ou problema em solução digital?",
    finalDescription:
      "Conte para a Async o que você quer construir, organizar ou melhorar. A gente entende seu cenário e indica o caminho mais simples para começar.",
    finalCta: "Falar com a Async",
  },
  en: {
    eyebrow: "Async Studio services",
    heroTitle: "Digital solutions for companies ready to move beyond improvisation",
    heroSubtitle:
      "From digital presence to custom systems, Async Studio builds solutions for companies that need to sell better, organize processes and grow with more clarity.",
    primaryCta: "Talk to Async",
    listEyebrow: "What we do",
    listTitle: "Our services",
    listDescription: "From commercial visibility to internal operations, each front connects to the right business moment.",
    finalTitle: "Should we find the right solution for your moment?",
    finalDescription: "Tell Async what you want to build, improve or organize. From there, we indicate the simplest and safest path.",
    finalCta: "Talk to Async",
  },
} satisfies Record<
  SiteContent["locale"],
  {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    primaryCta: string;
    listEyebrow: string;
    listTitle: string;
    listDescription: string;
    finalTitle: string;
    finalDescription: string;
    finalCta: string;
  }
>;

export function Services({ content }: ServicesProps) {
  const copy = pageCopy[content.locale];
  const splitAt = Math.ceil(content.services.length / 2);
  const serviceColumns = [
    { offset: 0, services: content.services.slice(0, splitAt) },
    { offset: splitAt, services: content.services.slice(splitAt) },
  ];

  return (
    <>
      <Section spacing="page-top" className="!pb-12 md:!pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3 text-async-green">{copy.eyebrow}</p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-text-primary md:text-6xl">{copy.heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">{copy.heroSubtitle}</p>
          <div className="mt-7 flex justify-center">
            <CTAWhatsApp content={content} label={copy.primaryCta} message={content.whatsappMessages.hero} size="large" />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionTitle eyebrow={copy.listEyebrow} title={copy.listTitle} description={copy.listDescription} />
        </Reveal>
        <Reveal delayMs={80}>
          <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
            {serviceColumns.map((column) => (
              <Card key={column.offset} className="!p-0 divide-y divide-border overflow-hidden">
                {column.services.map((service, index) => (
                  <ServiceRow
                    key={service.slug}
                    service={service}
                    index={column.offset + index}
                    labels={content.ui.serviceCard}
                    className="scroll-mt-28 md:scroll-mt-32"
                  />
                ))}
              </Card>
            ))}
          </div>
        </Reveal>
      </Section>

      <FinalCTA
        content={content}
        title={copy.finalTitle}
        description={copy.finalDescription}
        ctaLabel={copy.finalCta}
        message={content.whatsappMessages.contactCta}
      />
    </>
  );
}
