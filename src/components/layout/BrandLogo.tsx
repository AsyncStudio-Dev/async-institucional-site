import Link from "next/link";
import Image from "next/image";
import { asyncIconTransparent } from "../../assets";

type BrandLogoProps = {
  to: string;
  inverted?: boolean;
};

export function BrandLogo({ to, inverted = false }: BrandLogoProps) {
  return (
    <Link href={to} className="inline-flex items-center gap-3" aria-label="Async Studio">
      <Image
        src={asyncIconTransparent}
        alt=""
        className="h-10 w-10 rounded-async object-contain"
      />
      <span className={`text-base font-bold ${inverted ? "text-white" : "text-async-ink"}`}>Async Studio</span>
    </Link>
  );
}
