import Link from "next/link";
import { Mark } from "../brand/Mark";

type BrandLogoProps = {
  to: string;
  inverted?: boolean;
  /** Dentro do header: acompanha o fundo escuro/claro via data-on-dark. */
  adaptive?: boolean;
};

export function BrandLogo({ to, inverted = false, adaptive = false }: BrandLogoProps) {
  const textColor = inverted
    ? "text-mint-white"
    : `text-text-primary ${adaptive ? "transition-colors duration-300 group-data-[on-dark=true]/header:text-mint-white" : ""}`;

  return (
    <Link href={to} className="inline-flex shrink-0 items-center gap-2.5" aria-label="Async Studio">
      <Mark className="h-8 w-8 text-async-green" />
      <span className={`font-display whitespace-nowrap text-base font-semibold ${textColor}`}>
        Async<span className="font-normal opacity-70"> Studio</span>
      </span>
    </Link>
  );
}
