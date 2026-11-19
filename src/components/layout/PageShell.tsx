import type { PropsWithChildren } from "react";
import type { PageKey, SiteContent } from "../../content/types";
import { buildPageJsonLd } from "../../lib/jsonld";
import { JsonLd } from "../seo/JsonLd";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = PropsWithChildren<{
  content: SiteContent;
  page: PageKey;
}>;

export function PageShell({ content, page, children }: PageShellProps) {
  const jsonLd = buildPageJsonLd(content, page);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header content={content} page={page} />
      <main>{children}</main>
      <Footer content={content} />
    </>
  );
}
