import { ImageResponse } from "next/og";
import { MARK_PATHS } from "../assets/brand/mark-paths";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0F0B",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 18% 20%, rgba(34,197,94,0.16), transparent 55%), radial-gradient(circle at 85% 75%, rgba(167,243,208,0.12), transparent 50%)",
          }}
        />
        <svg width="128" height="128" viewBox="0 0 1254 1254" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 32 }}>
          <g transform="translate(0,1254) scale(0.1,-0.1)" fill="#22C55E">
            {MARK_PATHS.map((d) => (
              <path key={d.slice(0, 12)} d={d} />
            ))}
          </g>
        </svg>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#E9F7EC" }}>
          Async<span style={{ color: "#22C55E", marginLeft: 16 }}>Studio</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 26, color: "rgba(233,247,236,0.65)" }}>
          Tecnologia que não trava o seu crescimento.
        </div>
      </div>
    ),
    size,
  );
}
