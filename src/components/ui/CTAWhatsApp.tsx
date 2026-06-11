import type { SiteContent } from "../../content/types";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { Button } from "./Button";

type CTAWhatsAppProps = {
  content: SiteContent;
  label?: string;
  message?: string;
  className?: string;
  size?: "default" | "large";
};

export function CTAWhatsApp({ content, label, message, className, size }: CTAWhatsAppProps) {
  return (
    <Button
      className={className}
      href={createWhatsAppLink(message || content.whatsappMessage)}
      size={size}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-async-cyan shadow-[0_0_0_3px_rgba(156,237,231,0.16)]" />
      {label || content.hero.primaryCta}
    </Button>
  );
}
