import type { PropsWithChildren } from "react";
import type { PageKey, SiteContent } from "../../content/types";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = PropsWithChildren<{
  content: SiteContent;
  page: PageKey;
}>;

export function PageShell({ content, page, children }: PageShellProps) {
  return (
    <>
      <Header content={content} page={page} />
      <main>{children}</main>
      <Footer content={content} />
    </>
  );
}
