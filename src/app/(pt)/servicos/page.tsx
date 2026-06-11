import type { Metadata } from "next";
import { PageShell } from "../../../components/layout/PageShell";
import { getContent } from "../../../content";
import { createPageMetadata } from "../../../lib/metadata";
import { Services } from "../../../views/Services";

export const metadata: Metadata = createPageMetadata("pt", "services");

export default function Page() {
  const content = getContent("pt");

  return (
    <PageShell content={content} page="services">
      <Services content={content} />
    </PageShell>
  );
}
