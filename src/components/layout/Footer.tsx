import Link from "next/link";
import { siteConfig } from "../../config/site";
import type { SiteContent } from "../../content/types";
import { localizedPaths } from "../../routes/paths";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { getBizManagerLaunchCopy } from "../../lib/bizmanager";
import { BrandLogo } from "./BrandLogo";

type FooterProps = {
  content: SiteContent;
};

export function Footer({ content }: FooterProps) {
  const paths = localizedPaths[content.locale];
  const labels = content.ui.footer;
  const contact = siteConfig.contact;
  const whatsappHref = createWhatsAppLink(content.whatsappMessages.footer);
  const serviceAreaText = content.locale === "en" ? siteConfig.company.serviceArea.formattedEn : siteConfig.company.serviceArea.formattedPt;

  return (
    <footer className="border-t border-border-dark bg-deep-forest text-mint-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.1fr_1fr]">
        <div className="flex flex-col items-start">
          <BrandLogo to={paths.home} inverted />
          <p className="mt-4 max-w-md text-base font-medium leading-7 text-mint-white/90">{labels.description}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-mint-white/50">{labels.remote}</p>
          <Button href={whatsappHref} variant="secondary" tone="dark" className="mt-6" target="_blank" rel="noopener noreferrer">
            {content.nav.cta}
          </Button>
        </div>

        <div>
          <p className="eyebrow text-light-mint/80">{content.nav.home}</p>
          <nav className="mt-4 flex flex-col gap-3 text-sm text-mint-white/60">
            <Link className="transition duration-200 hover:text-mint-white" href={paths.home}>{content.nav.home}</Link>
            <Link className="transition duration-200 hover:text-mint-white" href={paths.offers}>{content.nav.offers}</Link>
            <Link className="transition duration-200 hover:text-mint-white" href={paths.services}>{content.nav.services}</Link>
            <Link className="transition duration-200 hover:text-mint-white" href={paths.projects}>{content.nav.projects}</Link>
            <Link className="transition duration-200 hover:text-mint-white" href={paths.about}>{content.nav.about}</Link>
            <Link className="transition duration-200 hover:text-mint-white" href={paths.contact}>{content.nav.contact}</Link>
          </nav>
        </div>

        <div>
          <p className="eyebrow text-light-mint/80">{content.nav.services}</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-mint-white/60">
            {content.services.map((service) => {
              const displayTitle =
                service.title === "SaaS / MVP para startups" || service.title === "SaaS / MVP for startups"
                  ? "SaaS/MVPs"
                  : service.title;
              return (
                <li key={service.title}>
                  <Link href={`${paths.services}#${service.slug}`} className="transition duration-200 hover:text-mint-white">
                    {displayTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-light-mint/80">{labels.featured}</p>
          <Link href={paths.bizManager} className="mt-4 block rounded-sm border border-border-dark p-4 transition duration-200 hover:border-light-mint/30">
            <span className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-mint-white">{content.bizManager.name}</span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-light-mint/80">
                <span className="h-1.5 w-1.5 rounded-full bg-async-green" aria-hidden="true" />
                {getBizManagerLaunchCopy(content).badge}
              </span>
            </span>
            <span className="mt-1 block text-xs text-mint-white/50">{content.bizManager.tagline}</span>
          </Link>
          <p className="eyebrow mt-6 text-light-mint/80">{content.nav.contact}</p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-mint-white/60">
            <a className="block break-words transition duration-200 hover:text-mint-white" href={`mailto:${contact.email.address}`}>
              {contact.email.address}
            </a>
            <a className="block break-words transition duration-200 hover:text-mint-white" href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
              {contact.instagram.handle}
            </a>
            {contact.whatsapp.number && (
              <a className="block break-words transition duration-200 hover:text-mint-white" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp: {contact.whatsapp.display}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-border-dark px-5 py-6 text-xs leading-relaxed text-mint-white/55">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-mint-white/80">
              <span className="font-semibold text-mint-white">{siteConfig.company.tradeName}</span> — {labels.legalName}: {siteConfig.company.legalName}
            </p>
            <p className="text-mint-white/50">
              <span>{labels.cnpj}: {siteConfig.company.cnpj}</span>
              <span className="mx-2 hidden md:inline text-mint-white/30">•</span>
              <span className="block md:inline">{labels.address}: {serviceAreaText}</span>
            </p>
          </div>
          <div className="text-mint-white/50">
            <span>{labels.email}: </span>
            <a href={`mailto:${contact.email.address}`} className="text-mint-white/70 underline underline-offset-2 transition duration-200 hover:text-mint-white">
              {contact.email.address}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-border-dark px-5 py-5 text-sm text-mint-white/65">
        <p>{labels.rights}</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={paths.privacy} className="transition duration-200 hover:text-mint-white">{labels.privacy}</Link>
          <Link href={paths.terms} className="transition duration-200 hover:text-mint-white">{labels.terms}</Link>
          <Link href={paths.bizManager} className="transition duration-200 hover:text-mint-white">{content.bizManager.name}</Link>
        </nav>
      </div>
    </footer>
  );
}
