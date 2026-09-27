"use client";

import { useEffect, useId, useState } from "react";

type AsyncFlowProps = {
  variant?: "hero" | "divider" | "mono";
  className?: string;
};

/**
 * Async Flow — elemento gráfico proprietário da marca (Brand Book §12):
 * faixas contínuas que entram, mudam de direção e continuam. Recriado a
 * partir da especificação do design system (curvas em camadas, gradiente
 * Deep Forest → Async Green → Light Mint) já que os SVGs originais do
 * grupo de assets "Graphics" não puderam ser baixados por este canal.
 *
 * Regra de intensidade: se o efeito é percebido antes do conteúdo, está
 * forte demais — por isso opacidades baixas e uso decorativo, nunca atrás
 * de texto sem controle de contraste. No hero, as faixas ondulam devagar
 * (morph do `d`) e um brilho curto percorre cada uma, sugerindo fluxo.
 */
export function AsyncFlow({ variant = "hero", className = "" }: AsyncFlowProps) {
  const uid = useId();
  const gradientId = `async-flow-gradient-${uid}`;
  const isAnimated = usePrefersMotion();

  if (variant === "divider") {
    return (
      <svg viewBox="0 0 1600 160" className={className} preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--async-green)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--async-green)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--light-mint)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 90 C 260 40, 420 140, 700 90 S 1140 30, 1600 90"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "mono") {
    return (
      <svg viewBox="0 0 1600 600" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="var(--mint-white)" strokeLinecap="round">
          <path d="M-80 260 C 220 140, 420 400, 720 260 S 1220 120, 1680 260" strokeWidth="2" opacity="0.10" />
          <path d="M-80 360 C 260 460, 480 220, 800 360 S 1300 480, 1680 360" strokeWidth="1.5" opacity="0.07" />
          <path d="M-80 180 C 300 100, 560 300, 900 180 S 1400 60, 1680 180" strokeWidth="1.5" opacity="0.06" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1600 600" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="var(--deep-forest)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--async-green)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--light-mint)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`${gradientId}-soft`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--light-mint)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--light-mint)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--async-green)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        {HERO_STREAMS.map((stream, index) => {
          const stroke = stream.gradient ? `url(#${gradientId}${stream.gradient === "soft" ? "-soft" : ""})` : "var(--light-mint)";
          return (
            <g key={index}>
              <path d={stream.shapes[0]} stroke={stroke} strokeOpacity={stream.opacity} strokeWidth={stream.width}>
                {isAnimated && <StreamMorph stream={stream} />}
              </path>
              {isAnimated && (
                <path
                  d={stream.shapes[0]}
                  pathLength={100}
                  className="async-flow-pulse"
                  stroke="var(--light-mint)"
                  strokeWidth={stream.width}
                  style={{ animationDuration: `${stream.pulseSeconds}s`, animationDelay: `${stream.pulseDelaySeconds}s` }}
                >
                  <StreamMorph stream={stream} />
                </path>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

type FlowStream = {
  /** Formatos-chave com a mesma estrutura de comandos, para o morph ser suave. */
  shapes: [string, string, string];
  width: number;
  opacity?: number;
  gradient?: "main" | "soft";
  morphSeconds: number;
  pulseSeconds: number;
  pulseDelaySeconds: number;
};

const HERO_STREAMS: FlowStream[] = [
  {
    shapes: [
      "M-100 300 C 220 160, 460 440, 780 300 S 1280 150, 1700 300",
      "M-100 320 C 260 220, 520 400, 800 280 S 1240 190, 1700 260",
      "M-100 280 C 200 120, 420 460, 760 320 S 1320 110, 1700 330",
    ],
    width: 3,
    gradient: "main",
    morphSeconds: 18,
    pulseSeconds: 9,
    pulseDelaySeconds: 0.8,
  },
  {
    shapes: [
      "M-100 400 C 260 500, 520 260, 860 400 S 1360 520, 1700 400",
      "M-100 380 C 300 470, 560 300, 840 420 S 1320 480, 1700 430",
      "M-100 420 C 220 530, 480 240, 880 380 S 1400 540, 1700 380",
    ],
    width: 2,
    gradient: "soft",
    morphSeconds: 22,
    pulseSeconds: 12,
    pulseDelaySeconds: 4,
  },
  {
    shapes: [
      "M-100 200 C 300 120, 600 300, 940 200 S 1440 100, 1700 200",
      "M-100 220 C 340 150, 640 270, 920 220 S 1400 130, 1700 180",
      "M-100 180 C 260 100, 560 320, 960 190 S 1480 80, 1700 220",
    ],
    width: 1.5,
    opacity: 0.18,
    morphSeconds: 26,
    pulseSeconds: 14,
    pulseDelaySeconds: 7,
  },
];

const SMOOTH_SPLINE = "0.45 0 0.55 1";

function StreamMorph({ stream }: { stream: FlowStream }) {
  const [first, second, third] = stream.shapes;
  return (
    <animate
      attributeName="d"
      dur={`${stream.morphSeconds}s`}
      repeatCount="indefinite"
      values={`${first};${second};${third};${first}`}
      calcMode="spline"
      keyTimes="0;0.33;0.66;1"
      keySplines={`${SMOOTH_SPLINE};${SMOOTH_SPLINE};${SMOOTH_SPLINE}`}
    />
  );
}

/** SMIL ignora o CSS de prefers-reduced-motion, então a decisão é feita aqui. */
function usePrefersMotion() {
  const [prefersMotion, setPrefersMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersMotion(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return prefersMotion;
}
