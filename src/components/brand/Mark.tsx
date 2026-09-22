import type { SVGProps } from "react";
import { MARK_PATHS, MARK_VIEWBOX } from "../../assets/brand/mark-paths";

type MarkProps = SVGProps<SVGSVGElement>;

/**
 * Símbolo oficial Async Studio — traço vetorizado a partir do Brand Book v1.0
 * (componente Geometry do design system). fill segue currentColor: controle
 * de cor pelo elemento pai (async-green, mint-white ou deep-forest).
 */
export function Mark({ className, ...props }: MarkProps) {
  return (
    <svg viewBox={MARK_VIEWBOX} xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
      <g transform="translate(0,1254) scale(0.1,-0.1)" fill="currentColor" stroke="none">
        {MARK_PATHS.map((d) => (
          <path key={d.slice(0, 12)} d={d} />
        ))}
      </g>
    </svg>
  );
}
