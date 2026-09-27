"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";

type AsyncFlowVariant = "hero" | "divider" | "mono";

type AsyncFlowProps = {
  variant?: AsyncFlowVariant;
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
 * de texto sem controle de contraste. As faixas ondulam devagar (morph do
 * `d`) e um brilho curto percorre cada uma, sugerindo fluxo.
 */
export function AsyncFlow({ variant = "hero", className = "" }: AsyncFlowProps) {
  const uid = useId();
  const gradientId = `async-flow-gradient-${uid}`;
  const isAnimated = usePrefersMotion();
  const { viewBox, preserveAspectRatio, streams } = FLOW_VARIANTS[variant];

  const resolveStroke = (stroke: StreamStroke) => {
    if (stroke === "gradient-main") return `url(#${gradientId}-main)`;
    if (stroke === "gradient-soft") return `url(#${gradientId}-soft)`;
    if (stroke === "gradient-divider") return `url(#${gradientId}-divider)`;
    return stroke;
  };

  return (
    <svg viewBox={viewBox} className={className} preserveAspectRatio={preserveAspectRatio} aria-hidden="true">
      <defs>
        <linearGradient id={`${gradientId}-main`} x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="var(--deep-forest)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--async-green)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--light-mint)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`${gradientId}-soft`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--light-mint)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--light-mint)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--async-green)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${gradientId}-divider`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--async-green)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--async-green)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--light-mint)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        {streams.map((stream, index) => (
          <g key={index}>
            <path d={stream.shapes[0]} stroke={resolveStroke(stream.stroke)} strokeOpacity={stream.opacity} strokeWidth={stream.width}>
              {isAnimated && <StreamMorph stream={stream} />}
            </path>
            {isAnimated && (
              <path
                d={stream.shapes[0]}
                pathLength={100}
                className="async-flow-pulse"
                stroke={stream.pulse.color}
                strokeWidth={stream.width}
                style={pulseStyle(stream.pulse)}
              >
                <StreamMorph stream={stream} />
              </path>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}

type StreamStroke = "gradient-main" | "gradient-soft" | "gradient-divider" | (string & {});

type StreamPulse = {
  color: string;
  opacity: number;
  seconds: number;
  delaySeconds: number;
};

type FlowStream = {
  /** Formatos-chave com a mesma estrutura de comandos, para o morph ser suave. */
  shapes: [string, string, string];
  stroke: StreamStroke;
  width: number;
  opacity?: number;
  morphSeconds: number;
  pulse: StreamPulse;
};

type FlowVariantSpec = {
  viewBox: string;
  preserveAspectRatio: string;
  streams: FlowStream[];
};

const FLOW_VARIANTS: Record<AsyncFlowVariant, FlowVariantSpec> = {
  hero: {
    viewBox: "0 0 1600 600",
    preserveAspectRatio: "xMidYMid slice",
    streams: [
      {
        shapes: [
          "M-100 300 C 220 160, 460 440, 780 300 S 1280 150, 1700 300",
          "M-100 320 C 260 220, 520 400, 800 280 S 1240 190, 1700 260",
          "M-100 280 C 200 120, 420 460, 760 320 S 1320 110, 1700 330",
        ],
        stroke: "gradient-main",
        width: 3,
        morphSeconds: 18,
        pulse: { color: "var(--light-mint)", opacity: 0.55, seconds: 9, delaySeconds: 0.8 },
      },
      {
        shapes: [
          "M-100 400 C 260 500, 520 260, 860 400 S 1360 520, 1700 400",
          "M-100 380 C 300 470, 560 300, 840 420 S 1320 480, 1700 430",
          "M-100 420 C 220 530, 480 240, 880 380 S 1400 540, 1700 380",
        ],
        stroke: "gradient-soft",
        width: 2,
        morphSeconds: 22,
        pulse: { color: "var(--light-mint)", opacity: 0.55, seconds: 12, delaySeconds: 4 },
      },
      {
        shapes: [
          "M-100 200 C 300 120, 600 300, 940 200 S 1440 100, 1700 200",
          "M-100 220 C 340 150, 640 270, 920 220 S 1400 130, 1700 180",
          "M-100 180 C 260 100, 560 320, 960 190 S 1480 80, 1700 220",
        ],
        stroke: "var(--light-mint)",
        width: 1.5,
        opacity: 0.18,
        morphSeconds: 26,
        pulse: { color: "var(--light-mint)", opacity: 0.55, seconds: 14, delaySeconds: 7 },
      },
    ],
  },
  mono: {
    viewBox: "0 0 1600 600",
    preserveAspectRatio: "xMidYMid slice",
    streams: [
      {
        shapes: [
          "M-80 260 C 220 140, 420 400, 720 260 S 1220 120, 1680 260",
          "M-80 280 C 260 190, 460 360, 740 240 S 1180 160, 1680 230",
          "M-80 240 C 180 110, 380 420, 700 280 S 1260 90, 1680 290",
        ],
        stroke: "var(--mint-white)",
        width: 2,
        opacity: 0.1,
        morphSeconds: 20,
        pulse: { color: "var(--light-mint)", opacity: 0.3, seconds: 11, delaySeconds: 1.5 },
      },
      {
        shapes: [
          "M-80 360 C 260 460, 480 220, 800 360 S 1300 480, 1680 360",
          "M-80 340 C 300 430, 520 260, 780 380 S 1260 440, 1680 390",
          "M-80 380 C 220 490, 440 200, 820 340 S 1340 500, 1680 340",
        ],
        stroke: "var(--mint-white)",
        width: 1.5,
        opacity: 0.07,
        morphSeconds: 24,
        pulse: { color: "var(--light-mint)", opacity: 0.25, seconds: 13, delaySeconds: 5 },
      },
      {
        shapes: [
          "M-80 180 C 300 100, 560 300, 900 180 S 1400 60, 1680 180",
          "M-80 200 C 340 130, 600 270, 880 200 S 1360 90, 1680 160",
          "M-80 160 C 260 80, 520 320, 920 170 S 1440 40, 1680 200",
        ],
        stroke: "var(--mint-white)",
        width: 1.5,
        opacity: 0.06,
        morphSeconds: 28,
        pulse: { color: "var(--light-mint)", opacity: 0.2, seconds: 15, delaySeconds: 8 },
      },
    ],
  },
  divider: {
    viewBox: "0 0 1600 160",
    preserveAspectRatio: "none",
    streams: [
      {
        shapes: [
          "M0 90 C 260 40, 420 140, 700 90 S 1140 30, 1600 90",
          "M0 90 C 280 60, 440 120, 720 80 S 1160 50, 1600 100",
          "M0 90 C 240 30, 400 150, 680 100 S 1120 20, 1600 80",
        ],
        stroke: "gradient-divider",
        width: 2,
        morphSeconds: 16,
        pulse: { color: "var(--light-mint)", opacity: 0.6, seconds: 8, delaySeconds: 0.5 },
      },
    ],
  },
};

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

function pulseStyle(pulse: StreamPulse): CSSProperties {
  return { opacity: pulse.opacity, animationDuration: `${pulse.seconds}s`, animationDelay: `${pulse.delaySeconds}s` };
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
