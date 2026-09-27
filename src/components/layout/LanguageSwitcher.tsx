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
      className="rounded-sm border border-border px-3 py-2 text-sm font-semibold text-text-primary transition duration-200 hover:border-async-green group-data-[on-dark=true]/header:border-border-dark group-data-[on-dark=true]/header:text-mint-white group-data-[on-dark=true]/header:hover:border-async-green"
      href={getAlternatePath(locale, page)}
      aria-label={`Switch language to ${targetLocale}`}
    >
      {targetLocale}
    </Link>
  );
}
