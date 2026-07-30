import Link from "next/link";
import { siteConfig } from "../../config/site";
import type { SiteContent } from "../../content/types";
import { localizedPaths } from "../../routes/paths";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { BrandLogo } from "./BrandLogo";

type FooterProps = {
  content: SiteContent;
};

function getServiceAnchorId(serviceTitle: string) {
  const title = serviceTitle.toLowerCase();
  if (title.includes("site") || title.includes("website")) return "sites-institucionais";
  if (title.includes("landing")) return "landing-pages";
  if (title.includes("sistema sob") || title.includes("custom system")) return "sistemas-sob-medida";
  if (title.includes("web app")) return "web-apps";
  if (title.includes("automa") || title.includes("automation")) return "automacoes-internas";
  if (title.includes("saas") || title.includes("mvp")) return "saas-mvp";
  return "modernizacao-sistemas";
}

export function Footer({ content }: FooterProps) {
  const paths = localizedPaths[content.locale];
  const labels = content.ui.footer;
  const contact = siteConfig.contact;
  const whatsappHref = createWhatsAppLink(content.whatsappMessages.footer);

  return (
    <footer className="border-t border-white/10 bg-async-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.1fr_1fr]">
        <div className="flex flex-col items-start">
          <BrandLogo to={paths.home} inverted />
          <p className="mt-4 max-w-md text-base font-medium leading-7 text-white/90">
            {labels.description}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/50">
            {labels.remote}
          </p>
          <Button
            href={whatsappHref}
            variant="dark-glass"
            className="mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-async-cyan shadow-[0_0_0_3px_rgba(156,237,231,0.16)]" />
            {content.nav.cta}
          </Button>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-cyan">{content.nav.home}</p>
          <nav className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <Link className="transition hover:text-white" href={paths.home}>{content.nav.home}</Link>
            <Link className="transition hover:text-white" href={paths.services}>{content.nav.services}</Link>
            <Link className="transition hover:text-white" href={paths.projects}>{content.nav.projects}</Link>
            <Link className="transition hover:text-white" href={paths.about}>{content.nav.about}</Link>
            <Link className="transition hover:text-white" href={paths.contact}>{content.nav.contact}</Link>
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-cyan">{content.nav.services}</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            {content.services.map((service) => {
              const displayTitle =
                service.title === "SaaS / MVP para startups" || service.title === "SaaS / MVP for startups"
                  ? "SaaS/MVPs"
                  : service.title;
              return (
                <li key={service.title}>
                  <Link
                    href={`${paths.services}#${getServiceAnchorId(service.title)}`}
                    className="transition hover:text-white"
                  >
                    {displayTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-cyan">{labels.featured}</p>
          <Link
            href={paths.projects}
            className="mt-4 block rounded-async border border-white/5 bg-white/[0.02] p-4 transition hover:border-white/10 hover:bg-white/[0.05]"
          >
            <span className="text-sm font-semibold text-white">BizManager</span>
            <span className="mt-1 block text-xs text-white/50">{content.bizManager.status}</span>
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-async-cyan">{content.nav.contact}</p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/60">
            <a className="block break-words transition hover:text-white" href={`mailto:${contact.email.address}`}>
              {contact.email.address}
            </a>
            <a className="block break-words transition hover:text-white" href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
              {contact.instagram.handle}
            </a>
            {contact.whatsapp.number && (
              <a
                className="block break-words transition hover:text-white"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: {contact.whatsapp.display}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-5 text-sm text-white/50">
        <p>{labels.rights}</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={paths.privacy} className="transition hover:text-white">{labels.privacy}</Link>
          <Link href={paths.terms} className="transition hover:text-white">{labels.terms}</Link>
          <Link href={paths.projects} className="transition hover:text-white">BizManager</Link>
        </nav>
      </div>
    </footer>
  );
}
