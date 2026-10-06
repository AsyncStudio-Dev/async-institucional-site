import Image from "next/image";
import { bizManagerConfig } from "../config/bizmanager";
import type { SiteContent } from "../content/types";
import { fillTemplate, formatBizManagerPrice, getBizManagerStartingPrice } from "../lib/bizmanager";
import { localizedPaths } from "../routes/paths";
import { BizManagerMark } from "../components/brand/BizManagerMark";
import { BizManagerShowcase, type BizManagerShowcaseSlide } from "../components/ui/BizManagerShowcase";
import { BizManagerStatusBadge } from "../components/ui/BizManagerStatusBadge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { FinalCTA } from "../components/ui/FinalCTA";
import { ProjectPreview } from "../components/ui/ProjectPreview";
import { Section } from "../components/ui/Section";

type ProjectsProps = {
  content: SiteContent;
};

export function Projects({ content }: ProjectsProps) {
  const labels = content.ui.projects;
  const biz = content.bizManager;
  const paths = localizedPaths[content.locale];
  const showcaseSlides: BizManagerShowcaseSlide[] = [
    { src: biz.heroImage.src, alt: biz.heroImage.alt, title: content.sections.bizManager, description: biz.summary },
    ...biz.features.map((feature) => ({ src: feature.image.src, alt: feature.image.alt, title: feature.eyebrow, description: feature.description })),
  ];
  const startingPrice = formatBizManagerPrice(content.locale, getBizManagerStartingPrice());

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
          <ProjectPreview content={content} eyebrow={labels.featured} title={biz.name} />
        </div>

        <div id="previews-produto" className="mt-20 scroll-mt-28 md:mt-28">
          <h2 className="font-display text-3xl font-semibold text-text-primary">{labels.gallery}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">{labels.galleryDescription}</p>
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-10 lg:gap-6">
            <BizManagerShowcase
              slides={showcaseSlides}
              labels={{ previous: labels.carouselPrevious, next: labels.carouselNext, show: labels.carouselShow }}
            />

            <Card className="flex flex-col gap-5 lg:col-span-3 lg:self-stretch">
              <BizManagerStatusBadge content={content} />

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-deep-forest">
                  <BizManagerMark className="h-9 w-9 text-async-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{biz.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-text-secondary">{biz.tagline}</p>
                </div>
              </div>

              <div>
                <span className="eyebrow text-async-green">{labels.identityLabel}</span>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{labels.identityDescription}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-text-primary">{labels.identityModules}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {biz.modules.map((module) => (
                    <span key={module.title} className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-text-secondary">
                      {module.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-text-secondary">{labels.identityPricing}</p>
                <p className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold text-text-primary">{startingPrice}</span>
                  <span className="text-sm text-text-secondary">{biz.pricing.perMonth}</span>
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {biz.pricing.plans.start.name} {fillTemplate(biz.pricing.trialLabel, { days: bizManagerConfig.trialDays })}
                </p>
              </div>

              <Button variant="secondary" href={paths.bizManager} className="mt-auto w-full">
                {biz.learnMoreCta}
              </Button>
            </Card>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <h2 className="font-display text-3xl font-semibold text-text-primary">{labels.otherProjects}</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-secondary">{labels.otherProjectsDescription}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {labels.otherProjectsList.map((project) => (
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
        ctaLabel={labels.buildSimilarCta}
        message={content.whatsappMessages.bizManager}
      />
    </>
  );
}
