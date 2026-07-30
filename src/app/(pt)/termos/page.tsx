import type { Metadata } from "next";
import { PageShell } from "../../../components/layout/PageShell";
import { getContent } from "../../../content";
import { createPageMetadata } from "../../../lib/metadata";
import { Legal } from "../../../views/Legal";

export const metadata: Metadata = createPageMetadata("pt", "terms");

export default function Page() {
  const content = getContent("pt");

  return (
    <PageShell content={content} page="terms">
      <Legal document={content.legal.terms} updatedLabel="Última atualização em" />
    </PageShell>
  );
}
