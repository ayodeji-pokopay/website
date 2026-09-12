import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Pokopay — Payments infrastructure for Nigerian merchants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamic OG card. Rendered at build time (statically optimized) unless a
// request-time API is used inside — we deliberately keep this pure so it
// caches. No custom font file — ImageResponse falls back to a sensible sans
// weight, which is fine for the split-canvas card we render here.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F7F4EF",
          color: "#1E1A16",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Left column — headline */}
        <div
          style={{
            flex: 1.35,
            padding: "80px 72px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Logo mark */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#1F7A44",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              P
            </div>
            <span
              style={{
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: -0.4,
              }}
            >
              Pokopay
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 62,
                lineHeight: 1.05,
                letterSpacing: -1.5,
                fontWeight: 500,
                maxWidth: 640,
              }}
            >
              The payment rails your merchants and terminals were waiting for.
            </div>
            <div
              style={{
                fontSize: 24,
                lineHeight: 1.35,
                color: "#4E4A44",
                maxWidth: 620,
              }}
            >
              Card acceptance, terminal fleet, wallets, settlements and reporting —
              one platform for Nigeria.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 18,
              color: "#4E4A44",
            }}
          >
            <span>pokopayng.com</span>
            <span>·</span>
            <span>Africa/Lagos</span>
          </div>
        </div>

        {/* Right column — brand block */}
        <div
          style={{
            flex: 1,
            background: "#1F7A44",
            color: "white",
            padding: "80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 3,
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            Merchants · Partners · CSAs
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <Row label="Card schemes" value="Verve · Mastercard · Visa" />
            <Row label="Settlement" value="T+0 · T+1" />
            <Row label="Terminals" value="Telpo · Nexgo · PAX" />
            <Row label="Residency" value="Africa-adjacent AWS" />
          </div>

          <div style={{ fontSize: 18, opacity: 0.85 }}>
            Built in Lagos.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div
        style={{
          fontSize: 14,
          letterSpacing: 2,
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: -0.4 }}>
        {value}
      </div>
    </div>
  );
}
