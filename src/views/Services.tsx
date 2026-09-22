import type { SiteContent } from "../content/types";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { Reveal } from "../components/ui/Reveal";
import { createWhatsAppLink } from "../utils/whatsapp";

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
    secondaryCta: "Encontrar meu serviço ideal",
    challengeTitle: "Qual desafio você quer resolver agora?",
    challengeDescription:
      "Antes de escolher uma solução, encontre o problema que mais se parece com o seu momento atual.",
    specialTitle: "Não sabe exatamente o que precisa? Tudo bem.",
    specialDescription:
      "A Async Studio pode entender seu momento atual, identificar o problema principal e indicar o caminho mais simples para transformar sua ideia, operação ou presença digital em uma solução funcional.",
    specialCta: "Falar com a Async pelo WhatsApp",
    processTitle: "Como conduzimos seu projeto",
    processDescription:
      "Um processo enxuto para transformar diagnóstico em direção, construção e evolução com clareza.",
    finalTitle: "Pronto para transformar uma ideia, processo ou problema em solução digital?",
    finalDescription:
      "Conte para a Async o que você quer construir, organizar ou melhorar. A gente entende seu cenário e indica o caminho mais simples para começar.",
    finalCta: "Falar com a Async",
    mapTitle: "Mapa de soluções digitais",
    mapDescription: "Da visibilidade comercial à operação interna, cada frente se conecta ao momento certo do negócio.",
    routesLabel: "Caminhos principais",
    serviceCtaMessage: "Olá, Async Studio! Vim pelo site e gostaria de conversar sobre: {serviceTitle}.",
    solutionLabel: "Solução indicada",
    problems: [
      ["Minha empresa não passa confiança online", "Seu negócio existe, mas ainda não transmite autoridade na internet.", "Site institucional", "sites-institucionais"],
      ["Preciso captar contatos para uma campanha", "Sua oferta tem potencial, mas precisa de uma página focada em conversão.", "Landing page", "landing-pages"],
      ["Minha operação depende de planilhas e controles manuais", "A rotina funciona, mas dados espalhados aumentam retrabalho e risco.", "Sistema sob medida", "sistemas-sob-medida"],
      ["Tenho uma ideia de sistema ou produto digital", "A ideia precisa virar uma primeira versão clara para ser validada.", "SaaS / MVP", "saas-mvp"],
      ["Perco tempo com tarefas repetitivas", "Parte da operação consome energia em atividades que poderiam ser automatizadas.", "Automação interna", "automacoes-internas"],
      ["Meu sistema atual está antigo ou limitado", "A ferramenta ainda atende, mas já começa a travar evolução e manutenção.", "Modernização de sistemas antigos", "modernizacao-sistemas"],
    ],
    categories: [
      { title: "Presença e conversão", subtitle: "Para empresas que precisam aparecer melhor, transmitir confiança e transformar visitantes em conversas comerciais.", serviceTitles: ["Sites institucionais", "Landing pages"] },
      { title: "Operação e produtividade", subtitle: "Para operações que precisam centralizar dados, reduzir retrabalho e ganhar previsibilidade na rotina.", serviceTitles: ["Sistemas sob medida", "Web apps", "Automações internas"] },
      { title: "Produto e evolução", subtitle: "Para quem quer lançar uma primeira versão, evoluir uma base existente ou reconstruir com mais segurança.", serviceTitles: ["SaaS / MVP para startups", "Modernização de sistemas antigos"] },
    ],
    productGuide: {
      title: "Qual caminho faz mais sentido agora?",
      intro: "Esta frente ajuda a entender se o próximo passo é validar uma nova ideia ou evoluir algo que já sustenta a operação.",
      options: [
        { title: "Quero validar uma nova ideia", description: "Quando você precisa tirar um produto digital do papel, testar uma proposta e lançar uma primeira versão com foco em validação.", solution: "SaaS / MVP" },
        { title: "Já tenho um sistema, mas ele precisa evoluir", description: "Quando a operação já depende de uma ferramenta existente, mas ela está antiga, limitada ou difícil de manter.", solution: "Modernização de sistemas antigos" },
      ],
    },
    modernization: {
      lead: "Seu sistema ainda funciona, mas começa a limitar sua operação?",
      support: "A Async pode ajudar a evoluir, reconstruir ou modernizar sua solução com planejamento, menor risco e foco em continuidade.",
    },
    process: [
      ["Entendemos o cenário", "Entendemos objetivo, problema, contexto e restrições antes de indicar o melhor caminho."],
      ["Definimos o melhor caminho", "Organizamos a solução indicada, prioridades e escopo para evitar excesso."],
      ["Construímos com clareza", "Desenvolvemos por etapas, com acompanhamento e comunicação objetiva."],
      ["Validamos e evoluímos", "Testamos, ajustamos e deixamos a base pronta para próximos passos."],
    ],
  },
  en: {
    eyebrow: "Async Studio services",
    heroTitle: "Digital solutions for companies ready to move beyond improvisation",
    heroSubtitle:
      "From digital presence to custom systems, Async Studio builds solutions for companies that need to sell better, organize processes and grow with more clarity.",
    primaryCta: "Talk to Async",
    secondaryCta: "Find my ideal service",
    challengeTitle: "Which challenge do you want to solve now?",
    challengeDescription: "Before choosing a solution, find the problem that best matches your current moment.",
    specialTitle: "Not sure exactly what you need? That's fine.",
    specialDescription:
      "Async Studio can understand your current moment, identify the main problem and indicate the simplest path to turn your idea, operation or digital presence into a functional solution.",
    specialCta: "Talk to Async on WhatsApp",
    processTitle: "How we run your project",
    processDescription: "A focused process to turn diagnosis into direction, build and evolution with clarity.",
    finalTitle: "Should we find the right solution for your moment?",
    finalDescription: "Tell Async what you want to build, improve or organize. From there, we indicate the simplest and safest path.",
    finalCta: "Talk to Async",
    mapTitle: "Digital solutions map",
    mapDescription: "From commercial visibility to internal operations, each front connects to the right business moment.",
    routesLabel: "Main paths",
    serviceCtaMessage: "Hello, Async Studio! I came from the website and would like to talk about: {serviceTitle}.",
    solutionLabel: "Recommended solution",
    problems: [
      ["My company does not feel trustworthy online", "Your business exists, but it still needs to communicate authority on the web.", "Business website", "sites-institucionais"],
      ["I need to capture leads for a campaign", "Your offer has potential, but needs a page focused on conversion.", "Landing page", "landing-pages"],
      ["My operation depends on spreadsheets and manual controls", "The routine works, but scattered data creates rework and risk.", "Custom system", "sistemas-sob-medida"],
      ["I have a system or digital product idea", "The idea needs a clear first version for validation.", "SaaS / MVP", "saas-mvp"],
      ["I lose time with repetitive tasks", "Part of the operation spends energy on work that could be automated.", "Internal automation", "automacoes-internas"],
      ["My current system is old or limited", "The tool still works, but it is starting to block evolution and maintenance.", "Legacy modernization", "modernizacao-sistemas"],
    ],
    categories: [
      { title: "Presence and conversion", subtitle: "For companies that need to show up better, build trust and turn visitors into business conversations.", serviceTitles: ["Business websites", "Landing pages"] },
      { title: "Operations and productivity", subtitle: "For operations that need to centralize data, reduce rework and gain predictability in daily routines.", serviceTitles: ["Custom systems", "Web apps", "Internal automations"] },
      { title: "Product and evolution", subtitle: "For teams that want to launch a first version, evolve an existing base or rebuild with more safety.", serviceTitles: ["SaaS / MVP for startups", "Legacy system modernization"] },
    ],
    productGuide: {
      title: "Which path makes more sense now?",
      intro: "This area helps clarify whether the next step is validating a new idea or evolving something that already supports the operation.",
      options: [
        { title: "I want to validate a new idea", description: "When you need to take a digital product off paper, test a proposal and launch a first version focused on validation.", solution: "SaaS / MVP" },
        { title: "I already have a system, but it needs to evolve", description: "When the operation already depends on an existing tool, but it is old, limited or difficult to maintain.", solution: "Legacy system modernization" },
      ],
    },
    modernization: {
      lead: "Does your system still work, but already limit your operation?",
      support: "Async can help evolve, rebuild or modernize your solution with planning, lower risk and continuity in mind.",
    },
    process: [
      ["We understand the scenario", "We map goals, problems, context and constraints before suggesting technology."],
      ["We define the best path", "We organize the recommended solution, priorities and scope to avoid excess."],
      ["We build with clarity", "We develop in stages, with tracking and objective communication."],
      ["We validate and evolve", "We test, adjust and leave the base ready for next steps."],
    ],
  },
} satisfies Record<
  SiteContent["locale"],
  {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
    challengeTitle: string;
    challengeDescription: string;
    specialTitle: string;
    specialDescription: string;
    specialCta: string;
    processTitle: string;
    processDescription: string;
    finalTitle: string;
    finalDescription: string;
    finalCta: string;
    mapTitle: string;
    mapDescription: string;
    routesLabel: string;
    serviceCtaMessage: string;
    solutionLabel: string;
    problems: Array<[string, string, string, string]>;
    categories: Array<{ title: string; subtitle: string; serviceTitles: string[] }>;
    productGuide: {
      title: string;
      intro: string;
      options: Array<{ title: string; description: string; solution: string }>;
    };
    modernization: { lead: string; support: string };
    process: Array<[string, string]>;
  }
