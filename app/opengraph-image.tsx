import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Pokopay — Payments infrastructure for Nigerian merchants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dynamic OG card. Rendered at build time (statically optimized) unless a
// request-time API is used inside — we deliberately keep this pure so it
// caches. Reads the real Pokopay symbol from public/brand/symbol.png and
// inlines it as a data URI so ImageResponse can render it without a
// network fetch. No custom font file — ImageResponse falls back to a
// sensible sans weight, which is fine for the split-canvas card.
export default async function Image() {
  const symbolPath = join(process.cwd(), "public", "brand", "symbol.png");
  const symbolBuffer = await readFile(symbolPath);
  const symbolSrc = `data:image/png;base64,${symbolBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F7F4EF",
          color: "#0F1F35",
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
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* Real Pokopay symbol — green arch + navy circle */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={symbolSrc} width={64} height={64} alt="" />
            <span
              style={{
                fontSize: 40,
                fontWeight: 700,
                letterSpacing: -0.8,
                color: "#0F1F35",
              }}
            >
              pokopay
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
                color: "#0F1F35",
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

        {/* Right column — brand block (dark navy for logo consistency) */}
        <div
          style={{
            flex: 1,
            background: "#0F1F35",
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
              color: "#7EA85E",
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
          color: "#7EA85E",
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
