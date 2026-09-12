# pokopayng.com

Marketing site for Pokopay — payment rails, POS terminals, and a multi-tenant dashboard for merchants, partners and CSAs in Nigeria.

Live: [pokopayng.com](https://pokopayng.com)
Dashboard: [dashboard.pokopayng.com](https://dashboard.pokopayng.com)

## Stack

- Next.js 16 (App Router, React 19)
- Tailwind v4 (`@import "tailwindcss"` + `@theme` tokens)
- Fraunces (serif) + Inter (sans) via `next/font/google`
- lucide-react for icons
- Deployed on Vercel; DNS at GoDaddy

## Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx         # metadataBase, fonts, nav + footer
  page.tsx           # home
  for-merchants/     # merchant story
  for-partners/      # PSP / bank / white-label story
  security/          # security posture
  pricing/           # tiers
  company/           # values, contact
  contact/           # form
  legal/             # terms, privacy, PCI notice
  api/contact/       # form POST handler (stub)
  robots.ts          # /robots.txt
  sitemap.ts         # /sitemap.xml
  opengraph-image.tsx  # dynamic OG image
components/
  nav.tsx            # sticky header
  footer.tsx         # site footer
  page-shell.tsx     # helpers for interior pages
```

## Brand tokens

Defined in [app/globals.css](app/globals.css) under `@theme`:

- `--color-brand` — `#1F7A44` (Pokopay green)
- `--color-canvas` — `#F7F4EF` (warm neutral ground)
- `--font-serif` — Fraunces
- `--font-sans` — Inter

## Security headers

Set in [next.config.ts](next.config.ts):

- Content-Security-Policy
- Strict-Transport-Security (1y, includeSubDomains, preload)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()

## Deploy

Push to `main` on [github.com/ayodeji-pokopay/website](https://github.com/ayodeji-pokopay/website). Vercel auto-deploys.

DNS (GoDaddy):

- `A` / `ALIAS` on the root → Vercel edge
- `CNAME` on `www` → `cname.vercel-dns.com`
- Leave `dashboard.pokopayng.com` and `api.pokopayng.com` untouched — they point at the dashboard's EC2.

## TODO

- Replace placeholder LogoMark in [components/nav.tsx](components/nav.tsx) with the real Pokopay logo
- Real screenshots for `MockPreview` on home + POS mock on merchants page
- Wire `/api/contact` to Resend / Slack webhook / SES
- Blog + careers
