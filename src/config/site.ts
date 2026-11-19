const fallbackDomain = "https://www.asyncstudio.com.br";

function normalizeSiteDomain(value?: string) {
  const domain = value?.trim();

  if (!domain || domain === "[DOMINIO_OFICIAL_PENDENTE]") {
    return fallbackDomain;
  }

  const url = domain.startsWith("http://") || domain.startsWith("https://") ? domain : `https://${domain}`;

  try {
    return new URL(url).origin;
  } catch {
    return fallbackDomain;
  }
}

const contactConfig = {
  whatsapp: {
    display: "+55 51 99334-0586",
    number: "5551993340586",
    defaultMessage: "Olá, Async Studio! Vim pelo site e gostaria de conversar sobre um projeto para minha empresa.",
  },
  email: {
    address: "contato@asyncstudio.com.br",
  },
  instagram: {
    handle: "@asyncstudiodev",
    url: "https://www.instagram.com/asyncstudiodev",
  },
} as const;

const companyConfig = {
  legalName: "68.009.930 CAETANO APOLLO DA SILVEIRA",
  tradeName: "Async Studio",
  cnpj: "68.009.930/0001-40",
  serviceHours: {
    schema: "Mo-Su 07:00-19:00",
    formattedPt: "Todos os dias, das 7h às 19h",
    formattedEn: "Daily, 7:00 AM to 7:00 PM (BRT)",
  },
  serviceArea: {
    cities: ["Sapucaia do Sul", "Novo Hamburgo", "São Leopoldo", "Esteio"],
    state: "RS",
    country: "BR",
    formattedPt: "Sapucaia do Sul, Novo Hamburgo, São Leopoldo e Esteio (RS) — atendimento presencial na região e remoto em todo o Brasil",
    formattedEn: "Sapucaia do Sul, Novo Hamburgo, São Leopoldo and Esteio (RS, Brazil) — local and nationwide remote service",
  },
} as const;

export const siteConfig = {
  name: "Async Studio",
  domain: normalizeSiteDomain(process.env.NEXT_PUBLIC_SITE_DOMAIN),
  ogImage: "/images/og-async-studio.png",
  contact: contactConfig,
  company: companyConfig,
  // Backwards compatibility keys
  whatsappDisplay: contactConfig.whatsapp.display,
  whatsappNumber: contactConfig.whatsapp.number,
  email: contactConfig.email.address,
  instagram: contactConfig.instagram.handle,
  instagramUrl: contactConfig.instagram.url,
  whatsapp: contactConfig.whatsapp.number,
  instagramLabel: contactConfig.instagram.handle,
} as const;
