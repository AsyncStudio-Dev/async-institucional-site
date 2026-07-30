import type { Metadata } from "next";
import { PageShell } from "../../../components/layout/PageShell";
import { getContent } from "../../../content";
import { createPageMetadata } from "../../../lib/metadata";
import { Legal } from "../../../views/Legal";

export const metadata: Metadata = createPageMetadata("en", "privacy");

export default function Page() {
  const content = getContent("en");

  return (
    <PageShell content={content} page="privacy">
      <Legal document={content.legal.privacy} updatedLabel="Last updated on" />
    </PageShell>
  );
}