>;

function getServiceMessage(copy: (typeof pageCopy)[SiteContent["locale"]], service: Service) {
  return copy.serviceCtaMessage.replace("{serviceTitle}", service.title);
}

function getServiceAnchorId(service: Service) {
  if (service.title.includes("Sites") || service.title.includes("Business websites")) return "sites-institucionais";
  if (service.title.includes("Landing")) return "landing-pages";
  if (service.title.includes("Sistemas") || service.title.includes("Custom systems")) return "sistemas-sob-medida";
  if (service.title.includes("Web apps")) return "web-apps";
  if (service.title.includes("Automa") || service.title.includes("Internal automations")) return "automacoes-internas";
  if (service.title.includes("SaaS")) return "saas-mvp";
  return "modernizacao-sistemas";
}

function getServiceSummary(service: Service, locale: SiteContent["locale"]) {
  if (service.title.includes("Sistemas") || service.title.includes("Custom systems")) {
    return locale === "pt"
      ? "Soluções criadas para organizar processos internos, regras do negócio e a rotina real da operação."
      : "Solutions created to organize internal processes, business rules and the real operating routine.";
  }
  if (service.title.includes("Web apps")) {
    return locale === "pt"
      ? "Aplicações online acessíveis pelo navegador, criadas para centralizar funcionalidades e evoluir junto com o negócio."
      : "Online applications accessible through the browser, created to centralize features and evolve with the business.";
  }
  return service.summary;
}

