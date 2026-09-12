import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "PCI notice",
  description: "How Pokopay handles cardholder data and its PCI DSS posture.",
};

const UPDATED = "12 September 2026";

export default function PciNotice() {
  return (
    <LegalShell title="PCI notice" updated={UPDATED}>
      <p>
        This notice summarises how Pokopay handles cardholder data (CHD) and describes
        our PCI DSS posture. It is a plain-English complement to our full security
        documentation, which we&apos;re happy to share with prospective partners and
        buyers under NDA.
      </p>

      <h2>Where CHD lives</h2>
      <p>
        Cardholder data is captured on the POS terminal, encrypted at the point of
        capture, and transmitted to our processing partners. The Pokopay dashboard
        (this web console) does not accept card numbers, PINs, CVVs or track data. Any
        PAN rendered to an operator is masked to the last four digits.
      </p>

      <h2>Cryptographic keys</h2>
      <p>
        Cryptographic key material (working keys, PIN keys, session keys) is never
        entered into or displayed in the web console. Key operations happen inside our
        backend HSM path. Terminal key rotation is orchestrated via encrypted (wrapped)
        components; the Keys tab in the console shows KCVs only.
      </p>

      <h2>Access controls</h2>
      <ul>
        <li>Role-scoped access: SUPER_ADMIN, ADMIN, CSA, MERCHANT, OWNER, MANAGER, CASHIER.</li>
        <li>Tenant isolation enforced at every read and write.</li>
        <li>Absolute session cap, idle timeout and cross-tab logout broadcast.</li>
        <li>Audit trail on every admin action (approve, suspend, terminate, key rotate, staff invite, etc).</li>
      </ul>

      <h2>Transport</h2>
      <p>
        HTTPS everywhere with HSTS (1 year, includeSubDomains, preload). Content-Security
        -Policy, X-Frame-Options DENY, nosniff, strict-origin Referrer-Policy and a
        restrictive Permissions-Policy at the edge.
      </p>

      <h2>Reporting</h2>
      <p>
        Suspected security issues —{" "}
        <a href="mailto:security@pokopayng.com">security@pokopayng.com</a>.
      </p>

      <h2>Status</h2>
      <p>
        Formal PCI DSS certification is in progress. This notice is intentionally
        transparent about the posture we&apos;ve designed the platform to meet, in
        advance of the paperwork.
      </p>

      <p className="mt-10 text-sm text-[color:var(--color-ink-faint)]">
        This is a public summary. The formal Attestation of Compliance and our
        supporting evidence are available under NDA.
      </p>
    </LegalShell>
  );
}
