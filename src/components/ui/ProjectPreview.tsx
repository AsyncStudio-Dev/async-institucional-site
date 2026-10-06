import Image from "next/image";
import { BizManagerMark } from "../brand/BizManagerMark";
import type { SiteContent } from "../../content/types";

type ProjectPreviewProps = {
  content: SiteContent;
  tone?: "light" | "dark";
  eyebrow?: string;
  title?: string;
};

export function ProjectPreview({ content, tone = "light", eyebrow = "BizManager", title = "Dashboard" }: ProjectPreviewProps) {
  const isDark = tone === "dark";
  const shellClass = isDark ? "border-light-mint/[0.12] bg-white/[0.03]" : "border-border bg-white shadow-card";
  const eyebrowClass = isDark ? "text-light-mint" : "text-async-green";
  const titleClass = isDark ? "text-mint-white" : "text-text-primary";
  const descriptionClass = isDark ? "text-mint-white/70" : "text-text-secondary";
  const moduleCardClass = isDark ? "border-light-mint/[0.10] bg-white/[0.02]" : "border-border bg-surface";
  const moduleTitleClass = isDark ? "text-mint-white/85" : "text-text-primary";

  return (
    <div className="relative mx-auto w-full max-w-[31.5rem] lg:max-w-[32rem]">
      <div className={`rounded-md border p-4 ${shellClass}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p>
            <p className={`mt-1.5 text-2xl font-semibold leading-tight md:text-[1.65rem] font-display ${titleClass}`}>{title}</p>
            <p className={`mt-2 max-w-sm text-xs leading-5 md:text-sm ${descriptionClass}`}>
              {content.sections.bizManagerDescription}
            </p>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-deep-forest md:h-14 md:w-14">
            <BizManagerMark className="h-8 w-8 text-async-green md:h-9 md:w-9" />
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-sm border border-border">
          <Image
            src={content.bizManager.heroImage.src}
            alt={content.bizManager.heroImage.alt}
            width={content.bizManager.heroImage.width}
            height={content.bizManager.heroImage.height}
            className="aspect-[16/9] w-full object-cover object-top"
            sizes="(min-width: 1024px) 32rem, 100vw"
          />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {content.bizManager.modules.slice(0, 4).map((module) => (
            <div key={module.title} className={`min-h-[3.25rem] rounded-sm border px-2.5 py-2 ${moduleCardClass}`}>
              <p className={`text-sm font-semibold ${moduleTitleClass}`}>{module.title}</p>
              <span className={`mt-2 block h-1.5 w-3/4 rounded-full ${isDark ? "bg-white/[0.08]" : "bg-surface-soft"}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
