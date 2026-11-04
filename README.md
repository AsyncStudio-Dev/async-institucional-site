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
- `src/assets`: fontes e marca importadas pela aplicação.
- `src/config/bizmanager.ts`: status de lançamento, URL do app e preços do BizManager.
- `public/images/projects`: screenshots dos projetos exibidos em `/projetos`.

## Páginas

| Rota (PT) | Rota (EN) | Conteúdo |
|---|---|---|
| `/` | `/en` | Hero, destaque de serviços, teaser do BizManager, teaser Sobre, CTA de contato |
| `/bizmanager` | `/en/bizmanager` | Página do produto: hero, funcionalidades com telas, celular, público, planos (mensal/anual), FAQ e CTA |
| `/servicos` | `/en/services` | Hero + lista compacta dos 7 serviços + CTA final |
| `/projetos` | `/en/projects` | Vitrine do BizManager (carrossel de telas) + seção "Outros projetos" (Async Hub CRM, Encaixe) |
| `/sobre` | `/en/about` | História, fundadores, diferenciais, processo, CTA final |
| `/contato` | `/en/contact` | WhatsApp, e-mail, Instagram, dados da empresa |
| `/privacidade`, `/termos` | `/en/privacy`, `/en/terms` | Páginas legais |

## Projetos exibidos

A página `/projetos` mostra produtos autorais da Async Studio, usados como laboratório de arquitetura e interface antes de aplicar essa base em projetos de clientes:

- **BizManager** — plataforma de gestão para MEIs e pequenos negócios (destaque, com página própria em `/bizmanager`).
- **Async Hub CRM** — CRM multi-tenant para centralizar conversas de Instagram/WhatsApp (em validação).
- **Encaixe** — sistema de agendamentos com vitrine pública de reserva (em desenvolvimento).

## BizManager: lançamento e edição

O site mostra o BizManager em dois estados, definidos em `src/config/bizmanager.ts`:

| Estado | Selo | Botão principal | Botões dos planos |
|---|---|---|---|
| `coming-soon` | "Lançamento em breve" | WhatsApp para entrar na lista de espera | WhatsApp com o plano de interesse |
| `available` (padrão, desde o lançamento) | "Disponível agora" | Cadastro no app (`/register`) | Página de planos do app (`/plans`) e link "Já tenho conta" |

**O BizManager já foi lançado** e o padrão é `available`. Atenção: se a Vercel tiver `NEXT_PUBLIC_BIZMANAGER_STATUS` definida, ela sobrepõe o padrão. Para trocar de estado, basta uma das opções e um novo deploy:

1. Na hospedagem (Vercel), definir `NEXT_PUBLIC_BIZMANAGER_STATUS=available` (e, se mudar o domínio, `NEXT_PUBLIC_BIZMANAGER_APP_URL`); ou
2. Trocar `defaultStatus` em `src/config/bizmanager.ts`.

Para testar o estado antigo localmente: `NEXT_PUBLIC_BIZMANAGER_STATUS=coming-soon npm run dev`.

**Onde editar:**

- Textos (título, funcionalidades, planos, FAQ, mensagens de WhatsApp e os textos de cada estado em `launch`): bloco `bizManager` de `src/content/pt.ts` e `src/content/en.ts`.
- Preços e dias de teste: `plans` e `trialDays` em `src/config/bizmanager.ts` (espelham `src/constants/plans.js` do BizManager; atualize os dois juntos).
- Imagens: `public/images/projects/bizmanager/` e a lista em `src/content/bizmanagerImages.ts`. Para trocar uma tela, substitua o arquivo mantendo o nome (2400 × 1500 para desktop, 780 × 1688 para celular). As capturas são da loja de demonstração "Doce Ateliê", com dados fictícios.

## Pendências

- Informar domínio oficial (`NEXT_PUBLIC_SITE_DOMAIN`) antes de publicar.
- Revisar copy final em inglês antes da publicação definitiva.
- BizManager: confirmar domínio do app (`bizmanager.asyncstudio.com.br`) e trocar o status para `available` no lançamento.
