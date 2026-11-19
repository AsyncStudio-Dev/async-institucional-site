import { AsyncFlow } from "../components/brand/AsyncFlow";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CheckIcon } from "../components/ui/CheckIcon";
import { CTAWhatsApp } from "../components/ui/CTAWhatsApp";
import { FinalCTA } from "../components/ui/FinalCTA";
import { Reveal } from "../components/ui/Reveal";
import { Section } from "../components/ui/Section";
import { SectionTitle } from "../components/ui/SectionTitle";
import { siteConfig } from "../config/site";
import { offersContentByLocale } from "../content/offers";
import type { SiteContent } from "../content/types";
import { createWhatsAppLink } from "../utils/whatsapp";

type OffersProps = {
  content: SiteContent;
};

export function Offers({ content }: OffersProps) {
  const offers = offersContentByLocale[content.locale];
  const contact = siteConfig.contact;
  const serviceArea = content.locale === "en" ? siteConfig.company.serviceArea.formattedEn : siteConfig.company.serviceArea.formattedPt;

  return (
    <>
      {/* Hero escuro com H1 local claro */}
      <section data-header-theme="dark" className="relative overflow-hidden bg-deep-forest">
        <AsyncFlow variant="hero" className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] w-full opacity-85 md:h-[30rem]" />
        <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-28 text-center md:pb-24 md:pt-36">
          <p className="eyebrow text-async-green">{offers.eyebrow}</p>
          <h1 className="font-display mx-auto mt-5 max-w-4xl text-3xl font-bold leading-[1.12] text-mint-white md:text-5xl">
            {offers.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-mint-white/75 md:text-lg md:leading-8">
            {offers.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAWhatsApp content={content} label={offers.heroPrimaryCta} message={offers.heroWhatsappMessage} size="large" />
            <Button variant="secondary" tone="dark" href="#pacotes" size="large" withArrow={false}>
              {offers.heroSecondaryCta}
            </Button>
          </div>
          <p className="mt-5 text-sm text-mint-white/60">{offers.heroNote}</p>
        </div>
      </section>

      {/* Faixa da promoção de lançamento */}
      <div className="bg-async-green text-deep-forest">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-5 py-4 text-center md:flex-row md:justify-center md:gap-4">
          <p className="font-display text-base font-bold md:text-lg">{offers.promoTitle}</p>
          <p className="text-sm leading-6 md:text-[15px]">{offers.promoText}</p>
        </div>
      </div>

      {/* Ganhos antes dos itens */}
      <Section>
        <Reveal>
          <SectionTitle eyebrow={offers.gainsEyebrow} title={offers.gainsTitle} description={offers.gainsDescription} />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {offers.gains.map((gain, index) => (
            <Reveal key={gain.title} delayMs={index * 70}>
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-soft text-[#15803d]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text-primary">{gain.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-text-secondary md:text-[15px]">{gain.benefit}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Os 4 cartões de oferta */}
      <Section tone="surface" id="pacotes" className="scroll-mt-20">
        <Reveal>
          <SectionTitle eyebrow={offers.plansEyebrow} title={offers.plansTitle} description={offers.plansDescription} />
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:items-stretch">
          {offers.cards.map((card, index) => (
            <Reveal key={card.id} delayMs={index * 80} className="flex">
              <article
                className={`relative flex w-full flex-col rounded-md border bg-white p-6 md:p-7 ${
                  card.featured ? "border-async-green shadow-card-hover ring-1 ring-async-green" : "border-border shadow-card"
                }`}
              >
                {card.badge ? (
                  <span className="eyebrow absolute -top-3 left-6 whitespace-nowrap rounded-full bg-async-green px-3 py-1 text-[11px] font-semibold text-deep-forest">
                    {card.badge}
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-semibold text-text-primary">{card.name}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{card.summary}</p>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-3xl font-bold text-text-primary md:text-4xl">{card.priceHeadline}</p>
                  <p className="mt-1.5 text-sm font-medium text-text-primary">{card.priceSubline}</p>
                  <p className="mt-2 text-sm font-medium text-text-secondary">{card.laterPrice}</p>
                  <p className="mt-2.5 text-xs leading-5 text-text-secondary">{card.note}</p>
                </div>

                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm leading-6 text-text-secondary">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#15803d]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={createWhatsAppLink(card.whatsappMessage)}
                  variant={card.featured ? "primary" : "secondary"}
                  className="mt-7 w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {card.ctaLabel}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Tabela comparativa: tabela no desktop, cartões no celular */}
      <Section id="comparativo" className="scroll-mt-20">
        <Reveal>
          <SectionTitle eyebrow={offers.tableEyebrow} title={offers.tableTitle} description={offers.tableDescription} />
        </Reveal>

        <div className="hidden overflow-hidden rounded-md border border-border shadow-card lg:block">
          <table className="w-full border-collapse bg-white text-left text-sm">
            <caption className="sr-only">{offers.tableCaption}</caption>
            <thead className="bg-surface text-text-primary">
              <tr>
                <th scope="col" className="px-4 py-3 font-display font-semibold">{offers.tableHeaders.offer}</th>
                <th scope="col" className="px-4 py-3 font-display font-semibold">{offers.tableHeaders.pix}</th>
                <th scope="col" className="px-4 py-3 font-display font-semibold">{offers.tableHeaders.card}</th>
                <th scope="col" className="px-4 py-3 font-display font-semibold">{offers.tableHeaders.monthly}</th>
                <th scope="col" className="px-4 py-3 font-display font-semibold">{offers.tableHeaders.includes}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {offers.tableRows.map((row) => (
                <tr key={row.id} className="align-top">
                  <th scope="row" className="px-4 py-4 font-display font-semibold text-text-primary">
                    {row.offer}
                    <span className="mt-1 block text-xs font-normal leading-5 text-text-secondary">{row.detail}</span>
                    <span className="mt-2 block text-xs font-normal leading-5 text-text-secondary">
                      {offers.tableHeaders.from2027}: {row.from2027}
                    </span>
                  </th>
                  <td className="whitespace-nowrap px-4 py-4 font-display text-base font-semibold text-text-primary">{row.pix}</td>
                  <td className="px-4 py-4 text-text-primary">{row.card}</td>
                  <td className="whitespace-nowrap px-4 py-4 text-text-primary">{row.monthly}</td>
                  <td className="px-4 py-4 leading-6 text-text-secondary">{row.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 lg:hidden">
          {offers.tableRows.map((row) => (
            <li key={row.id}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-text-primary">{row.offer}</h3>
                <p className="mt-1 text-xs leading-5 text-text-secondary">{row.detail}</p>
                <dl className="mt-4 grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-x-3 gap-y-2 text-sm">
                  <dt className="text-text-secondary">{offers.tableHeaders.pix}</dt>
                  <dd className="font-semibold text-text-primary">{row.pix}</dd>
                  <dt className="text-text-secondary">{offers.tableHeaders.card}</dt>
                  <dd className="text-text-primary">{row.card}</dd>
                  <dt className="text-text-secondary">{offers.tableHeaders.monthly}</dt>
                  <dd className="text-text-primary">{row.monthly}</dd>
                  <dt className="text-text-secondary">{offers.tableHeaders.from2027}</dt>
                  <dd className="text-text-primary">{row.from2027}</dd>
                </dl>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-6 text-text-secondary">{row.includes}</p>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h3 className="font-display text-xl font-semibold text-text-primary">{offers.extrasTitle}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {offers.extras.map((extra) => (
              <Card key={extra.id} className="h-full bg-surface">
                <h4 className="font-display text-lg font-semibold text-text-primary">{extra.title}</h4>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{extra.text}</p>
              </Card>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-text-secondary md:text-[15px]">
          {offers.tableFootnote}
        </p>
      </Section>

      {/* O que está incluído e o que vira orçamento à parte */}
      <Section>
        <Reveal>
          <SectionTitle eyebrow={offers.scopeEyebrow} title={offers.scopeTitle} description={offers.scopeDescription} />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h3 className="font-display text-xl font-semibold text-text-primary">{offers.includedTitle}</h3>
              <ul className="mt-5 space-y-3">
                {offers.includedItems.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-text-secondary md:text-[15px]">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-[#15803d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delayMs={90}>
            <Card className="h-full bg-surface">
              <h3 className="font-display text-xl font-semibold text-text-primary">{offers.customScopeTitle}</h3>
              <ul className="mt-5 space-y-3">
                {offers.customScopeItems.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-text-secondary md:text-[15px]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-gray" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-text-secondary md:text-[15px]">
          {offers.scopeFootnote}
        </p>
      </Section>

      {/* Prévia grátis + Prazo + Pagamento */}
      <Section tone="dark" containerClassName="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <AsyncFlow variant="divider" className="pointer-events-none absolute inset-x-0 top-0 h-12 w-full md:h-16" />
        <Reveal>
          <p className="eyebrow text-async-green">{offers.previewEyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-mint-white md:text-4xl">
            {offers.previewTitle}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-mint-white/75">
            {offers.previewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-mint-white/60">{serviceArea}</p>
        </Reveal>
        <Reveal delayMs={100} className="grid gap-4">
          <Card tone="dark">
            <p className="eyebrow text-async-green">{offers.deliveryTitle}</p>
            <p className="font-display mt-2 text-2xl font-bold text-mint-white">{offers.deliveryHighlight}</p>
            <p className="mt-2 text-sm leading-6 text-mint-white/75">{offers.deliveryDescription}</p>
          </Card>
          <Card tone="dark">
            <p className="eyebrow text-async-green">{offers.paymentTitle}</p>
            <p className="font-display mt-2 text-2xl font-bold text-mint-white">{offers.paymentHighlight}</p>
            <p className="mt-2 text-sm leading-6 text-mint-white/75">{offers.paymentDescription}</p>
          </Card>
        </Reveal>
      </Section>

      {/* FAQ com respostas diretas na primeira frase (AEO/GEO) */}
      <Section>
        <Reveal>
          <SectionTitle eyebrow={offers.faqEyebrow} title={offers.faqTitle} description={offers.faqDescription} />
        </Reveal>
        <section aria-label={offers.faqTitle} className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {offers.faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base font-semibold text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green md:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span aria-hidden="true" className="text-xl font-normal text-[#15803d] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-8 text-base leading-7 text-text-secondary">{item.answer}</p>
            </details>
          ))}
        </section>
      </Section>

      <FinalCTA
        content={content}
        eyebrow={siteConfig.name}
        title={offers.finalCtaTitle}
        description={offers.finalCtaDescription}
        ctaLabel={offers.finalCtaLabel}
        message={offers.finalWhatsappMessage}
        footnote={
          <p className="text-sm text-mint-white/60">
            {offers.finalCtaNote}{" "}
            <span className="mx-1">·</span>
            <a className="underline underline-offset-2 hover:text-mint-white" href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
              {contact.instagram.handle}
            </a>
          </p>
        }
      />
    </>
  );
}
