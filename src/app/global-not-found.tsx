"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function GlobalNotFound() {
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
        lang: "en",
      }
    : {
        title: "Página não encontrada",
        description: "O endereço acessado não existe neste site.",
        button: "Voltar ao início",
        homePath: "/",
        lang: "pt-BR",
      };

  return (
    <html lang={content.lang}>
      <body className={inter.className}>
        <main className="flex min-h-screen items-center justify-center px-5 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-async-frost">404</p>
            <h1 className="mt-3 text-4xl font-semibold text-async-ink">{content.title}</h1>
            <p className="mt-4 text-async-graphite">{content.description}</p>
            <Link
              href={content.homePath}
              className="mt-8 inline-flex rounded-async bg-async-frost px-5 py-3 text-sm font-semibold text-white shadow-frost"
            >
              {content.button}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
