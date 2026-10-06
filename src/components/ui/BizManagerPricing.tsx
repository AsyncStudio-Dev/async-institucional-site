"use client";

import { useState } from "react";
import type { BizManagerPlanPricing } from "../../config/bizmanager";
import type { BizManagerContent, Locale } from "../../content/types";
import { fillTemplate, formatBizManagerPrice, type BizManagerAction } from "../../lib/bizmanager";
import { BizManagerActionButton } from "./BizManagerActionButton";
import { CheckIcon } from "./CheckIcon";

type BillingCycle = "monthly" | "yearly";

type BizManagerPricingProps = {
  locale: Locale;
  labels: BizManagerContent["pricing"];
  plans: Array<{ pricing: BizManagerPlanPricing; action: BizManagerAction }>;
  trialDays: number;
  note: string;
};

export function BizManagerPricing({ locale, labels, plans, trialDays, note }: BizManagerPricingProps) {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const cycles: Array<{ value: BillingCycle; label: string }> = [
    { value: "monthly", label: labels.monthly },
    { value: "yearly", label: labels.yearly },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <div role="radiogroup" aria-label={`${labels.monthly} / ${labels.yearly}`} className="inline-flex rounded-sm border border-border bg-white p-1">
          {cycles.map((option) => {
            const isActive = option.value === cycle;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isActive}
                onClick={() => setCycle(option.value)}
                className={`flex min-h-10 items-center gap-2 rounded-[8px] px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green ${
                  isActive ? "bg-deep-forest text-mint-white" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {option.label}
                {option.value === "yearly" ? (
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${isActive ? "bg-async-green text-deep-forest" : "bg-surface-soft text-deep-forest"}`}>
                    {labels.yearlyBadge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {plans.map(({ pricing, action }) => {
          const plan = labels.plans[pricing.id];
          const isFree = pricing.monthly === 0;
          const monthlyAmount = cycle === "yearly" ? Math.round((pricing.yearly / 12) * 100) / 100 : pricing.monthly;
          const isFeatured = Boolean(pricing.featured);

          return (
            <article
              key={pricing.id}
              className={`relative flex flex-col rounded-md border bg-white p-6 md:p-7 ${
                isFeatured ? "border-async-green shadow-card-hover ring-1 ring-async-green" : "border-border shadow-card"
              }`}
            >
              {isFeatured ? (
                <span className="eyebrow absolute -top-3 left-6 rounded-full bg-async-green px-3 py-1 text-[11px] text-deep-forest">{labels.featured}</span>
              ) : null}
              <h3 className="font-display text-xl font-semibold text-text-primary">{plan.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-text-secondary">{plan.tagline}</p>

              <div className="mt-6 min-h-[4.75rem]">
                {isFree ? (
                  <p className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-text-primary">{labels.free}</span>
                    <span className="text-sm text-text-secondary">{fillTemplate(labels.trialLabel, { days: trialDays })}</span>
                  </p>
                ) : (
                  <>
                    <p className="flex items-baseline gap-1">
                      <span className="font-display text-4xl font-bold text-text-primary">{formatBizManagerPrice(locale, monthlyAmount)}</span>
                      <span className="text-sm text-text-secondary">{labels.perMonth}</span>
                    </p>
                    {cycle === "yearly" ? (
                      <p className="mt-1 text-xs text-text-secondary">
                        {fillTemplate(labels.billedYearly, { amount: formatBizManagerPrice(locale, pricing.yearly) })}
                      </p>
                    ) : null}
                  </>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm leading-6 text-text-secondary">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-async-green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <BizManagerActionButton action={action} variant={isFeatured ? "primary" : "secondary"} className="mt-7 w-full" />
            </article>
          );
        })}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-text-secondary">{note}</p>
    </div>
  );
}
