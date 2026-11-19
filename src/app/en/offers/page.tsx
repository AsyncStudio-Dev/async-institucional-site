import type { Metadata } from "next";
import { PageShell } from "../../../components/layout/PageShell";
import { getContent } from "../../../content";
import { createPageMetadata } from "../../../lib/metadata";
import { Offers } from "../../../views/Offers";

export const metadata: Metadata = createPageMetadata("en", "offers");

export default function Page() {
  const content = getContent("en");

  return (
    <PageShell content={content} page="offers">
      <Offers content={content} />
    </PageShell>
  );
}
