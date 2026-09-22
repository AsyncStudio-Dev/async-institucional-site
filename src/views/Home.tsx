import type { SiteContent } from "../content/types";
import { localizedPaths } from "../routes/paths";
import { AsyncFlow } from "../components/brand/AsyncFlow";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { FounderCard } from "../components/ui/FounderCard";
import { ProjectPreview } from "../components/ui/ProjectPreview";
import { Reveal } from "../components/ui/Reveal";
import { SectionTitle } from "../components/ui/SectionTitle";
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
      {/* Hero — Deep Forest, alto impacto */}
      <section className="relative overflow-hidden bg-deep-forest">
        <AsyncFlow variant="hero" className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] w-full opacity-90 md:h-[34rem]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
          <p className="eyebrow text-async-green">{content.hero.eyebrow}</p>
          <h1 className="font-display mt-5 text-4xl font-bold leading-[1.1] text-mint-white md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-mint-white/70 md:text-lg md:leading-8">
            {content.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAWhatsApp content={content} message={content.whatsappMessages.hero} size="large" />
            <Button variant="tertiary" tone="dark" href={paths.services} size="large">
              {content.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* O que fazemos — claro */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal>
          <SectionTitle
            eyebrow={labels.problemsEyebrow}
            title={content.sections.services}
            description={content.sections.servicesDescription}
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <Reveal key={service.title} delayMs={index * 80}>
              <Card className="flex h-full flex-col">
                <h3 className="font-display text-lg font-semibold text-text-primary">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">{service.summary}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button variant="tertiary" href={paths.services}>
            {labels.servicesCta}
          </Button>
        </div>
      </section>

      {/* Projeto em destaque — Deep Forest */}
      <section className="bg-deep-forest py-20 text-mint-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-async-green">{labels.bizEyebrow}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-mint-white md:text-4xl">
              {content.sections.bizManager}
            </h2>
            <p className="mt-5 text-base leading-7 text-mint-white/70">{content.bizManager.summary}</p>
            <p className="mt-3 inline-flex rounded-sm border border-border-dark px-4 py-2.5 text-sm font-medium text-mint-white/85">
              {content.bizManager.status}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAWhatsApp content={content} label={content.bizManager.cta} message={content.whatsappMessages.bizManager} size="large" />
              <Button variant="secondary" tone="dark" href={paths.projects}>
                {labels.bizProjectsCta}
              </Button>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <ProjectPreview content={content} tone="dark" />
          </Reveal>
        </div>
      </section>

      {/* Sobre — claro, resumido */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Reveal>
          <SectionTitle title={content.sections.about} description={content.sections.aboutDescription} />
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
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
      </section>

      {/* Contato final — Deep Forest */}
      <section className="bg-deep-forest py-20 text-mint-white md:py-28">
        <Reveal className="mx-auto max-w-3xl px-5 text-center">
          <p className="eyebrow text-async-green">{labels.contactEyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-mint-white md:text-4xl">{content.sections.finalCta}</h2>
          <p className="mt-4 text-base leading-7 text-mint-white/70">{content.sections.finalCtaDescription}</p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CTAWhatsApp content={content} label={content.contact.primaryLabel} message={content.whatsappMessages.contactCta} size="large" />
            <p className="text-sm text-mint-white/50">
              {contactLabels.email}: <a className="underline underline-offset-2 hover:text-mint-white" href={`mailto:${contact.email.address}`}>{contact.email.address}</a>
              <span className="mx-2">·</span>
              <a className="underline underline-offset-2 hover:text-mint-white" href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
                {contact.instagram.handle}
              </a>
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
