import Link from "next/link";
import type { Locale, PageKey } from "../../content/types";
import { getAlternatePath } from "../../routes/paths";

type LanguageSwitcherProps = {
  locale: Locale;
  page: PageKey;
};

export function LanguageSwitcher({ locale, page }: LanguageSwitcherProps) {
  const targetLocale = locale === "pt" ? "EN" : "PT";

  return (
    <Link
      className="rounded-md border border-ice-mist bg-white/70 px-3 py-2 text-sm font-semibold text-async-ink hover:border-async-frost"
      href={getAlternatePath(locale, page)}
      aria-label={`Switch language to ${targetLocale}`}
    >
      {targetLocale}
    </Link>
  );
}
