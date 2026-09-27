import type { SiteContent } from "../content/types";
import { Card } from "../components/ui/Card";
import { FinalCTA } from "../components/ui/FinalCTA";
import { FounderCard } from "../components/ui/FounderCard";
import { ProcessTimeline } from "../components/ui/ProcessTimeline";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";

type AboutProps = {
  content: SiteContent;
};

export function About({ content }: AboutProps) {
  const labels = content.ui.about;

  return (
    <>
      <Section spacing="page-top">
        <SectionTitle
          eyebrow={content.nav.about}
          title={content.about.heroTitle}
          description={content.about.heroSubtitle}
          titleAs="h1"
          className="mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Reveal>
            <Card className="h-full">
              <h2 className="font-display text-xl font-semibold text-text-primary">{content.about.storyTitle}</h2>
              <div className="mt-5 space-y-5 text-lg leading-8 text-text-secondary">
                {content.about.fullStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delayMs={100} className="grid gap-6">
            <Card>
              <h2 className="font-display text-xl font-semibold text-text-primary">{labels.founders}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {content.about.founders.map((founder) => (
                  <FounderCard key={founder.name} name={founder.name} role={founder.role} description={founder.description} />
                ))}
              </div>
            </Card>

            <Card className="bg-surface-soft">
              <h2 className="font-display text-xl font-semibold text-text-primary">{content.remoteService.title}</h2>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{content.remoteService.description}</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionTitle title={content.about.valuePropsTitle} description={content.about.valuePropsSubtitle} className="mb-10 md:mb-14" />
        </Reveal>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
          {content.about.valueProps.map((prop, index) => (
            <Reveal key={prop.title} delayMs={index * 80}>
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">{prop.title}</h3>
                  <p className="mt-3.5 text-sm leading-6 text-text-secondary">{prop.description}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle
            eyebrow={labels.processEyebrow}
            title={content.sections.process}
            description={content.sections.processDescription}
            className="mb-10 md:mb-14"
          />
        </Reveal>
        <ProcessTimeline steps={content.process} />
      </Section>

      <FinalCTA
        content={content}
        title={content.sections.finalCta}
        description={content.sections.finalCtaDescription}
        ctaLabel={content.contact.primaryLabel}
        message={content.whatsappMessages.contactCta}
      />
    </>
  );
}
