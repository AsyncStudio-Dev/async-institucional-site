import Image from "next/image";
import { asyncIconTransparent } from "../assets";
import { siteConfig } from "../config/site";
import type { SiteContent } from "../content/types";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { GlassCard } from "../components/ui/GlassCard";
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
    <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
      <div>
        <SectionTitle
          eyebrow={content.nav.contact}
          title={content.contact.title}
          description={content.contact.description}
          titleAs="h1"
        />
        <div className="liquid-glass liquid-glass-premium-dark mx-auto max-w-3xl rounded-2xl px-6 py-10 text-center text-white md:px-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_4px_12px_rgba(0,0,0,0.2)]">
            <Image src={asyncIconTransparent} alt="Async Studio Logo" className="h-10 w-10 object-contain" />
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">{content.sections.finalCta}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">{content.whatsappMessage}</p>
          <p className="mx-auto mt-3 max-w-xl text-sm font-semibold text-async-cyan">{labels.meeting}</p>
          <CTAWhatsApp content={content} label={content.contact.primaryLabel} message={content.whatsappMessages.contactCta} className="mt-8" />
        </div>
      </div>

      <div className="grid gap-4">
        {hasWhatsAppNumber ? (
          <a
            className="liquid-glass group block rounded-2xl p-6 transition duration-200 hover:-translate-y-0.5 hover:border-white hover:shadow-glass focus:outline-none focus:ring-2 focus:ring-async-frost focus:ring-offset-2"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">{labels.whatsapp}</p>
            <p className="mt-3 break-words text-xl font-semibold text-async-ink">{whatsapp.display}</p>
            <p className="mt-3 text-sm leading-6 text-async-graphite">{labels.whatsappHint}</p>
            <span className="mt-5 inline-flex min-h-11 max-w-full items-center justify-center rounded-async border border-async-frost/20 bg-white/70 px-4 py-2.5 text-center text-sm font-semibold leading-snug text-async-frost-dark transition group-hover:border-async-frost/40 group-hover:bg-white">
              {labels.whatsappCta}
            </span>
          </a>
        ) : null}
        <GlassCard className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">{labels.email}</p>
          <a className="mt-3 block break-words text-xl font-semibold text-async-ink transition hover:text-async-frost-dark" href={`mailto:${contact.email.address}`}>
            {contact.email.address}
          </a>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">{labels.instagram}</p>
          <a
            className="mt-3 block break-words text-xl font-semibold text-async-ink transition hover:text-async-frost-dark"
            href={contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.instagram.handle}
          </a>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
            {labels.companyInfo}
          </p>
          <div className="mt-3 space-y-2 text-sm text-async-graphite">
            <p>
              <span className="font-semibold text-async-ink">{labels.legalName}:</span> {siteConfig.company.legalName}
            </p>
            <p>
              <span className="font-semibold text-async-ink">{labels.cnpj}:</span> {siteConfig.company.cnpj}
            </p>
            <p>
              <span className="font-semibold text-async-ink">{labels.address}:</span> {siteConfig.company.address.formatted}
            </p>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost-dark">
            {content.remoteService.title}
          </p>
          <p className="mt-3 text-sm leading-6 text-async-graphite">{content.remoteService.description}</p>
        </GlassCard>
      </div>
    </section>
  );
}
