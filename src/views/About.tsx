import type { SiteContent } from "../content/types";
import { FounderCard } from "../components/ui/FounderCard";
import { GlassCard } from "../components/ui/GlassCard";
import { ProcessTimeline } from "../components/ui/ProcessTimeline";
import { SectionTitle } from "../components/ui/SectionTitle";

type AboutProps = {
  content: SiteContent;
};

export function About({ content }: AboutProps) {
  const labels = content.ui.about;

  return (
    <section className="mx-auto min-h-[calc(100vh-88px)] max-w-7xl px-5 py-12 md:py-16 scroll-mt-24">
      <SectionTitle
        eyebrow={content.nav.about}
        title={content.about.heroTitle}
        description={content.about.heroSubtitle}
        titleAs="h1"
        className="mb-8"
      />

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <GlassCard className="p-7 md:p-8">
            <h2 className="text-xl font-semibold text-async-ink mb-5">{content.about.storyTitle}</h2>
            <div className="space-y-5 text-lg leading-8 text-async-graphite">
              {content.about.fullStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid gap-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-async-ink">{labels.founders}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {content.about.founders.map((founder) => (
                <FounderCard
                  key={founder.name}
                  name={founder.name}
                  role={founder.role}
                  description={founder.description}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard variant="tinted" className="p-6">
            <h2 className="text-xl font-semibold text-async-ink">{content.remoteService.title}</h2>
            <p className="mt-3 text-sm leading-6 text-async-graphite">{content.remoteService.description}</p>
          </GlassCard>
        </div>
      </div>

      <div className="mt-16 md:mt-28">
        <SectionTitle
          title={content.about.valuePropsTitle}
          description={content.about.valuePropsSubtitle}
          className="mb-10 md:mb-14"
        />
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 max-w-md mx-auto lg:max-w-none">
          {content.about.valueProps.map((prop) => (
            <GlassCard
              key={prop.title}
              className="p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-async-frost/30 hover:shadow-glass"
            >
              <div>
                <h3 className="text-lg font-semibold text-async-ink">{prop.title}</h3>
                <p className="mt-3.5 text-sm leading-6 text-async-graphite">{prop.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Subtle premium separator to divide the two sections elegantly */}
      <div className="relative flex items-center justify-center my-16 md:my-32">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-async-frost/15 to-transparent" />
        </div>
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-async-frost/15 bg-white/60 backdrop-blur-sm shadow-[0_2px_8px_rgba(138,108,255,0.04)]">
          <div className="h-1.5 w-1.5 rounded-full bg-async-frost/35" />
        </div>
      </div>

      <div className="scroll-mt-24">
        <SectionTitle
          eyebrow={labels.processEyebrow}
          title={content.sections.process}
          description={content.sections.processDescription}
          className="mb-10 md:mb-14"
        />
        <ProcessTimeline steps={content.process} />
      </div>
    </section>
  );
}
