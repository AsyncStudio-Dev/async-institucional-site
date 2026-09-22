import { ImageResponse } from "next/og";
import { MARK_PATHS } from "../assets/brand/mark-paths";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0F0B",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 1254 1254" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(0,1254) scale(0.1,-0.1)" fill="#22C55E">
            {MARK_PATHS.map((d) => (
              <path key={d.slice(0, 12)} d={d} />
            ))}
          </g>
        </svg>
      </div>
    ),
    size,
  );
}
