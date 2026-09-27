import { Card } from "./Card";

type FounderCardProps = {
  name: string;
  role: string;
  description?: string;
};

export function FounderCard({ name, role, description }: FounderCardProps) {
  return (
    <Card className="flex h-full flex-col text-left">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-forest text-base font-semibold text-async-green"
        >
          {name.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold leading-tight text-text-primary">{name}</p>
          <p className="font-mono-brand mt-1 text-[11px] uppercase leading-snug tracking-[0.08em] text-async-green">{role}</p>
        </div>
      </div>
      {description ? <p className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">{description}</p> : null}
    </Card>
  );
}
