import type { Locale } from "./types";

export type OfferSchemaOption = {
  name: string;
  price: string;
  description: string;
  priceValidUntil?: string;
  validFrom?: string;
};

export type OfferSchema = {
  name: string;
  description: string;
  offers: OfferSchemaOption[];
};

export type OfferTableRow = {
  id: string;
  offer: string;
  detail: string;
  pix: string;
  card: string;
  monthly: string;
  includes: string;
  from2027: string;
};

export type OfferExtra = {
  id: string;
  title: string;
  text: string;
  schema: OfferSchema;
};

export type OfferCard = {
  id: "site" | "presenca" | "loja" | "loja-bizmanager";
  name: string;
  badge?: string;
  featured?: boolean;
  priceHeadline: string;
  priceSubline: string;
  /** Preço que vale a partir de 01/01/2027, mostrado ao lado do preço promocional. */
  laterPrice: string;
  note: string;
  summary: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  /** Dados estruturados (BRL) para JSON-LD Service / Offer. */
  schema: OfferSchema;
};

export type OffersContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroNote: string;
  gainsEyebrow: string;
  gainsTitle: string;
  gainsDescription: string;
  gains: Array<{
    title: string;
    benefit: string;
  }>;
  plansEyebrow: string;
  plansTitle: string;
  plansDescription: string;
  promoTitle: string;
  promoText: string;
  cards: OfferCard[];
  tableEyebrow: string;
  tableTitle: string;
  tableDescription: string;
  tableCaption: string;
  tableHeaders: { offer: string; pix: string; card: string; monthly: string; includes: string; from2027: string };
  tableRows: OfferTableRow[];
  extrasTitle: string;
  extras: OfferExtra[];
  tableFootnote: string;
  scopeEyebrow: string;
  scopeTitle: string;
  scopeDescription: string;
  includedTitle: string;
  includedItems: string[];
  customScopeTitle: string;
  customScopeItems: string[];
  scopeFootnote: string;
  previewEyebrow: string;
  previewTitle: string;
  previewParagraphs: string[];
  deliveryTitle: string;
  deliveryHighlight: string;
  deliveryDescription: string;
  paymentTitle: string;
  paymentHighlight: string;
  paymentDescription: string;
  faqEyebrow: string;
  faqTitle: string;
  faqDescription: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  finalCtaTitle: string;
  finalCtaDescription: string;
  finalCtaLabel: string;
  finalCtaNote: string;
  heroWhatsappMessage: string;
  finalWhatsappMessage: string;
};

