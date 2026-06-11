type FounderCardProps = {
  name: string;
  role: string;
  description?: string;
};

export function FounderCard({ name, role, description }: FounderCardProps) {
  return (
    <div className="liquid-glass rounded-2xl p-5 text-left h-full flex flex-col">
      <p className="text-lg font-semibold text-async-ink">{name}</p>
      <p className="mt-0.5 text-xs font-semibold text-async-frost-dark">{role}</p>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-async-graphite flex-1">{description}</p>
      ) : null}
    </div>
  );
}
