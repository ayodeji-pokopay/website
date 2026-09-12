/**
 * Device illustrations — stylized front-view SVGs of the POS families
 * Pokopay supports today. These are original artwork, not manufacturer
 * renders: each is drawn from a shared vocabulary (dark chassis with a
 * subtle green accent, on-brand screen mock, printer/keypad affordances
 * per family) so the trio reads as a set.
 *
 * All three are square viewBox (400x400) with the device centred, so
 * they lay out identically inside a fixed-height card. Colours pull the
 * palette out of Tailwind's theme tokens where useful; the chassis and
 * screen render are inline-hex because those are physical descriptions
 * of the plastic, not brand tokens.
 */

const CHASSIS = "#141B26";
const CHASSIS_HIGH = "#232C3A";
const SCREEN_BG = "#F7F4EF";
const SCREEN_TOP = "#0F1F35";
const BRAND = "#1F7A44";
const BRAND_SOFT = "#7EA85E";
const PAPER = "#F1ECDF";
const KEY = "#2A3547";
const KEY_LIGHT = "#3A4658";

/* -------------------------------------------------------------------------- */
/* PAX A920 — slim smart POS, all-touchscreen, mini printer at top             */
/* -------------------------------------------------------------------------- */

export function PaxA920({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <linearGradient id="a920-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={CHASSIS_HIGH} />
          <stop offset="1" stopColor={CHASSIS} />
        </linearGradient>
      </defs>

      {/* Chassis */}
      <rect x="110" y="28" width="180" height="344" rx="24" fill="url(#a920-body)" />
      {/* Subtle side highlight */}
      <rect x="112" y="30" width="4" height="340" rx="2" fill="white" opacity="0.06" />

      {/* Printer slot at the top */}
      <rect x="130" y="38" width="140" height="14" rx="4" fill="#0A0F16" />
      <rect x="150" y="42" width="100" height="4" rx="2" fill={PAPER} opacity="0.55" />

      {/* Camera + speaker */}
      <circle cx="140" cy="72" r="4" fill="#0A0F16" />
      <rect x="175" y="70" width="50" height="4" rx="2" fill="#0A0F16" />

      {/* Screen bezel */}
      <rect x="124" y="86" width="152" height="228" rx="14" fill="#0A0F16" />
      {/* Screen */}
      <rect x="132" y="94" width="136" height="212" rx="8" fill={SCREEN_BG} />

      {/* Screen — Pokopay header bar */}
      <rect x="132" y="94" width="136" height="34" rx="8" fill={SCREEN_TOP} />
      <rect x="132" y="118" width="136" height="10" fill={SCREEN_TOP} />
      <circle cx="146" cy="111" r="6" fill={BRAND} />
      <text x="158" y="115" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">pokopay</text>
      <rect x="242" y="106" width="20" height="10" rx="2" fill={BRAND_SOFT} opacity="0.85" />

      {/* Screen — amount */}
      <text x="200" y="176" fill={SCREEN_TOP} fontSize="26" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">₦ 12,500</text>
      <text x="200" y="196" fill="#5B6472" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">TAP · INSERT · SWIPE</text>

      {/* Screen — animated pulse ring for the "tap here" affordance */}
      <circle cx="200" cy="240" r="30" fill="none" stroke={BRAND} strokeWidth="2" opacity="0.9" />
      <circle cx="200" cy="240" r="20" fill={BRAND} opacity="0.15" />
      <path d="M188 240 h24 M200 228 v24" stroke={BRAND} strokeWidth="2" strokeLinecap="round" />

      {/* Screen — footer / merchant name */}
      <rect x="140" y="286" width="80" height="8" rx="4" fill="#D6D0C4" />
      <rect x="140" y="298" width="60" height="6" rx="3" fill="#D6D0C4" />

      {/* Home indicator */}
      <rect x="170" y="336" width="60" height="4" rx="2" fill={CHASSIS_HIGH} opacity="0.6" />
      <rect x="180" y="352" width="40" height="4" rx="2" fill={KEY_LIGHT} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Telpo TPS900 — Android smart POS with fingerprint sensor                    */
/* -------------------------------------------------------------------------- */

export function TelpoTps900({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <linearGradient id="tps-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={CHASSIS_HIGH} />
          <stop offset="1" stopColor={CHASSIS} />
        </linearGradient>
      </defs>

      {/* Chassis — slightly wider than the A920 */}
      <rect x="96" y="30" width="208" height="340" rx="22" fill="url(#tps-body)" />
      <rect x="98" y="32" width="4" height="336" rx="2" fill="white" opacity="0.06" />

      {/* Printer slot */}
      <rect x="118" y="40" width="164" height="14" rx="4" fill="#0A0F16" />
      <rect x="140" y="44" width="120" height="4" rx="2" fill={PAPER} opacity="0.6" />

      {/* Camera dot */}
      <circle cx="200" cy="72" r="4" fill="#0A0F16" />

      {/* Screen bezel */}
      <rect x="112" y="86" width="176" height="196" rx="10" fill="#0A0F16" />
      {/* Screen */}
      <rect x="118" y="92" width="164" height="184" rx="6" fill={SCREEN_BG} />

      {/* Screen — merchant name row */}
      <rect x="118" y="92" width="164" height="28" rx="6" fill={SCREEN_TOP} />
      <rect x="118" y="112" width="164" height="8" fill={SCREEN_TOP} />
      <circle cx="130" cy="106" r="5" fill={BRAND} />
      <text x="140" y="110" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">pokopay · sale</text>
      <rect x="248" y="102" width="24" height="8" rx="2" fill={BRAND_SOFT} opacity="0.85" />

      {/* Two rows of chip-style tiles */}
      <rect x="128" y="134" width="66" height="42" rx="6" fill="#E8F3EC" />
      <rect x="206" y="134" width="66" height="42" rx="6" fill="#E8F3EC" />
      <rect x="128" y="184" width="66" height="42" rx="6" fill="#E8F3EC" />
      <rect x="206" y="184" width="66" height="42" rx="6" fill="#E8F3EC" />

      {/* Tile labels */}
      <text x="161" y="160" fill={SCREEN_TOP} fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Sale</text>
      <text x="239" y="160" fill={SCREEN_TOP} fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Refund</text>
      <text x="161" y="210" fill={SCREEN_TOP} fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Wallet</text>
      <text x="239" y="210" fill={SCREEN_TOP} fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui, sans-serif">Report</text>

      {/* Screen bottom bar */}
      <rect x="128" y="236" width="144" height="30" rx="6" fill={BRAND} />
      <text x="200" y="255" fill="white" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">New sale</text>

      {/* Fingerprint sensor */}
      <circle cx="200" cy="310" r="16" fill={KEY} stroke={KEY_LIGHT} strokeWidth="2" />
      <path d="M188 310 a12 8 0 0 1 24 0 M191 306 a9 6 0 0 1 18 0 M195 302 a5 4 0 0 1 10 0" stroke={BRAND_SOFT} strokeWidth="1.4" fill="none" opacity="0.85" />

      {/* Bottom label */}
      <rect x="176" y="346" width="48" height="4" rx="2" fill={KEY_LIGHT} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Sunyard S60 — chunkier smart POS with visible paper roll                    */
/* -------------------------------------------------------------------------- */

export function SunyardS60({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <linearGradient id="s60-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={CHASSIS_HIGH} />
          <stop offset="1" stopColor={CHASSIS} />
        </linearGradient>
      </defs>

      {/* Chassis — chunkier proportions */}
      <rect x="88" y="52" width="224" height="316" rx="20" fill="url(#s60-body)" />
      <rect x="90" y="54" width="4" height="312" rx="2" fill="white" opacity="0.06" />

      {/* Paper coming out of the printer at top */}
      <rect x="130" y="18" width="140" height="24" rx="3" fill={PAPER} />
      <line x1="140" y1="26" x2="256" y2="26" stroke="#B8B0A0" strokeWidth="0.7" />
      <line x1="140" y1="32" x2="256" y2="32" stroke="#B8B0A0" strokeWidth="0.7" />
      <line x1="140" y1="38" x2="220" y2="38" stroke="#B8B0A0" strokeWidth="0.7" />

      {/* Printer bezel */}
      <rect x="118" y="60" width="164" height="14" rx="4" fill="#0A0F16" />

      {/* Screen bezel */}
      <rect x="104" y="86" width="192" height="184" rx="10" fill="#0A0F16" />
      {/* Screen */}
      <rect x="110" y="92" width="180" height="172" rx="6" fill={SCREEN_BG} />

      {/* Screen — dashboard-style header */}
      <rect x="110" y="92" width="180" height="30" rx="6" fill={SCREEN_TOP} />
      <rect x="110" y="114" width="180" height="8" fill={SCREEN_TOP} />
      <circle cx="122" cy="107" r="5" fill={BRAND} />
      <text x="132" y="111" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">pokopay</text>
      <text x="253" y="111" fill={BRAND_SOFT} fontSize="9" fontWeight="600" fontFamily="system-ui, sans-serif">● online</text>

      {/* Amount + label */}
      <text x="200" y="164" fill={SCREEN_TOP} fontSize="30" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">₦ 24,750</text>
      <text x="200" y="184" fill="#5B6472" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Order · 001A · Table 4</text>

      {/* Confirm bar */}
      <rect x="128" y="204" width="144" height="34" rx="8" fill={BRAND} />
      <text x="200" y="226" fill="white" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Approve</text>

      {/* Signal + battery row */}
      <rect x="128" y="248" width="42" height="8" rx="2" fill="#D6D0C4" />
      <rect x="230" y="248" width="42" height="8" rx="2" fill="#D6D0C4" />

      {/* Home button */}
      <circle cx="200" cy="308" r="14" fill={KEY} stroke={KEY_LIGHT} strokeWidth="2" />
      <rect x="195" y="303" width="10" height="10" rx="2" fill={KEY_LIGHT} />

      {/* Base label */}
      <rect x="176" y="342" width="48" height="4" rx="2" fill={KEY_LIGHT} />
    </svg>
  );
}
