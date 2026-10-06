import Image from "next/image";
import type { BizManagerImage } from "../../content/types";

type ProductScreenshotProps = {
  image: BizManagerImage;
  variant?: "desktop" | "mobile";
  tone?: "light" | "dark";
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Captura de tela em moldura simples: borda suave e sombra mínima, sem efeitos de vidro. */
export function ProductScreenshot({
  image,
  variant = "desktop",
  tone = "light",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: ProductScreenshotProps) {
  const frameClass =
    tone === "dark" ? "border-light-mint/[0.14] bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.35)]" : "border-border bg-white shadow-card";
  const shapeClass = variant === "mobile" ? "rounded-[22px] p-1.5" : "rounded-md p-1.5 sm:p-2";
  const innerShapeClass = variant === "mobile" ? "rounded-[17px]" : "rounded-sm";

  return (
    <div className={`border ${frameClass} ${shapeClass} ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className={`h-auto w-full ${innerShapeClass}`}
      />
    </div>
  );
}
