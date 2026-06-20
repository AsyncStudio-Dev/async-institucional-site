import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "../../config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

type RootDocumentProps = PropsWithChildren<{
  lang: "pt-BR" | "en";
}>;

export const rootMetadata = {
  applicationName: siteConfig.name,
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export function RootDocument({ lang, children }: RootDocumentProps) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
