import Image from "next/image";
import { bizManagerTransparent } from "../assets";
import type { SiteContent } from "../content/types";
import { Button } from "../components/ui/Button";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { GlassCard } from "../components/ui/GlassCard";
import { ProjectPreview } from "../components/ui/ProjectPreview";
import { BizManagerShowcase, type BizManagerShowcaseSlide } from "../components/ui/BizManagerShowcase";

type ProjectsProps = {
  content: SiteContent;
};

export function Projects({ content }: ProjectsProps) {
  const labels = content.ui.projects;
  const isPortuguese = labels.gallery === "Previews do produto";
  const bizManagerShowcaseSlides: BizManagerShowcaseSlide[] = isPortuguese
    ? [
        {
          src: "/images/projects/bizmanager/dashboard-overview.webp",
          title: "Dashboard principal",
          description: "Visao geral de indicadores, fluxo de caixa e agenda em uma interface centralizada.",
          alt: "Dashboard principal do BizManager com indicadores financeiros, grafico de fluxo de caixa e agenda do dia.",
        },
        {
          src: "/images/projects/bizmanager/financial-overview.webp",
          title: "Controle financeiro",
          description: "Acompanhamento de saldo, receitas, despesas e categorias para leitura rapida da operacao.",
          alt: "Tela financeira do BizManager com cards de saldo, receitas, despesas e graficos de evolucao mensal.",
        },
        {
          src: "/images/projects/bizmanager/clients-management.webp",
          title: "Organizacao de clientes",
          description: "Carteira de clientes com busca, status, historico e acoes importantes sempre acessiveis.",
          alt: "Tela de clientes do BizManager com indicadores e tabela de clientes cadastrados.",
        },
        {
          src: "/images/projects/bizmanager/inventory-control.webp",
          title: "Gestao de estoque",
          description: "Controle de produtos, niveis de reposicao e distribuicao por categoria em um painel claro.",
          alt: "Tela de estoque do BizManager com valor em estoque, total de itens, alertas e distribuicao por categoria.",
        },
        {
          src: "/images/projects/bizmanager/agenda-week.webp",
          title: "Agenda operacional",
          description: "Visualizacao semanal para organizar atendimentos, compromissos e rotina do negocio.",
          alt: "Tela de agenda do BizManager com calendario semanal e compromissos posicionados por horario.",
        },
        {
          src: "/images/projects/bizmanager/settings-profile.webp",
          title: "Configuracoes",
          description: "Area de conta e preferencias para apoiar a evolucao do produto sem dispersar a experiencia.",
          alt: "Tela de configuracoes do BizManager com informacoes pessoais e preferencias de conta.",
        },
      ]
    : [
        {
          src: "/images/projects/bizmanager/dashboard-overview.webp",
          title: "Main dashboard",
          description: "Overview of indicators, cash flow and schedule in one centralized interface.",
          alt: "BizManager main dashboard with financial indicators, cash-flow chart and today's schedule.",
        },
        {
          src: "/images/projects/bizmanager/financial-overview.webp",
          title: "Financial control",
          description: "Balance, revenue, expenses and categories organized for a quick operational read.",
          alt: "BizManager financial screen with balance, revenue, expense cards and monthly evolution charts.",
        },
        {
          src: "/images/projects/bizmanager/clients-management.webp",
          title: "Client organization",
          description: "Client portfolio with search, status, history and key actions always accessible.",
          alt: "BizManager clients screen with indicators and a client management table.",
        },
        {
          src: "/images/projects/bizmanager/inventory-control.webp",
          title: "Inventory management",
          description: "Product control, replenishment levels and category distribution in a clear panel.",
          alt: "BizManager inventory screen with stock value, total items, alerts and category distribution.",
        },
        {
          src: "/images/projects/bizmanager/agenda-week.webp",
          title: "Operational schedule",
          description: "Weekly view to organize appointments, services and the business routine.",
          alt: "BizManager schedule screen with a weekly calendar and appointments positioned by time.",
        },
        {
          src: "/images/projects/bizmanager/settings-profile.webp",
          title: "Settings",
          description: "Account and preference area that supports product evolution without dispersing the experience.",
          alt: "BizManager settings screen with personal information and account preferences.",
        },
      ];
  const bizManagerIdentityHighlights = isPortuguese
    ? [
        "Módulos de gestão conectados em uma base única.",
        "Interface pensada para leitura rápida de dados e rotinas.",
        "Arquitetura full-stack preparada para evolução do produto.",
      ]
    : [
        "Management modules connected in a single base.",
        "Interface designed for quick reading of data and routines.",
        "Full-stack architecture prepared for product evolution.",
      ];
  const bizManagerModuleChips = isPortuguese
    ? ["Dashboard", "Financeiro", "Clientes", "Estoque", "Agenda", "Configurações"]
    : ["Dashboard", "Finances", "Clients", "Inventory", "Schedule", "Settings"];

  return (
    <section className="mx-auto min-h-[calc(100vh-88px)] max-w-7xl px-5 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-async-frost-dark">
            {labels.heroEyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-async-ink md:text-6xl">
            {labels.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-async-graphite">{labels.heroDescription}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAWhatsApp content={content} label={labels.heroPrimaryCta} message={content.whatsappMessages.hero} size="large" />
            <Button href="#projeto-destaque" variant="secondary" size="large">
              {labels.heroSecondaryCta}
            </Button>
          </div>
        </div>
        <ProjectPreview content={content} eyebrow={labels.featured} title="BizManager" />
      </div>

      <div id="projeto-destaque" className="mt-16 scroll-mt-28 md:mt-20">
        <div className="mb-6 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-async-frost-dark">{labels.featured}</p>
          <h2 className="mt-3 text-3xl font-semibold text-async-ink md:text-4xl">BizManager</h2>
          <p className="mt-4 text-lg leading-8 text-async-graphite">{content.bizManager.summary}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <GlassCard className="p-7 md:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <Image src={bizManagerTransparent} alt="" className="h-20 w-20 object-contain" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
                  {content.bizManager.status}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-async-ink">{labels.objective}</h3>
                <p className="mt-4 text-base leading-7 text-async-graphite">{content.bizManager.objective}</p>
              </div>
            </div>
          </GlassCard>
          <GlassCard variant="tinted" className="p-7 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
              {content.bizManager.audience}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-async-ink">{labels.whyExists}</h3>
            <p className="mt-4 text-base leading-7 text-async-graphite">{content.bizManager.proof}</p>
          </GlassCard>
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <h2 className="text-3xl font-semibold text-async-ink">{labels.demonstrates}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.bizManager.demonstrates.map((item, index) => {
            const accentColors = [
              "bg-async-cyan/80 shadow-[0_0_8px_rgba(156,237,231,0.6)]",
              "bg-async-frost/80 shadow-[0_0_8px_rgba(138,108,255,0.6)]",
              "bg-ice-glacier/80 shadow-[0_0_8px_rgba(127,187,255,0.6)]",
              "bg-async-lavender/80 shadow-[0_0_8px_rgba(187,167,255,0.6)]",
            ];
            return (
              <GlassCard
                key={item.title}
                variant="quiet"
                className="group flex h-full flex-col border-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-ice-crystal/85 hover:bg-white/70 hover:shadow-[0_20px_50px_rgba(127,187,255,0.12)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-async border border-ice-crystal/80 bg-white/95 text-[11px] font-semibold text-async-frost-dark shadow-[0_4px_12px_rgba(127,187,255,0.08)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`h-1.5 w-1.5 rounded-full ${accentColors[index]}`} />
                </div>
                <h3 className="text-lg font-semibold text-async-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-async-graphite flex-1">{item.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <div className="mt-10 md:mt-12">
        <div className="mb-5">
          <h2 className="text-xl md:text-2xl font-semibold text-async-ink">{labels.modules}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-async-graphite">
            {labels.modulesDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {content.bizManager.modules.map((module, index) => {
            const accentColors = [
              "bg-async-cyan/80 shadow-[0_0_6px_rgba(156,237,231,0.7)]",
              "bg-async-frost/80 shadow-[0_0_6px_rgba(138,108,255,0.7)]",
              "bg-ice-glacier/80 shadow-[0_0_6px_rgba(127,187,255,0.7)]",
              "bg-async-lavender/80 shadow-[0_0_6px_rgba(187,167,255,0.7)]",
              "bg-ice-crystal/80 shadow-[0_0_6px_rgba(169,212,255,0.7)]",
            ];
            return (
              <GlassCard
                key={module.title}
                variant="quiet"
                className={`!p-4 group flex flex-col justify-between border-white/60 transition-all duration-300 hover:border-ice-crystal/50 hover:bg-white/70 hover:shadow-[0_12px_30px_rgba(127,187,255,0.06)] ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <h3 className="text-base font-semibold text-async-ink">{module.title}</h3>
                    <span className="inline-flex h-5 shrink-0 items-center gap-1 rounded-full border border-white/70 bg-white/50 px-2 text-[10px] font-semibold text-async-frost-dark shadow-[0_2px_8px_rgba(127,187,255,0.06)]">
                      <span className={`h-1.5 w-1.5 rounded-full ${accentColors[index]}`} />
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-async-graphite">{module.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <div id="previews-produto" className="mt-14 scroll-mt-28 md:mt-16">
        <h2 className="text-3xl font-semibold text-async-ink">{labels.gallery}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-async-graphite">
          {labels.galleryDescription}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-10 lg:gap-6">
          <BizManagerShowcase slides={bizManagerShowcaseSlides} />

          <GlassCard className="flex flex-col overflow-hidden border-white/70 !p-0 shadow-[0_18px_44px_rgba(10,13,18,0.10)] lg:col-span-3 lg:self-stretch">
            <div className="flex flex-col gap-5 border-b border-white/40 bg-gradient-to-tr from-ice-white via-white to-ice-blue/30 p-5 sm:p-6">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/80 bg-white/65 px-3 py-1 text-[10px] font-semibold text-async-frost-dark shadow-[0_2px_8px_rgba(127,187,255,0.04)] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#61c554] shadow-[0_0_4px_rgba(97,197,84,0.45)]" />
                {content.bizManager.status}
              </span>

              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/90 bg-white/70 shadow-[0_8px_24px_rgba(95,104,117,0.05)] backdrop-blur-sm">
                  <Image src={bizManagerTransparent} alt="BizManager Logo" className="h-10 w-10 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-async-ink">BizManager</p>
                  <p className="mt-1 text-xs leading-relaxed text-async-graphite">
                    {isPortuguese ? "Produto autoral em desenvolvimento" : "In-development proprietary product"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white/20 p-5 backdrop-blur-[2px] md:p-6">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] text-async-frost-dark">
                {labels.identityLabel}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-async-graphite">
                {labels.identityDescription}
              </p>

              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-async-frost-dark">
                  {isPortuguese ? "O que o projeto demonstra" : "What the project demonstrates"}
                </p>
                <ul className="mt-3 space-y-2.5">
                  {bizManagerIdentityHighlights.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-relaxed text-async-graphite">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-async-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-async-frost-dark">
                  {isPortuguese ? "Módulos contemplados" : "Covered modules"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {bizManagerModuleChips.map((module) => (
                    <span
                      key={module}
                      className="rounded-full border border-white/75 bg-white/55 px-2.5 py-1 text-[11px] font-semibold text-async-graphite"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-ice-crystal/70 via-white/70 to-transparent" />
              <p className="mt-4 text-xs leading-relaxed text-async-graphite">
                {isPortuguese
                  ? "Base autoral para demonstrar estrategia, interface e arquitetura em um produto real em evolucao."
                  : "A proprietary base to demonstrate strategy, interface and architecture in a real evolving product."}
              </p>
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-20 md:mt-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-async-ink md:text-4xl">{labels.buildForCompany}</h2>
          <p className="mt-4 text-base leading-8 text-async-graphite">{labels.buildForCompanyDescription}</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.bizManager.buildOptions.map((item, index) => {
            const accentColors = [
              "bg-async-cyan/80 shadow-[0_0_8px_rgba(156,237,231,0.6)]",
              "bg-async-frost/80 shadow-[0_0_8px_rgba(138,108,255,0.6)]",
              "bg-ice-glacier/80 shadow-[0_0_8px_rgba(127,187,255,0.6)]",
              "bg-async-lavender/80 shadow-[0_0_8px_rgba(187,167,255,0.6)]",
            ];
            return (
              <GlassCard
                key={item.title}
                variant="quiet"
                className="group flex h-full flex-col border-white/80 !p-6 sm:!p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ice-crystal/85 hover:bg-white/85 hover:shadow-[0_20px_50px_rgba(127,187,255,0.12)]"
              >
                <div className="flex h-full flex-col">
                  {/* Marcador visual discreto com as cores frias do sistema */}
                  <div className={`h-[3px] w-8 rounded-full ${accentColors[index]} mb-5`} />
                  
                  <h3 className="text-base sm:text-lg font-semibold text-async-ink group-hover:text-async-frost transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-[13px] sm:text-sm leading-relaxed text-async-graphite flex-1">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <GlassCard variant="dark" className="mt-16 p-8 md:mt-20 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-async-cyan">
              {labels.similar}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl md:leading-tight">
              {labels.finalCtaTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ice-gray">
              {labels.finalCtaDescription}
            </p>
          </div>
          <div className="flex shrink-0 items-center justify-start lg:justify-end">
            <CTAWhatsApp
              content={content}
              label={content.bizManager.cta}
              message={content.whatsappMessages.bizManager}
              size="large"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
