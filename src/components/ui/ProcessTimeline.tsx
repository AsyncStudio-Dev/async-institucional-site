import { GlassCard } from "./GlassCard";

type ProcessStepData = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStepData[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* ================= DESKTOP LAYOUT (Horizontal Timeline) ================= */}
      <div className="relative hidden lg:block">
        {/* Horizontal connection line */}
        <div className="absolute left-[10%] right-[10%] top-5 h-0.5 bg-gradient-to-r from-async-frost/10 via-async-frost/40 to-async-frost/10" />

        <div className="grid grid-cols-5 gap-6 items-stretch">
          {steps.map((step, index) => (
            <div key={step.title} className="group relative flex flex-col items-center text-center h-full">
              {/* Step indicator circle */}
              <div className="mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-async-frost text-sm font-bold text-white shadow-[0_4px_12px_rgba(138,108,255,0.25)] border-2 border-white z-10 transition duration-300 group-hover:scale-110 group-hover:bg-async-frost-dark">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Vertical connector line bridging number and card */}
              <div className="h-4 w-0.5 bg-async-frost/25 transition duration-300 group-hover:bg-async-frost/50" />

              {/* Glass Card content */}
              <GlassCard
                variant="default"
                className="flex flex-col items-center p-6 pb-8 pt-7 xl:p-7 xl:pb-9 xl:pt-8 w-full h-full flex-1 border-ice-mist shadow-[0_12px_36px_rgba(95,104,117,0.06)] transition duration-300 hover:-translate-y-1 hover:border-async-frost/45 hover:shadow-[0_20px_50px_rgba(138,108,255,0.12)]"
              >
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-async-ink">{step.title}</h3>
                <p className="mt-3.5 text-[13px] xl:text-sm leading-relaxed text-async-graphite/90">{step.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE & TABLET LAYOUT (Vertical Timeline) ================= */}
      <div className="relative mx-auto max-w-2xl lg:hidden">
        {/* Vertical connection line */}
        <div className="absolute left-5 sm:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-async-frost/10 via-async-frost/40 to-async-frost/10" />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="group relative flex items-start pl-12 sm:pl-16">
              {/* Step indicator circle */}
              <div className="absolute left-0 sm:left-1 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-async-frost text-sm font-bold text-white shadow-[0_4px_12px_rgba(138,108,255,0.25)] border-2 border-white z-10 transition duration-300 group-hover:scale-110 group-hover:bg-async-frost-dark">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Horizontal connector line bridging vertical line and card */}
              <div className="absolute left-10 sm:left-11 top-[23px] w-2 sm:w-5 h-[2px] bg-async-frost/25 z-0 transition duration-300 group-hover:bg-async-frost/50" />

              {/* Glass Card content */}
              <GlassCard
                variant="default"
                className="w-full p-5 sm:p-6 sm:pb-7 border-ice-mist shadow-[0_12px_36px_rgba(95,104,117,0.06)] transition duration-300 hover:border-async-frost/45 hover:shadow-[0_20px_50px_rgba(138,108,255,0.12)]"
              >
                <h3 className="text-base sm:text-lg font-semibold leading-snug tracking-tight text-async-ink">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-async-graphite/90">{step.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
