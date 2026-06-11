import type { SiteContent } from "../content/types";
import { Button } from "../components/ui/Button";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { GlassCard } from "../components/ui/GlassCard";
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
      [
        "Minha empresa não passa confiança online",
        "Seu negócio existe, mas ainda não transmite autoridade na internet.",
        "Site institucional",
        "sites-institucionais",
      ],
      [
        "Preciso captar contatos para uma campanha",
        "Sua oferta tem potencial, mas precisa de uma página focada em conversão.",
        "Landing page",
        "landing-pages",
      ],
      [
        "Minha operação depende de planilhas e controles manuais",
        "A rotina funciona, mas dados espalhados aumentam retrabalho e risco.",
        "Sistema sob medida",
        "sistemas-sob-medida",
      ],
      [
        "Tenho uma ideia de sistema ou produto digital",
        "A ideia precisa virar uma primeira versão clara para ser validada.",
        "SaaS / MVP",
        "saas-mvp",
      ],
      [
        "Perco tempo com tarefas repetitivas",
        "Parte da operação consome energia em atividades que poderiam ser automatizadas.",
        "Automação interna",
        "automacoes-internas",
      ],
      [
        "Meu sistema atual está antigo ou limitado",
        "A ferramenta ainda atende, mas já começa a travar evolução e manutenção.",
        "Modernização de sistemas antigos",
        "modernizacao-sistemas",
      ],
    ],
    categories: [
      {
        title: "Presença e conversão",
        subtitle: "Para empresas que precisam aparecer melhor, transmitir confiança e transformar visitantes em conversas comerciais.",
        serviceTitles: ["Sites institucionais", "Landing pages"],
      },
      {
        title: "Operação e produtividade",
        subtitle: "Para operações que precisam centralizar dados, reduzir retrabalho e ganhar previsibilidade na rotina.",
        serviceTitles: ["Sistemas sob medida", "Web apps", "Automações internas"],
      },
      {
        title: "Produto e evolução",
        subtitle: "Para quem quer lançar uma primeira versão, evoluir uma base existente ou reconstruir com mais segurança.",
        serviceTitles: ["SaaS / MVP para startups", "Modernização de sistemas antigos"],
      },
    ],
    productGuide: {
      title: "Qual caminho faz mais sentido agora?",
      intro:
        "Esta frente ajuda a entender se o próximo passo é validar uma nova ideia ou evoluir algo que já sustenta a operação.",
      options: [
        {
          title: "Quero validar uma nova ideia",
          description:
            "Quando você precisa tirar um produto digital do papel, testar uma proposta e lançar uma primeira versão com foco em validação.",
          solution: "SaaS / MVP",
        },
        {
          title: "Já tenho um sistema, mas ele precisa evoluir",
          description:
            "Quando a operação já depende de uma ferramenta existente, mas ela está antiga, limitada ou difícil de manter.",
          solution: "Modernização de sistemas antigos",
        },
      ],
    },
    modernization: {
      lead: "Seu sistema ainda funciona, mas começa a limitar sua operação?",
      support:
        "A Async pode ajudar a evoluir, reconstruir ou modernizar sua solução com planejamento, menor risco e foco em continuidade.",
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
    challengeDescription:
      "Before choosing a solution, find the problem that best matches your current moment.",
    specialTitle: "Not sure exactly what you need? That's fine.",
    specialDescription:
      "Async Studio can understand your current moment, identify the main problem and indicate the simplest path to turn your idea, operation or digital presence into a functional solution.",
    specialCta: "Talk to Async on WhatsApp",
    processTitle: "How we run your project",
    processDescription:
      "A focused process to turn diagnosis into direction, build and evolution with clarity.",
    finalTitle: "Should we find the right solution for your moment?",
    finalDescription:
      "Tell Async what you want to build, improve or organize. From there, we indicate the simplest and safest path.",
    finalCta: "Talk to Async",
    mapTitle: "Digital solutions map",
    mapDescription: "From commercial visibility to internal operations, each front connects to the right business moment.",
    routesLabel: "Main paths",
    serviceCtaMessage: "Hello, Async Studio! I came from the website and would like to talk about: {serviceTitle}.",
    solutionLabel: "Recommended solution",
    problems: [
      [
        "My company does not feel trustworthy online",
        "Your business exists, but it still needs to communicate authority on the web.",
        "Business website",
        "sites-institucionais",
      ],
      [
        "I need to capture leads for a campaign",
        "Your offer has potential, but needs a page focused on conversion.",
        "Landing page",
        "landing-pages",
      ],
      [
        "My operation depends on spreadsheets and manual controls",
        "The routine works, but scattered data creates rework and risk.",
        "Custom system",
        "sistemas-sob-medida",
      ],
      [
        "I have a system or digital product idea",
        "The idea needs a clear first version for validation.",
        "SaaS / MVP",
        "saas-mvp",
      ],
      [
        "I lose time with repetitive tasks",
        "Part of the operation spends energy on work that could be automated.",
        "Internal automation",
        "automacoes-internas",
      ],
      [
        "My current system is old or limited",
        "The tool still works, but it is starting to block evolution and maintenance.",
        "Legacy modernization",
        "modernizacao-sistemas",
      ],
    ],
    categories: [
      {
        title: "Presence and conversion",
        subtitle: "For companies that need to show up better, build trust and turn visitors into business conversations.",
        serviceTitles: ["Business websites", "Landing pages"],
      },
      {
        title: "Operations and productivity",
        subtitle: "For operations that need to centralize data, reduce rework and gain predictability in daily routines.",
        serviceTitles: ["Custom systems", "Web apps", "Internal automations"],
      },
      {
        title: "Product and evolution",
        subtitle: "For teams that want to launch a first version, evolve an existing base or rebuild with more safety.",
        serviceTitles: ["SaaS / MVP for startups", "Legacy system modernization"],
      },
    ],
    productGuide: {
      title: "Which path makes more sense now?",
      intro:
        "This area helps clarify whether the next step is validating a new idea or evolving something that already supports the operation.",
      options: [
        {
          title: "I want to validate a new idea",
          description:
            "When you need to take a digital product off paper, test a proposal and launch a first version focused on validation.",
          solution: "SaaS / MVP",
        },
        {
          title: "I already have a system, but it needs to evolve",
          description:
            "When the operation already depends on an existing tool, but it is old, limited or difficult to maintain.",
          solution: "Legacy system modernization",
        },
      ],
    },
    modernization: {
      lead: "Does your system still work, but already limit your operation?",
      support:
        "Async can help evolve, rebuild or modernize your solution with planning, lower risk and continuity in mind.",
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
  if (service.title.includes("Sites") || service.title.includes("Business websites")) {
    return "sites-institucionais";
  }

  if (service.title.includes("Landing")) {
    return "landing-pages";
  }

  if (service.title.includes("Sistemas") || service.title.includes("Custom systems")) {
    return "sistemas-sob-medida";
  }

  if (service.title.includes("Web apps")) {
    return "web-apps";
  }

  if (service.title.includes("Automa") || service.title.includes("Internal automations")) {
    return "automacoes-internas";
  }

  if (service.title.includes("SaaS")) {
    return "saas-mvp";
  }

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
    <GlassCard
      variant={featured ? "tinted" : "quiet"}
      className={`flex h-full flex-col border-white/85 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-ice-crystal hover:bg-white/75 hover:shadow-[0_18px_52px_rgba(127,187,255,0.13)] md:p-6 ${
        featured ? "lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6" : ""
      }`}
    >
      <div className={`flex flex-col ${featured ? "lg:justify-center" : ""}`}>
        <span className="w-fit rounded-async border border-ice-crystal/70 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
          {label}
        </span>
        <h3 className="mt-4 text-xl font-semibold leading-tight text-async-ink md:text-2xl">{service.title}</h3>
        {isModernization ? (
          <>
            <p className="mt-4 text-lg font-semibold leading-7 text-async-ink">{copy.modernization.lead}</p>
            <p className="mt-3 text-sm leading-6 text-[#354052] md:text-[0.95rem]">{copy.modernization.support}</p>
          </>
        ) : (
          <p className="mt-3 text-sm leading-6 text-[#354052] md:text-[0.95rem]">
            {getServiceSummary(service, content.locale)}
          </p>
        )}
      </div>

      <div className={`mt-5 flex flex-1 flex-col ${featured ? "lg:mt-0 lg:justify-center" : "lg:mt-0"}`}>
        <div className={`grid gap-3 text-sm leading-6 text-[#354052] ${featured ? "" : "flex-1"}`}>
          {serviceBlocks.map(([blockLabel, blockText]) => (
            <div
              key={blockLabel}
              className="rounded-[13px] border border-ice-mist/70 bg-white/60 p-3.5 shadow-[0_8px_22px_rgba(127,187,255,0.06)]"
            >
              <strong className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-async-frost-dark">
                {blockLabel}
              </strong>
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
    </GlassCard>
  );
}

function ProductGuideCard({ content }: { content: SiteContent }) {
  const copy = pageCopy[content.locale];

  return (
    <GlassCard
      variant="quiet"
      className="flex h-full flex-col border-white/85 p-5 md:p-6"
    >
      <span className="w-fit rounded-async border border-ice-crystal/70 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
        {content.locale === "pt" ? "Guia rápido" : "Quick guide"}
      </span>
      <h3 className="mt-4 text-xl font-semibold leading-tight text-async-ink md:text-2xl">
        {copy.productGuide.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#354052] md:text-[0.95rem]">{copy.productGuide.intro}</p>
      <div className="mt-5 grid flex-1 gap-3">
        {copy.productGuide.options.map((option) => (
          <div
            key={option.title}
            className="rounded-[13px] border border-ice-mist/70 bg-white/60 p-4 shadow-[0_8px_22px_rgba(127,187,255,0.06)]"
          >
            <h4 className="text-sm font-semibold leading-snug text-async-ink">{option.title}</h4>
            <p className="mt-2 text-sm leading-6 text-[#354052]">{option.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-async-frost-dark">
              {copy.solutionLabel}: <span className="normal-case tracking-normal">{option.solution}</span>
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
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
      <section className="mx-auto grid min-h-[calc(78vh-88px)] max-w-7xl items-center gap-8 px-5 pb-7 pt-8 md:pb-9 md:pt-10 lg:grid-cols-[1.03fr_0.97fr] lg:pb-10 lg:pt-11">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
            {copy.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-async-ink md:text-6xl lg:text-[3.35rem]">
            {copy.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-async-graphite md:text-lg md:leading-8">
            {copy.heroSubtitle}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAWhatsApp content={content} label={copy.primaryCta} message={content.whatsappMessages.hero} size="large" className="w-full sm:w-auto" />
            <Button variant="secondary" size="large" href="#desafios" className="w-full sm:w-auto">
              {copy.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="liquid-glass liquid-glass-quiet rounded-2xl border-white/80 p-4 shadow-[0_16px_44px_rgba(95,104,117,0.07)] md:p-5 lg:self-center">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-async-frost-dark">
                {copy.routesLabel}
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-async-ink">{copy.mapTitle}</h2>
            </div>
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-async border border-ice-crystal/80 bg-white/85 text-xs font-semibold text-async-frost-dark">
              AS
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#354052]">{copy.mapDescription}</p>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {solutionModules.map((module, index) => (
              <div
                key={module}
                className={`relative rounded-[13px] border border-ice-mist/80 bg-white/70 px-4 py-2.5 shadow-[0_8px_20px_rgba(127,187,255,0.06)] ${
                  index === 6 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-async bg-gradient-to-br from-async-frost to-ice-glacier text-[11px] font-semibold text-white shadow-[0_8px_20px_rgba(138,108,255,0.18)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold leading-snug text-async-ink">{module}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="desafios" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
            {content.locale === "pt" ? "Diagnóstico rápido" : "Quick diagnosis"}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-async-ink md:text-4xl">
            {copy.challengeTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-async-graphite">{copy.challengeDescription}</p>
        </div>
        <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.problems.map(([problem, consequence, direction, targetId], index) => (
            <GlassCard
              key={problem}
              variant="quiet"
              className="group flex h-full min-h-[12rem] flex-col p-5 transition duration-200 hover:-translate-y-0.5 hover:border-ice-crystal hover:bg-white/75 hover:shadow-[0_18px_52px_rgba(127,187,255,0.12)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-async border border-ice-crystal/85 bg-white/80 text-[11px] font-semibold text-async-frost-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-async-frost/35 via-ice-glacier/30 to-transparent" />
              </div>
              <h3 className="text-base font-semibold leading-snug text-async-ink">{problem}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-6 text-[#354052]">{consequence}</p>
              <a
                href={`#${targetId}`}
                aria-label={`${copy.solutionLabel}: ${direction}`}
                className="mt-4 block rounded-[13px] border border-ice-crystal/70 bg-white/70 px-3.5 py-3 transition duration-200 hover:border-async-frost/50 hover:bg-white/85 hover:shadow-[0_10px_24px_rgba(127,187,255,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-async-frost focus-visible:ring-offset-2"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-async-frost-dark">
                  {copy.solutionLabel}
                </p>
                <p className="mt-1 text-sm font-semibold text-async-ink">{direction}</p>
              </a>
            </GlassCard>
          ))}
        </div>
      </section>

      <div className="bg-white/50 pb-10 pt-11 md:pb-14 md:pt-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-11 md:gap-12">
            {copy.categories.map((category) => {
              const services = category.serviceTitles
                .map((serviceTitle) => servicesByTitle.get(serviceTitle))
                .filter((service): service is Service => Boolean(service));
              const isProductCategory = category.serviceTitles.some((serviceTitle) => serviceTitle.includes("MVP"));
              const modernizationService = services.find(
                (service) => service.title.includes("Moderniza") || service.title.includes("Legacy"),
              );
              const standardServices = services.filter((service) => service !== modernizationService);
              const isPresenceCategory = category.serviceTitles.some(
                (serviceTitle) => serviceTitle.includes("Sites") || serviceTitle.includes("Business websites"),
              );
              const isOperationCategory = category.serviceTitles.some(
                (serviceTitle) => serviceTitle.includes("Sistemas") || serviceTitle.includes("Custom systems"),
              );

              return (
                <section key={category.title}>
                  <div className={`grid gap-3 lg:grid-cols-[0.42fr_0.58fr] lg:items-end ${isProductCategory ? "mb-6" : "mb-5"}`}>
                    <h2 className="text-3xl font-semibold leading-tight text-async-ink md:text-4xl">
                      {category.title}
                    </h2>
                    <p
                      className={
                        isPresenceCategory || isOperationCategory || isProductCategory
                          ? "max-w-2xl border-l border-ice-glacier/45 pl-4 text-base leading-7 text-[#354052] lg:justify-self-end"
                          : "max-w-2xl rounded-[13px] border border-white/70 bg-white/50 px-4 py-3 text-base leading-7 text-[#354052] shadow-[0_10px_28px_rgba(95,104,117,0.04)] lg:justify-self-end"
                      }
                    >
                      {category.subtitle}
                    </p>
                  </div>
                  {isProductCategory ? (
                    <div className="grid gap-5">
                      <div className="grid auto-rows-fr gap-4 lg:grid-cols-2 lg:items-start">
                        {standardServices.map((service) => (
                          <div
                            key={service.title}
                            id={getServiceAnchorId(service)}
                            className="h-full scroll-mt-28 md:scroll-mt-32"
                          >
                            <ServiceDetailCard
                              service={service}
                              label={category.title}
                              content={content}
                            />
                          </div>
                        ))}
                        <ProductGuideCard content={content} />
                      </div>
                      {modernizationService ? (
                        <div
                          id={getServiceAnchorId(modernizationService)}
                          className="scroll-mt-28 md:scroll-mt-32"
                        >
                          <ServiceDetailCard
                            service={modernizationService}
                            label={category.title}
                            content={content}
                            featured
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div
                      className={`grid auto-rows-fr gap-4 ${
                        services.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"
                      }`}
                    >
                      {services.map((service) => (
                        <div
                          key={service.title}
                          id={getServiceAnchorId(service)}
                          className="h-full scroll-mt-28 md:scroll-mt-32"
                        >
                          <ServiceDetailCard
                            service={service}
                            label={category.title}
                            content={content}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-async-ink py-10 text-white md:py-16 lg:py-[4.5rem]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-cyan">
              {content.locale === "pt" ? "Orientação consultiva" : "Consultative guidance"}
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{copy.specialTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{copy.specialDescription}</p>
            <CTAWhatsApp content={content} label={copy.specialCta} message={content.whatsappMessages.header} className="mt-7 shadow-[0_14px_34px_rgba(138,108,255,0.22)]" size="large" />
          </div>
          <div className="liquid-glass liquid-glass-showcase-dark rounded-2xl border-white/[0.10] bg-[#070a10]/90 p-5 text-white shadow-[0_28px_70px_-34px_rgba(127,187,255,0.45),0_18px_48px_-30px_rgba(138,108,255,0.35)] md:p-6">
            <div className="grid gap-3">
              {copy.categories.map((category, index) => (
                <div
                  key={category.title}
                  className="rounded-[13px] border border-white/[0.08] bg-[#0c111b]/78 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_10px_28px_-24px_rgba(156,237,231,0.34)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-async-cyan/90">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{category.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{category.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-11 md:pb-[4.5rem] md:pt-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
            {content.locale === "pt" ? "Processo" : "Process"}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-async-ink md:text-4xl">
            {copy.processTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-async-graphite">{copy.processDescription}</p>
        </div>
        <div className="relative mt-9 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-12 right-12 top-[2.4rem] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(127,187,255,0.48),rgba(187,167,255,0.34),transparent)] lg:block" />
          {copy.process.map(([title, description], index) => (
            <GlassCard
              key={title}
              variant="tinted"
              className="relative z-10 flex h-full min-h-[11.25rem] flex-col border-white/80 p-5 shadow-[0_14px_34px_rgba(95,104,117,0.06)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-async border border-ice-crystal/85 bg-white/85 text-xs font-semibold text-async-frost-dark shadow-[0_8px_18px_rgba(127,187,255,0.10)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-async-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#354052]">{description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 md:pb-20">
        <div className="liquid-glass rounded-2xl px-6 py-8 text-center md:px-10 md:py-10">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-async-ink md:text-4xl">
            {copy.finalTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-async-graphite">{copy.finalDescription}</p>
          <CTAWhatsApp content={content} label={copy.finalCta} message={content.whatsappMessages.contactCta} className="mt-7" size="large" />
        </div>
      </section>
    </>
  );
}
