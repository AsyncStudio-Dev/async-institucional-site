import Image from "next/image";
import { bizManagerTransparent } from "../assets";
import type { SiteContent } from "../content/types";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { FinalCTA } from "../components/ui/FinalCTA";
import { ProjectPreview } from "../components/ui/ProjectPreview";
import { Section } from "../components/ui/Section";
import { BizManagerShowcase, type BizManagerShowcaseSlide } from "../components/ui/BizManagerShowcase";

type ProjectsProps = {
  content: SiteContent;
};

export function Projects({ content }: ProjectsProps) {
  const labels = content.ui.projects;
  const isPortuguese = labels.gallery === "Previews do produto";
  const bizManagerShowcaseSlides: BizManagerShowcaseSlide[] = isPortuguese
    ? [
        { src: "/images/projects/bizmanager/dashboard-overview.webp", title: "Dashboard principal", description: "Visão geral de indicadores, fluxo de caixa e agenda em uma interface centralizada.", alt: "Dashboard principal do BizManager com indicadores financeiros, gráfico de fluxo de caixa e agenda do dia." },
        { src: "/images/projects/bizmanager/financial-overview.webp", title: "Controle financeiro", description: "Acompanhamento de saldo, receitas, despesas e categorias para leitura rápida da operação.", alt: "Tela financeira do BizManager com cards de saldo, receitas, despesas e gráficos de evolução mensal." },
        { src: "/images/projects/bizmanager/clients-management.webp", title: "Organização de clientes", description: "Carteira de clientes com busca, status, histórico e ações importantes sempre acessíveis.", alt: "Tela de clientes do BizManager com indicadores e tabela de clientes cadastrados." },
        { src: "/images/projects/bizmanager/inventory-control.webp", title: "Gestão de estoque", description: "Controle de produtos, níveis de reposição e distribuição por categoria em um painel claro.", alt: "Tela de estoque do BizManager com valor em estoque, total de itens, alertas e distribuição por categoria." },
        { src: "/images/projects/bizmanager/agenda-week.webp", title: "Agenda operacional", description: "Visualização semanal para organizar atendimentos, compromissos e rotina do negócio.", alt: "Tela de agenda do BizManager com calendário semanal e compromissos posicionados por horario." },
      ]
    : [
        { src: "/images/projects/bizmanager/dashboard-overview.webp", title: "Main dashboard", description: "Overview of indicators, cash flow and schedule in one centralized interface.", alt: "BizManager main dashboard with financial indicators, cash-flow chart and today's schedule." },
        { src: "/images/projects/bizmanager/financial-overview.webp", title: "Financial control", description: "Balance, revenue, expenses and categories organized for a quick operational read.", alt: "BizManager financial screen with balance, revenue, expense cards and monthly evolution charts." },
        { src: "/images/projects/bizmanager/clients-management.webp", title: "Client organization", description: "Client portfolio with search, status, history and key actions always accessible.", alt: "BizManager clients screen with indicators and a client management table." },
        { src: "/images/projects/bizmanager/inventory-control.webp", title: "Inventory management", description: "Product control, replenishment levels and category distribution in a clear panel.", alt: "BizManager inventory screen with stock value, total items, alerts and category distribution." },
        { src: "/images/projects/bizmanager/agenda-week.webp", title: "Operational schedule", description: "Weekly view to organize appointments, services and the business routine.", alt: "BizManager schedule screen with a weekly calendar and appointments positioned by time." },
      ];
  const otherProjects = isPortuguese
    ? [
        {
          slug: "asynchub",
          src: "/images/projects/asynchub/dashboard.webp",
          alt: "Dashboard do Async Hub CRM com métricas de conversas no Instagram, funil de atendimento e status dos canais.",
          title: "Async Hub CRM",
          status: "Em validação",
          description: "CRM multi-tenant para centralizar conversas do Instagram e WhatsApp, com dashboard de desempenho e funil de vendas em tempo real.",
        },
        {
          slug: "encaixe",
          src: "/images/projects/encaixe/vitrine-calendario.webp",
          alt: "Vitrine pública de agendamento do Encaixe com calendário, preferência de profissional e horários disponíveis.",
          title: "Encaixe",
          status: "Em desenvolvimento",
          description: "Sistema de agendamentos com vitrine pública de reserva, grade de horários flexível e painel para múltiplos profissionais.",
        },
      ]
    : [
        {
          slug: "asynchub",
          src: "/images/projects/asynchub/dashboard.webp",
          alt: "Async Hub CRM dashboard with Instagram conversation metrics, service funnel and channel status.",
          title: "Async Hub CRM",
          status: "In validation",
          description: "Multi-tenant CRM to centralize Instagram and WhatsApp conversations, with a performance dashboard and real-time sales funnel.",
        },
        {
          slug: "encaixe",
          src: "/images/projects/encaixe/vitrine-calendario.webp",
          alt: "Encaixe public booking storefront with calendar, professional preference and available time slots.",
          title: "Encaixe",
          status: "In development",
          description: "Appointment scheduling system with a public booking storefront, flexible time-slot grid and a panel for multiple professionals.",
        },
      ];
  const bizManagerIdentityHighlights = isPortuguese
    ? ["Módulos de gestão conectados em uma base única.", "Interface pensada para leitura rápida de dados e rotinas.", "Arquitetura full-stack preparada para evolução do produto."]
    : ["Management modules connected in a single base.", "Interface designed for quick reading of data and routines.", "Full-stack architecture prepared for product evolution."];
  const bizManagerModuleChips = isPortuguese
    ? ["Dashboard", "Financeiro", "Clientes", "Estoque", "Agenda", "Configurações"]
    : ["Dashboard", "Finances", "Clients", "Inventory", "Schedule", "Settings"];

  return (
    <>
      <Section spacing="page-top">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow text-async-green">{labels.heroEyebrow}</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight text-text-primary md:text-6xl">{labels.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{labels.heroDescription}</p>
            <div className="mt-8">
              <CTAWhatsApp content={content} label={labels.heroPrimaryCta} message={content.whatsappMessages.hero} size="large" />
            </div>
          </div>
          <ProjectPreview content={content} eyebrow={labels.featured} title="BizManager" />
        </div>

        <div id="previews-produto" className="mt-20 scroll-mt-28 md:mt-28">
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
                <p className="text-sm font-semibold text-text-primary">{isPortuguese ? "O que o projeto demonstra" : "What the project demonstrates"}</p>
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
                <p className="text-sm font-semibold text-text-primary">{isPortuguese ? "Módulos contemplados" : "Covered modules"}</p>
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
                  ? "Base autoral para demonstrar estratégia, interface e arquitetura em um produto real em evolução."
                  : "A proprietary base to demonstrate strategy, interface and architecture in a real evolving product."}
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <h2 className="font-display text-3xl font-semibold text-text-primary">{isPortuguese ? "Outros projetos" : "Other projects"}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">
            {isPortuguese
              ? "Produtos autorais em desenvolvimento, usados como laboratório para testar arquitetura, interface e integração antes de levar essa base para projetos de clientes."
              : "In-development proprietary products, used as a lab to test architecture, interface and integrations before bringing that base into client projects."}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {otherProjects.map((project) => (
              <Card key={project.slug} className="flex h-full flex-col !p-0 overflow-hidden">
                <div className="relative aspect-[1440/900] w-full border-b border-border">
                  <Image src={project.src} alt={project.alt} fill className="object-cover object-top" sizes="(min-width: 640px) 50vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="eyebrow w-fit rounded-full border border-border bg-surface px-3 py-1 text-async-green">{project.status}</span>
                  <h3 className="font-display mt-3 text-xl font-semibold text-text-primary">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA
        content={content}
        eyebrow={labels.similar}
        title={labels.finalCtaTitle}
        description={labels.finalCtaDescription}
        ctaLabel={content.bizManager.cta}
        message={content.whatsappMessages.bizManager}
      />
    </>
  );
}
