import { siteConfig } from "../config/site";

export function createWhatsAppLink(
  message: string = siteConfig.contact.whatsapp.defaultMessage,
  number: string = siteConfig.contact.whatsapp.number,
) {
  const targetNumber = number || siteConfig.contact.whatsapp.number;
  const encodedMessage = encodeURIComponent(message || siteConfig.contact.whatsapp.defaultMessage);

  if (!targetNumber) {
    return `mailto:${siteConfig.contact.email.address}?subject=Async%20Studio&body=${encodedMessage}`;
  }

  return `https://wa.me/${targetNumber}?text=${encodedMessage}`;
}
