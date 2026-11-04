/**
 * Configuração do BizManager no site — o único lugar a mexer no lançamento.
 *
 * Para publicar como "disponível":
 *   1. Troque `defaultStatus` para "available" (ou defina NEXT_PUBLIC_BIZMANAGER_STATUS=available na hospedagem).
 *   2. Confira `defaultAppUrl` (ou NEXT_PUBLIC_BIZMANAGER_APP_URL).
 * Com "available", os botões levam ao cadastro do app; com "coming-soon", levam ao WhatsApp para entrar na lista de espera.
 * Os textos de cada estado ficam em `bizManager.launch` em src/content/pt.ts e en.ts.
 */

export type BizManagerLaunchStatus = "coming-soon" | "available";

export type BizManagerPlanId = "start" | "growth" | "scale";

export type BizManagerPlanPricing = {
  id: BizManagerPlanId;
  /** Valor da mensalidade no plano mensal (0 = grátis). */
  monthly: number;
  /** Total cobrado por ano no plano anual. */
  yearly: number;
  featured?: boolean;
};

const defaultStatus: BizManagerLaunchStatus = "available";
const defaultAppUrl = "https://bizmanager.asyncstudio.com.br";

function parseStatus(value?: string): BizManagerLaunchStatus | null {
  const status = value?.trim();
  return status === "available" || status === "coming-soon" ? status : null;
}

function parseOrigin(value?: string): string | null {
  const url = value?.trim();
  if (!url) return null;

  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
}

const appUrl = parseOrigin(process.env.NEXT_PUBLIC_BIZMANAGER_APP_URL) ?? defaultAppUrl;

export const bizManagerConfig = {
  status: parseStatus(process.env.NEXT_PUBLIC_BIZMANAGER_STATUS) ?? defaultStatus,
  appUrl,
  links: {
    signup: `${appUrl}/register`,
    login: `${appUrl}/login`,
    plans: `${appUrl}/plans`,
  },
  trialDays: 30,
  /** Espelha src/constants/plans.js do BizManager — atualize os dois juntos. */
  plans: [
    { id: "start", monthly: 29.9, yearly: 299 },
    { id: "growth", monthly: 49.9, yearly: 499, featured: true },
    { id: "scale", monthly: 79.9, yearly: 799 },
  ] as BizManagerPlanPricing[],
};

export const isBizManagerAvailable = bizManagerConfig.status === "available";
