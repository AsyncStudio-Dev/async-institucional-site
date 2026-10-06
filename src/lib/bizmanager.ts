import { bizManagerConfig, isBizManagerAvailable, type BizManagerPlanId } from "../config/bizmanager";
import type { Locale, SiteContent } from "../content/types";
import { createWhatsAppLink } from "../utils/whatsapp";

/** Botão do BizManager: aponta para o app (disponível) ou para o WhatsApp da lista de espera (em breve). */
export type BizManagerAction = {
  label: string;
  href: string;
  opensInNewTab: boolean;
};

const priceLocale: Record<Locale, string> = { pt: "pt-BR", en: "en-US" };

export function getBizManagerLaunchCopy(content: SiteContent) {
  return content.bizManager.launch[bizManagerConfig.status];
}

export function getBizManagerPrimaryAction(content: SiteContent): BizManagerAction {
  const label = getBizManagerLaunchCopy(content).primaryCta;

  if (isBizManagerAvailable) {
    return { label, href: bizManagerConfig.links.signup, opensInNewTab: false };
  }

  return { label, href: createWhatsAppLink(content.bizManager.whatsapp.waitlist), opensInNewTab: true };
}

export function getBizManagerPlanAction(content: SiteContent, planId: BizManagerPlanId): BizManagerAction {
  const copy = getBizManagerLaunchCopy(content);
  const planName = content.bizManager.pricing.plans[planId].name;

  if (isBizManagerAvailable) {
    return planId === "start"
      ? { label: copy.primaryCta, href: bizManagerConfig.links.signup, opensInNewTab: false }
      : { label: copy.planCta, href: bizManagerConfig.links.plans, opensInNewTab: false };
  }

  const message = fillTemplate(content.bizManager.whatsapp.waitlistPlan, { plan: planName });
  return { label: copy.planCta, href: createWhatsAppLink(message), opensInNewTab: true };
}

export function getBizManagerLoginAction(content: SiteContent): BizManagerAction | null {
  if (!isBizManagerAvailable) return null;
  return { label: content.bizManager.loginCta, href: bizManagerConfig.links.login, opensInNewTab: false };
}

export function formatBizManagerPrice(locale: Locale, amount: number) {
  return new Intl.NumberFormat(priceLocale[locale], { style: "currency", currency: "BRL" }).format(amount);
}

/** Menor mensalidade paga, para chamadas como "Planos a partir de R$ 39,90/mês". */
export function getBizManagerStartingPrice() {
  return Math.min(...bizManagerConfig.plans.filter((plan) => plan.monthly > 0).map((plan) => plan.monthly));
}

/** Troca marcadores "{chave}" pelos valores informados. */
export function fillTemplate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
