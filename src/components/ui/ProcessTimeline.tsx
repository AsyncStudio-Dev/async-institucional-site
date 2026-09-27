import { Reveal } from "./Reveal";

type ProcessStepData = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStepData[];
};

const STEP_STAGGER_MS = 120;

/**
 * Etapas ligadas por uma linha Async Green que se desenha ao entrar na
 * viewport (horizontal no desktop, vertical no mobile). Usa o `is-visible`
 * do Reveal como gatilho, então herda o respeito a prefers-reduced-motion.
 */
export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <Reveal className="group/timeline relative">
      <span
        aria-hidden="true"
        className="absolute bottom-4 left-5 top-4 w-px origin-top scale-y-0 bg-async-green/40 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-[.is-visible]/timeline:scale-y-100 lg:bottom-auto lg:left-[10%] lg:right-[10%] lg:top-5 lg:h-px lg:w-auto lg:origin-left lg:scale-x-0 lg:scale-y-100 lg:group-[.is-visible]/timeline:scale-x-100"
      />
      <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-5 opacity-0 transition-opacity duration-500 group-[.is-visible]/timeline:opacity-100 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
            style={{ transitionDelay: `${300 + index * STEP_STAGGER_MS}ms` }}
          >
            <span className="font-mono-brand relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-async-green/40 bg-white text-sm text-async-green">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="lg:mt-5">
              <h3 className="font-display text-base font-semibold leading-snug text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
