import type { SiteContent } from "../content/types";
import { localizedPaths } from "../routes/paths";
import { Button } from "../components/ui/Button";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { FounderCard } from "../components/ui/FounderCard";
import { GlassCard } from "../components/ui/GlassCard";
import { ProcessTimeline } from "../components/ui/ProcessTimeline";
import { ProjectPreview } from "../components/ui/ProjectPreview";
import { SectionTitle } from "../components/ui/SectionTitle";
import { InstitutionalPreview } from "../components/ui/InstitutionalPreview";
import { siteConfig } from "../config/site";
import { createWhatsAppLink } from "../utils/whatsapp";

type HomeProps = {
  content: SiteContent;
};

export function Home({ content }: HomeProps) {
  const paths = localizedPaths[content.locale];
  const featuredProblems = content.problems;
  const featuredServices = content.services.slice(0, 4);
  const labels = content.ui.home;
  const contactLabels = content.ui.contact;
  const contact = siteConfig.contact;
  const whatsappHref = createWhatsAppLink(content.whatsappMessages.contactCta);
  const heroCardClass =
    "flex h-full flex-col rounded-[13px] px-3.5 py-3 sm:min-h-[7.35rem] sm:px-4 sm:py-3 lg:min-h-[7.15rem] xl:min-h-[7.3rem]";
  const heroCardTitleClass = "text-[13.5px] font-semibold leading-[1.32] text-async-ink";
  const heroCardTextClass = "mt-1.5 text-[12.5px] leading-[1.52] text-[#4b5563]";
  const remoteCardTitle = content.locale === "pt" ? "Atendimento remoto" : "Remote work";
  const remoteCardDescription =
    content.locale === "pt"
      ? "Projetos remotos para Brasil e exterior, com comunicação clara, etapas definidas e acompanhamento próximo."
      : "Remote projects for Brazil and abroad, with clear communication, defined stages and close follow-up.";
  const solutionsCardTitle = content.locale === "pt" ? "Soluções sob medida" : "Custom solutions";
  const solutionsCardDescription =
    content.locale === "pt"
      ? "Sistemas, SaaS e web apps planejados e construídos especificamente para as necessidades e processos do seu negócio."
      : "Systems, SaaS, and web apps planned and built specifically for your business workflows and needs.";

  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.28fr_0.72fr] lg:gap-7 lg:py-8 xl:grid-cols-[1.08fr_0.92fr] xl:gap-12 xl:py-14">
        <div>
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
              {content.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] text-async-ink md:text-6xl lg:text-[3.15rem] xl:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-async-graphite md:text-lg md:leading-8">
              {content.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAWhatsApp content={content} message={content.whatsappMessages.hero} size="large" className="w-full sm:w-auto" />
              <Button variant="secondary" href={paths.services}>
                {content.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <div className="mt-7 grid items-stretch gap-2.5 sm:grid-cols-3 lg:mt-7">
            <GlassCard variant="quiet" className={heroCardClass}>
              <p className={heroCardTitleClass}>{content.nav.services}</p>
              <p className={heroCardTextClass}>{content.sections.servicesDescription}</p>
            </GlassCard>
            <GlassCard variant="quiet" className={heroCardClass}>
              <p className={heroCardTitleClass}>{solutionsCardTitle}</p>
              <p className={heroCardTextClass}>{solutionsCardDescription}</p>
            </GlassCard>
            <GlassCard variant="quiet" className={heroCardClass}>
              <p className={heroCardTitleClass}>{remoteCardTitle}</p>
              <p className={heroCardTextClass}>{remoteCardDescription}</p>
            </GlassCard>
          </div>
        </div>

        <div className="relative lg:self-center">
          <InstitutionalPreview locale={content.locale} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <SectionTitle
          eyebrow={labels.problemsEyebrow}
          title={content.sections.problems}
          description={content.sections.problemsDescription}
        />
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProblems.map((problem, index) => (
            <GlassCard
              key={problem.pain}
              variant="default"
              className="flex h-full min-h-[10.75rem] flex-col p-5 transition duration-200 hover:-translate-y-0.5 hover:border-white hover:shadow-glass sm:min-h-[10.25rem] lg:min-h-[11.5rem]"
            >
              <div className="mb-3.5 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-async border border-ice-crystal/90 bg-white/85 text-xs font-semibold text-async-frost-dark shadow-[0_8px_20px_rgba(127,187,255,0.14)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-async-frost/40 via-ice-glacier/35 to-transparent" />
              </div>
              <h3 className="text-base font-semibold leading-snug text-async-ink md:text-[1.05rem]">
                {problem.pain}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.65] text-[#2f3845]">{problem.response}</p>
            </GlassCard>
          ))}
        </div>
        <GlassCard
          variant="quiet"
          className="mt-5 flex flex-col gap-4 border-white/85 p-5 shadow-[0_18px_48px_rgba(95,104,117,0.07)] md:flex-row md:items-center md:justify-between md:p-6"
        >
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold leading-tight text-async-ink">{labels.problemsCtaTitle}</h3>
            <p className="mt-2 text-sm leading-6 text-[#2f3845]">{labels.problemsCtaDescription}</p>
          </div>
          <CTAWhatsApp
            content={content}
            label={labels.problemsCtaLabel}
            message={content.whatsappMessages.header}
            className="w-full md:w-auto"
          />
        </GlassCard>
      </section>

      <section className="bg-white/55 pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle title={content.sections.services} description={content.sections.servicesDescription} />
          <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, index) => (
              <GlassCard
                key={service.title}
                variant="quiet"
                className="group flex h-full min-h-[12.25rem] flex-col border-white/85 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-ice-crystal hover:bg-white/70 hover:shadow-[0_18px_52px_rgba(127,187,255,0.13)]"
              >
                <div className="mb-3.5 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-async border border-ice-crystal/90 bg-white/85 text-xs font-semibold text-async-frost-dark shadow-[0_8px_20px_rgba(127,187,255,0.14)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-async-frost/40 via-ice-glacier/35 to-transparent transition group-hover:from-async-frost/55" />
                </div>
                <h3 className="text-lg font-semibold leading-tight text-async-ink">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-[#354052]">{service.summary}</p>
              </GlassCard>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-white/85 bg-white/55 px-5 py-5 text-center shadow-[0_14px_40px_rgba(95,104,117,0.06)] sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="mx-auto flex max-w-2xl flex-col gap-2 text-sm leading-6 text-[#455160] sm:mx-0">
              <p className="font-medium text-async-ink">{labels.servicesMoreIntro}</p>
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {labels.servicesMoreItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-async border border-ice-mist/70 bg-white/60 px-2.5 py-1 text-xs font-medium text-[#354052] shadow-[0_6px_18px_rgba(127,187,255,0.06)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Button
              variant="secondary"
              href={paths.services}
              className="w-full shrink-0 border-async-frost/40 bg-white/90 px-5 shadow-[0_10px_28px_rgba(138,108,255,0.10)] hover:border-async-frost/80 hover:bg-white hover:text-async-frost-dark hover:shadow-[0_14px_34px_rgba(138,108,255,0.14)] sm:w-auto"
            >
              {labels.servicesCta}
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
        <SectionTitle eyebrow={labels.whyEyebrow} title={content.sections.why} description={content.sections.whyDescription} />
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.whyAsync.map((item, index) => (
            <GlassCard
              key={item.title}
              variant="tinted"
              className="group flex h-full min-h-[9.75rem] flex-col border-white/80 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-ice-crystal/80 hover:bg-white/65 hover:shadow-[0_18px_52px_rgba(127,187,255,0.11)] sm:min-h-[10rem] lg:min-h-[10.25rem] xl:min-h-[10.5rem]"
            >
              <div className="mb-3.5 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-async border border-ice-crystal/85 bg-white/80 text-[11px] font-semibold text-async-frost-dark shadow-[0_8px_20px_rgba(127,187,255,0.12)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-async-frost/35 via-ice-glacier/30 to-transparent transition group-hover:from-async-frost/50" />
              </div>
              <h3 className="text-lg font-semibold leading-tight text-async-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.65] text-[#354052]">{item.description}</p>
            </GlassCard>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium leading-6 text-[#354052]">
          {labels.whyClosing}
        </p>
      </section>

      <section className="bg-async-ink py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-cyan">{labels.bizEyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{content.sections.bizManager}</h2>
            <p className="mt-5 text-base leading-7 text-white/75">{content.bizManager.summary}</p>
            <p className="mt-3 text-base leading-7 text-white/75">{content.bizManager.objective}</p>
            <p className="mt-4 inline-flex rounded-async bg-white/10 px-4 py-3 text-sm font-semibold text-white">
              {content.bizManager.status}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAWhatsApp
                content={content}
                label={content.bizManager.cta}
                message={content.whatsappMessages.bizManager}
                size="large"
                className="shadow-[0_12px_30px_rgba(138,108,255,0.14)] hover:shadow-[0_18px_40px_rgba(138,108,255,0.18)]"
              />
              <Button variant="dark-glass" href={paths.projects}>
                {labels.bizProjectsCta}
              </Button>
            </div>
          </div>
          <ProjectPreview content={content} tone="dark" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-16 pb-20 md:pt-24 md:pb-28">
        <SectionTitle
          eyebrow={labels.processEyebrow}
          title={content.sections.process}
          description={content.sections.processDescription}
        />
        <ProcessTimeline steps={content.process} />
      </section>

      <section className="bg-white/55 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle title={content.sections.about} description={content.sections.aboutDescription} />
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch mt-10 md:mt-12">
            <GlassCard variant="elevated" className="p-7 md:p-8 flex flex-col justify-between">
              <p className="text-lg leading-8 text-async-graphite">{content.about.summary}</p>
              <div>
                <Button className="mt-7" variant="secondary" href={paths.about}>
                  {labels.aboutCta}
                </Button>
              </div>
            </GlassCard>
            <div className="grid gap-4 sm:grid-cols-2">
              {content.about.founders.map((founder) => (
                <FounderCard
                  key={founder.name}
                  name={founder.name}
                  role={founder.role}
                  description={founder.description}
                />
              ))}
              <GlassCard variant="tinted" className="sm:col-span-2 text-left">
                <p className="text-base font-semibold text-async-ink">{content.about.philosophy.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-async-graphite">{content.about.philosophy.description}</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-8 pb-12 md:pt-12 md:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-async-ink via-[#121724] to-[#171d2a] px-6 py-10 text-white shadow-frost md:px-10 md:py-12">
          {/* Subtle brand glow decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(156,237,231,0.04),transparent_400px)] pointer-events-none" />
          
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-cyan">{labels.contactEyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{content.sections.finalCta}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{content.sections.finalCtaDescription}</p>
              <CTAWhatsApp content={content} label={content.contact.primaryLabel} message={content.whatsappMessages.contactCta} className="mt-7" size="large" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-async-ink/40 backdrop-blur-md p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-async-cyan/90">
                {labels.contactChannels}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {labels.contactChannelsDescription}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {/* WhatsApp */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-async-cyan/[0.12] bg-white/[0.04] p-4 transition duration-200 hover:border-async-cyan/[0.25] hover:bg-white/[0.08]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-async-cyan/80 transition duration-200 group-hover:bg-white/[0.06] group-hover:text-async-cyan">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.63 1.97 14.162.949 11.536.949c-5.437 0-9.862 4.372-9.865 9.801-.001 1.736.486 3.431 1.413 4.931l-.955 3.485 3.568-.936zM17.487 14.4c-.27-.136-1.602-.79-1.85-.88-.25-.09-.432-.136-.614.136-.182.273-.706.88-.865 1.06-.16.18-.32.203-.59.067-.27-.136-1.14-.42-2.172-1.34-1.03-.92-1.72-2.05-1.92-2.39-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.614-1.48-.84-2.03-.22-.53-.46-.46-.614-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.68 1.13 2.86.14.18 1.95 2.98 4.72 4.18.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.602-.66 1.83-1.26.23-.6.23-1.12.16-1.26-.07-.14-.25-.23-.52-.36z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-white flex items-center gap-1.5 transition duration-200">
                      {contactLabels.whatsapp}
                      <span className="inline-block h-1 w-1 rounded-full bg-async-cyan shadow-[0_0_6px_rgba(156,237,231,0.5)] animate-pulse" />
                    </span>
                    <span className="mt-1.5 text-xs text-white/60 leading-relaxed font-light">
                      {contact.whatsapp.display}
                    </span>
                    <span className="mt-2 inline-flex min-h-9 max-w-full items-center rounded-async border border-async-cyan/20 bg-async-cyan/[0.08] px-3 py-1.5 text-left text-xs font-semibold leading-snug text-async-cyan transition group-hover:border-async-cyan/40 group-hover:bg-async-cyan/[0.12]">
                      {contactLabels.whatsappCta}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email.address}`}
                  className="group flex items-start gap-3.5 rounded-xl border border-white/[0.03] bg-white/[0.01] p-4 transition duration-200 hover:border-white/[0.10] hover:bg-white/[0.05]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-white/50 transition duration-200 group-hover:bg-white/[0.08] group-hover:text-white/80">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-white/95 transition duration-200 group-hover:text-white">
                      {contactLabels.email}
                    </span>
                    <span className="mt-1.5 text-xs text-white/50 font-light break-all">
                      {contact.email.address}
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-white/[0.03] bg-white/[0.01] p-4 transition duration-200 hover:border-white/[0.10] hover:bg-white/[0.05]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-white/50 transition duration-200 group-hover:bg-white/[0.08] group-hover:text-white/80">
                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-white/95 transition duration-200 group-hover:text-white">
                      {contactLabels.instagram}
                    </span>
                    <span className="mt-1.5 text-xs text-white/50 font-light">
                      {contact.instagram.handle}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