export const offersContentByLocale: Record<Locale, OffersContent> = {
  pt: {
    eyebrow: "Ofertas e preços · Vale do Rio dos Sinos e remoto",
    title: "Sites para pequenos negócios em Sapucaia do Sul e Novo Hamburgo",
    subtitle:
      "Atendemos pequenos negócios e prestadores de serviço em Sapucaia do Sul, Novo Hamburgo, São Leopoldo, Esteio (RS) e de forma remota em todo o Brasil, com preço transparente, entrega em até 7 dias úteis e prévia gratuita antes de pagar. Sites a partir de R$ 499.",
    heroPrimaryCta: "Pedir prévia grátis no WhatsApp",
    heroSecondaryCta: "Ver pacotes e preços",
    heroNote: "Prévia sem compromisso · pagamento só após aprovação · domínio no seu nome · atendimento todos os dias, das 7h às 19h",
    gainsEyebrow: "O que muda na prática",
    gainsTitle: "Antes dos itens técnicos, o que você passa a resolver no dia a dia",
    gainsDescription:
      "Um site bem estruturado tira o seu negócio do improviso e organiza a apresentação da empresa para quem pesquisa no Google ou chega por indicação.",
    gains: [
      {
        title: "Você passa a ser encontrado por quem procura na cidade",
        benefit:
          "Estrutura pensada para buscas locais em Sapucaia do Sul, Novo Hamburgo, São Leopoldo e Esteio, integrada ao seu Perfil da Empresa no Google.",
      },
      {
        title: "O cliente vê serviços, fotos e horários antes de chamar",
        benefit:
          "Quem entra no seu endereço já entende o que você faz, em qual região atende e como chegar até o WhatsApp.",
      },
      {
        title: "Você responde menos perguntas repetidas no WhatsApp",
        benefit:
          "Informações essenciais, como região de atendimento, formas de pagamento e catálogo ou serviços, ficam organizadas em um só lugar.",
      },
      {
        title: "Você avalia uma prévia real antes de gastar",
        benefit:
          "Recebe um ponto de partida montado para o seu negócio para testar no celular e no computador antes de pagar.",
      },
    ],
    plansEyebrow: "Quatro caminhos diretos",
    plansTitle: "Escolha o formato ideal para o momento do seu negócio",
    plansDescription:
      "Preços públicos e regras claras para sites de uma página e para loja com vitrine e pedido pelo WhatsApp. Todos incluem prévia gratuita antes do pagamento.",
    promoTitle: "Preço promocional de lançamento até 31/12/2026",
    promoText:
      "Os valores abaixo valem para contratos fechados até 31/12/2026. A partir de 01/01/2027 vale a tabela normal, mostrada ao lado de cada preço.",
    cards: [
      {
        id: "site",
        name: "Site",
        badge: "Sites a partir de R$ 499",
        featured: true,
        priceHeadline: "R$ 499",
        priceSubline: "no Pix · ou R$ 590 no cartão em até 3x de R$ 196,67 · + R$ 39/mês",
        laterPrice: "A partir de 01/01/2027: R$ 990 (até 3x) + R$ 39/mês",
        note: "Você paga a criação uma vez. Os R$ 39/mês cobrem o site no ar, o domínio e o suporte técnico.",
        summary: "Para negócios locais que querem investir uma vez na criação e manter uma mensalidade enxuta.",
        features: [
          "Site de uma página com até 6 seções e textos aprovados por você antes de publicar",
          "Endereço .com.br registrado no seu nome e certificado de segurança HTTPS ativo",
          "Perfil da Empresa no Google revisado e conectado ao site",
          "3 rodadas de ajuste antes de publicar",
          "Versão para celular e botões para WhatsApp, Instagram e Maps",
        ],
        ctaLabel: "Quero o Site",
        whatsappMessage: "Olá! Vi a página de ofertas da Async Studio e tenho interesse no Site (R$ 499 no Pix ou R$ 590 no cartão em até 3x + R$ 39/mês).",
        schema: {
          name: "Site de uma página para pequeno negócio",
          description:
            "Site de uma página com até 6 seções, endereço .com.br no nome do cliente, Perfil da Empresa no Google revisado, versão celular e 3 rodadas de ajuste antes de publicar, mais R$ 39,00/mês de site no ar, domínio e suporte técnico.",
          offers: [
            {
              name: "Site — Pix (promoção de lançamento)",
              price: "499.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 499,00 no Pix até 31/12/2026 + R$ 39,00/mês de hospedagem, domínio e suporte",
            },
            {
              name: "Site — cartão em até 3x (promoção de lançamento)",
              price: "590.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 590,00 no cartão em até 3x de R$ 196,67 até 31/12/2026 + R$ 39,00/mês de hospedagem, domínio e suporte",
            },
            {
              name: "Site — tabela a partir de 01/01/2027",
              price: "990.00",
              validFrom: "2027-01-01",
              description: "R$ 990,00 em até 3x a partir de 01/01/2027 + R$ 39,00/mês de hospedagem, domínio e suporte",
            },
          ],
        },
      },
      {
        id: "presenca",
        name: "Presença",
        priceHeadline: "R$ 99",
        priceSubline: "de entrada + R$ 79/mês · contrato de 12 meses, sem multa",
        laterPrice: "A partir de 01/01/2027: R$ 390 de entrada + R$ 99/mês",
        note: "Do 13º mês, segue a R$ 79/mês com os ajustes ou passa a R$ 39/mês só com o site no ar. A entrada não é devolvida.",
        summary: "Para quem prefere entrada pequena e quer o site no ar com acompanhamento mensal.",
        features: [
          "O mesmo site de uma página com até 6 seções, endereço .com.br no seu nome e Perfil da Empresa no Google revisado",
          "2 ajustes por mês de até 30 minutos cada",
          "3 rodadas de ajuste antes de publicar",
          "Cancelamento sem multa, com aviso de 30 dias",
          "Você recebe o site em ZIP e o domínio já é seu",
        ],
        ctaLabel: "Quero o Presença",
        whatsappMessage: "Olá! Vi a página de ofertas da Async Studio e tenho interesse no plano Presença (R$ 99 de entrada + R$ 79/mês por 12 meses).",
        schema: {
          name: "Presença — site de uma página com 2 ajustes por mês",
          description:
            "Site de uma página com até 6 seções, endereço .com.br no nome do cliente, Perfil da Empresa no Google revisado e 2 ajustes por mês de até 30 minutos. Contrato de 12 meses sem multa para sair, com aviso de 30 dias.",
          offers: [
            {
              name: "Presença — entrada (promoção de lançamento)",
              price: "99.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 99,00 de entrada até 31/12/2026 + R$ 79,00/mês (12 meses, sem multa, aviso de 30 dias)",
            },
            {
              name: "Presença — tabela a partir de 01/01/2027",
              price: "390.00",
              validFrom: "2027-01-01",
              description: "R$ 390,00 de entrada a partir de 01/01/2027 + R$ 99,00/mês (12 meses, sem multa, aviso de 30 dias)",
            },
          ],
        },
      },
      {
        id: "loja",
        name: "Loja completa",
        priceHeadline: "R$ 999",
        priceSubline: "no Pix · ou R$ 1.190 no cartão em até 3x de R$ 396,67 · + R$ 39/mês",
        laterPrice: "A partir de 01/01/2027: R$ 1.490 + R$ 39/mês",
        note: "Entrega em até 10 dias úteis após a aprovação da prévia e o envio dos produtos.",
        summary: "Para lojas e comércios que querem vitrine filtrável online e pedidos chegando organizados no WhatsApp.",
        features: [
          "Vitrine online no seu endereço .com.br com busca, categorias e filtros de produtos",
          "Pedido em 3 etapas, enviado organizado para o seu WhatsApp",
          "Página de perguntas frequentes",
          "Versão para celular, Perfil da Empresa no Google revisado e 3 rodadas de ajuste antes de publicar",
        ],
        ctaLabel: "Quero a Loja completa",
        whatsappMessage: "Olá! Vi a página de ofertas da Async Studio e quero conversar sobre a Loja completa (R$ 999 no Pix ou R$ 1.190 no cartão + R$ 39/mês).",
        schema: {
          name: "Loja completa — vitrine com filtros e pedido pelo WhatsApp",
          description:
            "Vitrine online com busca, categorias e filtros, pedido em 3 etapas enviado pelo WhatsApp e página de perguntas frequentes, mais R$ 39,00/mês de hospedagem, domínio e suporte.",
          offers: [
            {
              name: "Loja completa — Pix (promoção de lançamento)",
              price: "999.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 999,00 no Pix até 31/12/2026 + R$ 39,00/mês de hospedagem, domínio e suporte",
            },
            {
              name: "Loja completa — cartão em até 3x (promoção de lançamento)",
              price: "1190.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 1.190,00 no cartão em até 3x de R$ 396,67 até 31/12/2026 + R$ 39,00/mês de hospedagem, domínio e suporte",
            },
            {
              name: "Loja completa — tabela a partir de 01/01/2027",
              price: "1490.00",
              validFrom: "2027-01-01",
              description: "R$ 1.490,00 a partir de 01/01/2027 + R$ 39,00/mês de hospedagem, domínio e suporte",
            },
          ],
        },
      },
      {
        id: "loja-bizmanager",
        name: "Loja completa + BizManager",
        priceHeadline: "R$ 699",
        priceSubline: "no Pix · ou R$ 790 no cartão em até 3x de R$ 263,33 · + R$ 39/mês",
        laterPrice: "A partir de 01/01/2027: R$ 990 + R$ 39/mês",
        note: "O BizManager tem 30 dias grátis, sem cartão, e depois custa a partir de R$ 29,90/mês. Fica ativo por 6 meses; se cancelar antes, há diferença de R$ 300.",
        summary: "A mesma loja, junto com o sistema de gestão: vendas, estoque, financeiro e clientes no mesmo lugar.",
        features: [
          "Tudo da Loja completa, com preço menor ao contratar junto com o BizManager",
          "BizManager com 30 dias grátis, sem cartão, e depois a partir de R$ 29,90/mês",
          "BizManager ativo por 6 meses; se cancelar antes, diferença de R$ 300",
          "Estoque e vendas organizados no mesmo sistema da vitrine",
        ],
        ctaLabel: "Quero a Loja + BizManager",
        whatsappMessage: "Olá! Vi a página de ofertas da Async Studio e quero conversar sobre a Loja completa + BizManager (R$ 699 no Pix ou R$ 790 no cartão + R$ 39/mês).",
        schema: {
          name: "Loja completa + BizManager",
          description:
            "Loja completa com vitrine e pedido pelo WhatsApp contratada junto com o BizManager (30 dias grátis, sem cartão; depois a partir de R$ 29,90/mês, ativo por 6 meses), mais R$ 39,00/mês de hospedagem, domínio e suporte.",
          offers: [
            {
              name: "Loja completa + BizManager — Pix (promoção de lançamento)",
              price: "699.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 699,00 no Pix até 31/12/2026 + R$ 39,00/mês; BizManager ativo por 6 meses, a partir de R$ 29,90/mês após 30 dias grátis",
            },
            {
              name: "Loja completa + BizManager — cartão em até 3x (promoção de lançamento)",
              price: "790.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 790,00 no cartão em até 3x de R$ 263,33 até 31/12/2026 + R$ 39,00/mês; BizManager ativo por 6 meses",
            },
            {
              name: "Loja completa + BizManager — tabela a partir de 01/01/2027",
              price: "990.00",
              validFrom: "2027-01-01",
              description: "R$ 990,00 a partir de 01/01/2027 + R$ 39,00/mês; BizManager ativo por 6 meses",
            },
          ],
        },
      },
    ],
    tableEyebrow: "Comparativo",
    tableTitle: "Todos os preços lado a lado",
    tableDescription:
      "Valores do preço promocional de lançamento, válidos até 31/12/2026. Em cada oferta, a linha mostra o que vale a partir de 01/01/2027.",
    tableCaption: "Preços promocionais de lançamento até 31/12/2026, em reais",
    tableHeaders: {
      offer: "Oferta",
      pix: "Pix",
      card: "Cartão em até 3x",
      monthly: "Mensal",
      includes: "O que inclui",
      from2027: "A partir de 01/01/2027",
    },
    tableRows: [
      {
        id: "site",
        offer: "Site",
        detail: "Uma página, até 6 seções",
        pix: "R$ 499",
        card: "R$ 590 (3x R$ 196,67)",
        monthly: "+ R$ 39/mês",
        includes:
          "Endereço .com.br no nome do cliente, Perfil do Google revisado e 3 rodadas de ajuste antes de publicar. Os R$ 39 cobrem site no ar, domínio e suporte técnico.",
        from2027: "R$ 990 (até 3x) + R$ 39/mês",
      },
      {
        id: "presenca",
        offer: "Presença",
        detail: "12 meses, sem multa",
        pix: "R$ 99 de entrada",
        card: "—",
        monthly: "R$ 79/mês",
        includes:
          "O mesmo site, mais 2 ajustes por mês de até 30 minutos. Do 13º mês, segue a R$ 79 com os ajustes ou passa a R$ 39 só com o site no ar.",
        from2027: "R$ 390 de entrada + R$ 99/mês",
      },
      {
        id: "loja",
        offer: "Loja completa",
        detail: "Vitrine com pedido pelo WhatsApp",
        pix: "R$ 999",
        card: "R$ 1.190 (3x R$ 396,67)",
        monthly: "+ R$ 39/mês",
        includes: "Vitrine com filtros, pedido em 3 etapas pelo WhatsApp, perguntas frequentes e entrega em 10 dias úteis.",
        from2027: "R$ 1.490 + R$ 39/mês",
      },
      {
        id: "loja-bizmanager",
        offer: "Loja completa + BizManager",
        detail: "Loja e sistema de gestão",
        pix: "R$ 699",
        card: "R$ 790 (3x R$ 263,33)",
        monthly: "+ R$ 39/mês",
        includes:
          "A mesma loja, com o BizManager ativo por 6 meses (se cancelar antes, diferença de R$ 300). BizManager a partir de R$ 29,90/mês depois de 30 dias grátis, sem cartão.",
        from2027: "R$ 990 + R$ 39/mês",
      },
    ],
    extrasTitle: "Serviços avulsos",
    extras: [
      {
        id: "perfil-google",
        title: "Perfil do Google avulso: R$ 149",
        text: "Configuração e revisão do Perfil da Empresa no Google. Preço promocional até 31/12/2026; a partir de 01/01/2027, R$ 190. O valor é descontado se você fechar um site em até 30 dias.",
        schema: {
          name: "Perfil da Empresa no Google — configuração e revisão avulsa",
          description: "Configuração e revisão do Perfil da Empresa no Google, vendida sem site. Descontada se o cliente fechar um site em até 30 dias.",
          offers: [
            {
              name: "Perfil do Google — promoção de lançamento",
              price: "149.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 149,00 até 31/12/2026",
            },
            {
              name: "Perfil do Google — tabela a partir de 01/01/2027",
              price: "190.00",
              validFrom: "2027-01-01",
              description: "R$ 190,00 a partir de 01/01/2027",
            },
          ],
        },
      },
      {
        id: "ajuste-extra",
        title: "Ajuste extra: R$ 49",
        text: "Alteração de texto, foto ou seção de até 30 minutos, fora dos ajustes já incluídos.",
        schema: {
          name: "Ajuste extra no site",
          description: "Alteração de texto, foto ou seção de até 30 minutos, fora dos ajustes incluídos no plano.",
          offers: [
            {
              name: "Ajuste extra de até 30 minutos",
              price: "49.00",
              description: "R$ 49,00 por ajuste de até 30 minutos",
            },
          ],
        },
      },
    ],
    tableFootnote:
      "Todas as ofertas incluem 3 rodadas de ajuste antes de publicar. Para sair, basta avisar com 30 dias: sem multa, você recebe o site em ZIP e o domínio já é seu.",
    scopeEyebrow: "Escopo transparente",
    scopeTitle: "O que está incluído e o que vira orçamento à parte",
    scopeDescription:
      "Sem letras miúdas: deixamos claro desde o início o que entra no preço fixo de uma página e o que precisa de orçamento separado.",
    includedTitle: "Incluído no preço fixo (site de uma página)",
    includedItems: [
      "1 página com até 6 seções (apresentação, serviços ou produtos, fotos, avaliações, horários/atendimento e contato)",
      "Botões diretos para WhatsApp, Instagram, Google Maps ou vitrine do BizManager",
      "Layout adaptado para celular e computador com carregamento rápido e HTTPS",
      "Endereço do site (.com.br) registrado no nome da sua empresa",
      "Perfil da Empresa no Google revisado com categoria, área de atendimento e links",
      "Textos organizados com base nas informações que você já tem, publicados só após sua aprovação",
      "3 rodadas de ajuste antes de publicar",
    ],
    customScopeTitle: "O que vira orçamento à parte",
    customScopeItems: [
      "Sites com múltiplas páginas dedicadas por linha de serviço ou filial",
      "Loja virtual com carrinho completo e pagamento direto dentro do site (Pix/cartão no checkout)",
      "Área de login, painel de clientes ou histórico restrito de pedidos",
      "Agendamento próprio ou formulários avançados com gravação em banco de dados",
      "Blog estruturado, múltiplos idiomas extras ou integrações com ERP/sistemas externos",
      "Sessão de fotos profissionais ou produção extensa de copywriting de campanha",
    ],
    scopeFootnote:
      "Estes valores são para site de uma página (e vitrine com pedido no WhatsApp na Loja completa). Se você quiser algo maior, como loja virtual com pagamento no site, área de clientes ou integração com outro sistema, fazemos um orçamento depois de entender o que precisa.",
    previewEyebrow: "Menos risco antes de contratar",
    previewTitle: "Prévia grátis antes de pagar: um ponto de partida que muda do seu jeito",
    previewParagraphs: [
      "Antes de você fechar ou pagar qualquer valor, montamos uma prévia funcional usando os dados públicos e as informações iniciais do seu negócio.",
      "Essa prévia é um ponto de partida, não um modelo engessado. Cores, fotos, textos, ordem das seções e estilo visual mudam conforme o que você preferir, e o site só vai ao ar no seu domínio .com.br depois da sua aprovação.",
    ],
    deliveryTitle: "Prazo de entrega",
    deliveryHighlight: "Até 7 dias úteis",
    deliveryDescription:
      "Para o site de uma página, contados após a aprovação da prévia e o envio completo das fotos e informações do negócio. A Loja completa leva até 10 dias úteis.",
    paymentTitle: "Formas de pagamento",
    paymentHighlight: "Pix, boleto ou cartão",
    paymentDescription:
      "Cartão em até 3x sem juros no Site (R$ 590), na Loja completa (R$ 1.190) e na Loja completa + BizManager (R$ 790), em preço promocional de lançamento até 31/12/2026.",
    faqEyebrow: "Perguntas frequentes",
    faqTitle: "Respostas diretas sobre preços, cancelamento, prazos e propriedade do site",
    faqDescription: "Dúvidas comuns de empresas em Sapucaia do Sul, Novo Hamburgo, São Leopoldo, Esteio e clientes remotos.",
    faq: [
      {
        question: "Quanto custa um site para pequeno negócio em Novo Hamburgo e Sapucaia do Sul?",
        answer:
          "Os sites da Async Studio começam em R$ 499 no Pix (ou R$ 590 no cartão em até 3x) + R$ 39/mês, em preço promocional de lançamento até 31/12/2026; a partir de 01/01/2027, o Site passa a R$ 990 + R$ 39/mês. O Presença custa R$ 99 de entrada + R$ 79/mês por 12 meses (R$ 390 + R$ 99/mês a partir de 2027). A Loja completa custa R$ 999 no Pix ou R$ 1.190 no cartão + R$ 39/mês (R$ 1.490 a partir de 2027) e, junto com o BizManager, R$ 699 no Pix ou R$ 790 no cartão (R$ 990 a partir de 2027).",
      },
      {
        question: "O domínio .com.br fica no meu nome?",
        answer:
          "Sim. O endereço .com.br é registrado no seu nome ou no CNPJ da sua empresa, e o Perfil da Empresa no Google também segue sob seu controle mesmo se você encerrar a assinatura com a Async Studio no futuro.",
      },
      {
        question: "E se eu quiser cancelar?",
        answer:
          "Você pode cancelar sem multa, com aviso de 30 dias. O domínio já é seu e você recebe o site em ZIP; como a hospedagem é da Async Studio, o site sai da nossa hospedagem ao fim da assinatura.",
      },
      {
        question: "Preciso pagar antes de ver o site?",
        answer:
          "Não. Primeiro montamos uma prévia gratuita para você navegar no celular e no computador e pedir ajustes de cores, fotos, textos ou ordem das seções; o pagamento só acontece depois da aprovação.",
      },
      {
        question: "Quantos ajustes eu posso pedir?",
        answer:
          "Você tem 3 rodadas de ajuste antes de publicar o site. No plano Presença, depois da publicação são 2 ajustes por mês de até 30 minutos cada; fora disso, o ajuste extra custa R$ 49 (até 30 minutos).",
      },
      {
        question: "Qual é o prazo para o site ficar pronto e no ar?",
        answer:
          "O site de uma página fica pronto em até 7 dias úteis após a aprovação da prévia e o recebimento dos materiais e informações finais da empresa; a Loja completa leva até 10 dias úteis.",
      },
      {
        question: "Quais são as formas de pagamento aceitas?",
        answer:
          "Aceitamos Pix, boleto e cartão de crédito. O cartão pode ser parcelado em até 3x sem juros no Site (R$ 590), na Loja completa (R$ 1.190) e na Loja completa + BizManager (R$ 790), no preço promocional de lançamento até 31/12/2026.",
      },
      {
        question: "Até quando vale o preço promocional de lançamento?",
        answer:
          "O preço promocional vale para contratos fechados até 31/12/2026. A partir de 01/01/2027 vale a tabela normal: Site R$ 990, Presença R$ 390 de entrada + R$ 99/mês, Loja completa R$ 1.490 e Loja completa + BizManager R$ 990, todos com R$ 39/mês de hospedagem (exceto o Presença).",
      },
      {
        question: "Qual a diferença entre Site, Presença, Loja completa e Loja completa + BizManager?",
        answer:
          "O Site e o Presença entregam o mesmo site de uma página: no Site você paga a criação (R$ 499 no Pix) + R$ 39/mês; no Presença paga R$ 99 de entrada + R$ 79/mês por 12 meses e ganha 2 ajustes por mês. A Loja completa traz vitrine filtrável e pedido em 3 etapas pelo WhatsApp (R$ 999 no Pix), e a versão com BizManager (R$ 699 no Pix) soma o sistema de gestão por 6 meses, com 30 dias grátis, sem cartão.",
      },
      {
        question: "O que está incluído na mensalidade de R$ 39 ou R$ 79?",
        answer:
          "Os R$ 39/mês cobrem o site no ar, o domínio e o suporte técnico. No Presença, os R$ 79/mês incluem também 2 ajustes por mês de até 30 minutos; do 13º mês, você segue a R$ 79 com os ajustes ou passa a R$ 39 só com o site no ar.",
      },
      {
        question: "Quanto custa configurar o Perfil da Empresa no Google?",
        answer:
          "O Perfil do Google avulso custa R$ 149 até 31/12/2026 (R$ 190 a partir de 01/01/2027), e o valor é descontado se você fechar um site em até 30 dias. Nos pacotes de site, a revisão do Perfil da Empresa já está incluída.",
      },
      {
        question: "A Async Studio atende só em Sapucaia do Sul e Novo Hamburgo?",
        answer:
          "Nosso atendimento local cobre Sapucaia do Sul, Novo Hamburgo, São Leopoldo e Esteio, no Rio Grande do Sul, e também atendemos empresas de todo o Brasil de forma remota, todos os dias, das 7h às 19h.",
      },
    ],
    finalCtaTitle: "Quer ver uma prévia gratuita para o seu negócio?",
    finalCtaDescription:
      "Chame no WhatsApp com o nome da sua empresa e a cidade de atendimento. Montamos um ponto de partida para você avaliar sem compromisso.",
    finalCtaLabel: "Solicitar prévia grátis no WhatsApp",
    finalCtaNote: "WhatsApp oficial: +55 51 99334-0586 · contato@asyncstudio.com.br · todos os dias, das 7h às 19h",
    heroWhatsappMessage: "Olá, Async Studio! Vi a página de ofertas e quero solicitar uma prévia gratuita de site para o meu negócio.",
    finalWhatsappMessage: "Olá, Async Studio! Gostaria de ver uma prévia gratuita do site para minha empresa.",
  },
  en: {
    eyebrow: "Packages & pricing · Rio Grande do Sul & remote",
    title: "Websites for small businesses in Sapucaia do Sul and Novo Hamburgo",
    subtitle:
      "We serve small businesses across Sapucaia do Sul, Novo Hamburgo, São Leopoldo, Esteio (RS, Brazil) and remotely nationwide, with transparent BRL pricing, delivery in up to 7 business days and a free preview before payment. Websites from R$ 499.",
    heroPrimaryCta: "Request free preview on WhatsApp",
    heroSecondaryCta: "See packages & pricing",
    heroNote: "No-obligation preview · pay only after approval · domain registered under your name · open every day, 7am to 7pm (Brasília time)",
    gainsEyebrow: "Practical outcomes",
    gainsTitle: "What changes for your business before listing technical items",
    gainsDescription:
      "A clear website replaces improvised links and helps local customers understand your services before messaging you.",
    gains: [
      {
        title: "Show up when people search locally on Google",
        benefit:
          "Structured for local searches across Sapucaia do Sul, Novo Hamburgo, São Leopoldo and Esteio, aligned with your Google Business Profile.",
      },
      {
        title: "Customers see services, photos and service hours upfront",
        benefit: "Visitors understand what you offer and which cities you cover before opening WhatsApp.",
      },
      {
        title: "Fewer repetitive questions on WhatsApp",
        benefit: "Essential details, such as service area, payment methods, services or catalog, stay organized in one link.",
      },
      {
        title: "Review a working preview before paying",
        benefit: "You inspect a starting point tailored to your business on mobile and desktop before approving anything.",
      },
    ],
    plansEyebrow: "Four clear packages",
    plansTitle: "Choose the right setup for your current stage",
    plansDescription:
      "Public BRL pricing for one-page websites and for storefronts with WhatsApp ordering. All options include a free preview before payment.",
    promoTitle: "Launch promotional pricing until Dec 31, 2026",
    promoText:
      "The prices below apply to contracts closed by Dec 31, 2026. From Jan 1, 2027 the regular price list applies, shown next to each price.",
    cards: [
      {
        id: "site",
        name: "Website",
        badge: "Websites from R$ 499",
        featured: true,
        priceHeadline: "R$ 499",
        priceSubline: "via Pix · or R$ 590 by card in up to 3x of R$ 196.67 · + R$ 39/mo",
        laterPrice: "From Jan 1, 2027: R$ 990 (up to 3x) + R$ 39/mo",
        note: "You pay for the build once. The R$ 39/month covers the live site, the domain and technical support.",
        summary: "For local businesses that want to invest once in the build and keep a lean monthly fee.",
        features: [
          "One-page site with up to 6 sections and copy approved by you before publishing",
          ".com.br domain registered in your name and active HTTPS",
          "Google Business Profile reviewed and linked to the site",
          "3 rounds of adjustments before publishing",
          "Mobile layout and WhatsApp, Instagram and Maps buttons",
        ],
        ctaLabel: "Choose Website",
        whatsappMessage: "Hello! I saw the Async Studio pricing page and I am interested in the Website package (R$ 499 via Pix or R$ 590 by card in up to 3x + R$ 39/month).",
        schema: {
          name: "One-page website for small businesses",
          description:
            "One-page site with up to 6 sections, .com.br domain in the client's name, reviewed Google Business Profile, mobile layout and 3 rounds of adjustments before publishing, plus R$ 39.00/month for the live site, domain and technical support.",
          offers: [
            {
              name: "Website — Pix (launch promotion)",
              price: "499.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 499.00 via Pix until 2026-12-31 + R$ 39.00/month for hosting, domain and support",
            },
            {
              name: "Website — card in up to 3x (launch promotion)",
              price: "590.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 590.00 by card in up to 3 installments of R$ 196.67 until 2026-12-31 + R$ 39.00/month",
            },
            {
              name: "Website — regular price from 2027-01-01",
              price: "990.00",
              validFrom: "2027-01-01",
              description: "R$ 990.00 (up to 3x) from 2027-01-01 + R$ 39.00/month",
            },
          ],
        },
      },
      {
        id: "presenca",
        name: "Presença",
        priceHeadline: "R$ 99",
        priceSubline: "setup + R$ 79/mo · 12-month term, no cancellation fee",
        laterPrice: "From Jan 1, 2027: R$ 390 setup + R$ 99/mo",
        note: "From month 13, it stays at R$ 79/month with the adjustments or drops to R$ 39/month with the site live only. The setup fee is non-refundable.",
        summary: "For those who prefer a small upfront cost and monthly follow-up.",
        features: [
          "The same one-page site with up to 6 sections, .com.br domain in your name and reviewed Google Business Profile",
          "2 adjustments per month of up to 30 minutes each",
          "3 rounds of adjustments before publishing",
          "Cancellation without a fee, with 30 days' notice",
          "You receive the site as a ZIP file and the domain is already yours",
        ],
        ctaLabel: "Choose Presença",
        whatsappMessage: "Hello! I saw the Async Studio pricing page and I am interested in the Presença package (R$ 99 setup + R$ 79/month for 12 months).",
        schema: {
          name: "Presença — one-page website with 2 adjustments per month",
          description:
            "One-page site with up to 6 sections, .com.br domain in the client's name, reviewed Google Business Profile and 2 adjustments per month of up to 30 minutes. 12-month term with no cancellation fee, with 30 days' notice.",
          offers: [
            {
              name: "Presença — setup (launch promotion)",
              price: "99.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 99.00 setup until 2026-12-31 + R$ 79.00/month (12 months, no fee, 30 days' notice)",
            },
            {
              name: "Presença — regular price from 2027-01-01",
              price: "390.00",
              validFrom: "2027-01-01",
              description: "R$ 390.00 setup from 2027-01-01 + R$ 99.00/month (12 months, no fee, 30 days' notice)",
            },
          ],
        },
      },
      {
        id: "loja",
        name: "Complete Storefront",
        priceHeadline: "R$ 999",
        priceSubline: "via Pix · or R$ 1,190 by card in up to 3x of R$ 396.67 · + R$ 39/mo",
        laterPrice: "From Jan 1, 2027: R$ 1,490 + R$ 39/mo",
        note: "Delivery in up to 10 business days after preview approval and receipt of your products.",
        summary: "For shops that want an online storefront with filters and structured WhatsApp orders.",
        features: [
          "Online storefront on your .com.br domain with search, categories and product filters",
          "3-step order sent organized to your WhatsApp",
          "Frequently asked questions page",
          "Mobile layout, reviewed Google Business Profile and 3 rounds of adjustments before publishing",
        ],
        ctaLabel: "Choose Complete Storefront",
        whatsappMessage: "Hello! I saw the Async Studio pricing page and would like details about the Complete Storefront (R$ 999 via Pix or R$ 1,190 by card + R$ 39/month).",
        schema: {
          name: "Complete Storefront — filterable catalog with WhatsApp ordering",
          description:
            "Online storefront with search, categories and filters, a 3-step order sent through WhatsApp and a FAQ page, plus R$ 39.00/month for hosting, domain and support.",
          offers: [
            {
              name: "Complete Storefront — Pix (launch promotion)",
              price: "999.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 999.00 via Pix until 2026-12-31 + R$ 39.00/month",
            },
            {
              name: "Complete Storefront — card in up to 3x (launch promotion)",
              price: "1190.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 1,190.00 by card in up to 3 installments of R$ 396.67 until 2026-12-31 + R$ 39.00/month",
            },
            {
              name: "Complete Storefront — regular price from 2027-01-01",
              price: "1490.00",
              validFrom: "2027-01-01",
              description: "R$ 1,490.00 from 2027-01-01 + R$ 39.00/month",
            },
          ],
        },
      },
      {
        id: "loja-bizmanager",
        name: "Complete Storefront + BizManager",
        priceHeadline: "R$ 699",
        priceSubline: "via Pix · or R$ 790 by card in up to 3x of R$ 263.33 · + R$ 39/mo",
        laterPrice: "From Jan 1, 2027: R$ 990 + R$ 39/mo",
        note: "BizManager has a 30-day free trial, no card required, then costs from R$ 29.90/month. It stays active for 6 months; cancelling earlier means a R$ 300 difference.",
        summary: "The same storefront together with the management system: sales, inventory, finances and customers in one place.",
        features: [
          "Everything in the Complete Storefront, at a lower price when hired with BizManager",
          "BizManager with 30 days free, no card required, then from R$ 29.90/month",
          "BizManager active for 6 months; cancelling earlier means a R$ 300 difference",
          "Inventory and sales organized in the same system as the storefront",
        ],
        ctaLabel: "Choose Storefront + BizManager",
        whatsappMessage: "Hello! I saw the Async Studio pricing page and would like details about the Complete Storefront + BizManager (R$ 699 via Pix or R$ 790 by card + R$ 39/month).",
        schema: {
          name: "Complete Storefront + BizManager",
          description:
            "Complete Storefront with WhatsApp ordering, hired together with BizManager (30-day free trial, no card; then from R$ 29.90/month, active for 6 months), plus R$ 39.00/month for hosting, domain and support.",
          offers: [
            {
              name: "Complete Storefront + BizManager — Pix (launch promotion)",
              price: "699.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 699.00 via Pix until 2026-12-31 + R$ 39.00/month; BizManager active for 6 months, from R$ 29.90/month after 30 free days",
            },
            {
              name: "Complete Storefront + BizManager — card in up to 3x (launch promotion)",
              price: "790.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 790.00 by card in up to 3 installments of R$ 263.33 until 2026-12-31 + R$ 39.00/month; BizManager active for 6 months",
            },
            {
              name: "Complete Storefront + BizManager — regular price from 2027-01-01",
              price: "990.00",
              validFrom: "2027-01-01",
              description: "R$ 990.00 from 2027-01-01 + R$ 39.00/month; BizManager active for 6 months",
            },
          ],
        },
      },
    ],
    tableEyebrow: "Comparison",
    tableTitle: "All prices side by side",
    tableDescription:
      "Launch promotional prices, valid until Dec 31, 2026. Each offer also shows what applies from Jan 1, 2027.",
    tableCaption: "Launch promotional prices until Dec 31, 2026, in Brazilian reais",
    tableHeaders: {
      offer: "Offer",
      pix: "Pix",
      card: "Card, up to 3x",
      monthly: "Monthly",
      includes: "What is included",
      from2027: "From Jan 1, 2027",
    },
    tableRows: [
      {
        id: "site",
        offer: "Website",
        detail: "One page, up to 6 sections",
        pix: "R$ 499",
        card: "R$ 590 (3x R$ 196.67)",
        monthly: "+ R$ 39/month",
        includes:
          ".com.br domain in the client's name, reviewed Google Business Profile and 3 rounds of adjustments before publishing. The R$ 39 covers the live site, domain and technical support.",
        from2027: "R$ 990 (up to 3x) + R$ 39/month",
      },
      {
        id: "presenca",
        offer: "Presença",
        detail: "12 months, no cancellation fee",
        pix: "R$ 99 setup",
        card: "—",
        monthly: "R$ 79/month",
        includes:
          "The same site, plus 2 adjustments per month of up to 30 minutes. From month 13 it stays at R$ 79 with the adjustments or drops to R$ 39 with the site live only.",
        from2027: "R$ 390 setup + R$ 99/month",
      },
      {
        id: "loja",
        offer: "Complete Storefront",
        detail: "Catalog with WhatsApp ordering",
        pix: "R$ 999",
        card: "R$ 1,190 (3x R$ 396.67)",
        monthly: "+ R$ 39/month",
        includes: "Storefront with filters, 3-step WhatsApp order, FAQ page and delivery in 10 business days.",
        from2027: "R$ 1,490 + R$ 39/month",
      },
      {
        id: "loja-bizmanager",
        offer: "Complete Storefront + BizManager",
        detail: "Storefront and management system",
        pix: "R$ 699",
        card: "R$ 790 (3x R$ 263.33)",
        monthly: "+ R$ 39/month",
        includes:
          "The same storefront, with BizManager active for 6 months (R$ 300 difference if cancelled earlier). BizManager from R$ 29.90/month after 30 free days, no card required.",
        from2027: "R$ 990 + R$ 39/month",
      },
    ],
    extrasTitle: "Standalone services",
    extras: [
      {
        id: "perfil-google",
        title: "Standalone Google Business Profile: R$ 149",
        text: "Setup and review of your Google Business Profile. Launch price until Dec 31, 2026; R$ 190 from Jan 1, 2027. The amount is deducted if you hire a website within 30 days.",
        schema: {
          name: "Google Business Profile — standalone setup and review",
          description: "Setup and review of a Google Business Profile, sold without a website. Deducted if the client hires a website within 30 days.",
          offers: [
            {
              name: "Google Business Profile — launch promotion",
              price: "149.00",
              priceValidUntil: "2026-12-31",
              description: "R$ 149.00 until 2026-12-31",
            },
            {
              name: "Google Business Profile — regular price from 2027-01-01",
              price: "190.00",
              validFrom: "2027-01-01",
              description: "R$ 190.00 from 2027-01-01",
            },
          ],
        },
      },
      {
        id: "ajuste-extra",
        title: "Extra adjustment: R$ 49",
        text: "A text, photo or section change of up to 30 minutes, beyond the adjustments already included.",
        schema: {
          name: "Extra website adjustment",
          description: "A text, photo or section change of up to 30 minutes, beyond the adjustments included in the plan.",
          offers: [
            {
              name: "Extra adjustment of up to 30 minutes",
              price: "49.00",
              description: "R$ 49.00 per adjustment of up to 30 minutes",
            },
          ],
        },
      },
    ],
    tableFootnote:
      "Every offer includes 3 rounds of adjustments before publishing. To leave, give 30 days' notice: no fee, you receive the site as a ZIP file and the domain is already yours.",
    scopeEyebrow: "Clear scope",
    scopeTitle: "What is included vs. what requires a custom quote",
    scopeDescription: "Clear boundaries upfront so you know exactly what fixed packages cover.",
    includedTitle: "Included in fixed one-page packages",
    includedItems: [
      "1 page with up to 6 sections (intro, services/products, photos, reviews, hours/area, contact)",
      "Direct buttons to WhatsApp, Instagram, Google Maps or BizManager storefront",
      "Mobile and desktop responsive layout with HTTPS",
      ".com.br domain registered under your name or company CNPJ",
      "Google Business Profile review for service-area accuracy",
      "Copy organized from your business details and published only after approval",
      "3 rounds of adjustments before publishing",
    ],
    customScopeTitle: "Quoted separately by scope",
    customScopeItems: [
      "Multi-page websites with separate landing pages per service or branch",
      "Full e-commerce checkout with in-site payment processing",
      "Customer login portals or custom authenticated dashboards",
      "Custom booking engines or database-backed workflows",
      "Blogs, additional languages or third-party ERP integrations",
      "Professional photography shoots or extensive copywriting campaigns",
    ],
    scopeFootnote:
      "Fixed prices apply to a one-page website (plus WhatsApp-order storefront on Complete Storefront). For larger systems or online payment checkouts, we quote after scoping your exact needs.",
    previewEyebrow: "Lower risk",
    previewTitle: "Free preview before paying: a starting point adapted to your taste",
    previewParagraphs: [
      "Before you pay anything, we prepare a working preview using your business info as a starting point.",
      "Colors, photos, copy and section order are adjusted to match your preferences, and the site only goes live on your .com.br domain after your approval.",
    ],
    deliveryTitle: "Turnaround",
    deliveryHighlight: "Up to 7 business days",
    deliveryDescription:
      "For the one-page site, counted after preview approval and receipt of final business details and images. The Complete Storefront takes up to 10 business days.",
    paymentTitle: "Payment methods",
    paymentHighlight: "Pix, boleto or credit card",
    paymentDescription:
      "Up to 3 interest-free card installments on the Website (R$ 590), Complete Storefront (R$ 1,190) and Storefront + BizManager (R$ 790), at launch promotional prices until Dec 31, 2026.",
    faqEyebrow: "FAQ",
    faqTitle: "Direct answers about pricing, cancellation, ownership and turnaround",
    faqDescription: "Common questions from small businesses in Brazil.",
    faq: [
      {
        question: "How much does a small-business website cost in Novo Hamburgo and Sapucaia do Sul?",
        answer:
          "Async Studio websites start at R$ 499 via Pix (or R$ 590 by card in up to 3x) + R$ 39/month, at launch promotional prices until Dec 31, 2026; from Jan 1, 2027 the Website is R$ 990 + R$ 39/month. Presença is R$ 99 setup + R$ 79/month for 12 months (R$ 390 + R$ 99/month from 2027). The Complete Storefront is R$ 999 via Pix or R$ 1,190 by card + R$ 39/month (R$ 1,490 from 2027), and R$ 699 via Pix or R$ 790 by card together with BizManager (R$ 990 from 2027).",
      },
      {
        question: "Is the .com.br domain registered in my name?",
        answer:
          "Yes. Your .com.br domain and Google Business Profile remain registered under your own name or company CNPJ.",
      },
      {
        question: "What if I want to cancel?",
        answer:
          "You can cancel with no fee by giving 30 days' notice. The domain is already yours and you receive the site as a ZIP file; because hosting is provided by Async Studio, the site leaves our hosting when the subscription ends.",
      },
      {
        question: "Do I have to pay before seeing the website?",
        answer:
          "No. We prepare a free preview first so you can review and adjust colors, text and layout before paying.",
      },
      {
        question: "How many adjustments can I request?",
        answer:
          "You get 3 rounds of adjustments before the site is published. On Presença, after publishing you get 2 adjustments per month of up to 30 minutes each; beyond that, an extra adjustment costs R$ 49 (up to 30 minutes).",
      },
      {
        question: "How long does delivery take?",
        answer:
          "The one-page site is ready in up to 7 business days after you approve the preview and send your final business information; the Complete Storefront takes up to 10 business days.",
      },
      {
        question: "Which payment methods are accepted?",
        answer:
          "We accept Pix, Brazilian bank slip (boleto) and credit cards. Cards can be split into up to 3 interest-free installments on the Website (R$ 590), Complete Storefront (R$ 1,190) and Storefront + BizManager (R$ 790), at launch promotional prices until Dec 31, 2026.",
      },
      {
        question: "Until when does the launch promotional price apply?",
        answer:
          "The promotional price applies to contracts closed by Dec 31, 2026. From Jan 1, 2027 the regular price list applies: Website R$ 990, Presença R$ 390 setup + R$ 99/month, Complete Storefront R$ 1,490 and Storefront + BizManager R$ 990, all with R$ 39/month hosting (except Presença).",
      },
      {
        question: "How much does it cost to set up a Google Business Profile?",
        answer:
          "The standalone Google Business Profile costs R$ 149 until Dec 31, 2026 (R$ 190 from Jan 1, 2027), and the amount is deducted if you hire a website within 30 days. In the website packages, the profile review is already included.",
      },
      {
        question: "Which cities does Async Studio serve?",
        answer:
          "We serve Sapucaia do Sul, Novo Hamburgo, São Leopoldo and Esteio (RS, Brazil) regionally, plus remote clients across Brazil, every day from 7am to 7pm.",
      },
    ],
    finalCtaTitle: "Want to see a free preview for your business?",
    finalCtaDescription:
      "Message us on WhatsApp with your business name and city, and we will prepare a tailored starting point.",
    finalCtaLabel: "Request free preview on WhatsApp",
    finalCtaNote: "Official WhatsApp: +55 51 99334-0586 · contato@asyncstudio.com.br · every day, 7am to 7pm",
    heroWhatsappMessage: "Hello, Async Studio! I saw your pricing page and would like to request a free website preview.",
    finalWhatsappMessage: "Hello, Async Studio! I would like to request a free website preview for my business.",
  },
};