function ServiceDetailCard({
  service,
  label,
  content,
  featured = false,
}: {
  service: Service;
  label: string;
  content: SiteContent;
  featured?: boolean;
}) {
  const copy = pageCopy[content.locale];
  const isModernization = service.title.includes("Moderniza") || service.title.includes("Legacy");
  const serviceBlocks = [
    [content.ui.serviceCard.audience, service.audience],
    [content.ui.serviceCard.problem, service.problem],
    [content.ui.serviceCard.delivery, service.delivery],
  ];

  return (
    <Card className={`flex h-full flex-col ${featured ? "bg-surface-soft lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6" : ""}`}>
      <div className={`flex flex-col ${featured ? "lg:justify-center" : ""}`}>
        <span className="eyebrow w-fit rounded-sm border border-border bg-white px-3 py-1 text-async-green">{label}</span>
        <h3 className="font-display mt-4 text-xl font-semibold leading-tight text-text-primary md:text-2xl">{service.title}</h3>
        {isModernization ? (
          <>
            <p className="mt-4 text-lg font-semibold leading-7 text-text-primary">{copy.modernization.lead}</p>
            <p className="mt-3 text-sm leading-6 text-text-secondary md:text-[0.95rem]">{copy.modernization.support}</p>
          </>
        ) : (
          <p className="mt-3 text-sm leading-6 text-text-secondary md:text-[0.95rem]">{getServiceSummary(service, content.locale)}</p>
        )}
      </div>

      <div className={`mt-5 flex flex-1 flex-col ${featured ? "lg:mt-0 lg:justify-center" : "lg:mt-0"}`}>
        <div className={`grid gap-3 text-sm leading-6 text-text-secondary ${featured ? "" : "flex-1"}`}>
          {serviceBlocks.map(([blockLabel, blockText]) => (
            <div key={blockLabel} className="rounded-sm border border-border bg-white p-3.5">
              <strong className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-async-green">{blockLabel}</strong>
              <p>{blockText}</p>
            </div>
          ))}
        </div>
        <Button
          className={`mt-6 w-full sm:w-auto ${featured ? "lg:mt-5 lg:self-start" : "lg:mt-7"}`}
          href={createWhatsAppLink(getServiceMessage(copy, service))}
          target="_blank"
          rel="noopener noreferrer"
        >
          {service.cta}
        </Button>
      </div>
    </Card>
  );
}

