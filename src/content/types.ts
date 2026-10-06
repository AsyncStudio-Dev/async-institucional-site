import type { BizManagerLaunchStatus, BizManagerPlanId } from "../config/bizmanager";

export type Locale = "pt" | "en";

export type PageKey = "home" | "services" | "projects" | "bizManager" | "about" | "contact" | "privacy" | "terms";

export type BizManagerImage = {
  /** Caminho em /public (ex.: /images/projects/bizmanager/dashboard.webp). */
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Textos do BizManager que mudam entre "em breve" e "disponível" (ver src/config/bizmanager.ts). */
export type BizManagerLaunchCopy = {
  badge: string;
  primaryCta: string;
  /** Linha curta abaixo dos botões (ex.: "30 dias grátis, sem cartão"). */
  note: string;
  planCta: string;
  pricingNote: string;
  finalCtaTitle: string;
  finalCtaDescription: string;
};

export type BizManagerContent = {
  name: string;
  tagline: string;
  headline: string;
  summary: string;
  learnMoreCta: string;
  pricingCta: string;
  loginCta: string;
  launch: Record<BizManagerLaunchStatus, BizManagerLaunchCopy>;
  heroImage: BizManagerImage;
  heroMobileImage: BizManagerImage;
  highlights: Array<{ value: string; label: string }>;
  modules: Array<{ title: string; description: string }>;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresDescription: string;
  features: Array<{
    slug: string;
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    image: BizManagerImage;
  }>;
  mobile: {
    eyebrow: string;
    title: string;
    description: string;
    images: BizManagerImage[];
  };
  audience: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    description: string;
    monthly: string;
    yearly: string;
    yearlyBadge: string;
    perMonth: string;
    free: string;
    /** "{amount}" é trocado pelo total anual. */
    billedYearly: string;
    /** "{days}" é trocado pela duração do teste. */
    trialLabel: string;
    featured: string;
    plans: Record<BizManagerPlanId, { name: string; tagline: string; features: string[] }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  /** Mensagens de WhatsApp: "{plan}" é trocado pelo nome do plano. */
  whatsapp: {
    waitlist: string;
    waitlistPlan: string;
    questions: string;
  };
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export type SiteContent = {
  locale: Locale;
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    cta: string;
    projectsOverview: string;
    projectsOverviewDescription: string;
    /** Rótulo acessível do botão que abre o submenu de projetos. */
    projectsMenuToggle: string;
  };
  seo: Record<PageKey, { title: string; description: string }>;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  sections: {
    problems: string;
    problemsDescription: string;
    services: string;
    servicesDescription: string;
    why: string;
    whyDescription: string;
    bizManager: string;
    bizManagerDescription: string;
    process: string;
    processDescription: string;
    about: string;
    aboutDescription: string;
    finalCta: string;
    finalCtaDescription: string;
  };
  remoteService: {
    title: string;
    description: string;
  };
  problems: Array<{
    pain: string;
    response: string;
  }>;
  services: Array<{
    /** Âncora estável em /servicos (não muda com o idioma). */
    slug: string;
    title: string;
    summary: string;
    audience: string;
    problem: string;
    delivery: string;
    cta: string;
  }>;
  whyAsync: Array<{
    title: string;
    description: string;
  }>;
  bizManager: BizManagerContent;
  process: Array<{
    title: string;
    description: string;
  }>;
  about: {
    heroTitle: string;
    heroSubtitle: string;
    storyTitle: string;
    summary: string;
    fullStory: string[];
    founders: Array<{
      name: string;
      role: string;
      description?: string;
    }>;
    philosophy: {
      title: string;
      description: string;
    };
    valuePropsTitle: string;
    valuePropsSubtitle: string;
    valueProps: Array<{
      title: string;
      description: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    primaryLabel: string;
    secondary: string;
  };
  legal: {
    privacy: LegalDocument;
    terms: LegalDocument;
  };
  whatsappMessage: string;
  whatsappMessages: {
    header: string;
    hero: string;
    bizManager: string;
    contactCta: string;
    footer: string;
  };
  ui: {
    footer: {
      featured: string;
      rights: string;
      description: string;
      remote: string;
      privacy: string;
      terms: string;
      legalName: string;
      cnpj: string;
      address: string;
      email: string;
    };
    serviceCard: {
      audience: string;
      problem: string;
      delivery: string;
      messageTemplate: string;
    };
    mobileMenu: {
      close: string;
      open: string;
    };
    about: {
      founders: string;
      differentials: string;
      processEyebrow: string;
    };
    contact: {
      meeting: string;
      whatsapp: string;
      whatsappCta: string;
      whatsappHint: string;
      email: string;
      instagram: string;
      companyInfo: string;
      legalName: string;
      cnpj: string;
      address: string;
    };
    home: {
      problemsEyebrow: string;
      problemsCtaTitle: string;
      problemsCtaDescription: string;
      problemsCtaLabel: string;
      servicesCta: string;
      servicesMoreIntro: string;
      servicesMoreItems: string[];
      whyEyebrow: string;
      whyClosing: string;
      bizEyebrow: string;
      processEyebrow: string;
      aboutCta: string;
      contactEyebrow: string;
      contactChannels: string;
      contactChannelsDescription: string;
      contactWhatsAppDescription: string;
    };
    projects: {
      heroEyebrow: string;
      heroTitle: string;
      heroDescription: string;
      heroPrimaryCta: string;
      heroSecondaryCta: string;
      featured: string;
      gallery: string;
      galleryDescription: string;
      identityLabel: string;
      identityDescription: string;
      identityModules: string;
      identityPricing: string;
      carouselPrevious: string;
      carouselNext: string;
      carouselShow: string;
      otherProjects: string;
      otherProjectsDescription: string;
      otherProjectsList: Array<{
        slug: string;
        src: string;
        alt: string;
        title: string;
        status: string;
        description: string;
      }>;
      similar: string;
      buildSimilarCta: string;
      finalCtaTitle: string;
      finalCtaDescription: string;
    };
  };
};
