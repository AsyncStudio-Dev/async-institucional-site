import { bizManagerImages } from "./bizmanagerImages";
import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  nav: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Talk to us",
    projectsOverview: "All projects",
    projectsOverviewDescription: "Our own products and what we build",
    projectsMenuToggle: "Open projects submenu",
  },
  seo: {
    home: {
      title: "Async Studio - Websites, Systems and Digital Solutions",
      description:
        "We build websites, systems, web apps, automations and digital products for companies ready to grow without operational friction.",
    },
    services: {
      title: "Services - Async Studio",
      description:
        "Websites, landing pages, custom systems, web apps, SaaS/MVP development, internal automations and legacy modernization.",
    },
    projects: {
      title: "Projects - Async Studio",
      description:
        "Explore Async Studio projects, including BizManager, a management platform for solopreneurs and small businesses.",
    },
    bizManager: {
      title: "BizManager - Management for solopreneurs and small businesses | Async Studio",
      description:
        "Sales, finances, clients, inventory and scheduling in one dashboard. Explore BizManager's features and plans, with a 30-day free trial.",
    },
    about: {
      title: "About - Async Studio",
      description:
        "Learn about Async Studio, our founders, our process and how we build digital projects with clarity.",
    },
    contact: {
      title: "Contact - Async Studio",
      description:
        "Contact Async Studio through WhatsApp, email or Instagram to start a conversation and schedule a business meeting.",
    },
    privacy: {
      title: "Privacy Policy - Async Studio",
      description:
        "How Async Studio and its products, including Async Hub, handle personal data in compliance with Brazil's LGPD.",
    },
    terms: {
      title: "Terms of Service - Async Studio",
      description: "Terms of use for Async Studio's services and products, including Async Hub.",
    },
  },
  hero: {
    eyebrow: "Software development without friction",
    title: "Websites, systems and digital solutions for companies ready to grow without friction.",
    subtitle:
      "From a first website to a complete platform, we help companies enter, grow and reinvent themselves in the digital world.",
    primaryCta: "Talk to us on WhatsApp",
    secondaryCta: "Explore our services",
  },
  sections: {
    problems: "Is your business ready to move forward digitally?",
    problemsDescription:
      "Async Studio helps companies move beyond improvisation, organize operations, build a professional online presence and turn ideas into real digital solutions.",
    services: "Services for each stage of growth",
    servicesDescription:
      "We build everything from commercial pages to complete systems, always focused on clarity, usefulness and business evolution.",
    why: "Why choose Async Studio?",
    whyDescription:
      "Because your company needs technology that works, supports growth and is built with clarity from the beginning.",
    bizManager: "BizManager",
    bizManagerDescription:
      "A management platform to organize sales, finances, clients, inventory and scheduling in one place.",
    process: "How we take your idea from plan to product",
    processDescription:
      "Before building, we understand your business, your goals and the problem that needs to be solved.",
    about: "About Async Studio",
    aboutDescription:
      "Async Studio was born from friendship, conversations about the future and a shared drive to build real technology.",
    finalCta: "Should we talk about your project?",
    finalCtaDescription:
      "Have an idea, manual process, website or system that needs to move forward? Talk to Async Studio and we will understand how we can help.",
  },
  remoteService: {
    title: "Remote work for Brazil and international clients",
    description:
      "We run projects remotely with clear communication, defined stages and close follow-up for clients in Brazil and abroad.",
  },
  problems: [
    {
      pain: "My company does not have a professional digital presence",
      response: "We create websites and pages that present your business with clarity, credibility and polish.",
    },
    {
      pain: "My operation depends on spreadsheets, manual processes or old systems",
      response: "We turn improvised controls and limited tools into modern, organized systems that are easier to track.",
    },
    {
      pain: "I have a system idea but do not know where to start",
      response: "We help structure, plan and build the solution with a clear path.",
    },
    {
      pain: "My business needs more leads or online sales opportunities",
      response: "We create conversion-focused pages for offers, campaigns and commercial conversations.",
    },
    {
      pain: "Repetitive tasks are taking too much time",
      response: "We build automations that simplify operations and reduce rework.",
    },
    {
      pain: "I want to create a digital product",
      response: "We help turn MVPs, SaaS ideas and web apps into practical first versions.",
    },
  ],
  services: [
    {
      slug: "sites-institucionais",
      title: "Business websites",
      summary: "A clear, responsive and credible website to present your company and generate more business conversations.",
      audience: "Companies that need a credible online presence.",
      problem: "Low digital credibility and difficulty presenting the business clearly.",
      delivery: "A responsive, clear and fast website prepared for commercial contact.",
      cta: "I need a website",
    },
    {
      slug: "landing-pages",
      title: "Landing pages",
      summary: "Focused pages for campaigns, offers and lead capture, designed around conversion.",
      audience: "Businesses promoting campaigns, offers or specific services.",
      problem: "No focused page to turn visitors into qualified conversations.",
      delivery: "A conversion-oriented page with strong CTA and clear offer structure.",
      cta: "I need a landing page",
    },
    {
      slug: "sistemas-sob-medida",
      title: "Custom systems",
      summary: "Solutions that organize workflows, reduce improvisation and match how the operation actually works.",
      audience: "Companies with unique, manual or hard-to-adapt operations.",
      problem: "Generic tools do not match the real workflow.",
      delivery: "A system planned around your rules, flows and business needs.",
      cta: "I need a custom system",
    },
    {
      slug: "web-apps",
      title: "Web apps",
      summary: "Online applications that centralize data, features and flows that need to evolve with the business.",
      audience: "Companies that need online access to data and functionality.",
      problem: "Operational information is scattered across disconnected tools.",
      delivery: "A responsive, organized web application ready to evolve.",
      cta: "I need a web app",
    },
    {
      slug: "saas-mvp",
      title: "SaaS / MVP for startups",
      summary: "Digital products for validation, launch and growth.",
      audience: "Startups or companies with a digital product idea.",
      problem: "Ideas stay stuck without a practical first version.",
      delivery: "An MVP with clear scope, solid technical base and validation focus.",
      cta: "I want to build an MVP",
    },
    {
      slug: "automacoes-internas",
      title: "Internal automations",
      summary: "Less manual work and fewer repetitive tasks.",
      audience: "Companies losing time to repetitive tasks.",
      problem: "Rework, manual errors and low operational predictability.",
      delivery: "Useful automations to reduce effort and organize daily routines.",
      cta: "I want to automate operations",
    },
    {
      slug: "modernizacao-sistemas",
      title: "Legacy system modernization",
      summary: "Evolution or rebuilds for outdated systems.",
      audience: "Companies with slow, outdated or limited systems.",
      problem: "Tools that block growth, operations and maintenance.",
      delivery: "Diagnosis, rebuild or gradual evolution with controlled risk.",
      cta: "I want to modernize a system",
    },
  ],
  whyAsync: [
    {
      title: "Development without friction",
      description: "We build digital solutions focused on flow, organization and steady progress.",
    },
    {
      title: "Transparency at every stage",
      description: "You understand what is being built, why it matters and how the project is evolving.",
    },
    {
      title: "Tailored solutions",
      description: "We understand your business before proposing the solution.",
    },
    {
      title: "From planning to evolution",
      description: "We help structure, build, validate and improve your solution over time.",
    },
    {
      title: "Technology with business context",
      description: "We deliver useful solutions, not just code.",
    },
    {
      title: "Product-building experience",
      description: "BizManager shows how we think through and build complete digital products.",
    },
  ],
  bizManager: {
    name: "BizManager",
    tagline: "Management for solopreneurs and small businesses",
    headline: "Sales, finances, clients, inventory and scheduling in one place.",
    summary:
      "BizManager organizes the routine of anyone running a small business: every sale records the income in your finances and updates inventory on its own, and the dashboard shows what came in, what went out and what was left this month.",
    learnMoreCta: "Discover BizManager",
    pricingCta: "See plans and pricing",
    loginCta: "I already have an account",
    launch: {
      "coming-soon": {
        badge: "Launching soon",
        primaryCta: "Notify me at launch",
        note: "Join the waitlist on WhatsApp and be among the first to get access.",
        planCta: "Notify me",
        pricingNote: "Planned launch pricing. People on the waitlist hear first.",
        finalCtaTitle: "Be one of the first to use BizManager",
        finalCtaDescription:
          "We are putting on the finishing touches. Message us on WhatsApp to join the waitlist and try it free for 30 days, no strings attached.",
      },
      available: {
        badge: "Available now",
        primaryCta: "Start free trial",
        note: "30 days free, no credit card required.",
        planCta: "Get started",
        pricingNote: "Start with the free trial and pick a plan later. Pay with Pix, bank slip or card.",
        finalCtaTitle: "Get your business organized today",
        finalCtaDescription: "Create your account in a few minutes and use every module for 30 days, no credit card required.",
      },
    },
    heroImage: {
      ...bizManagerImages.dashboard,
      alt: "BizManager dashboard with monthly revenue, expenses and result, a cash-flow chart, today's schedule and restock alerts.",
    },
    heroMobileImage: {
      ...bizManagerImages.mobileDashboard,
      alt: "BizManager dashboard on a phone, showing the month's indicators.",
    },
    highlights: [
      { value: "30 days", label: "free trial, no card needed" },
      { value: "1 sale", label: "updates finances and inventory together" },
      { value: "5 modules", label: "connected in a single dashboard" },
      { value: "100% online", label: "on desktop and mobile" },
    ],
    modules: [
      { title: "Sales", description: "Sales, custom orders and delivery, with finances and inventory linked." },
      { title: "Finances", description: "Payables and receivables, cash flow and monthly profit." },
      { title: "Clients", description: "Contacts, ratings and the purchase history of each client." },
      { title: "Inventory", description: "Products, costs, margins and restock alerts." },
      { title: "Schedule", description: "Appointments, deliveries and the week's commitments." },
    ],
    featuresEyebrow: "Features",
    featuresTitle: "Everything your day-to-day needs, without the complexity",
    featuresDescription: "The modules talk to each other: record something once and it shows up wherever it needs to.",
    features: [
      {
        slug: "sales",
        eyebrow: "Sales and custom orders",
        title: "Record a sale once. Everything else updates itself.",
        description:
          "Every sale records the income, updates inventory and lands in the client's history. Custom orders with due dates, delivery and the channel the sale came from all live in the same record.",
        bullets: [
          "Paid upfront or in installments, by Pix, card, bank slip or cash",
          "Custom orders with due dates, tracked until delivery",
          "Sales channel: WhatsApp, Instagram, store or website",
          "Revenue, average ticket and receivables for the month",
        ],
        image: {
          ...bizManagerImages.sales,
          alt: "BizManager sales screen with number of sales, revenue, average ticket, receivables and the month's sales list.",
        },
      },
      {
        slug: "finances",
        eyebrow: "Finances",
        title: "Know how much your business really made this month.",
        description:
          "Income and expenses with due dates and categories, payables and receivables, and a clear result: sales, minus the cost of what was sold, minus expenses.",
        bullets: [
          "Payables and receivables with due dates",
          "Monthly profit with gross and net margin",
          "Expenses by category and 6-month cash flow",
          "Invoices and receipts attached as photo or PDF",
        ],
        image: {
          ...bizManagerImages.finance,
          alt: "BizManager finance screen with the month's income, expenses, result and cash, a list of entries and expenses by category.",
        },
      },
      {
        slug: "clients",
        eyebrow: "Clients",
        title: "Get to know who buys from you.",
        description:
          "Contacts, ratings and notes, a WhatsApp shortcut and each client's history: how much they spent, what they bought and what is still open.",
        bullets: ["Total spent, average ticket and last purchase", "One-tap WhatsApp shortcut", "Import clients from a spreadsheet"],
        image: {
          ...bizManagerImages.clientHistory,
          alt: "A client's purchase history in BizManager, with total spent, number of purchases, average ticket and products bought.",
        },
      },
      {
        slug: "inventory",
        eyebrow: "Inventory",
        title: "Inventory that keeps itself up to date.",
        description:
          "Products and services with cost, price, margin and minimum stock. Sales and purchases update the balance, and the dashboard tells you what to restock.",
        bullets: [
          "Low-stock and out-of-stock alerts",
          "Supplier purchases that add to inventory",
          "See who bought each product",
          "Import your catalog from a spreadsheet (.xlsx or .csv)",
        ],
        image: {
          ...bizManagerImages.inventory,
          alt: "BizManager inventory screen with stock value, low and out-of-stock alerts and units by category.",
        },
      },
      {
        slug: "schedule",
        eyebrow: "Schedule",
        title: "Your week, organized on one screen.",
        description:
          "Appointments, deliveries and meetings in a weekly view, linked to clients. Today's commitments show up right on the dashboard.",
        bullets: ["Weekly view by time slot", "Appointments linked to clients", "Today's schedule on the home dashboard"],
        image: {
          ...bizManagerImages.agenda,
          alt: "BizManager weekly schedule with deliveries, pickups and meetings organized by day and time.",
        },
      },
    ],
    mobile: {
      eyebrow: "On your phone",
      title: "Use it at the counter, on the go or at home",
      description:
        "BizManager runs in your phone's browser, nothing to install. Record a sale on the spot and check your cash from anywhere.",
      images: [
        { ...bizManagerImages.mobileDashboard, alt: "BizManager dashboard on a phone with the month's revenue, expenses and result." },
        { ...bizManagerImages.mobileSales, alt: "BizManager sales screen on a phone with sales, revenue and average ticket." },
      ],
    },
    audience: {
      eyebrow: "Who it's for",
      title: "For people running a business who don't want a complicated ERP",
      description:
        "Designed for solopreneurs, freelancers and small teams who today juggle notebooks, spreadsheets and WhatsApp chats.",
      items: ["Shops and retail", "Bakeries and food", "Fashion and accessories", "Beauty and wellness", "Service providers", "Made-to-order sales"],
    },
    pricing: {
      eyebrow: "Plans",
      title: "Simple pricing, no setup fee",
      description: "Every account starts with 30 days free. Switch plans or cancel anytime.",
      monthly: "Monthly",
      yearly: "Yearly",
      yearlyBadge: "2 months free",
      perMonth: "/mo",
      free: "Free",
      billedYearly: "billed {amount} per year",
      trialLabel: "for {days} days",
      featured: "Most popular",
      plans: {
        start: {
          name: "Free trial",
          tagline: "Try it for 30 days, no card needed.",
          features: [
            "Up to 30 clients, 30 products and 30 sales per month",
            "Sales linked to inventory and finances",
            "Payables and receivables",
            "Schedule, custom orders and delivery",
            "Spreadsheet import",
          ],
        },
        growth: {
          name: "Growth",
          tagline: "Complete management for business owners.",
          features: [
            "Unlimited clients, products and sales",
            "Reports for every month",
            "Purchase metrics per client",
            "Merchandise purchases that add to inventory",
            "Custom categories",
            "Attached invoices and receipts",
            "Email support",
          ],
        },
        scale: {
          name: "Scale",
          tagline: "For businesses with a team.",
          features: ["Everything in Growth", "Up to 5 users, with access roles", "CSV (Excel) export", "Priority WhatsApp support"],
        },
      },
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions about BizManager",
      items: [
        {
          question: "Do I need to install anything?",
          answer: "No. BizManager runs in your desktop or mobile browser. Just create an account and sign in.",
        },
        {
          question: "How does the free trial work?",
          answer:
            "Every account gets 30 days to use the system, no credit card required. If you don't pick a plan when the trial ends, the account becomes read-only: nothing is deleted, and you can edit again as soon as you subscribe.",
        },
        {
          question: "Which payment methods are accepted?",
          answer: "Pix, bank slip (boleto) or credit card, billed monthly or yearly.",
        },
        {
          question: "Can I switch plans or cancel?",
          answer: "Yes, anytime, right from your account settings. No lock-in and no fees.",
        },
        {
          question: "I already use spreadsheets. Can I bring my data?",
          answer: "Yes. Products and clients can be imported from a spreadsheet (.xlsx or .csv) in a few clicks.",
        },
        {
          question: "Is my data safe?",
          answer: "Each account only accesses its own data, with password-protected sign-in. You can delete your account and all its data whenever you want.",
        },
      ],
    },
    whatsapp: {
      waitlist: "Hello! I saw BizManager on the Async Studio website and would like to be notified when it launches.",
      waitlistPlan: "Hello! I saw BizManager on the Async Studio website and would like to be notified at launch. I'm interested in the {plan} plan.",
      questions: "Hello! I have a question about BizManager.",
    },
  },
  process: [
    {
      title: "Conversation and diagnosis",
      description: "We understand your idea, problem, goal, and current scenario.",
    },
    {
      title: "Proposal and scope",
      description: "We organize the recommended solution, priorities, timeline, and terms.",
    },
    {
      title: "Planning",
      description: "We define features, stages, deliverables, and next steps.",
    },
    {
      title: "Development and validation",
      description: "We build with active tracking, testing, and adjustments alongside the client.",
    },
    {
      title: "Delivery and evolution",
      description: "We publish the solution and support improvements as the business grows.",
    },
  ],
  about: {
    heroTitle: "Technology with clarity, proximity and business vision",
    heroSubtitle:
      "Async Studio was born from a real partnership between people who believe that good systems start by understanding the business, not just writing code.",
    storyTitle: "Our story",
    summary:
      "More than just writing code, we deliver clarity and partnership. We are a technology studio built to transform ideas, manual processes, and real business needs into clear, efficient, and user-friendly digital solutions. We combine product strategy, experience design, and software engineering so your business can grow without friction.",
    fullStory: [
      "Our journey began with a strong friendship and constant talks about technology, design, and development. We realized the market needed a technical partner that combined business vision with real delivery, going beyond just writing code.",
      "The turning point came when developing a thesis (TCC) project with high market potential. We decided to bring it to life and build BizManager, our first proprietary product — a management platform for solopreneurs and small businesses that served as a practical laboratory to mature our way of building solutions.",
      "From this hands-on experience, Async Studio was born: a studio prepared to build custom digital solutions, such as business websites, robust systems, and automations that organize and drive small businesses, startups, and growing companies.",
    ],
    founders: [
      {
        name: "Caetano",
        role: "Founder of Async Studio",
        description: "Leads technical strategy, product conception, and the development of digital solutions aligned with each business's objectives.",
      },
      {
        name: "Murilo",
        role: "Co-founder of Async Studio",
        description: "Focused on software development, automations, and modern interfaces, creating fluid and responsive digital experiences.",
      },
    ],
    philosophy: {
      title: "How we think technology",
      description: "Clarity before code, custom solutions, and continuous evolution for each business.",
    },
    valuePropsTitle: "What this means for your project",
    valuePropsSubtitle: "In practice, our way of working helps your project start with more clarity, less rework, and more direction.",
    valueProps: [
      {
        title: "Clarity before code",
        description: "We understand the problem, objective, and context before proposing a solution.",
      },
      {
        title: "Business-driven solution",
        description: "We create websites, systems, and automations aligned with each client's real operations.",
      },
      {
        title: "Close collaboration",
        description: "We work with clear communication, defined stages, and continuous evolution.",
      },
    ],
  },
  contact: {
    title: "Start the conversation on WhatsApp",
    description:
      "The first step is simple: tell us about your idea, pain point or manual process. From there, we understand the context and identify the best path to a business meeting.",
    primaryLabel: "Talk to us on WhatsApp",
    secondary: "You can also reach us by email or Instagram.",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "July 30, 2026",
      intro:
        "This policy explains how Async Studio (68.009.930 CAETANO APOLLO DA SILVEIRA, registered under CNPJ 68.009.930/0001-40, headquartered at Rua Bauru, 364 - Canudos, Novo Hamburgo - RS, Brazil, CEP 93540-180) handles personal data on its institutional website and in its products, including Async Hub — our service desk that unifies WhatsApp and Instagram for small businesses.",
      sections: [
        {
          heading: "What Async Hub does",
          paragraphs: [
            "Async Hub connects a business's WhatsApp and/or Instagram business account (our client, \"the store\") to our service desk tools, letting the store's team reply to their own customers from a single screen instead of switching between the WhatsApp and Instagram apps.",
            "We do not sell access to this data, do not use it for targeted advertising, and do not use it for any purpose beyond providing the service desk the store contracted.",
          ],
        },
        {
          heading: "What data we process",
          paragraphs: [
            "To provide this service, Async Hub receives and stores, on behalf of the contracting store: the store's customer data (name, when available, WhatsApp phone number or Instagram profile identifier), the content of messages exchanged between the customer and the store, and conversation metadata (channel used, message timestamps, service stage).",
            "This data reaches Async Hub through Meta's official APIs (WhatsApp Cloud API and Instagram Messaging API), via webhooks configured with the store's own authorization.",
          ],
        },
        {
          heading: "Legal basis and purpose",
          paragraphs: [
            "Processing this data serves the sole purpose of enabling the service requested by the store's own customer when they start a conversation via WhatsApp or Instagram — under Brazil's LGPD (Law 13,709/2018), the legal basis is contract performance requested by the data subject and the store's legitimate interest in serving someone who already reached out to it.",
          ],
        },
        {
          heading: "Data sharing",
          paragraphs: [
            "We do not share, sell or rent this data to third parties. We use cloud infrastructure providers (such as Supabase) as data processors under our responsibility, with technical isolation between each client store's data.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "Access tokens for Meta's APIs are stored with additional encryption, independent of database-level encryption. Each client store only has access to its own data, enforced at the database level. Internal access is role-based (admin/agent) within each client store.",
          ],
        },
        {
          heading: "Retention and deletion",
          paragraphs: [
            "Data is kept for as long as the store keeps Async Hub contracted. At any time, the data subject (the store's customer) or the store itself may request deletion or anonymization of a specific contact's data by writing to contato@asyncstudio.com.br.",
          ],
        },
        {
          heading: "Your rights (LGPD)",
          paragraphs: [
            "Anyone whose data is processed through Async Hub may request, by contacting contato@asyncstudio.com.br: confirmation of processing and access to the data; correction of incomplete, inaccurate or outdated data; anonymization, blocking or deletion of unnecessary data; portability to another provider; and deletion of data processed under consent, where applicable.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "This policy may be updated to reflect changes in the service or in applicable law. The last update date is always shown at the top of this page.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["Questions about this policy or how your data is handled: contato@asyncstudio.com.br."],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "July 30, 2026",
      intro:
        "These terms govern the use of Async Studio's institutional website and its products, including Async Hub, a service desk that unifies WhatsApp and Instagram conversations for small businesses.",
      sections: [
        {
          heading: "Who provides the service",
          paragraphs: [
            "Async Hub is provided by Async Studio (68.009.930 CAETANO APOLLO DA SILVEIRA, registered under CNPJ 68.009.930/0001-40, headquartered at Rua Bauru, 364 - Canudos, Novo Hamburgo - RS, Brazil, CEP 93540-180). By using Async Hub, the contracting business (\"the store\") agrees to these terms.",
          ],
        },
        {
          heading: "Contracting store responsibilities",
          paragraphs: [
            "The store is responsible for connecting its own official WhatsApp Business and/or professional Instagram accounts to Async Hub, with valid authorization from Meta.",
            "The store is responsible for using Async Hub to handle only conversations started by its own customers, respecting Meta's platform policies.",
            "The store is responsible for obtaining and maintaining any authorizations and consents required from its own customers under applicable law (LGPD).",
          ],
        },
        {
          heading: "Use in compliance with Meta's platforms",
          paragraphs: [
            "Async Hub operates integrated with Meta's official APIs (WhatsApp Cloud API and Instagram Messaging API) and is subject to Meta's platform policies, including messaging limits set by Meta itself. Async Studio is not responsible for suspensions, blocks or restrictions Meta applies to accounts that violate Meta's own policies.",
          ],
        },
        {
          heading: "Availability",
          paragraphs: [
            "Async Hub is currently in a validation (pilot) phase, without a formal continuous-availability guarantee (SLA). Reasonable efforts are made to keep the service operational and to communicate relevant interruptions to the contracting store.",
          ],
        },
        {
          heading: "Data and privacy",
          paragraphs: ["Personal data processing in Async Hub follows our Privacy Policy, which is part of these terms."],
        },
        {
          heading: "Changes to the service and these terms",
          paragraphs: [
            "Being in a validation phase, Async Hub may have features added, changed or discontinued without extensive prior notice. Relevant changes to these terms will be communicated to the contracting store with reasonable notice when possible.",
          ],
        },
        {
          heading: "Termination",
          paragraphs: [
            "The contracting store may request to stop using Async Hub and delete its data at any time by writing to contato@asyncstudio.com.br.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["Questions about these terms: contato@asyncstudio.com.br."],
        },
      ],
    },
  },
  whatsappMessage:
    "Hello, Async Studio! I came from the website and would like to talk about a project for my company.",
  whatsappMessages: {
    header: "Hello! I came from the Async Studio website and would like to talk about a project.",
    hero: "Hello! I came from the Async Studio website and want to understand how you can help my company with websites, systems or digital solutions.",
    bizManager: "Hello! I saw BizManager on the Async Studio website and would like to build a similar solution for my business.",
    contactCta: "Hello! I have an idea, process or system that I would like to get off the ground with Async Studio.",
    footer: "Hello! I came from the Async Studio website and would like to talk to you.",
  },
  ui: {
    footer: {
      featured: "Featured product",
      rights: "© 2026 Async Studio. All rights reserved.",
      description: "Websites, systems and digital solutions for companies ready to grow without friction.",
      remote: "Remote projects with clear communication, defined stages and close follow-up.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      legalName: "Legal Name",
      cnpj: "CNPJ",
      address: "Address",
      email: "Email",
    },
    serviceCard: {
      audience: "For",
      problem: "Solves",
      delivery: "We deliver",
      messageTemplate: "Hello, Async Studio! I came from the website and would like to talk about: {serviceTitle}.",
    },
    mobileMenu: {
      close: "Close menu",
      open: "Open menu",
    },
    about: {
      founders: "Founders",
      differentials: "Differentials",
      processEyebrow: "PROCESS",
    },
    contact: {
      meeting: "Goal: start a conversation and schedule a business meeting",
      whatsapp: "WhatsApp",
      whatsappCta: "Open WhatsApp conversation",
      whatsappHint: "Main channel to start the conversation with Async Studio.",
      email: "Business email",
      instagram: "Instagram",
      companyInfo: "Company Information",
      legalName: "Legal Name",
      cnpj: "CNPJ",
      address: "Registered address",
    },
    home: {
      problemsEyebrow: "Problems we solve",
      problemsCtaTitle: "Recognize any of these problems?",
      problemsCtaDescription:
        "Tell us about your company's context and we will assess the clearest path to solve it without overcomplicating.",
      problemsCtaLabel: "Talk to us on WhatsApp",
      servicesCta: "View all services",
      servicesMoreIntro: "We also build:",
      servicesMoreItems: ["SaaS/MVPs", "Internal automations", "Legacy system modernization"],
      whyEyebrow: "Differentials",
      whyClosing: "We work with clarity from the first conversation through the project's evolution.",
      bizEyebrow: "Proprietary product",
      processEyebrow: "Process",
      aboutCta: "Discover our story",
      contactEyebrow: "Contact",
      contactChannels: "Official channels",
      contactChannelsDescription: "Choose the best channel to speak with Async Studio.",
      contactWhatsAppDescription: "Main channel to start a conversation about your project.",
    },
    projects: {
      heroEyebrow: "Async Studio projects",
      heroTitle: "Digital projects designed to solve real business needs.",
      heroDescription:
        "We transform ideas, manual processes and operational challenges into websites, custom systems, SaaS/MVPs and web apps that are clear, useful and prepared to evolve.",
      heroPrimaryCta: "Talk about your project",
      heroSecondaryCta: "View featured project",
      featured: "Featured project",
      gallery: "Inside BizManager",
      galleryDescription: "Real product screens, with data from a demo store.",
      identityLabel: "An Async Studio product",
      identityDescription:
        "Our first proprietary product: it started as a thesis project and grew into a complete management platform for small businesses.",
      identityModules: "Modules",
      identityPricing: "Plans from",
      carouselPrevious: "Show previous screen",
      carouselNext: "Show next screen",
      carouselShow: "Show {title}",
      otherProjects: "Other projects",
      otherProjectsDescription:
        "In-development proprietary products, used as a lab to test architecture, interface and integrations before bringing that base into client projects.",
      otherProjectsList: [
        {
          slug: "asynchub",
          src: "/images/projects/asynchub/dashboard.webp",
          alt: "Async Hub CRM dashboard with Instagram conversation metrics, service funnel and channel status.",
          title: "Async Hub CRM",
          status: "In validation",
          description: "Multi-tenant CRM to centralize Instagram and WhatsApp conversations, with a performance dashboard and real-time sales funnel.",
        },
        {
          slug: "encaixe",
          src: "/images/projects/encaixe/vitrine-calendario.webp",
          alt: "Encaixe public booking storefront with calendar, professional preference and available time slots.",
          title: "Encaixe",
          status: "In development",
          description: "Appointment scheduling system with a public booking storefront, flexible time-slot grid and a panel for multiple professionals.",
        },
      ],
      similar: "Want to build a solution like this for your company?",
      buildSimilarCta: "I want to build a similar solution",
      finalCtaTitle: "Have an idea, manual process or system that needs to evolve?",
      finalCtaDescription:
        "Talk to Async Studio on WhatsApp and we will understand the clearest path to turn your need into a well-built digital solution.",
    },
  },
};
