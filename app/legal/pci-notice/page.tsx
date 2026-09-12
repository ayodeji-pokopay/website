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
        buyers under NDA. For personal data more broadly see the{" "}
        <a href="/legal/privacy">Privacy Policy</a>; for the terms that govern use of
        the platform see the <a href="/legal/terms">Terms of Service</a>.
      </p>

      <h2>Scope</h2>
      <p>
        In our PCI DSS scope:
      </p>
      <ul>
        <li>The POS Terminals themselves &mdash; PCI PTS approved PIN entry devices.</li>
        <li>The network path from the Terminal to the acquirer, including any Pokopay-operated hop.</li>
        <li>The backend HSM(s) and the key management ceremonies around them.</li>
        <li>The services that receive, route or authorise Transaction messages.</li>
      </ul>
      <p>
        Out of scope, by design:
      </p>
      <ul>
        <li>The Pokopay dashboard (this web console) &mdash; it never accepts PAN, PIN, CVV or track data, and displays PAN masked to last four digits.</li>
        <li>The marketing website at <a href="/">pokopayng.com</a> &mdash; static, no CHD, no payment forms.</li>
        <li>Internal corporate systems that don&apos;t touch CHD (HR, general email, marketing tools).</li>
      </ul>

      <h2>Roles</h2>
      <ul>
        <li><strong>Merchant</strong> &mdash; the business accepting the payment. The Merchant is the &quot;merchant&quot; in scheme parlance and remains responsible for its own PCI obligations at the point of acceptance.</li>
        <li><strong>Pokopay</strong> &mdash; the service provider. We provide the Terminal fleet, the software and the routing layer; we act on the Merchant&apos;s behalf under scheme rules.</li>
        <li><strong>Acquirer</strong> &mdash; the licensed institution that holds the Merchant&apos;s MID and settles funds. The acquirer is where scheme liability lands.</li>
        <li><strong>Processor</strong> &mdash; the entity that authorises and clears Transactions on behalf of the acquirer.</li>
        <li><strong>Scheme</strong> &mdash; Visa, Mastercard, Verve and other card networks whose rules govern authorisation, clearing, disputes and PCI compliance.</li>
      </ul>

      <h2>Where CHD lives</h2>
      <p>
        Cardholder data is captured on the POS Terminal, encrypted at the point of
        capture, and transmitted to our processing partners. The Pokopay dashboard does
        not accept card numbers, PINs, CVVs or track data. Any PAN rendered to an
        operator is masked to the last four digits.
      </p>

      <h2>Cryptographic keys</h2>
      <p>
        Cryptographic key material (working keys, PIN keys, session keys) is never
        entered into or displayed in the web console. Key operations happen inside our
        backend HSM path. Terminal key rotation is orchestrated via encrypted (wrapped)
        components; the Keys tab in the console shows KCVs only.
      </p>

      <h2>PIN entry devices</h2>
      <p>
        Every Terminal deployed to a Merchant is a PIN entry device (PED) approved
        under the PCI PIN Transaction Security (PTS) programme. We track model,
        firmware and PTS approval status for every Terminal in the fleet and refuse to
        provision devices whose approval has lapsed or been revoked.
      </p>

      <h2>Access controls</h2>
      <ul>
        <li>Role-scoped access: <code>SUPER_ADMIN</code>, <code>ADMIN</code>, <code>CSA</code>, <code>OWNER</code>, <code>MANAGER</code>, <code>CASHIER</code>.</li>
        <li>Tenant isolation enforced at every read and write.</li>
        <li>Absolute session cap, idle timeout and cross-tab logout broadcast.</li>
        <li>Audit trail on every admin action (approve, suspend, terminate, key rotate, staff invite, etc).</li>
      </ul>

      <h2>Transport</h2>
      <p>
        HTTPS everywhere with HSTS (1 year, <code>includeSubDomains</code>,
        <code>preload</code>). Content-Security-Policy, <code>X-Frame-Options: DENY</code>,
        <code>nosniff</code>, strict-origin <code>Referrer-Policy</code> and a
        restrictive <code>Permissions-Policy</code> at the edge.
      </p>

      <h2>SAQ approach</h2>
      <p>
        Because we operate a shared PCI environment on behalf of Merchants and
        Partners, we are working towards validated Service Provider Level 2 status
        with a full PCI DSS Report on Compliance and the SAQ D-SP self-assessment as
        the working framework. This is a live workstream, not a finished
        certification, and the framing is deliberately aspirational until the QSA
        signs the Attestation of Compliance.
      </p>

      <h2>Reporting</h2>
      <p>
        Suspected security issues &mdash;{" "}
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
