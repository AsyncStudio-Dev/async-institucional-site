import Link from "next/link";
import { Mark } from "../brand/Mark";

type BrandLogoProps = {
  to: string;
  inverted?: boolean;
};

export function BrandLogo({ to, inverted = false }: BrandLogoProps) {
  return (
    <Link href={to} className="inline-flex items-center gap-2.5" aria-label="Async Studio">
      <Mark className="h-8 w-8 text-async-green" />
      <span className={`font-display text-base font-semibold ${inverted ? "text-mint-white" : "text-text-primary"}`}>
        Async<span className="font-normal opacity-70"> Studio</span>
      </span>
    </Link>
  );
}
