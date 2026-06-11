import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "../../styles/globals.css";
import { RootDocument, rootMetadata } from "../../components/layout/RootDocument";

export const metadata: Metadata = rootMetadata;

export default function EnRootLayout({ children }: PropsWithChildren) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
