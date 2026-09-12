import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pokopayng.com"),
  title: {
    default: "Pokopay — Payments infrastructure for Nigerian merchants",
    template: "%s · Pokopay",
  },
  description:
    "Card acceptance, terminal fleet management, wallets, settlements and reporting — a single platform for merchants, acquirers and CSAs across Nigeria.",
  openGraph: {
    type: "website",
    url: "https://pokopayng.com",
    siteName: "Pokopay",
    title: "Pokopay — Payments infrastructure for Nigerian merchants",
    description:
      "Card acceptance, terminal fleet, wallets, settlements and reporting — one platform.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokopay",
    description: "Payments infrastructure for Nigerian merchants.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* Preconnects for the fonts pulled by next/font — small win on
            first paint. */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Skip link for keyboard users — a11y basic every landing page
            should ship. */}
        <Link
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-[color:var(--color-brand)] text-white px-3 py-2 rounded-md z-50"
        >
          Skip to content
        </Link>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
