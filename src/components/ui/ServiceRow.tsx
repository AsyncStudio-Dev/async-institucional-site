"use client";

import { useEffect, useId, useState } from "react";
import type { SiteContent } from "../../content/types";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { Button } from "./Button";

type Service = SiteContent["services"][number];

type ServiceRowProps = {
  service: Service;
  index: number;
  labels: SiteContent["ui"]["serviceCard"];
  className?: string;
};

const HIGHLIGHT_DURATION_MS = 2000;

/**
 * Serviço em formato acordeão: título e resumo sempre visíveis, detalhes
 * (para quem, o que resolve, o que entregamos) ao expandir. Quando é o alvo
 * de um link âncora (ex.: /servicos#automacoes-internas vindo do footer ou da
 * Home), abre sozinho e se destaca por instantes. O destaque fica em estado
 * React (não em mutação direta do DOM) porque o `Reveal` que envolve a lista
 * re-renderiza ao entrar na viewport — exatamente quando o salto de âncora
 * acontece — e uma classe adicionada via classList seria descartada.
 */
export function ServiceRow({ service, index, labels, className = "" }: ServiceRowProps) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (window.location.hash.slice(1) !== service.slug) return;
    setOpen(true);
    setHighlighted(true);
    const timeout = setTimeout(() => setHighlighted(false), HIGHLIGHT_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [service.slug]);

  const message = labels.messageTemplate.replace("{serviceTitle}", service.title);

  return (
    <div
      id={service.slug}
      className={`transition-colors duration-[1400ms] ${highlighted ? "bg-surface-soft" : "bg-transparent"} ${className}`}
    >
      <button
        type="button"
        className="group flex w-full items-start gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-async-green sm:p-6"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="font-mono-brand mt-1 text-sm text-[#15803d]">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1">
          <span className="font-display block text-lg font-semibold text-text-primary">{service.title}</span>
          <span className="mt-1.5 block text-sm leading-6 text-text-secondary">{service.summary}</span>
        </span>
        <span
          aria-hidden="true"
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg leading-none transition-[transform,border-color,color] duration-300 ${
            open ? "rotate-45 border-async-green text-async-green" : "border-border text-text-secondary group-hover:border-async-green group-hover:text-async-green"
          }`}
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden" {...(open ? {} : { "aria-hidden": true })}>
          <div className="grid gap-3 px-5 pb-6 pl-[3.25rem] text-sm leading-6 text-text-secondary sm:px-6 sm:pl-[3.75rem]">
            <p>
              <strong className="text-text-primary">{labels.audience}:</strong> {service.audience}
            </p>
            <p>
              <strong className="text-text-primary">{labels.problem}:</strong> {service.problem}
            </p>
            <p>
              <strong className="text-text-primary">{labels.delivery}:</strong> {service.delivery}
            </p>
            <Button
              className="mt-2 w-full sm:w-fit"
              variant="secondary"
              href={createWhatsAppLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? undefined : -1}
            >
              {service.cta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
