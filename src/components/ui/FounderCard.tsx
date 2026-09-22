import { Card } from "./Card";

type FounderCardProps = {
  name: string;
  role: string;
  description?: string;
};

export function FounderCard({ name, role, description }: FounderCardProps) {
  return (
    <Card className="flex h-full flex-col text-left">
      <p className="font-display text-lg font-semibold text-text-primary">{name}</p>
      <p className="eyebrow mt-1 text-async-green">{role}</p>
      {description ? <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p> : null}
    </Card>
  );
}
