import type { SiteContent } from "../../content/types";
import { getBizManagerLaunchCopy } from "../../lib/bizmanager";

type BizManagerStatusBadgeProps = {
  content: SiteContent;
  tone?: "light" | "dark";
  className?: string;
};

/** Selo "Lançamento em breve" / "Disponível agora", conforme src/config/bizmanager.ts. */
export function BizManagerStatusBadge({ content, tone = "light", className = "" }: BizManagerStatusBadgeProps) {
  const toneClass = tone === "dark" ? "border-border-dark text-mint-white/85" : "border-border bg-surface text-text-primary";

  return (
    <p className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${toneClass} ${className}`}>
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-async-green" aria-hidden="true" />
      {getBizManagerLaunchCopy(content).badge}
    </p>
  );
}
