"use client";

import { useEffect, useState, type PropsWithChildren } from "react";

type ServiceRowProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

/**
 * Item de lista que se destaca por instantes quando é o alvo de um link
 * âncora (ex.: /servicos#automacoes-internas vindo do footer). O destaque
 * fica em estado React (não em mutação direta do DOM) porque o `Reveal` que
 * envolve a lista re-renderiza ao entrar na viewport — exatamente quando o
 * salto de âncora acontece — e uma classe adicionada via classList seria
 * descartada nesse re-render.
 */
export function ServiceRow({ id, className = "", children }: ServiceRowProps) {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if (window.location.hash.slice(1) !== id) return;
    setHighlighted(true);
    const timeout = setTimeout(() => setHighlighted(false), 2000);
    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div
      id={id}
      className={`transition-colors duration-[1400ms] ${highlighted ? "bg-light-mint" : "bg-transparent"} ${className}`}
    >
      {children}
    </div>
  );
}
