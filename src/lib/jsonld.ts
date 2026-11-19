import { siteConfig } from "../config/site";
import { offersContentByLocale } from "../content/offers";
import type { Locale, PageKey, SiteContent } from "../content/types";
import { localizedPaths } from "../routes/paths";

function absoluteUrl(path: string) {
  if (path === "/") return siteConfig.domain;
  return `${siteConfig.domain}${path}`;
}

function getPageName(content: SiteContent, page: PageKey): string {
  const names: Record<PageKey, string> = {
    home: content.nav.home,
    offers: content.nav.offers,
    services: content.nav.services,
    projects: content.nav.projects,
    bizManager: content.bizManager.name,
    about: content.nav.about,
    contact: content.nav.contact,
    privacy: content.ui.footer.privacy,
    terms: content.ui.footer.terms,
  };
  return names[page];
}

function getAreaServed() {
  return [
    ...siteConfig.company.serviceArea.cities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Rio Grande do Sul",
        containedInPlace: {
          "@type": "Country",
          name: "Brasil",
        },
      },
    })),
    {
      "@type": "Country",
      name: "Brasil",
    },
  ];
}

export function buildPageJsonLd(content: SiteContent, page: PageKey) {
  const locale: Locale = content.locale;
  const domain = siteConfig.domain;
  const homeUrl = absoluteUrl(localizedPaths[locale].home);
  const pageUrl = absoluteUrl(localizedPaths[locale][page]);
  const orgId = `${domain}/#organization`;
  const serviceId = `${domain}/#professional-service`;
  const websiteId = `${domain}/#website`;
  const ogImageUrl = `${domain}${siteConfig.ogImage}`;
  const logoUrl = `${domain}/icon-512.png`;
  const areaServed = getAreaServed();

  const breadcrumbItems =
    page === "home"
      ? [{ "@type": "ListItem", position: 1, name: content.nav.home, item: homeUrl }]
      : [
          { "@type": "ListItem", position: 1, name: content.nav.home, item: homeUrl },
          { "@type": "ListItem", position: 2, name: getPageName(content, page), item: pageUrl },
        ];

  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.name,
      legalName: siteConfig.company.legalName,
      url: domain,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 512,
        height: 512,
      },
      image: ogImageUrl,
      email: siteConfig.contact.email.address,
      telephone: siteConfig.contact.whatsapp.display,
      sameAs: [siteConfig.contact.instagram.url],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: siteConfig.contact.whatsapp.display,
          email: siteConfig.contact.email.address,
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["Portuguese", "English"],
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: siteConfig.name,
      description: content.seo[page].description,
      url: domain,
      image: ogImageUrl,
      logo: logoUrl,
      email: siteConfig.contact.email.address,
      telephone: siteConfig.contact.whatsapp.display,
      sameAs: [siteConfig.contact.instagram.url],
      priceRange: "R$ 99 - R$ 1.490",
      openingHours: "Mo-Su 07:00-19:00",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
            "https://schema.org/Saturday",
            "https://schema.org/Sunday",
          ],
          opens: "07:00",
          closes: "19:00",
        },
      ],
      parentOrganization: { "@id": orgId },
      areaServed,
      knowsAbout: [
        "Criação de sites para pequenos negócios",
        "Desenvolvimento de sistemas web",
        "Plataforma de gestão BizManager",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: domain,
      name: siteConfig.name,
      publisher: { "@id": orgId },
      inLanguage: ["pt-BR", "en"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    },
  ];

  if (page === "offers") {
    const offersData = offersContentByLocale[locale];
    const services = [
      ...offersData.cards.map((card) => ({ id: card.id, serviceType: card.name, schema: card.schema })),
      ...offersData.extras.map((extra) => ({ id: extra.id, serviceType: extra.schema.name, schema: extra.schema })),
    ];
    for (const service of services) {
      graph.push({
        "@type": "Service",
        "@id": `${pageUrl}#service-${service.id}`,
        name: service.schema.name,
        serviceType: service.serviceType,
        description: service.schema.description,
        provider: { "@id": serviceId },
        areaServed,
        offers: service.schema.offers.map((offer) => ({
          "@type": "Offer",
          name: offer.name,
          url: pageUrl,
          price: offer.price,
          priceCurrency: "BRL",
          description: offer.description,
          availability: "https://schema.org/InStock",
          ...(offer.priceValidUntil ? { priceValidUntil: offer.priceValidUntil } : {}),
          ...(offer.validFrom ? { validFrom: offer.validFrom } : {}),
        })),
      });
    }

    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      inLanguage: locale === "pt" ? "pt-BR" : "en",
      mainEntity: offersData.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
