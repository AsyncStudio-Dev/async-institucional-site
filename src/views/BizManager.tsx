import Image from "next/image";
import { bizManagerConfig } from "../config/bizmanager";
import { bizManagerImages } from "../content/bizmanagerImages";
import type { SiteContent } from "../content/types";
import {
  getBizManagerLaunchCopy,
  getBizManagerLoginAction,
  getBizManagerPlanAction,
  getBizManagerPrimaryAction,
} from "../lib/bizmanager";
import { createWhatsAppLink } from "../utils/whatsapp";
import { AsyncFlow } from "../components/brand/AsyncFlow";
import { BizManagerActionButton } from "../components/ui/BizManagerActionButton";
import { BizManagerPricing } from "../components/ui/BizManagerPricing";
import { BizManagerStatusBadge } from "../components/ui/BizManagerStatusBadge";
import { Button } from "../components/ui/Button";
import { CheckIcon } from "../components/ui/CheckIcon";
import { FinalCTA } from "../components/ui/FinalCTA";
import { ProductScreenshot } from "../components/ui/ProductScreenshot";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";

type BizManagerProps = {
  content: SiteContent;
};

const PRICING_ANCHOR = "planos";

export function BizManager({ content }: BizManagerProps) {
  const biz = content.bizManager;
  const launch = getBizManagerLaunchCopy(content);
  const primaryAction = getBizManagerPrimaryAction(content);
  const loginAction = getBizManagerLoginAction(content);
  const pricingPlans = bizManagerConfig.plans.map((pricing) => ({ pricing, action: getBizManagerPlanAction(content, pricing.id) }));

  return (
    <>
      {/* Hero — Deep Forest, com a captura do painel */}
      <section data-header-theme="dark" className="relative overflow-hidden bg-deep-forest">
        <AsyncFlow variant="hero" className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] w-full opacity-70 md:h-[34rem]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Image
              src={bizManagerImages.lockupOnDark.src}
              alt={biz.name}
              width={bizManagerImages.lockupOnDark.width}
              height={bizManagerImages.lockupOnDark.height}
              priority
              unoptimized
              className="hero-enter h-8 w-auto md:h-10"
            />
            <BizManagerStatusBadge content={content} tone="dark" className="hero-enter mt-7" />
            <h1
              className="hero-enter font-display mt-5 text-4xl font-bold leading-[1.1] text-mint-white md:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              {biz.headline}
            </h1>
            <p className="hero-enter mt-6 max-w-2xl text-base leading-7 text-mint-white/70 md:text-lg md:leading-8" style={{ animationDelay: "240ms" }}>
              {biz.summary}
            </p>
            <div className="hero-enter mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: "360ms" }}>
              <BizManagerActionButton action={primaryAction} size="large" />
              <Button variant="secondary" tone="dark" size="large" href={`#${PRICING_ANCHOR}`}>
                {biz.pricingCta}
              </Button>
            </div>
            <p className="hero-enter mt-4 text-sm text-mint-white/55" style={{ animationDelay: "420ms" }}>
              {launch.note}
              {loginAction ? (
                <>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <a className="underline underline-offset-2 hover:text-mint-white" href={loginAction.href}>
                    {loginAction.label}
                  </a>
                </>
              ) : null}
            </p>
          </div>

          <div className="hero-enter relative mx-auto mt-14 max-w-5xl md:mt-16" style={{ animationDelay: "480ms" }}>
            <ProductScreenshot image={biz.heroImage} tone="dark" priority sizes="(min-width: 1024px) 64rem, 100vw" />
            <ProductScreenshot
              image={biz.heroMobileImage}
              variant="mobile"
              tone="dark"
              sizes="12rem"
              className="absolute -bottom-8 -right-3 hidden w-40 md:block lg:-right-10 lg:w-48"
            />
          </div>
        </div>
      </section>

      {/* Destaques */}
      <Section spacing="page-top" className="!pb-0 md:!pb-0">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border lg:grid-cols-4">
          {biz.highlights.map((highlight) => (
            <div key={highlight.value} className="bg-white p-5 md:p-7">
              <dt className="font-display text-2xl font-bold text-text-primary md:text-3xl">{highlight.value}</dt>
              <dd className="mt-1.5 text-sm leading-6 text-text-secondary">{highlight.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Funcionalidades, uma por linha, alternando o lado da imagem */}
      <Section>
        <Reveal>
          <SectionTitle eyebrow={biz.featuresEyebrow} title={biz.featuresTitle} description={biz.featuresDescription} className="mb-14 md:mb-20" />
        </Reveal>
        <div className="space-y-20 md:space-y-28">
          {biz.features.map((feature, index) => {
            const imageFirst = index % 2 === 1;
            return (
              <div key={feature.slug} id={feature.slug} className="grid scroll-mt-28 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                <Reveal className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : ""}`}>
                  <p className="eyebrow text-async-green">{feature.eyebrow}</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold leading-tight text-text-primary md:text-3xl">{feature.title}</h3>
                  <p className="mt-4 text-base leading-7 text-text-secondary">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-sm leading-6 text-text-primary md:text-[15px]">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-async-green" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delayMs={100} className={`lg:col-span-7 ${imageFirst ? "lg:order-1" : ""}`}>
                  <ProductScreenshot image={feature.image} sizes="(min-width: 1024px) 56vw, 100vw" />
                </Reveal>
              </div>
            );
          })}
        </div>
      </Section>

      {/* No celular */}
      <Section tone="dark" containerClassName="grid gap-12 lg:grid-cols-2 lg:items-center">
        <AsyncFlow variant="divider" className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full md:h-16" />
        <Reveal>
          <p className="eyebrow text-async-green">{biz.mobile.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-mint-white md:text-4xl">{biz.mobile.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-mint-white/70">{biz.mobile.description}</p>
        </Reveal>
        <Reveal delayMs={120} className="mx-auto grid w-full max-w-md grid-cols-2 items-start gap-4 sm:gap-6">
          {biz.mobile.images.map((image, index) => (
            <ProductScreenshot key={image.src} image={image} variant="mobile" tone="dark" sizes="(min-width: 640px) 14rem, 45vw" className={index === 1 ? "mt-10" : ""} />
          ))}
        </Reveal>
      </Section>

      {/* Para quem é */}
      <Section>
        <Reveal>
          <SectionTitle eyebrow={biz.audience.eyebrow} title={biz.audience.title} description={biz.audience.description} />
        </Reveal>
        <Reveal delayMs={80}>
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
            {biz.audience.items.map((item) => (
              <li key={item} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Planos */}
      <Section tone="surface" id={PRICING_ANCHOR} className="scroll-mt-16">
        <Reveal>
          <SectionTitle eyebrow={biz.pricing.eyebrow} title={biz.pricing.title} description={biz.pricing.description} />
        </Reveal>
        <BizManagerPricing
          locale={content.locale}
          labels={biz.pricing}
          plans={pricingPlans}
          trialDays={bizManagerConfig.trialDays}
          note={launch.pricingNote}
        />
      </Section>

      {/* Perguntas frequentes */}
      <Section>
        <Reveal>
          <SectionTitle eyebrow={biz.faq.eyebrow} title={biz.faq.title} />
        </Reveal>
        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {biz.faq.items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base font-semibold text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green md:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span aria-hidden="true" className="text-xl font-normal text-async-green transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-8 text-base leading-7 text-text-secondary">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <FinalCTA
        content={content}
        eyebrow={biz.name}
        title={launch.finalCtaTitle}
        description={launch.finalCtaDescription}
        actions={
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <BizManagerActionButton action={primaryAction} size="large" />
            <Button variant="secondary" tone="dark" size="large" href={createWhatsAppLink(biz.whatsapp.questions)} target="_blank" rel="noopener noreferrer">
              {content.nav.cta}
            </Button>
          </div>
        }
        footnote={<p className="text-sm text-mint-white/50">{launch.note}</p>}
      />
    </>
  );
}
