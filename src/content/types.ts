export type Locale = "pt" | "en";

export type PageKey = "home" | "services" | "projects" | "about" | "contact" | "privacy" | "terms";

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
  bizManager: {
    status: string;
    audience: string;
    summary: string;
    objective: string;
    proof: string;
    cta: string;
    demonstrates: Array<{
      title: string;
      description: string;
    }>;
    modules: Array<{
      title: string;
      description: string;
    }>;
    buildOptions: Array<{
      title: string;
      description: string;
    }>;
  };
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
      bizProjectsCta: string;
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
      objective: string;
      whyExists: string;
      demonstrates: string;
      modules: string;
      modulesDescription: string;
      gallery: string;
      galleryDescription: string;
      identityLabel: string;
      identityDescription: string;
      dashboardLabel: string;
      dashboardDescription: string;
      similar: string;
      buildForCompany: string;
      buildForCompanyDescription: string;
      finalCtaTitle: string;
      finalCtaDescription: string;
    };
  };
};
