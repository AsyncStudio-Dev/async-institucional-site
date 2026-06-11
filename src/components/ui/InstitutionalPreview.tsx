import type { Locale } from "../../content/types";

type InstitutionalPreviewProps = {
  locale: Locale;
};

export function InstitutionalPreview({ locale }: InstitutionalPreviewProps) {
  const isPt = locale === "pt";

  const title = isPt ? "Soluções Digitais" : "Digital Solutions";
  const subtitle = isPt
    ? "Escopo de entrega e tecnologia sob medida"
    : "Delivery scope and tailored technology";

  const solutions = [
    {
      title: isPt ? "Sites institucionais" : "Business websites",
      badge: isPt ? "Site" : "Site",
      desc: isPt ? "Presença digital profissional e clara" : "Professional and clear digital presence",
      icon: (
        <svg className="h-5 w-5 text-async-frost" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: "bg-async-frost/5 border-async-frost/10",
    },
    {
      title: isPt ? "Landing pages" : "Landing pages",
      badge: isPt ? "Captação" : "Capture",
      desc: isPt ? "Páginas focadas em conversão" : "Conversion-focused pages",
      icon: (
        <svg className="h-5 w-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-[#3b82f6]/5 border-[#3b82f6]/10",
    },
    {
      title: isPt ? "Sistemas sob medida" : "Custom systems",
      badge: isPt ? "Gestão" : "Management",
      desc: isPt ? "Organização para processos internos" : "Organization for internal processes",
      icon: (
        <svg className="h-5 w-5 text-async-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "bg-async-cyan/10 border-async-cyan/15",
    },
    {
      title: isPt ? "Web apps" : "Web apps",
      badge: isPt ? "Web App" : "Web App",
      desc: isPt ? "Aplicações online para o negócio" : "Online applications for your business",
      icon: (
        <svg className="h-5 w-5 text-async-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "bg-async-lavender/5 border-async-lavender/10",
    },
    {
      title: isPt ? "Automações internas" : "Internal automations",
      badge: isPt ? "Automação" : "Automation",
      desc: isPt ? "Rotinas mais rápidas e integradas" : "Faster and integrated routines",
      icon: (
        <svg className="h-5 w-5 text-ice-glacier" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "bg-ice-glacier/5 border-ice-glacier/10",
    },
  ];

  const steps = isPt
    ? ["Diagnóstico", "Planejamento", "Desenvolvimento", "Evolução"]
    : ["Diagnosis", "Planning", "Development", "Evolution"];

  return (
    <div className="relative mx-auto w-full max-w-[31.5rem] lg:max-w-[32rem]">
      <div className="liquid-glass liquid-glass-quiet rounded-2xl p-4 sm:p-5 md:p-6 shadow-glass relative border-white/40">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-async-frost-dark">
              Async Studio
            </p>
            <p className="mt-1.5 text-2xl font-semibold leading-tight md:text-[1.65rem] text-async-ink">
              {title}
            </p>
            <p className="mt-1.5 max-w-sm text-xs leading-5 md:text-sm md:leading-5 text-async-graphite">
              {subtitle}
            </p>
          </div>
          <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-white/40 bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_16px_rgba(10,13,18,0.04)]">
            <svg className="h-6 w-6 text-async-frost" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Abstract Interface (Solutions list) */}
        <div className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-2.5">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-white/40 bg-white/30 p-2.5 sm:p-3 shadow-[0_2px_8px_rgba(95,104,117,0.01)] transition duration-200 hover:translate-x-0.5 hover:border-white/60 hover:bg-white/60"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${item.color}`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-async-ink leading-snug truncate">{item.title}</h4>
                  <p className="text-[11px] text-async-graphite leading-normal mt-0.5 truncate">{item.desc}</p>
                </div>
              </div>
              <span className="rounded-md border border-ice-mist/40 bg-ice-white/70 px-1.5 py-0.5 text-[8.5px] sm:text-[9.5px] font-semibold uppercase tracking-wide text-async-graphite shadow-[0_1px_2px_rgba(10,13,18,0.02)] shrink-0">
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Flow Line */}
        <div className="mt-5 sm:mt-7 border-t border-ice-mist/30 pt-4 sm:pt-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-async-frost-dark mb-4 text-center">
            {isPt ? "Da ideia à evolução" : "From idea to evolution"}
          </p>
          <div className="relative flex justify-between">
            {/* Connection Line */}
            <div className="absolute top-[9px] left-4 right-4 h-[1.5px] bg-gradient-to-r from-async-frost/15 via-async-cyan/25 to-async-frost/15" />
            
            {steps.map((step, idx) => (
              <div key={step} className="flex flex-col items-center z-10 w-1/4">
                <div className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-full border border-white/50 bg-white/70 shadow-[0_2px_6px_rgba(138,108,255,0.06)] text-[9px] sm:text-[10px] font-bold text-async-frost-dark">
                  {idx + 1}
                </div>
                <span className="mt-2 text-center text-[10px] font-semibold text-async-ink leading-tight max-w-[4.8rem] px-0.5">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
