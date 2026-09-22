# Async Studio — Landing Page

Website institucional bilíngue (PT/EN) da Async Studio, construído com Next.js App Router, React, TypeScript e Tailwind CSS. Design minimalista inspirado na Apple, usando o design system próprio da Async (cores, tipografia e componentes documentados como um Design System da Claude).

## Comandos

```bash
npm install
npm run dev          # servidor de desenvolvimento (http://localhost:3000)
npm run build        # build de produção
npm run start        # serve o build de produção
npm run lint         # eslint
npm run type-check   # checagem de tipos (tsc --noEmit)
npm test             # smoke test das rotas (scripts/check-routes.mjs)
```

## Design system

- **Cores**: `deep-forest` (fundo escuro), `mint-white`, `async-green` (cor de ação/CTA), `light-mint` (hover), `sage-gray` (texto secundário).
- **Tipografia**: Geist (display/botões), Inter (corpo de texto), JetBrains Mono (labels/eyebrows).
- **Radius**: `sm` 10px (botões/inputs), `md` 14px (cards), `lg` 20px (modais).
- **Princípios**: um CTA preenchido por seção (o resto em contorno), listas agrupadas com divisores em vez de pilhas de cards repetidos, largura de conteúdo consistente entre páginas (`max-w-7xl`).

## Estrutura

- `src/app`: rotas do Next.js App Router — grupo `(pt)` para português, `en` para inglês.
- `src/views`: componentes de página reutilizados pelas rotas (`Home`, `Services`, `Projects`, `About`, `Contact`, `Legal`).
- `src/components/ui`: componentes de interface (`Button`, `Card`, `ServiceRow`, `CTAWhatsApp`, `Reveal`, etc.).
- `src/components/layout`: header, footer, menu mobile.
- `src/components/brand`: marca (`AsyncFlow`, `Mark`).
- `src/content`: textos em português e inglês.
- `src/assets`: fontes, imagens e marca importadas pela aplicação.
- `public/images/projects`: screenshots dos projetos exibidos em `/projetos`.

## Páginas

| Rota (PT) | Rota (EN) | Conteúdo |
|---|---|---|
| `/` | `/en` | Hero, destaque de serviços, teaser do BizManager, teaser Sobre, CTA de contato |
| `/servicos` | `/en/services` | Hero + lista compacta dos 7 serviços + CTA final |
| `/projetos` | `/en/projects` | Vitrine do BizManager (carrossel de telas reais) + seção "Outros projetos" (Async Hub CRM, Encaixe) |
| `/sobre` | `/en/about` | História, fundadores, diferenciais, processo, CTA final |
| `/contato` | `/en/contact` | WhatsApp, e-mail, Instagram, dados da empresa |
| `/privacidade`, `/termos` | `/en/privacy`, `/en/terms` | Páginas legais |

## Projetos exibidos

A página `/projetos` mostra produtos autorais da Async Studio, usados como laboratório de arquitetura e interface antes de aplicar essa base em projetos de clientes:

- **BizManager** — plataforma de gestão para MEIs e pequenos negócios (destaque, com carrossel de telas reais).
- **Async Hub CRM** — CRM multi-tenant para centralizar conversas de Instagram/WhatsApp (em validação).
- **Encaixe** — sistema de agendamentos com vitrine pública de reserva (em desenvolvimento).

## Pendências

- Informar domínio oficial (`NEXT_PUBLIC_SITE_DOMAIN`) antes de publicar.
- Revisar copy final em inglês antes da publicação definitiva.
