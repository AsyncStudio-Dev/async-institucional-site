import { Card } from "./Card";

type ProcessStepData = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStepData[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <Card key={step.title} className="flex h-full flex-col">
          <span className="font-mono-brand text-sm text-async-green">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="font-display mt-3 text-base font-semibold leading-snug text-text-primary">{step.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">{step.description}</p>
        </Card>
      ))}
    </div>
  );
}
