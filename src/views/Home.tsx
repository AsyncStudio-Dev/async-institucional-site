import type { SiteContent } from "../content/types";
import { localizedPaths } from "../routes/paths";
import { AsyncFlow } from "../components/brand/AsyncFlow";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { FinalCTA } from "../components/ui/FinalCTA";
import { FounderCard } from "../components/ui/FounderCard";
import { HeroTitle } from "../components/ui/HeroTitle";
import { ProjectPreview } from "../components/ui/ProjectPreview";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ServiceTeaserCard } from "../components/ui/ServiceTeaserCard";
import { siteConfig } from "../config/site";

type HomeProps = {
  content: SiteContent;
};

export function Home({ content }: HomeProps) {
  const paths = localizedPaths[content.locale];
  const featuredServices = content.services.slice(0, 4);
  const labels = content.ui.home;
  const contactLabels = content.ui.contact;
  const contact = siteConfig.contact;

  return (
    <>
      {/* Hero — Deep Forest, alto impacto. data-header-theme deixa o header escuro enquanto passa por aqui */}
      <section data-header-theme="dark" className="relative overflow-hidden bg-deep-forest">
        <AsyncFlow variant="hero" className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] w-full opacity-90 md:h-[34rem]" />
        <AsyncFlow variant="mono" className="pointer-events-none absolute inset-x-0 bottom-0 h-[16rem] w-full md:h-[22rem]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-73px)] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
          <p className="hero-enter eyebrow text-async-green">{content.hero.eyebrow}</p>
          <HeroTitle
            text={content.hero.title}
            className="font-display mt-5 text-4xl font-bold leading-[1.1] text-mint-white md:text-6xl"
          />
          <p
            className="hero-enter mt-6 max-w-2xl text-base leading-7 text-mint-white/70 md:text-lg md:leading-8"
            style={{ animationDelay: "450ms" }}
          >
            {content.hero.subtitle}
          </p>
          <div className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "600ms" }}>
            <CTAWhatsApp content={content} message={content.whatsappMessages.hero} size="large" />
            <Button variant="tertiary" tone="dark" href={paths.services} size="large">
              {content.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* O que fazemos — claro */}
      <Section>
        <Reveal>
          <SectionTitle
            eyebrow={labels.problemsEyebrow}
            title={content.sections.services}
            description={content.sections.servicesDescription}
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 80}>
              <ServiceTeaserCard
                index={index}
                title={service.title}
                summary={service.summary}
                href={`${paths.services}#${service.slug}`}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="tertiary" href={paths.services}>
            {labels.servicesCta}
          </Button>
        </div>
      </Section>

      {/* Projeto em destaque — Deep Forest */}
      <Section tone="dark" containerClassName="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <AsyncFlow variant="divider" className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full md:h-16" />
        <Reveal>
          <p className="eyebrow text-async-green">{labels.bizEyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-mint-white md:text-4xl">{content.sections.bizManager}</h2>
          <p className="mt-5 text-base leading-7 text-mint-white/70">{content.bizManager.summary}</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-dark px-4 py-2 text-sm font-medium text-mint-white/85">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-async-green" aria-hidden="true" />
            {content.bizManager.status}
          </p>
          <div className="mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
            <CTAWhatsApp content={content} label={content.bizManager.cta} message={content.whatsappMessages.bizManager} size="large" />
            <Button variant="secondary" tone="dark" size="large" href={paths.projects}>
              {labels.bizProjectsCta}
            </Button>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <ProjectPreview content={content} tone="dark" />
        </Reveal>
      </Section>

      {/* Sobre — superfície suave, resumido */}
      <Section tone="surface">
        <Reveal>
          <SectionTitle title={content.sections.about} description={content.sections.aboutDescription} />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <Reveal>
            <Card className="flex h-full flex-col justify-between">
              <p className="text-lg leading-8 text-text-secondary">{content.about.summary}</p>
              <Button className="mt-7 w-fit" variant="secondary" href={paths.about}>
                {labels.aboutCta}
              </Button>
            </Card>
          </Reveal>
          <Reveal delayMs={100} className="grid gap-4 sm:grid-cols-2">
            {content.about.founders.map((founder) => (
              <FounderCard key={founder.name} name={founder.name} role={founder.role} description={founder.description} />
            ))}
          </Reveal>
        </div>
      </Section>

      <FinalCTA
        content={content}
        eyebrow={labels.contactEyebrow}
        title={content.sections.finalCta}
        description={content.sections.finalCtaDescription}
        ctaLabel={content.contact.primaryLabel}
        message={content.whatsappMessages.contactCta}
        footnote={
          <p className="text-sm text-mint-white/50">
            {contactLabels.email}:{" "}
            <a className="underline underline-offset-2 hover:text-mint-white" href={`mailto:${contact.email.address}`}>
              {contact.email.address}
            </a>
            <span className="mx-2">·</span>
            <a className="underline underline-offset-2 hover:text-mint-white" href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
              {contact.instagram.handle}
            </a>
          </p>
        }
      />
    </>
  );
}
