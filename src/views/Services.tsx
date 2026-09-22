import type { SiteContent } from "../content/types";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { Reveal } from "../components/ui/Reveal";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ServiceRow } from "../components/ui/ServiceRow";

type ServicesProps = {
  content: SiteContent;
};

type Service = SiteContent["services"][number];

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

function getServiceAnchorId(service: Service) {
  if (service.title.includes("Sites") || service.title.includes("Business websites")) return "sites-institucionais";
  if (service.title.includes("Landing")) return "landing-pages";
  if (service.title.includes("Sistemas") || service.title.includes("Custom systems")) return "sistemas-sob-medida";
  if (service.title.includes("Web apps")) return "web-apps";
  if (service.title.includes("Automa") || service.title.includes("Internal automations")) return "automacoes-internas";
  if (service.title.includes("SaaS")) return "saas-mvp";
  return "modernizacao-sistemas";
}

export function Services({ content }: ServicesProps) {
  const copy = pageCopy[content.locale];
  const splitAt = Math.ceil(content.services.length / 2);
  const leftServices = content.services.slice(0, splitAt);
  const rightServices = content.services.slice(splitAt);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 md:pb-16 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-3 text-async-green">{copy.eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-text-primary md:text-6xl">{copy.heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">{copy.heroSubtitle}</p>
          <div className="mt-7 flex justify-center">
            <CTAWhatsApp content={content} label={copy.primaryCta} message={content.whatsappMessages.hero} size="large" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <Reveal>
          <SectionTitle eyebrow={copy.listEyebrow} title={copy.listTitle} description={copy.listDescription} />
        </Reveal>
        <Reveal delayMs={80}>
          <div className="grid gap-4 lg:grid-cols-2">
            {[leftServices, rightServices].map((column, columnIndex) => (
              <Card key={columnIndex} className="!p-0 divide-y divide-border">
                {column.map((service) => (
                  <ServiceRow key={service.title} id={getServiceAnchorId(service)} className="scroll-mt-28 p-5 sm:p-6 md:scroll-mt-32">
                    <h3 className="font-display text-lg font-semibold text-text-primary">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-text-secondary">{service.summary}</p>
                  </ServiceRow>
                ))}
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-4 md:pb-24">
        <Card className="px-6 py-10 text-center md:px-10 md:py-14">
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold leading-tight text-text-primary md:text-4xl">{copy.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">{copy.finalDescription}</p>
          <CTAWhatsApp content={content} label={copy.finalCta} message={content.whatsappMessages.contactCta} className="mt-7" size="large" />
        </Card>
      </section>
    </>
  );
}
