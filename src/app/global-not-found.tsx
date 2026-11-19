import type { Metadata } from "next";
import "../styles/globals.css";
import { siteConfig } from "../config/site";
import { NotFoundView } from "../components/layout/NotFoundView";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: "404 — Async Studio",
  description: "O endereço acessado não existe neste site.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <NotFoundView />
      </body>
    </html>
  );
}
