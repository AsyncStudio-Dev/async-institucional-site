import Image from "next/image";
import { bizManagerDashboard, bizManagerTransparent } from "../../assets";
import type { SiteContent } from "../../content/types";

type ProjectPreviewProps = {
  content: SiteContent;
  tone?: "light" | "dark";
  eyebrow?: string;
  title?: string;
};

export function ProjectPreview({ content, tone = "light", eyebrow = "BizManager", title = "Dashboard" }: ProjectPreviewProps) {
  const isDark = tone === "dark";
  const accentClasses = [
    "bg-async-cyan",
    "bg-ice-glacier",
    "bg-async-lavender",
    "bg-async-frost",
  ];
  const shellClass = isDark
    ? "liquid-glass liquid-glass-showcase-dark shadow-[0_30px_65px_-15px_rgba(0,0,0,0.65)]"
    : "liquid-glass liquid-glass-quiet";
  const eyebrowClass = isDark ? "text-async-cyan" : "text-async-frost-dark";
  const titleClass = isDark ? "text-white" : "text-async-ink";
  const descriptionClass = isDark ? "text-white/70" : "text-async-graphite";
  const logoShellClass = isDark
    ? "border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),0_2px_6px_rgba(0,0,0,0.12)]"
    : "border-white/70 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_22px_rgba(10,13,18,0.07)]";
  const browserShellClass = isDark
    ? "border-white/[0.15] bg-[#07090e] shadow-[0_24px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(156,237,231,0.03)]"
    : "border-white/70 bg-async-ink shadow-[0_18px_44px_rgba(10,13,18,0.18)]";
  const browserBarClass = isDark
    ? "border-white/[0.06] bg-gradient-to-r from-[#0b0e14] via-[#10141e] to-[#0b0e14]"
    : "border-white/10 bg-gradient-to-r from-[#111827] to-[#182033]";
  const moduleCardClass = isDark
    ? "border-white/[0.04] bg-white/[0.015] shadow-none hover:bg-white/[0.04] hover:border-white/[0.08] transition duration-200"
    : "border-white/70 bg-white/[0.64] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_8px_18px_rgba(95,104,117,0.05)]";
  const moduleTitleClass = isDark ? "text-white/85" : "text-async-ink";
  const moduleLineClass = isDark ? "bg-white/[0.08]" : "bg-ice-blue/80";

  return (
    <div className="relative mx-auto w-full max-w-[31.5rem] lg:max-w-[32rem]">
      <div className={`${shellClass} rounded-2xl p-3.5 md:p-4`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${eyebrowClass}`}>
              {eyebrow}
            </p>
            <p className={`mt-1 text-2xl font-semibold leading-tight md:text-[1.65rem] ${titleClass}`}>{title}</p>
            <p className={`mt-2 max-w-sm text-xs leading-5 md:text-sm md:leading-5 ${descriptionClass}`}>
              {content.sections.bizManagerDescription}
            </p>
          </div>
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border md:h-14 md:w-14 ${logoShellClass}`}>
            <Image src={bizManagerTransparent} alt="" className="h-9 w-9 object-contain md:h-10 md:w-10" />
          </div>
        </div>

        <div className={`mt-4.5 overflow-hidden rounded-xl border ${browserShellClass}`}>
          <div className={`flex h-7 items-center justify-between border-b px-2.5 ${browserBarClass}`}>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff7a7a]" />
              <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
              <span className="h-2 w-2 rounded-full bg-async-cyan" />
            </div>
            <div className="h-1.5 w-20 rounded-full bg-white/[0.18]" />
          </div>
          <div className="bg-white">
            <Image
              src={bizManagerDashboard}
              alt={`${content.sections.bizManager} dashboard preview`}
              className="aspect-[16/8.25] w-full object-cover object-top"
              loading="lazy"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {content.bizManager.modules.slice(0, 4).map((module, index) => (
            <div
              key={module.title}
              className={`min-h-[3.25rem] rounded-lg border px-2.5 py-2 ${moduleCardClass}`}
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${accentClasses[index]}`} />
                <p className={`min-w-0 text-sm font-semibold ${moduleTitleClass}`}>{module.title}</p>
              </div>
              <div className="mt-2">
                <span className={`block h-1.5 w-3/4 rounded-full ${moduleLineClass}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