function ProductGuideCard({ content }: { content: SiteContent }) {
  const copy = pageCopy[content.locale];

  return (
    <Card className="flex h-full flex-col">
      <span className="eyebrow w-fit rounded-sm border border-border bg-white px-3 py-1 text-async-green">
        {content.locale === "pt" ? "Guia rápido" : "Quick guide"}
      </span>
      <h3 className="font-display mt-4 text-xl font-semibold leading-tight text-text-primary md:text-2xl">{copy.productGuide.title}</h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary md:text-[0.95rem]">{copy.productGuide.intro}</p>
      <div className="mt-5 grid flex-1 gap-3">
        {copy.productGuide.options.map((option) => (
          <div key={option.title} className="rounded-sm border border-border bg-white p-4">
            <h4 className="text-sm font-semibold leading-snug text-text-primary">{option.title}</h4>
            <p className="mt-2 text-sm leading-6 text-text-secondary">{option.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-async-green">
              {copy.solutionLabel}: <span className="normal-case tracking-normal text-text-primary">{option.solution}</span>
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function Services({ content }: ServicesProps) {
  const copy = pageCopy[content.locale];
  const servicesByTitle = new Map(content.services.map((service) => [service.title, service]));
  const solutionModules = copy.categories.flatMap((category) =>
    category.serviceTitles.map((serviceTitle) => servicesByTitle.get(serviceTitle)?.title ?? serviceTitle),
  );

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-12 md:pb-16 md:pt-16 lg:grid-cols-[1.03fr_0.97fr]">
        <div>
          <p className="eyebrow mb-3 text-async-green">{copy.eyebrow}</p>
          <h1 className="font-display max-w-4xl text-4xl font-semibold leading-[1.1] text-text-primary md:text-6xl lg:text-[3.35rem]">
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">{copy.heroSubtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAWhatsApp content={content} label={copy.primaryCta} message={content.whatsappMessages.hero} size="large" className="w-full sm:w-auto" />
            <Button variant="secondary" size="large" href="#desafios" className="w-full sm:w-auto">
              {copy.secondaryCta}
            </Button>
          </div>
        </div>

        <Card className="lg:self-center">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-async-green">{copy.routesLabel}</p>
              <h2 className="font-display mt-2 text-2xl font-semibold leading-tight text-text-primary">{copy.mapTitle}</h2>
            </div>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-text-secondary">{copy.mapDescription}</p>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {solutionModules.map((module, index) => (
              <div key={module} className={`rounded-sm border border-border bg-surface px-4 py-2.5 ${index === 6 ? "sm:col-span-2" : ""}`}>
                <p className="text-sm font-semibold leading-snug text-text-primary">{module}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="desafios" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-16 md:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow text-async-green">{content.locale === "pt" ? "Diagnóstico rápido" : "Quick diagnosis"}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-text-primary md:text-4xl">{copy.challengeTitle}</h2>
            <p className="mt-4 text-base leading-7 text-text-secondary">{copy.challengeDescription}</p>
          </div>
        </Reveal>
        <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.problems.map(([problem, consequence, direction, targetId]) => (
            <Card key={problem} className="flex h-full flex-col">
              <h3 className="font-display text-base font-semibold leading-snug text-text-primary">{problem}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-6 text-text-secondary">{consequence}</p>
              <a
                href={`#${targetId}`}
                aria-label={`${copy.solutionLabel}: ${direction}`}
                className="mt-4 block rounded-sm border border-border bg-surface px-3.5 py-3 transition duration-200 hover:border-async-green focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green"
              >
                <p className="eyebrow text-async-green">{copy.solutionLabel}</p>
                <p className="mt-1 text-sm font-semibold text-text-primary">{direction}</p>
              </a>
            </Card>
          ))}
        </div>
      </section>

      <div className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-14 md:gap-16">
            {copy.categories.map((category) => {
              const services = category.serviceTitles
                .map((serviceTitle) => servicesByTitle.get(serviceTitle))
                .filter((service): service is Service => Boolean(service));
              const isProductCategory = category.serviceTitles.some((serviceTitle) => serviceTitle.includes("MVP"));
              const modernizationService = services.find((service) => service.title.includes("Moderniza") || service.title.includes("Legacy"));
              const standardServices = services.filter((service) => service !== modernizationService);

              return (
                <Reveal key={category.title} as="section">
                  <div className="mb-6 grid gap-3 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
                    <h2 className="font-display text-3xl font-semibold leading-tight text-text-primary md:text-4xl">{category.title}</h2>
                    <p className="max-w-2xl border-l border-border pl-4 text-base leading-7 text-text-secondary lg:justify-self-end">
                      {category.subtitle}
                    </p>
                  </div>
                  {isProductCategory ? (
                    <div className="grid gap-5">
                      <div className="grid auto-rows-fr gap-4 lg:grid-cols-2 lg:items-start">
                        {standardServices.map((service) => (
                          <div key={service.title} id={getServiceAnchorId(service)} className="h-full scroll-mt-28 md:scroll-mt-32">
                            <ServiceDetailCard service={service} label={category.title} content={content} />
                          </div>
                        ))}
                        <ProductGuideCard content={content} />
                      </div>
                      {modernizationService ? (
                        <div id={getServiceAnchorId(modernizationService)} className="scroll-mt-28 md:scroll-mt-32">
                          <ServiceDetailCard service={modernizationService} label={category.title} content={content} featured />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className={`grid auto-rows-fr gap-4 ${services.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                      {services.map((service) => (
                        <div key={service.title} id={getServiceAnchorId(service)} className="h-full scroll-mt-28 md:scroll-mt-32">
                          <ServiceDetailCard service={service} label={category.title} content={content} />
                        </div>
                      ))}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-deep-forest py-16 text-mint-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow text-async-green">{content.locale === "pt" ? "Orientação consultiva" : "Consultative guidance"}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-tight md:text-4xl">{copy.specialTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-mint-white/70">{copy.specialDescription}</p>
            <CTAWhatsApp content={content} label={copy.specialCta} message={content.whatsappMessages.header} className="mt-7" size="large" />
          </div>
          <div className="grid gap-3">
            {copy.categories.map((category, index) => (
              <div key={category.title} className="rounded-sm border border-border-dark bg-white/[0.03] p-4">
                <p className="font-mono-brand text-xs text-async-green">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-2 text-lg font-semibold text-mint-white">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mint-white/70">{category.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow text-async-green">{content.locale === "pt" ? "Processo" : "Process"}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-text-primary md:text-4xl">{copy.processTitle}</h2>
            <p className="mt-4 text-base leading-7 text-text-secondary">{copy.processDescription}</p>
          </div>
        </Reveal>
        <div className="mt-9 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
          {copy.process.map(([title, description], index) => (
            <Card key={title} className="bg-surface-soft">
              <span className="font-mono-brand text-sm text-async-green">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-display mt-4 text-lg font-semibold leading-tight text-text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:pb-24">
        <Card className="px-6 py-10 text-center md:px-10 md:py-14">
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold leading-tight text-text-primary md:text-4xl">{copy.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">{copy.finalDescription}</p>
          <CTAWhatsApp content={content} label={copy.finalCta} message={content.whatsappMessages.contactCta} className="mt-7" size="large" />
        </Card>
      </section>
    </>
  );
}
