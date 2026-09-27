import type { PageKey, SiteContent } from "../../content/types";
import { getMainNavItems } from "../../routes/navigation";
import { localizedPaths } from "../../routes/paths";
import { CTAWhatsApp } from "../ui/CTAWhatsApp";
import { BrandLogo } from "./BrandLogo";
import { DesktopNav } from "./DesktopNav";
import { HeaderFrame } from "./HeaderFrame";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

type HeaderProps = {
  content: SiteContent;
  page: PageKey;
};

export function Header({ content, page }: HeaderProps) {
  const paths = localizedPaths[content.locale];
  const navItems = getMainNavItems(content);

  return (
    <HeaderFrame startsOverDark={page === "home"}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 transition-[padding] duration-300 group-data-[scrolled=true]/header:py-2.5">
        <BrandLogo to={paths.home} adaptive />
        <DesktopNav items={navItems} activeKey={page} />
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={content.locale} page={page} />
          <CTAWhatsApp className="hidden lg:inline-flex" content={content} label={content.nav.cta} message={content.whatsappMessages.header} />
          <MobileMenu content={content} page={page} navItems={navItems} />
        </div>
      </div>
    </HeaderFrame>
  );
}
