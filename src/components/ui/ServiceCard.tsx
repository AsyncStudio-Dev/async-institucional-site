import type { SiteContent } from "../../content/types";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { Button } from "./Button";
import { Card } from "./Card";

type Service = SiteContent["services"][number];

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
  content: SiteContent;
};

export function ServiceCard({ service, compact = false, content }: ServiceCardProps) {
  const { audience, problem, delivery, messageTemplate } = content.ui.serviceCard;
  const message = messageTemplate.replace("{serviceTitle}", service.title);

  return (
    <Card className="flex h-full flex-col">
      <h3 className="font-display text-xl font-semibold text-text-primary">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-text-secondary">{service.summary}</p>
      {!compact ? (
        <div className="mt-5 grid flex-1 gap-3 text-sm leading-6 text-text-secondary">
          <p>
            <strong className="text-text-primary">{audience}:</strong> {service.audience}
          </p>
          <p>
            <strong className="text-text-primary">{problem}:</strong> {service.problem}
          </p>
          <p>
            <strong className="text-text-primary">{delivery}:</strong> {service.delivery}
          </p>
        </div>
      ) : null}
      <Button className="mt-6 w-full sm:w-auto" href={createWhatsAppLink(message)} target="_blank" rel="noopener noreferrer">
        {service.cta}
      </Button>
    </Card>
  );
}
