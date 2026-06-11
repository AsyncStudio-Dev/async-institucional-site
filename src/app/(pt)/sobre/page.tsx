import type { Metadata } from "next";
import { PageShell } from "../../../components/layout/PageShell";
import { getContent } from "../../../content";
import { createPageMetadata } from "../../../lib/metadata";
import { About } from "../../../views/About";

export const metadata: Metadata = createPageMetadata("pt", "about");

export default function Page() {
  const content = getContent("pt");

  return (
    <PageShell content={content} page="about">
      <About content={content} />
    </PageShell>
  );
}
