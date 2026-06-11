import type { Metadata } from "next";
import { PageShell } from "../../components/layout/PageShell";
import { getContent } from "../../content";
import { createPageMetadata } from "../../lib/metadata";
import { Home } from "../../views/Home";

export const metadata: Metadata = createPageMetadata("en", "home");

export default function Page() {
  const content = getContent("en");

  return (
    <PageShell content={content} page="home">
      <Home content={content} />
    </PageShell>
  );
}
