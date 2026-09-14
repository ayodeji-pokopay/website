import { PaxA920, TelpoTps900, SunyardS60 } from "./devices";

/**
 * TerminalFamilies — the three POS device families Pokopay supports today,
 * rendered side by side with a shared card treatment. Each family gets a
 * short human-readable capability line so operators know what the device
 * is actually good for at a glance.
 *
 * The illustrations are original artwork (see `components/devices.tsx`) —
 * no manufacturer photography, so we can ship this without needing OEM
 * marketing-image clearance.
 */
const FAMILIES = [
  {
    name: "PAX A920",
    tagline: "All-touchscreen smart POS",
    body:
      "Slim Android device with a big screen, mini printer and 4G/Wi-Fi. The mobile-cashier device most Nigerian merchants meet first — light enough to hand round the shop, powerful enough to run the restaurant module.",
    schemes: ["Verve", "Mastercard", "Visa"],
    device: PaxA920,
  },
  {
    name: "Telpo TPS900",
    tagline: "Smart POS with fingerprint",
    body:
      "Tile-driven Android POS with a fingerprint sensor for staff sign-in — good for shops that rotate cashiers on shift. Full print + card + wallet flow and works with the same key rotation pipeline.",
    schemes: ["Verve", "Mastercard", "Visa", "UnionPay"],
    device: TelpoTps900,
  },
  {
    name: "Sunyard S60",
    tagline: "Restaurant + retail workhorse",
    body:
      "Chunkier chassis, faster paper roll, longer-lasting battery — the one to hand a busy restaurant floor or a market vendor doing dozens of taps an hour. Ships with the restaurant module wired in.",
    schemes: ["Verve", "Mastercard", "Visa", "AMEX"],
    device: SunyardS60,
  },
] as const;

export function TerminalFamilies({
  eyebrow = "Terminal families",
  title = "The hardware your merchants already know.",
  lede = "Pokopay ships on the smart-POS devices Nigerian merchants already trust. Same encrypted key path, same heartbeat, same reporting — pick the chassis that fits the counter.",
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <section className="mt-24">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[.16em] text-[color:var(--color-brand)] font-medium mb-3">
          {eyebrow}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight text-balance">
          {title}
        </h2>
        <p className="mt-4 text-[color:var(--color-ink-soft)] max-w-2xl">
          {lede}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {FAMILIES.map(({ name, tagline, body, schemes, device: Device }) => (
          <article
            key={name}
            className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 sm:p-7 flex flex-col"
          >
            {/* No aspect-ratio / flex centering here: iOS Safari mis-sizes an
                SVG whose height depends on a flex + aspect-ratio parent and
                the card grows without bound. The SVG's own 400x400
                attributes give it an intrinsic square instead. */}
            <div className="rounded-2xl bg-[color:var(--color-canvas)] border border-[color:var(--color-line)] p-4">
              <Device className="block mx-auto w-full h-auto max-w-[280px]" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[.14em] text-[color:var(--color-brand)] font-medium">
              {tagline}
            </p>
            <h3 className="mt-1 font-serif text-2xl tracking-tight">{name}</h3>
            <p className="mt-2 text-sm text-[color:var(--color-ink-soft)] leading-relaxed flex-1">
              {body}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {schemes.map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-[color:var(--color-brand-soft)] text-[color:var(--color-brand-deep)] font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-xs text-[color:var(--color-ink-faint)] max-w-2xl">
        Device illustrations are stylized representations. Trademarks &mdash; PAX,
        Telpo, Sunyard &mdash; belong to their respective owners.
      </p>
    </section>
  );
}
