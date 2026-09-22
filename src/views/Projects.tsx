import Image from "next/image";
import { bizManagerTransparent } from "../assets";
import type { SiteContent } from "../content/types";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { ProjectPreview } from "../components/ui/ProjectPreview";
import { Reveal } from "../components/ui/Reveal";
import { BizManagerShowcase, type BizManagerShowcaseSlide } from "../components/ui/BizManagerShowcase";

type ProjectsProps = {
  content: SiteContent;
};

export function Projects({ content }: ProjectsProps) {
  const labels = content.ui.projects;
  const isPortuguese = labels.gallery === "Previews do produto";
  const bizManagerShowcaseSlides: BizManagerShowcaseSlide[] = isPortuguese
    ? [
        { src: "/images/projects/bizmanager/dashboard-overview.webp", title: "Dashboard principal", description: "Visao geral de indicadores, fluxo de caixa e agenda em uma interface centralizada.", alt: "Dashboard principal do BizManager com indicadores financeiros, grafico de fluxo de caixa e agenda do dia." },
        { src: "/images/projects/bizmanager/financial-overview.webp", title: "Controle financeiro", description: "Acompanhamento de saldo, receitas, despesas e categorias para leitura rapida da operacao.", alt: "Tela financeira do BizManager com cards de saldo, receitas, despesas e graficos de evolucao mensal." },
        { src: "/images/projects/bizmanager/clients-management.webp", title: "Organizacao de clientes", description: "Carteira de clientes com busca, status, historico e acoes importantes sempre acessiveis.", alt: "Tela de clientes do BizManager com indicadores e tabela de clientes cadastrados." },
        { src: "/images/projects/bizmanager/inventory-control.webp", title: "Gestao de estoque", description: "Controle de produtos, niveis de reposicao e distribuicao por categoria em um painel claro.", alt: "Tela de estoque do BizManager com valor em estoque, total de itens, alertas e distribuicao por categoria." },
        { src: "/images/projects/bizmanager/agenda-week.webp", title: "Agenda operacional", description: "Visualizacao semanal para organizar atendimentos, compromissos e rotina do negocio.", alt: "Tela de agenda do BizManager com calendario semanal e compromissos posicionados por horario." },
        { src: "/images/projects/bizmanager/settings-profile.webp", title: "Configuracoes", description: "Area de conta e preferencias para apoiar a evolucao do produto sem dispersar a experiencia.", alt: "Tela de configuracoes do BizManager com informacoes pessoais e preferencias de conta." },
      ]
    : [
        { src: "/images/projects/bizmanager/dashboard-overview.webp", title: "Main dashboard", description: "Overview of indicators, cash flow and schedule in one centralized interface.", alt: "BizManager main dashboard with financial indicators, cash-flow chart and today's schedule." },
        { src: "/images/projects/bizmanager/financial-overview.webp", title: "Financial control", description: "Balance, revenue, expenses and categories organized for a quick operational read.", alt: "BizManager financial screen with balance, revenue, expense cards and monthly evolution charts." },
        { src: "/images/projects/bizmanager/clients-management.webp", title: "Client organization", description: "Client portfolio with search, status, history and key actions always accessible.", alt: "BizManager clients screen with indicators and a client management table." },
        { src: "/images/projects/bizmanager/inventory-control.webp", title: "Inventory management", description: "Product control, replenishment levels and category distribution in a clear panel.", alt: "BizManager inventory screen with stock value, total items, alerts and category distribution." },
        { src: "/images/projects/bizmanager/agenda-week.webp", title: "Operational schedule", description: "Weekly view to organize appointments, services and the business routine.", alt: "BizManager schedule screen with a weekly calendar and appointments positioned by time." },
        { src: "/images/projects/bizmanager/settings-profile.webp", title: "Settings", description: "Account and preference area that supports product evolution without dispersing the experience.", alt: "BizManager settings screen with personal information and account preferences." },
      ];
  const bizManagerIdentityHighlights = isPortuguese
    ? ["Módulos de gestão conectados em uma base única.", "Interface pensada para leitura rápida de dados e rotinas.", "Arquitetura full-stack preparada para evolução do produto."]
    : ["Management modules connected in a single base.", "Interface designed for quick reading of data and routines.", "Full-stack architecture prepared for product evolution."];
  const bizManagerModuleChips = isPortuguese
    ? ["Dashboard", "Financeiro", "Clientes", "Estoque", "Agenda", "Configurações"]
    : ["Dashboard", "Finances", "Clients", "Inventory", "Schedule", "Settings"];

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow text-async-green">{labels.heroEyebrow}</p>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-semibold leading-tight text-text-primary md:text-6xl">{labels.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{labels.heroDescription}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAWhatsApp content={content} label={labels.heroPrimaryCta} message={content.whatsappMessages.hero} size="large" />
            <Button href="#projeto-destaque" variant="secondary" size="large">
              {labels.heroSecondaryCta}
            </Button>
          </div>
        </div>
        <ProjectPreview content={content} eyebrow={labels.featured} title="BizManager" />
      </div>

      <div id="projeto-destaque" className="mt-20 scroll-mt-28 md:mt-28">
        <Reveal>
          <div className="mb-6 max-w-3xl">
            <p className="eyebrow text-async-green">{labels.featured}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-text-primary md:text-4xl">BizManager</h2>
            <p className="mt-4 text-lg leading-8 text-text-secondary">{content.bizManager.summary}</p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <Card className="flex h-full flex-col gap-5 sm:flex-row sm:items-start">
              <Image src={bizManagerTransparent} alt="" className="h-16 w-16 object-contain" />
              <div>
                <p className="eyebrow text-async-green">{content.bizManager.status}</p>
                <h3 className="font-display mt-3 text-2xl font-semibold text-text-primary">{labels.objective}</h3>
                <p className="mt-4 text-base leading-7 text-text-secondary">{content.bizManager.objective}</p>
              </div>
            </Card>
          </Reveal>
          <Reveal delayMs={100}>
            <Card className="h-full bg-surface-soft">
              <p className="eyebrow text-async-green">{content.bizManager.audience}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-text-primary">{labels.whyExists}</h3>
              <p className="mt-4 text-base leading-7 text-text-secondary">{content.bizManager.proof}</p>
            </Card>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-text-primary">{labels.demonstrates}</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.bizManager.demonstrates.map((item, index) => (
            <Reveal key={item.title} delayMs={index * 60}>
              <Card className="flex h-full flex-col">
                <span className="font-mono-brand text-sm text-async-green">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display mt-3 text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14 md:mt-16">
        <div className="mb-5">
          <h2 className="font-display text-xl font-semibold text-text-primary md:text-2xl">{labels.modules}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">{labels.modulesDescription}</p>
        </div>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {content.bizManager.modules.map((module) => (
            <Card key={module.title} className="!p-4">
              <h3 className="text-base font-semibold text-text-primary">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div id="previews-produto" className="mt-16 scroll-mt-28 md:mt-20">
        <h2 className="font-display text-3xl font-semibold text-text-primary">{labels.gallery}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">{labels.galleryDescription}</p>
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-10 lg:gap-6">
          <BizManagerShowcase slides={bizManagerShowcaseSlides} />

          <Card className="flex flex-col gap-5 lg:col-span-3 lg:self-stretch">
            <span className="eyebrow w-fit rounded-full border border-border bg-surface px-3 py-1 text-async-green">
              {content.bizManager.status}
            </span>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-border bg-surface">
                <Image src={bizManagerTransparent} alt="BizManager" className="h-9 w-9 object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">BizManager</p>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                  {isPortuguese ? "Produto autoral em desenvolvimento" : "In-development proprietary product"}
                </p>
              </div>
            </div>

            <div>
              <span className="eyebrow text-async-green">{labels.identityLabel}</span>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{labels.identityDescription}</p>
            </div>

            <div>
              <p className="eyebrow text-async-green">{isPortuguese ? "O que o projeto demonstra" : "What the project demonstrates"}</p>
              <ul className="mt-3 space-y-2.5">
                {bizManagerIdentityHighlights.map((item) => (
                  <li key={item} className="flex gap-2 text-xs leading-relaxed text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-async-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-async-green">{isPortuguese ? "Módulos contemplados" : "Covered modules"}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {bizManagerModuleChips.map((module) => (
                  <span key={module} className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-text-secondary">
                    {module}
                  </span>
                ))}
              </div>
            </div>

            <p className="border-t border-border pt-4 text-xs leading-relaxed text-text-secondary">
              {isPortuguese
                ? "Base autoral para demonstrar estrategia, interface e arquitetura em um produto real em evolucao."
                : "A proprietary base to demonstrate strategy, interface and architecture in a real evolving product."}
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-20 md:mt-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-text-primary md:text-4xl">{labels.buildForCompany}</h2>
          <p className="mt-4 text-base leading-8 text-text-secondary">{labels.buildForCompanyDescription}</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.bizManager.buildOptions.map((item) => (
            <Card key={item.title} className="flex h-full flex-col">
              <h3 className="text-base font-semibold text-text-primary sm:text-lg">{item.title}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-text-secondary sm:text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-md bg-deep-forest p-8 md:mt-20 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="eyebrow text-async-green">{labels.similar}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-mint-white md:text-4xl md:leading-tight">
              {labels.finalCtaTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mint-white/70">{labels.finalCtaDescription}</p>
          </div>
          <div className="flex shrink-0 items-center justify-start lg:justify-end">
            <CTAWhatsApp content={content} label={content.bizManager.cta} message={content.whatsappMessages.bizManager} size="large" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
