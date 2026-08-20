const fallbackDomain = "http://localhost:3000";

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
    url: "https://instagram.com/asyncstudiodev",
  },
} as const;

const companyConfig = {
  legalName: "68.009.930 CAETANO APOLLO DA SILVEIRA",
  tradeName: "Async Studio",
  cnpj: "68.009.930/0001-40",
  address: {
    street: "Rua Bauru",
    number: "364",
    neighborhood: "Canudos",
    city: "Novo Hamburgo",
    state: "RS",
    zip: "93540-180",
    formatted: "Rua Bauru, 364 - Canudos, Novo Hamburgo - RS, CEP 93540-180",
  },
} as const;

export const siteConfig = {
  name: "Async Studio",
  domain: normalizeSiteDomain(process.env.NEXT_PUBLIC_SITE_DOMAIN),
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
