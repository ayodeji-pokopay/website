import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Pokopay collects, uses and protects personal data.",
};

const UPDATED = "12 September 2026";

export default function Privacy() {
  return (
    <LegalShell title="Privacy policy" updated={UPDATED}>
      <p>
        This Privacy Policy explains how Pokopay collects, uses and protects personal
        data. It applies to visitors to <a href="/">pokopayng.com</a>, users of our
        dashboard and mobile applications, and merchants and staff onboarded to the
        Pokopay platform.
      </p>

      <h2>1. Data we collect</h2>
      <ul>
        <li>Account data — name, email, phone, role, employer.</li>
        <li>Merchant data — business name, MID, terminal identifiers, settlement account.</li>
        <li>Transaction metadata — timestamps, amounts, response codes, masked PAN (last 4).</li>
        <li>Device data — IP address, user agent, session timestamps.</li>
      </ul>

      <h2>2. What we don&apos;t collect</h2>
      <p>
        We do not collect full card numbers, CVV or PIN data via our dashboard. See our{" "}
        <a href="/legal/pci-notice">PCI Notice</a> for details.
      </p>

      <h2>3. How we use it</h2>
      <ul>
        <li>To operate the Services and provide support.</li>
        <li>To meet legal, regulatory and audit obligations.</li>
        <li>To detect and prevent fraud, abuse and security incidents.</li>
        <li>To improve the Services (aggregated, non-identifying analytics).</li>
      </ul>

      <h2>4. Sharing</h2>
      <p>
        We share personal data only with (a) acquirers and processors necessary to
        settle transactions, (b) regulators when required by law, (c) sub-processors
        bound by contract to protect the data (e.g. our cloud provider). We do not sell
        personal data.
      </p>

      <h2>5. Retention</h2>
      <p>
        Personal data is retained for as long as needed to operate the Services and to
        meet applicable retention obligations under Nigerian financial regulation.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Under the Nigeria Data Protection Act you have rights to access, correct, port
        and (subject to limits) delete personal data we hold about you. Contact{" "}
        <a href="mailto:privacy@pokopayng.com">privacy@pokopayng.com</a> to exercise
        these rights.
      </p>

      <h2>7. Security</h2>
      <p>
        Data at rest in Africa-adjacent AWS regions with encryption at rest and in
        transit. Access to production systems is role-scoped and audited. See our{" "}
        <a href="/security">Security</a> page for the broader posture.
      </p>

      <h2>8. Cookies</h2>
      <p>
        The marketing website uses only essential cookies. The dashboard uses secure
        cookies for authentication (SameSite=Strict). We do not use cross-site
        advertising cookies.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions or complaints —{" "}
        <a href="mailto:privacy@pokopayng.com">privacy@pokopayng.com</a>. Where required,
        you may also raise a complaint with the Nigeria Data Protection Commission.
      </p>

      <p className="mt-10 text-sm text-[color:var(--color-ink-faint)]">
        Placeholder policy — engage counsel before treating as final.
      </p>
    </LegalShell>
  );
}
