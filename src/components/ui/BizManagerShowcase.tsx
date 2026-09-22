"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "./Card";

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

  const showPrevious = () => setActiveIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const showNext = () => setActiveIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  if (!activeSlide) return null;

  return (
    <Card className="flex flex-col overflow-hidden !p-0 lg:col-span-7">
      <div className="relative border-b border-border bg-surface p-3 sm:p-5">
        <div className="relative overflow-hidden rounded-sm border border-border">
          <div className="relative aspect-[2048/1035] w-full">
            <Image
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.alt}
              fill
              className="object-contain object-center"
              priority={activeIndex === 0}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-lg font-semibold text-text-primary shadow-card transition hover:border-async-green focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green"
          aria-label="Mostrar tela anterior"
        >
          {"<"}
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-lg font-semibold text-text-primary shadow-card transition hover:border-async-green focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green"
          aria-label="Mostrar proxima tela"
        >
          {">"}
        </button>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow text-async-green">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-2 text-xl font-semibold text-text-primary md:text-2xl">{activeSlide.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">{activeSlide.description}</p>
          </div>

          <div className="flex items-center gap-2 md:pb-1" aria-label="Indicadores do carrossel">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green ${
                  index === activeIndex ? "w-8 bg-async-green" : "w-2.5 bg-sage-gray/30 hover:bg-sage-gray/50"
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
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-async-green ${
                index === activeIndex
                  ? "border-async-green/40 bg-async-green/10 text-deep-forest"
                  : "border-border bg-white text-text-secondary hover:border-sage-gray/40"
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
