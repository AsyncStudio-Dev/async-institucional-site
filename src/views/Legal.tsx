import type { LegalDocument } from "../content/types";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionTitle } from "../components/ui/SectionTitle";

type LegalProps = {
  document: LegalDocument;
  updatedLabel: string;
};

export function Legal({ document, updatedLabel }: LegalProps) {
  return (
    <section className="mx-auto min-h-[calc(100vh-88px)] max-w-3xl px-5 py-12 md:py-16">
      <SectionTitle title={document.title} titleAs="h1" className="mb-3" />
      <p className="mb-10 text-center text-sm text-async-frost-dark">
        {updatedLabel} {document.lastUpdated}
      </p>

      <GlassCard className="p-7 md:p-8">
        <p className="text-lg leading-8 text-async-graphite">{document.intro}</p>

        <div className="mt-8 flex flex-col gap-8">
          {document.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-async-ink">{section.heading}</h2>
              <div className="mt-3 space-y-4 text-base leading-7 text-async-graphite">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
