"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function NotFoundView() {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsEnglish(window.location.pathname.startsWith("/en"));
    }
  }, []);

  const content = isEnglish
    ? {
        title: "Page not found",
        description: "The requested address does not exist on this website.",
        button: "Back to home",
        homePath: "/en",
      }
    : {
        title: "Página não encontrada",
        description: "O endereço acessado não existe neste site.",
        button: "Voltar ao início",
        homePath: "/",
      };

  return (
    <main className="flex min-h-screen items-center justify-center px-5 text-center">
      <div>
        <p className="eyebrow text-[#15803d]">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-text-primary">{content.title}</h1>
        <p className="mt-4 text-text-secondary">{content.description}</p>
        <Link
          href={content.homePath}
          className="mt-8 inline-flex rounded-sm bg-async-green px-5 py-3 text-sm font-semibold text-deep-forest"
        >
          {content.button}
        </Link>
      </div>
    </main>
  );
}
