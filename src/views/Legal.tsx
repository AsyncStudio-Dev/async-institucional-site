import type { LegalDocument } from "../content/types";
import { Card } from "../components/ui/Card";
import { SectionTitle } from "../components/ui/SectionTitle";

type LegalProps = {
  document: LegalDocument;
  updatedLabel: string;
};

export function Legal({ document, updatedLabel }: LegalProps) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
      <SectionTitle title={document.title} titleAs="h1" className="mb-3" />
      <p className="mb-10 text-center text-sm text-text-secondary">
        {updatedLabel} {document.lastUpdated}
      </p>

      <Card>
        <p className="text-lg leading-8 text-text-secondary">{document.intro}</p>

        <div className="mt-8 flex flex-col gap-8">
          {document.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-text-primary">{section.heading}</h2>
              <div className="mt-3 space-y-4 text-base leading-7 text-text-secondary">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}
