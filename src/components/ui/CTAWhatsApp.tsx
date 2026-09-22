import type { SiteContent } from "../../content/types";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { Button } from "./Button";

type CTAWhatsAppProps = {
  content: SiteContent;
  label?: string;
  message?: string;
  className?: string;
  size?: "default" | "large";
  tone?: "light" | "dark";
};

export function CTAWhatsApp({ content, label, message, className, size, tone }: CTAWhatsAppProps) {
  return (
    <Button
      className={className}
      href={createWhatsAppLink(message || content.whatsappMessage)}
      size={size}
      tone={tone}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label || content.hero.primaryCta}
    </Button>
  );
}
