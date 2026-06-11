import type { SiteContent } from "../../content/types";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";

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
    <GlassCard className="h-full">
      <h3 className="text-xl font-semibold text-async-ink">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-async-graphite">{service.summary}</p>
      {!compact ? (
        <div className="mt-5 grid gap-3 text-sm leading-6 text-async-graphite">
          <p>
            <strong className="text-async-ink">{audience}:</strong> {service.audience}
          </p>
          <p>
            <strong className="text-async-ink">{problem}:</strong> {service.problem}
          </p>
          <p>
            <strong className="text-async-ink">{delivery}:</strong> {service.delivery}
          </p>
        </div>
      ) : null}
      <Button
        className="mt-6 w-full sm:w-auto"
        href={createWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {service.cta}
      </Button>
    </GlassCard>
  );
}

