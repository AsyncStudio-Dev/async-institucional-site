import { bizManagerImages } from "./bizmanagerImages";
import type { SiteContent } from "./types";

export const pt: SiteContent = {
  locale: "pt",
  nav: {
    home: "Início",
    services: "Serviços",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contato",
    cta: "Fale conosco",
    projectsOverview: "Todos os projetos",
    projectsOverviewDescription: "Produtos autorais e o que construímos",
    projectsMenuToggle: "Abrir submenu de projetos",
  },
  seo: {
    home: {
      title: "Async Studio - Sites, Sistemas e Soluções Digitais",
      description:
        "Criamos sites, sistemas, web apps, automações e produtos digitais para empresas que querem crescer sem travar.",
    },
    services: {
      title: "Serviços - Async Studio",
      description:
        "Desenvolvemos sites institucionais, landing pages, sistemas sob medida, web apps, SaaS/MVPs, automações internas e modernização de sistemas antigos.",
    },
    projects: {
      title: "Projetos - Async Studio",
      description:
        "Conheça projetos da Async Studio, incluindo o BizManager, plataforma de gestão para MEIs, autônomos e pequenos negócios.",
    },
    bizManager: {
      title: "BizManager - Gestão para MEIs e pequenos negócios | Async Studio",
      description:
        "Vendas, financeiro, clientes, estoque e agenda em um só painel. Conheça as funcionalidades e os planos do BizManager, com 30 dias de teste grátis.",
    },
    about: {
      title: "Sobre - Async Studio",
      description:
        "Conheça a história da Async Studio, seus fundadores, diferenciais e processo de trabalho para projetos digitais.",
    },
    contact: {
      title: "Contato - Async Studio",
      description:
        "Fale com a Async Studio pelo WhatsApp, e-mail ou Instagram para iniciar uma conversa e marcar uma reunião.",
    },
    privacy: {
      title: "Política de Privacidade - Async Studio",
      description:
        "Como a Async Studio e seus produtos, incluindo o Async Hub, tratam dados pessoais em conformidade com a LGPD.",
    },
    terms: {
      title: "Termos de Serviço - Async Studio",
      description:
        "Termos de uso dos serviços e produtos da Async Studio, incluindo o Async Hub.",
    },
  },
  hero: {
    eyebrow: "Desenvolvimento de software sem travas",
    title: "Sites, sistemas e soluções digitais para empresas que querem crescer sem travar.",
    subtitle:
      "Do primeiro site ao sistema completo, ajudamos sua empresa a entrar, crescer e se reinventar no mundo digital.",
    primaryCta: "Fale conosco pelo WhatsApp",
    secondaryCta: "Conheça nossos serviços",
  },
  sections: {
    problems: "Seu negócio está pronto para evoluir no digital?",
    problemsDescription:
      "A Async Studio ajuda empresas que precisam sair do improviso, organizar processos, criar presença online ou transformar ideias em soluções reais.",
    services: "Serviços para cada etapa do seu crescimento",
    servicesDescription:
      "Criamos desde páginas comerciais até sistemas completos, sempre com foco em clareza, utilidade e evolução do negócio.",
    why: "Por que escolher a Async Studio?",
    whyDescription:
      "Porque sua empresa precisa de tecnologia que funcione, acompanhe seu crescimento e seja construída com clareza desde o início.",
    bizManager: "BizManager",
    bizManagerDescription:
      "Plataforma de gestão para organizar vendas, finanças, clientes, estoque e agenda em um só lugar.",
    process: "Como tiramos sua ideia do papel",
    processDescription:
      "Antes de desenvolver, entendemos seu negócio, seus objetivos e o problema que precisa ser resolvido.",
    about: "Sobre a Async Studio",
    aboutDescription:
      "A Async Studio nasceu de uma amizade, de conversas sobre futuro e de uma vontade em comum: construir tecnologia de verdade.",
    finalCta: "Vamos conversar sobre seu projeto?",
    finalCtaDescription:
      "Tem uma ideia, processo manual, site ou sistema que precisa sair do papel? Chame a Async Studio e vamos entender como podemos ajudar.",
  },
  remoteService: {
    title: "Atendimento remoto para Brasil e exterior",
    description:
      "Conduzimos projetos de forma remota, com comunicação clara, etapas definidas e acompanhamento próximo para clientes no Brasil e em outros países.",
  },
  problems: [
    {
      pain: "Minha empresa não tem presença digital profissional",
      response: "Criamos sites e páginas que apresentam seu negócio com clareza, credibilidade e aparência profissional.",
    },
    {
      pain: "Minha operação está presa em planilhas ou sistemas antigos",
      response: "Transformamos controles manuais, planilhas e ferramentas limitadas em sistemas modernos, organizados e fáceis de acompanhar.",
    },
    {
      pain: "Tenho uma ideia de sistema, mas não sei por onde começar",
      response: "Ajudamos a estruturar, planejar e construir a solução com clareza.",
    },
    {
      pain: "Meu negócio precisa vender ou captar mais contatos online",
      response: "Criamos páginas focadas em conversão, apresentação de ofertas e geração de oportunidades.",
    },
    {
      pain: "Tenho tarefas repetitivas consumindo tempo",
      response: "Desenvolvemos automações para simplificar a operação e reduzir retrabalho.",
    },
    {
      pain: "Quero criar um produto digital",
      response: "Ajudamos a tirar MVPs, SaaS e web apps do papel com escopo claro e foco em validação.",
    },
  ],
  services: [
    {
      slug: "sites-institucionais",
      title: "Sites institucionais",
      summary: "Um site claro, responsivo e confiável para apresentar sua empresa e gerar mais conversas comerciais.",
      audience: "Empresas que precisam de presença profissional na web.",
      problem: "Falta de credibilidade digital e dificuldade para apresentar o negócio.",
      delivery: "Site responsivo, claro, rápido e preparado para contato comercial.",
      cta: "Quero criar meu site",
    },
    {
      slug: "landing-pages",
      title: "Landing pages",
      summary: "Páginas objetivas para campanhas, ofertas e captação de contatos com foco em conversão.",
      audience: "Negócios com campanhas, serviços específicos ou ofertas.",
      problem: "Falta de uma página objetiva para transformar visitantes em contatos.",
      delivery: "Página de alta clareza, CTA forte e estrutura orientada à conversão.",
      cta: "Quero uma landing page",
    },
    {
      slug: "sistemas-sob-medida",
      title: "Sistemas sob medida",
      summary: "Soluções que organizam processos, reduzem improvisos e acompanham a rotina real da operação.",
      audience: "Empresas com processos próprios, manuais ou difíceis de adaptar.",
      problem: "Ferramentas prontas não acompanham a operação real.",
      delivery: "Sistema planejado para regras, fluxos e necessidades do seu negócio.",
      cta: "Quero um sistema sob medida",
    },
    {
      slug: "web-apps",
      title: "Web apps",
      summary: "Aplicações online para centralizar dados, funcionalidades e fluxos que precisam evoluir com o negócio.",
      audience: "Empresas que precisam centralizar dados e funcionalidades online.",
      problem: "Dificuldade para operar com informações espalhadas.",
      delivery: "Aplicação web responsiva, organizada e pronta para evolução.",
      cta: "Quero desenvolver um web app",
    },
    {
      slug: "saas-mvp",
      title: "SaaS / MVP para startups",
      summary: "Produtos digitais para validação, lançamento e crescimento.",
      audience: "Startups ou empresas com ideia de produto digital.",
      problem: "Ideias paradas sem validação prática ou primeira versão funcional.",
      delivery: "MVP com escopo claro, base técnica sólida e foco em validação.",
      cta: "Quero tirar minha ideia do papel",
    },
    {
      slug: "automacoes-internas",
      title: "Automações internas",
      summary: "Redução de tarefas manuais e repetitivas.",
      audience: "Empresas com tarefas repetitivas consumindo tempo.",
      problem: "Retrabalho, erros manuais e baixa previsibilidade operacional.",
      delivery: "Automações simples e úteis para reduzir esforço e organizar rotinas.",
      cta: "Quero automatizar minha operação",
    },
    {
      slug: "modernizacao-sistemas",
      title: "Modernização de sistemas antigos",
      summary: "Evolução ou reconstrução de sistemas ultrapassados.",
      audience: "Empresas com sistemas lentos, antigos ou limitados.",
      problem: "Ferramentas que travam crescimento, operação e manutenção.",
      delivery: "Diagnóstico, reconstrução ou evolução gradual com menor risco.",
      cta: "Quero modernizar meu sistema",
    },
  ],
  whyAsync: [
    {
      title: "Desenvolvimento sem travas",
      description: "Criamos soluções digitais com foco em fluidez, organização e avanço constante.",
    },
    {
      title: "Transparência em cada etapa",
      description: "Você entende o que está sendo feito, por que está sendo feito e como o projeto evolui.",
    },
    {
      title: "Soluções sob medida",
      description: "Entendemos seu negócio antes de propor a solução.",
    },
    {
      title: "Do planejamento à evolução",
      description: "Ajudamos a estruturar, desenvolver, validar e melhorar sua solução.",
    },
    {
      title: "Tecnologia com visão de negócio",
      description: "Entregamos soluções úteis, não apenas código.",
    },
    {
      title: "Experiência própria construindo produto",
      description: "O BizManager demonstra nossa capacidade de criar produtos digitais completos.",
    },
  ],
  bizManager: {
    name: "BizManager",
    tagline: "Gestão para MEIs e pequenos negócios",
    headline: "Vendas, financeiro, clientes, estoque e agenda no mesmo lugar.",
    summary:
      "O BizManager organiza a rotina de quem toca um pequeno negócio: cada venda lança a entrada no financeiro e baixa o estoque sozinha, e o painel mostra quanto entrou, quanto saiu e quanto sobrou no mês.",
    learnMoreCta: "Conhecer o BizManager",
    pricingCta: "Ver planos e preços",
    loginCta: "Já tenho conta",
    launch: {
      "coming-soon": {
        badge: "Lançamento em breve",
        primaryCta: "Quero ser avisado no lançamento",
        note: "Entre na lista de espera pelo WhatsApp e receba o acesso entre os primeiros.",
        planCta: "Quero ser avisado",
        pricingNote: "Preços previstos para o lançamento. Quem está na lista de espera é avisado primeiro.",
        finalCtaTitle: "Seja um dos primeiros a usar o BizManager",
        finalCtaDescription:
          "Estamos nos ajustes finais. Chame a gente no WhatsApp para entrar na lista de espera e testar por 30 dias, sem compromisso.",
      },
      available: {
        badge: "Disponível agora",
        primaryCta: "Começar teste grátis",
        note: "30 dias grátis do Start, sem cartão e sem cobrança automática.",
        planCta: "Começar agora",
        pricingNote: "Teste o Start por 30 dias e só assine se fizer sentido. A assinatura é paga no cartão de crédito.",
        finalCtaTitle: "Organize seu negócio a partir de hoje",
        finalCtaDescription: "Crie sua conta em poucos minutos e use o Start por 30 dias, sem cartão e sem cobrança automática.",
      },
    },
    heroImage: {
      ...bizManagerImages.dashboard,
      alt: "Painel do BizManager com receita, despesas e resultado do mês, gráfico de fluxo de caixa, agenda do dia e alertas de reposição de estoque.",
    },
    heroMobileImage: {
      ...bizManagerImages.mobileDashboard,
      alt: "Painel do BizManager aberto no celular, com os indicadores do mês.",
    },
    highlights: [
      { value: "30 dias", label: "de teste grátis, sem cartão" },
      { value: "1 venda", label: "atualiza financeiro e estoque juntos" },
      { value: "5 módulos", label: "conectados em um só painel" },
      { value: "100% online", label: "no computador e no celular" },
    ],
    modules: [
      { title: "Vendas", description: "Vendas, encomendas e tele-entrega com financeiro e estoque ligados." },
      { title: "Financeiro", description: "Contas a pagar e a receber, fluxo de caixa e lucro do mês." },
      { title: "Clientes", description: "Cadastro, avaliação e histórico de compras de cada cliente." },
      { title: "Estoque", description: "Produtos, custos, margens e alertas de reposição." },
      { title: "Agenda", description: "Atendimentos, entregas e compromissos da semana." },
    ],
    featuresEyebrow: "Funcionalidades",
    featuresTitle: "Tudo o que o dia a dia do negócio pede, sem complicar",
    featuresDescription:
      "Os módulos conversam entre si: você registra uma vez e as informações aparecem onde precisam aparecer.",
    features: [
      {
        slug: "vendas",
        eyebrow: "Vendas e encomendas",
        title: "Registre a venda uma vez. O resto se atualiza sozinho.",
        description:
          "Cada venda lança a entrada no financeiro, baixa o estoque e entra no histórico do cliente. Encomendas com prazo, tele-entrega e o canal de onde a venda veio ficam no mesmo registro.",
        bullets: [
          "À vista ou parcelada, por Pix, cartão, boleto ou dinheiro",
          "Encomendas com prazo, acompanhadas até a entrega",
          "Canal da venda: WhatsApp, Instagram, loja ou site",
          "Faturamento, ticket médio e valores a receber do mês",
        ],
        image: {
          ...bizManagerImages.sales,
          alt: "Tela de vendas do BizManager com total de vendas, faturamento, ticket médio, valores a receber e a lista de vendas do mês.",
        },
      },
      {
        slug: "financeiro",
        eyebrow: "Financeiro",
        title: "Saiba quanto o negócio realmente lucrou no mês.",
        description:
          "Entradas e saídas com vencimento e categoria, contas a pagar e a receber e um resultado claro: vendas, menos o custo do que foi vendido, menos as despesas.",
        bullets: [
          "Contas a pagar e a receber com vencimento",
          "Lucro do mês com margem bruta e líquida",
          "Despesas por categoria e fluxo de caixa de 6 meses",
          "Notas e comprovantes anexados em foto ou PDF",
        ],
        image: {
          ...bizManagerImages.finance,
          alt: "Tela financeira do BizManager com receitas, despesas, resultado e caixa do mês, lista de lançamentos e despesas por categoria.",
        },
      },
      {
        slug: "clientes",
        eyebrow: "Clientes",
        title: "Conheça quem compra com você.",
        description:
          "Cadastro com contato, avaliação e observações, atalho para o WhatsApp e o histórico de cada cliente: quanto gastou, o que comprou e o que ainda está em aberto.",
        bullets: [
          "Total gasto, ticket médio e última compra",
          "Atalho para conversar pelo WhatsApp",
          "Importação de clientes por planilha",
        ],
        image: {
          ...bizManagerImages.clientHistory,
          alt: "Histórico de compras de uma cliente no BizManager, com total gasto, número de compras, ticket médio e produtos comprados.",
        },
      },
      {
        slug: "estoque",
        eyebrow: "Estoque",
        title: "Estoque que se movimenta sozinho.",
        description:
          "Produtos e serviços com custo, preço, margem e estoque mínimo. Vendas e compras de mercadoria atualizam o saldo, e o painel avisa o que precisa repor.",
        bullets: [
          "Alertas de estoque baixo e esgotado",
          "Compra de fornecedor com entrada no estoque",
          "Veja quem comprou cada produto",
          "Importação do catálogo por planilha (.xlsx ou .csv)",
        ],
        image: {
          ...bizManagerImages.inventory,
          alt: "Tela de estoque do BizManager com valor em estoque, alertas de estoque baixo e esgotado e unidades por categoria.",
        },
      },
      {
        slug: "agenda",
        eyebrow: "Agenda",
        title: "A semana organizada em uma tela.",
        description:
          "Atendimentos, entregas e reuniões em uma visão semanal, ligados aos clientes. Os compromissos do dia aparecem direto no painel.",
        bullets: ["Visão semanal por horário", "Compromissos vinculados a clientes", "Agenda do dia no painel inicial"],
        image: {
          ...bizManagerImages.agenda,
          alt: "Agenda semanal do BizManager com entregas, retiradas e reuniões organizadas por dia e horário.",
        },
      },
    ],
    mobile: {
      eyebrow: "No celular",
      title: "Use no balcão, na rua ou em casa",
      description:
        "O BizManager funciona no navegador do celular, sem instalar nada. Registre uma venda na hora e confira o caixa de qualquer lugar.",
      images: [
        { ...bizManagerImages.mobileDashboard, alt: "Painel do BizManager no celular com receita, despesas e resultado do mês." },
        { ...bizManagerImages.mobileSales, alt: "Tela de vendas do BizManager no celular com vendas, faturamento e ticket médio." },
      ],
    },
    audience: {
      eyebrow: "Para quem é",
      title: "Para quem toca o negócio e não quer um ERP complicado",
      description:
        "Pensado para MEIs, autônomos e pequenas equipes que hoje se dividem entre caderno, planilha e conversas no WhatsApp.",
      items: [
        "Lojas e comércios",
        "Confeitarias e alimentação",
        "Moda e acessórios",
        "Beleza e estética",
        "Prestadores de serviço",
        "Venda sob encomenda",
      ],
    },
    pricing: {
      eyebrow: "Planos",
      title: "Preço simples, sem taxa de adesão",
      description: "Todo cadastro começa com 30 dias grátis do Start, sem cartão. Troque de plano ou cancele quando quiser.",
      monthly: "Mensal",
      yearly: "Anual",
      yearlyBadge: "2 meses grátis",
      perMonth: "/mês",
      free: "Grátis",
      billedYearly: "cobrado {amount} por ano",
      trialLabel: "grátis por {days} dias",
      featured: "Mais escolhido",
      plans: {
        start: {
          name: "Start",
          tagline: "Para começar com produtos e serviços.",
          features: [
            "Clientes, produtos e vendas ilimitados",
            "Vendas com estoque e financeiro ligados",
            "Contas a pagar e a receber",
            "Vitrine, pedidos e agenda online",
            "Tele-entrega, encomendas e importação de planilha",
            "2 profissionais na agenda e 1 acesso administrativo",
            "Relatórios do mês atual",
          ],
        },
        growth: {
          name: "Growth",
          tagline: "Gestão completa para quem toca o negócio.",
          features: [
            "Tudo do Start",
            "4 profissionais com login e 2 acessos administrativos",
            "Atendimentos paralelos e comissões",
            "Relatórios de todos os meses",
            "Métricas de compra por cliente",
            "Compra de mercadoria com entrada no estoque",
            "Categorias personalizadas",
            "Notas e comprovantes anexados",
          ],
        },
        scale: {
          name: "Scale",
          tagline: "Para quem tem equipe.",
          features: [
            "Tudo do Growth",
            "6 profissionais com login e 5 acessos administrativos, com perfis",
            "Exportação em CSV (Excel)",
            "Suporte por WhatsApp, com prioridade",
          ],
        },
      },
    },
    faq: {
      eyebrow: "Dúvidas frequentes",
      title: "Perguntas sobre o BizManager",
      items: [
        {
          question: "Preciso instalar alguma coisa?",
          answer: "Não. O BizManager funciona no navegador do computador e do celular. Basta criar a conta e entrar.",
        },
        {
          question: "Como funciona o teste grátis?",
          answer:
            "Todo cadastro ganha 30 dias grátis do Start, sem cartão e sem cobrança automática. Se você não assinar ao fim do teste, a conta fica disponível só para consulta: nada é apagado, e você volta a editar assim que assinar.",
        },
        {
          question: "Quais formas de pagamento são aceitas?",
          answer: "A assinatura é paga no cartão de crédito, com cobrança mensal ou anual.",
        },
        {
          question: "Posso trocar de plano ou cancelar?",
          answer: "Sim, quando quiser, em Configurações > Assinatura. Não há fidelidade nem multa, e o plano vale até o fim do período já pago.",
        },
        {
          question: "Já uso planilha. Consigo levar meus dados?",
          answer: "Sim. Produtos e clientes podem ser importados de uma planilha (.xlsx ou .csv) em poucos cliques.",
        },
        {
          question: "Meus dados ficam seguros?",
          answer:
            "Cada conta acessa apenas os próprios dados, com login protegido por senha. Você pode excluir a conta e todos os dados quando quiser.",
        },
      ],
    },
    whatsapp: {
      waitlist: "Olá! Vi o BizManager no site da Async Studio e quero ser avisado(a) quando ele for lançado.",
      waitlistPlan: "Olá! Vi o BizManager no site da Async Studio e quero ser avisado(a) do lançamento. Tenho interesse no plano {plan}.",
      questions: "Olá! Tenho uma dúvida sobre o BizManager.",
    },
  },
  process: [
    {
      title: "Conversa e diagnóstico",
      description: "Entendemos sua ideia, problema, objetivo e cenário atual.",
    },
    {
      title: "Proposta e escopo",
      description: "Organizamos a solução recomendada, prioridades, prazo e condições.",
    },
    {
      title: "Planejamento",
      description: "Definimos funcionalidades, etapas, entregas e próximos passos.",
    },
    {
      title: "Desenvolvimento e validação",
      description: "Construímos com acompanhamento, testes e ajustes junto ao cliente.",
    },
    {
      title: "Entrega e evolução",
      description: "Publicamos a solução e acompanhamos melhorias conforme o negócio cresce.",
    },
  ],
  about: {
    heroTitle: "Tecnologia com clareza, proximidade e visão de negócio",
    heroSubtitle:
      "A Async Studio nasceu de uma parceria real entre pessoas que acreditam que bons sistemas começam entendendo o negócio, não apenas escrevendo código.",
    storyTitle: "Nossa história",
    summary:
      "Mais do que linhas de código, entregamos clareza e parceria. Somos um estúdio de tecnologia criado para transformar ideias, processos manuais e necessidades reais do seu negócio em soluções digitais claras, eficientes e fáceis de usar. Unimos estratégia de produto, design de experiência e engenharia de software para que sua empresa evolua sem travar.",
    fullStory: [
      "Nossa trajetória começou com uma forte amizade e conversas constantes sobre tecnologia, design e desenvolvimento. Identificamos que o mercado precisava de um parceiro técnico que combinasse visão de negócio com entrega real, indo além de apenas escrever código.",
      "O ponto de virada veio no desenvolvimento de um projeto de TCC com grande potencial de mercado. Decidimos tirá-lo do papel e construir o BizManager, nosso primeiro produto autoral — uma plataforma de gestão para MEIs e pequenos negócios que serviu como laboratório prático para amadurecer nossa forma de construir soluções.",
      "Dessa experiência prática, nasceu a Async Studio: um estúdio preparado para criar soluções digitais sob medida, como sites institucionais, sistemas e automações robustas que organizam e impulsionam pequenos negócios, startups e empresas em crescimento.",
    ],
    founders: [
      {
        name: "Caetano",
        role: "Fundador da Async Studio",
        description: "Lidera a estratégia técnica, concepção de produto e o desenvolvimento de soluções digitais alinhadas aos objetivos de cada negócio.",
      },
      {
        name: "Murilo",
        role: "Co-fundador da Async Studio",
        description: "Focado no desenvolvimento de software, automações e interfaces modernas, criando experiências digitais fluidas e responsivas.",
      },
    ],
    philosophy: {
      title: "Como pensamos tecnologia",
      description: "Clareza antes do código, soluções sob medida e evolução contínua para cada negócio.",
    },
    valuePropsTitle: "O que isso significa para o seu projeto",
    valuePropsSubtitle: "Na prática, nossa forma de trabalho ajuda seu projeto a começar com mais clareza, menos retrabalho e mais direção.",
    valueProps: [
      {
        title: "Clareza antes do código",
        description: "Entendemos o problema, o objetivo e o cenário antes de propor a solução.",
      },
      {
        title: "Solução pensada para o negócio",
        description: "Criamos sites, sistemas e automações alinhados à operação real de cada cliente.",
      },
      {
        title: "Acompanhamento próximo",
        description: "Trabalhamos com comunicação clara, etapas definidas e evolução contínua.",
      },
    ],
  },
  contact: {
    title: "Inicie a conversa pelo WhatsApp",
    description:
      "O primeiro passo é simples: conte sua ideia, dor ou processo manual. A partir disso, entendemos o cenário e avaliamos o melhor caminho para uma reunião comercial.",
    primaryLabel: "Fale conosco pelo WhatsApp",
    secondary: "Você também pode falar com a gente por e-mail ou Instagram.",
  },
  legal: {
    privacy: {
      title: "Política de Privacidade",
      lastUpdated: "30 de julho de 2026",
      intro:
        "Esta política explica como a Async Studio (68.009.930 CAETANO APOLLO DA SILVEIRA, inscrita no CNPJ sob o nº 68.009.930/0001-40, com sede na Rua Bauru, 364 - Canudos, Novo Hamburgo - RS, CEP 93540-180) trata dados pessoais em seu site institucional e em seus produtos, incluindo o Async Hub — nosso sistema de atendimento que integra WhatsApp e Instagram para pequenos negócios.",
      sections: [
        {
          heading: "O que o Async Hub faz",
          paragraphs: [
            "O Async Hub conecta a conta comercial de WhatsApp e/ou Instagram de um negócio (nosso cliente, \"a loja\") às nossas ferramentas de atendimento, permitindo que a equipe da loja responda seus próprios clientes em uma única tela, em vez de alternar entre os aplicativos do WhatsApp e do Instagram.",
            "Não vendemos acesso a esses dados, não fazemos propaganda direcionada com eles, e não os usamos para nenhuma finalidade além de prestar o serviço de atendimento contratado pela loja.",
          ],
        },
        {
          heading: "Quais dados tratamos",
          paragraphs: [
            "Para prestar esse serviço, o Async Hub recebe e armazena, em nome da loja contratante: dados do cliente da loja (nome, quando disponível, número de telefone do WhatsApp ou identificador de perfil do Instagram), o conteúdo das mensagens trocadas entre o cliente e a loja, e metadados da conversa (canal utilizado, horário das mensagens, etapa do atendimento).",
            "Esses dados chegam ao Async Hub através das APIs oficiais da Meta (WhatsApp Cloud API e Instagram Messaging API), usando webhooks configurados com a autorização da própria loja.",
          ],
        },
        {
          heading: "Base legal e finalidade",
          paragraphs: [
            "O tratamento desses dados tem como única finalidade viabilizar o atendimento solicitado pelo próprio cliente da loja ao iniciar uma conversa pelo WhatsApp ou Instagram — a base legal, conforme a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018), é a execução de um serviço solicitado pelo titular dos dados e o legítimo interesse da loja em atender quem já iniciou contato com ela.",
          ],
        },
        {
          heading: "Compartilhamento de dados",
          paragraphs: [
            "Não compartilhamos, vendemos ou alugamos esses dados a terceiros. Utilizamos como infraestrutura de armazenamento provedores de nuvem (como Supabase), atuando como operadores de dados sob nossa responsabilidade, com isolamento técnico entre os dados de cada loja cliente.",
          ],
        },
        {
          heading: "Segurança",
          paragraphs: [
            "Tokens de acesso às APIs da Meta são armazenados com criptografia adicional, independente da criptografia do banco de dados. Cada loja cliente só tem acesso aos próprios dados, com isolamento reforçado no nível do banco de dados. O acesso interno é controlado por papéis (administrador/atendente) dentro de cada loja cliente.",
          ],
        },
        {
          heading: "Retenção e exclusão",
          paragraphs: [
            "Os dados são mantidos enquanto a loja mantiver o Async Hub contratado. A qualquer momento, o titular dos dados (cliente da loja) ou a própria loja pode solicitar a exclusão ou anonimização dos dados de um contato específico, escrevendo para contato@asyncstudio.com.br.",
          ],
        },
        {
          heading: "Seus direitos (LGPD)",
          paragraphs: [
            "Qualquer pessoa cujos dados sejam tratados através do Async Hub pode solicitar, mediante contato com contato@asyncstudio.com.br: confirmação da existência de tratamento e acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários; portabilidade a outro fornecedor; e eliminação dos dados tratados com consentimento, quando aplicável.",
          ],
        },
        {
          heading: "Alterações a esta política",
          paragraphs: [
            "Esta política pode ser atualizada para refletir mudanças no serviço ou na legislação aplicável. A data da última atualização está sempre indicada no topo desta página.",
          ],
        },
        {
          heading: "Contato",
          paragraphs: ["Dúvidas sobre esta política ou sobre o tratamento dos seus dados: contato@asyncstudio.com.br."],
        },
      ],
    },
    terms: {
      title: "Termos de Serviço",
      lastUpdated: "30 de julho de 2026",
      intro:
        "Estes termos regem o uso do site institucional da Async Studio e de seus produtos, incluindo o Async Hub, sistema de atendimento que unifica conversas de WhatsApp e Instagram para pequenos negócios.",
      sections: [
        {
          heading: "Quem oferece o serviço",
          paragraphs: [
            "O Async Hub é oferecido pela Async Studio (68.009.930 CAETANO APOLLO DA SILVEIRA, inscrita no CNPJ sob o nº 68.009.930/0001-40, com sede na Rua Bauru, 364 - Canudos, Novo Hamburgo - RS, CEP 93540-180). Ao usar o Async Hub, o negócio contratante (\"a loja\") concorda com estes termos.",
          ],
        },
        {
          heading: "Responsabilidades da loja contratante",
          paragraphs: [
            "A loja é responsável por conectar suas próprias contas oficiais de WhatsApp Business e/ou Instagram profissional ao Async Hub, com autorização válida junto à Meta.",
            "A loja é responsável por atender, dentro do Async Hub, apenas conversas iniciadas por seus próprios clientes, respeitando as políticas de uso das plataformas Meta.",
            "A loja é responsável por obter e manter as autorizações e consentimentos necessários de seus próprios clientes, na medida em que a legislação aplicável (LGPD) exigir.",
          ],
        },
        {
          heading: "Uso em conformidade com as plataformas Meta",
          paragraphs: [
            "O Async Hub opera integrado às APIs oficiais da Meta (WhatsApp Cloud API e Instagram Messaging API) e está sujeito às políticas de uso da plataforma Meta, incluindo limites de mensageria definidos pela própria Meta. A Async Studio não se responsabiliza por suspensões, bloqueios ou restrições aplicados pela Meta a contas que violem as políticas da própria Meta.",
          ],
        },
        {
          heading: "Disponibilidade",
          paragraphs: [
            "O Async Hub está atualmente em fase de validação (piloto), sem garantia formal de disponibilidade contínua (SLA). Esforços razoáveis são feitos para manter o serviço operacional e para comunicar interrupções relevantes à loja contratante.",
          ],
        },
        {
          heading: "Dados e privacidade",
          paragraphs: [
            "O tratamento de dados pessoais no Async Hub segue nossa Política de Privacidade, parte integrante destes termos.",
          ],
        },
        {
          heading: "Alterações no serviço e nos termos",
          paragraphs: [
            "Por estar em fase de validação, o Async Hub pode ter funcionalidades adicionadas, alteradas ou descontinuadas sem aviso prévio extenso. Alterações relevantes nestes termos serão comunicadas à loja contratante com antecedência razoável quando possível.",
          ],
        },
        {
          heading: "Encerramento",
          paragraphs: [
            "A loja contratante pode solicitar o encerramento do uso do Async Hub e a exclusão de seus dados a qualquer momento, escrevendo para contato@asyncstudio.com.br.",
          ],
        },
        {
          heading: "Contato",
          paragraphs: ["Dúvidas sobre estes termos: contato@asyncstudio.com.br."],
        },
      ],
    },
  },
  whatsappMessage:
    "Olá, Async Studio! Vim pelo site e gostaria de conversar sobre um projeto para minha empresa.",
  whatsappMessages: {
    header: "Olá! Vim pelo site da Async Studio e gostaria de conversar sobre um projeto.",
    hero: "Olá! Vim pelo site da Async Studio e quero entender como vocês podem ajudar minha empresa com sites, sistemas ou soluções digitais.",
    bizManager: "Olá! Vi o BizManager no site da Async Studio e gostaria de construir uma solução semelhante para o meu negócio.",
    contactCta: "Olá! Tenho uma ideia, processo ou sistema que gostaria de tirar do papel com a Async Studio.",
    footer: "Olá! Vim pelo site da Async Studio e gostaria de falar com vocês.",
  },
  ui: {
    footer: {
      featured: "Produto em destaque",
      rights: "© 2026 Async Studio. Todos os direitos reservados.",
      description: "Sites, sistemas e soluções digitais para empresas que querem crescer sem travar.",
      remote: "Projetos remotos com comunicação clara, etapas definidas e acompanhamento próximo.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      legalName: "Razão Social",
      cnpj: "CNPJ",
      address: "Endereço",
      email: "E-mail",
    },
    serviceCard: {
      audience: "Para quem",
      problem: "Resolve",
      delivery: "Entregamos",
      messageTemplate: "Olá, Async Studio! Vim pelo site e gostaria de conversar sobre: {serviceTitle}.",
    },
    mobileMenu: {
      close: "Fechar menu",
      open: "Abrir menu",
    },
    about: {
      founders: "Fundadores",
      differentials: "Diferenciais",
      processEyebrow: "PROCESSO",
    },
    contact: {
      meeting: "Objetivo: iniciar conversa e marcar uma reunião",
      whatsapp: "WhatsApp",
      whatsappCta: "Abrir conversa no WhatsApp",
      whatsappHint: "Canal principal para iniciar a conversa com a Async Studio.",
      email: "E-mail comercial",
      instagram: "Instagram",
      companyInfo: "Dados da Empresa",
      legalName: "Razão Social",
      cnpj: "CNPJ",
      address: "Endereço comercial",
    },
    home: {
      problemsEyebrow: "Problemas que resolvemos",
      problemsCtaTitle: "Reconheceu algum desses problemas?",
      problemsCtaDescription:
        "Conte o cenário da sua empresa e vamos avaliar o caminho mais claro para resolver sem complicar.",
      problemsCtaLabel: "Fale conosco pelo WhatsApp",
      servicesCta: "Ver todos os serviços",
      servicesMoreIntro: "Também desenvolvemos:",
      servicesMoreItems: ["SaaS/MVPs", "Automações internas", "Modernização de sistemas antigos"],
      whyEyebrow: "Diferenciais",
      whyClosing: "Trabalhamos com clareza desde a primeira conversa até a evolução do projeto.",
      bizEyebrow: "Produto autoral",
      processEyebrow: "Processo",
      aboutCta: "Conhecer nossa história",
      contactEyebrow: "Contato",
      contactChannels: "Canais oficiais",
      contactChannelsDescription: "Escolha o melhor canal para falar com a Async Studio.",
      contactWhatsAppDescription: "Canal principal para iniciar uma conversa sobre seu projeto.",
    },
    projects: {
      heroEyebrow: "Projetos Async Studio",
      heroTitle: "Projetos digitais criados para resolver desafios reais de negócio.",
      heroDescription:
        "Transformamos ideias, processos manuais e desafios operacionais em sites, sistemas sob medida, SaaS/MVPs e web apps claros, úteis e preparados para evoluir.",
      heroPrimaryCta: "Fale sobre seu projeto",
      heroSecondaryCta: "Ver projeto em destaque",
      featured: "Projeto em destaque",
      gallery: "Por dentro do BizManager",
      galleryDescription: "Telas reais do produto, com dados de uma loja de demonstração.",
      identityLabel: "Produto Async Studio",
      identityDescription:
        "Nosso primeiro produto autoral: nasceu de um TCC e virou uma plataforma de gestão completa para pequenos negócios.",
      identityModules: "Módulos",
      identityPricing: "Planos a partir de",
      carouselPrevious: "Mostrar tela anterior",
      carouselNext: "Mostrar próxima tela",
      carouselShow: "Mostrar {title}",
      otherProjects: "Outros projetos",
      otherProjectsDescription:
        "Produtos autorais em desenvolvimento, usados como laboratório para testar arquitetura, interface e integração antes de levar essa base para projetos de clientes.",
      otherProjectsList: [
        {
          slug: "asynchub",
          src: "/images/projects/asynchub/dashboard.webp",
          alt: "Dashboard do Async Hub CRM com métricas de conversas no Instagram, funil de atendimento e status dos canais.",
          title: "Async Hub CRM",
          status: "Em validação",
          description: "CRM multi-tenant para centralizar conversas do Instagram e WhatsApp, com dashboard de desempenho e funil de vendas em tempo real.",
        },
        {
          slug: "encaixe",
          src: "/images/projects/encaixe/vitrine-calendario.webp",
          alt: "Vitrine pública de agendamento do Encaixe com calendário, preferência de profissional e horários disponíveis.",
          title: "Encaixe",
          status: "Em desenvolvimento",
          description: "Sistema de agendamentos com vitrine pública de reserva, grade de horários flexível e painel para múltiplos profissionais.",
        },
      ],
      similar: "Quer construir uma solução como essa para sua empresa?",
      buildSimilarCta: "Quero construir uma solução semelhante",
      finalCtaTitle: "Tem uma ideia, processo manual ou sistema que precisa evoluir?",
      finalCtaDescription:
        "Converse com a Async Studio pelo WhatsApp e vamos entender o caminho mais claro para transformar sua necessidade em uma solução digital bem construída.",
    },
  },
};
