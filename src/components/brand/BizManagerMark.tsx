import type { SVGProps } from "react";

/** Traço do símbolo do BizManager (fonte: BizManager/docs/brand, grade 48 × 48). */
const BIZMANAGER_MARK_PATH = "M12 8 V31 A8 8 0 1 0 20 23 C25.5 23 28 27.5 28 31 C28 35.5 31.5 39 36 39 C38 39 39.8 38.2 40.8 36.8";

type BizManagerMarkProps = SVGProps<SVGSVGElement>;

/** Símbolo do BizManager: "b" em traço contínuo. A cor vem de currentColor. */
export function BizManagerMark({ className, ...props }: BizManagerMarkProps) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
      <path d={BIZMANAGER_MARK_PATH} fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
