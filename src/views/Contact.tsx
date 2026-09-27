import { siteConfig } from "../config/site";
import type { SiteContent } from "../content/types";
import { Card } from "../components/ui/Card";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { AsyncFlow } from "../components/brand/AsyncFlow";
import { Mark } from "../components/brand/Mark";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";
import { createWhatsAppLink } from "../utils/whatsapp";

type ContactProps = {
  content: SiteContent;
};

export function Contact({ content }: ContactProps) {
  const contact = siteConfig.contact;
  const whatsapp = contact.whatsapp;
  const hasWhatsAppNumber = Boolean(whatsapp.number);
  const whatsappHref = createWhatsAppLink(content.whatsappMessages.contactCta);
  const labels = content.ui.contact;

  return (
    <Section spacing="page-top" containerClassName="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <SectionTitle eyebrow={content.nav.contact} title={content.contact.title} description={content.contact.description} titleAs="h1" />
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-md bg-deep-forest px-6 py-10 text-center text-mint-white md:px-10">
          <AsyncFlow variant="mono" className="pointer-events-none absolute inset-0 h-full w-full" />
          <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-md border border-border-dark bg-white/[0.03]">
            <Mark className="h-9 w-9 text-async-green" />
          </div>
          <h2 className="relative font-display text-3xl font-semibold md:text-4xl">{content.sections.finalCta}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-7 text-mint-white/75">{content.whatsappMessage}</p>
          <p className="relative mx-auto mt-3 max-w-xl text-sm font-semibold text-async-green">{labels.meeting}</p>
          <CTAWhatsApp content={content} label={content.contact.primaryLabel} message={content.whatsappMessages.contactCta} className="relative mt-8" />
        </div>
      </div>

      <div className="grid gap-4">
        {hasWhatsAppNumber ? (
          <a
            className="group block rounded-md border border-border bg-white p-6 shadow-card transition duration-200 hover:border-async-green focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="eyebrow text-async-green">{labels.whatsapp}</p>
            <p className="mt-3 break-words text-xl font-semibold text-text-primary">{whatsapp.display}</p>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{labels.whatsappHint}</p>
            <span className="mt-5 inline-flex min-h-11 max-w-full items-center justify-center rounded-sm border border-async-green/30 bg-surface-soft px-4 py-2.5 text-center text-sm font-semibold leading-snug text-deep-forest transition group-hover:border-async-green/60">
              {labels.whatsappCta}
            </span>
          </a>
        ) : null}
        <Card className="!p-0 divide-y divide-border">
          <div className="p-6">
            <p className="eyebrow text-async-green">{labels.email}</p>
            <a className="mt-3 block break-words text-xl font-semibold text-text-primary transition duration-200 hover:text-deep-forest" href={`mailto:${contact.email.address}`}>
              {contact.email.address}
            </a>
          </div>
          <div className="p-6">
            <p className="eyebrow text-async-green">{labels.instagram}</p>
            <a
              className="mt-3 block break-words text-xl font-semibold text-text-primary transition duration-200 hover:text-deep-forest"
              href={contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.instagram.handle}
            </a>
          </div>
          <div className="p-6">
            <p className="eyebrow text-async-green">{labels.companyInfo}</p>
            <div className="mt-3 space-y-2 text-sm text-text-secondary">
              <p>
                <span className="font-semibold text-text-primary">{labels.legalName}:</span> {siteConfig.company.legalName}
              </p>
              <p>
                <span className="font-semibold text-text-primary">{labels.cnpj}:</span> {siteConfig.company.cnpj}
              </p>
              <p>
                <span className="font-semibold text-text-primary">{labels.address}:</span> {siteConfig.company.address.formatted}
              </p>
            </div>
          </div>
        </Card>
        <Card className="bg-surface-soft">
          <p className="eyebrow text-async-green">{content.remoteService.title}</p>
          <p className="mt-3 text-sm leading-6 text-text-secondary">{content.remoteService.description}</p>
        </Card>
      </div>
    </Section>
  );
}
