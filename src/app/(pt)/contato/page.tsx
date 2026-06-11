import type { Metadata } from "next";
import { PageShell } from "../../../components/layout/PageShell";
import { getContent } from "../../../content";
import { createPageMetadata } from "../../../lib/metadata";
import { Contact } from "../../../views/Contact";

export const metadata: Metadata = createPageMetadata("pt", "contact");

export default function Page() {
  const content = getContent("pt");

  return (
    <PageShell content={content} page="contact">
      <Contact content={content} />
    </PageShell>
  );
}
