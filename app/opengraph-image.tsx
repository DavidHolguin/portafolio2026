import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} · ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "radial-gradient(circle at 70% 55%, rgba(26,115,232,0.4) 0%, rgba(26,115,232,0) 50%), #000000",
        padding: "64px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 22,
          color: "#FAFAFA",
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "rgba(26,115,232,0.15)",
            border: "1px solid rgba(26,115,232,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#5697FF",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          CH
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ fontWeight: 700 }}>Cristian</span>
          <span style={{ color: "#A1A1AA" }}>Holguin</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            color: "#1A73E8",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              background: "#1A73E8",
            }}
          />
          Consultor Senior · Tech · Growth · IA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FAFAFA",
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: -2.5,
            lineHeight: 1.1,
          }}
        >
          <span>Conecto código, datos</span>
          <span style={{ display: "flex", gap: 16 }}>
            y growth para <span style={{ color: "#1A73E8" }}>resultados.</span>
          </span>
        </div>
        <div
          style={{
            color: "#A1A1AA",
            fontSize: 24,
            lineHeight: 1.45,
            maxWidth: 880,
          }}
        >
          {site.description}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
