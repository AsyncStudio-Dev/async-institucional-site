import type { PropsWithChildren } from "react";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "../../config/site";
import { Splash } from "../ui/Splash";

const geist = localFont({
  src: [
    { path: "../../assets/fonts/geist-sans/Geist-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../assets/fonts/geist-sans/Geist-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../assets/fonts/geist-sans/Geist-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../assets/fonts/geist-sans/Geist-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../../assets/fonts/inter/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../assets/fonts/inter/Inter-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [{ path: "../../assets/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

type RootDocumentProps = PropsWithChildren<{
  lang: "pt-BR" | "en";
}>;

export const rootMetadata = {
  applicationName: siteConfig.name,
  manifest: "/manifest.json",
};

const introGateScript = `
  try {
    if (sessionStorage.getItem("async-studio-intro-seen") !== "true") {
      document.documentElement.setAttribute("data-intro-pending", "true");
    }
  } catch (e) {}
`;

export function RootDocument({ lang, children }: RootDocumentProps) {
  return (
    <html
      lang={lang}
      className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <Script id="async-studio-intro-gate" strategy="beforeInteractive">
          {introGateScript}
        </Script>
        <Splash />
        <div id="page-root">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
