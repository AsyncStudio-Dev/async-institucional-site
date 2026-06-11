"use client";

import Image from "next/image";
import { useState } from "react";
import { GlassCard } from "./GlassCard";

export type BizManagerShowcaseSlide = {
  src: string;
  title: string;
  description: string;
  alt: string;
};

type BizManagerShowcaseProps = {
  slides: BizManagerShowcaseSlide[];
};

export function BizManagerShowcase({ slides }: BizManagerShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex] ?? slides[0];

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1));
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
  };

  if (!activeSlide) {
    return null;
  }

  return (
    <GlassCard className="flex flex-col overflow-hidden border-white/70 !p-0 shadow-[0_18px_44px_rgba(10,13,18,0.10)] lg:col-span-7">
      <div className="border-b border-white/40 bg-gradient-to-tr from-ice-white via-white to-ice-blue/30 p-3 sm:p-5 md:p-6">
        <div className="relative overflow-hidden rounded-xl border border-[#0A0D12]/10 bg-[#0A0D12] shadow-[0_20px_45px_rgba(10,13,18,0.18)]">
          <div className="flex h-8 items-center justify-between border-b border-white/[0.06] bg-[#0E121A] px-3 sm:h-9 sm:px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]/90" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]/90" />
            </div>
            <div className="hidden items-center justify-center rounded border border-white/[0.05] bg-[#0A0D12]/60 px-6 py-0.5 font-mono text-[10px] tracking-wide text-white/35 sm:flex">
              bizmanager.async.studio
            </div>
            <div className="flex items-center gap-1.5 opacity-30">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </div>

          <div className="bg-[#0A0D12] p-2 sm:p-3">
            <div className="relative aspect-[2048/1035] w-full overflow-hidden rounded-lg bg-[#0A0D12]">
              <Image
                key={activeSlide.src}
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                className="object-contain object-center transition-transform duration-700 ease-out"
                priority={activeIndex === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 border border-white/5" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.05]" />
            </div>
          </div>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0A0D12]/70 text-lg font-semibold text-white/90 shadow-[0_8px_24px_rgba(10,13,18,0.16)] transition hover:bg-[#111827]/90 focus:outline-none focus:ring-2 focus:ring-async-cyan/70"
            aria-label="Mostrar tela anterior"
          >
            {"<"}
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0A0D12]/70 text-lg font-semibold text-white/90 shadow-[0_8px_24px_rgba(10,13,18,0.16)] transition hover:bg-[#111827]/90 focus:outline-none focus:ring-2 focus:ring-async-cyan/70"
            aria-label="Mostrar proxima tela"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="bg-white/20 p-4 backdrop-blur-[2px] sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] text-async-frost-dark">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-xl font-semibold text-async-ink md:text-2xl">{activeSlide.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-async-graphite md:text-base">
              {activeSlide.description}
            </p>
          </div>

          <div className="flex items-center gap-2 md:pb-1" aria-label="Indicadores do carrossel">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-async-cyan/70 ${
                  index === activeIndex ? "w-8 bg-async-frost" : "w-2.5 bg-async-frost/25 hover:bg-async-frost/45"
                }`}
                aria-label={`Mostrar ${slide.title}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-async-cyan/70 ${
                index === activeIndex
                  ? "border-async-frost/30 bg-async-frost/10 text-async-frost-dark"
                  : "border-white/70 bg-white/45 text-async-graphite hover:border-ice-crystal/80 hover:bg-white/70"
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
