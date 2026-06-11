import type { Metadata } from "next";
import { PageShell } from "../../../components/layout/PageShell";
import { getContent } from "../../../content";
import { createPageMetadata } from "../../../lib/metadata";
import { Projects } from "../../../views/Projects";

export const metadata: Metadata = createPageMetadata("en", "projects");

export default function Page() {
  const content = getContent("en");

  return (
    <PageShell content={content} page="projects">
      <Projects content={content} />
    </PageShell>
  );
}
