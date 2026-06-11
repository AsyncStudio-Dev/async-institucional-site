import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "../../styles/globals.css";
import { RootDocument, rootMetadata } from "../../components/layout/RootDocument";

export const metadata: Metadata = rootMetadata;

export default function PtRootLayout({ children }: PropsWithChildren) {
  return <RootDocument lang="pt-BR">{children}</RootDocument>;
}
