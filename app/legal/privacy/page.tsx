import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Pokopay collects, uses and protects personal data under the Nigeria Data Protection Act 2023.",
};

const UPDATED = "12 September 2026";

export default function Privacy() {
  return (
    <LegalShell title="Privacy policy" updated={UPDATED}>
      <p>
        This Privacy Policy explains how Pokopay collects, uses and protects personal
        data. It is written to align with the Nigeria Data Protection Act 2023
        (&quot;NDPA&quot;) and guidance issued by the Nigeria Data Protection
        Commission (&quot;NDPC&quot;). Where the NDPA uses the term &quot;data
        subject&quot;, we say &quot;you&quot;.
      </p>

      <h2>1. Who this policy applies to</h2>
      <p>
        This policy applies to visitors to <a href="/">pokopayng.com</a>, users of the
        Pokopay dashboard and mobile applications, staff of Merchants and Partners
        onboarded to the platform, and cardholders whose Transactions we process on
        behalf of a Merchant. Pokopay is the data controller for account, staff and
        marketing data; for Transaction data we generally act as a data processor on
        behalf of the Merchant and their acquirer.
      </p>

      <h2>2. Data we collect</h2>
      <ul>
        <li><strong>Account data</strong> &mdash; name, work email, phone, role, employer, MFA status.</li>
        <li><strong>Merchant data</strong> &mdash; business name, RC / TIN, addresses, MID, TIDs, settlement account.</li>
        <li><strong>Transaction metadata</strong> &mdash; timestamps, amounts, response codes, RRN, masked PAN (last 4).</li>
        <li><strong>Device &amp; network data</strong> &mdash; IP address, user agent, session identifiers, timestamps.</li>
        <li><strong>KYC / KYB documents</strong> &mdash; ID documents, proof of address, corporate registrations, beneficial-owner declarations.</li>
        <li><strong>Staff invite data</strong> &mdash; email, role, invite state, acceptance timestamps.</li>
        <li><strong>Terminal telemetry</strong> &mdash; serial, firmware, last-seen, health signals, key check values (KCVs).</li>
      </ul>

      <h2>3. What we don&apos;t collect</h2>
      <p>
        We do not collect or retain full Primary Account Numbers (PAN), Personal
        Identification Numbers (PIN), Card Verification Values (CVV / CVV2) or magnetic
        stripe / chip track data through the dashboard. Where these are processed at
        the Terminal, they are encrypted at capture and handled entirely inside the
        PCI-scoped path (see the <a href="/legal/pci-notice">PCI Notice</a>).
      </p>

      <h2>4. Lawful bases</h2>
      <p>We rely on the following lawful bases under section 25 of the NDPA:</p>
      <ul>
        <li><strong>Contract</strong> &mdash; to onboard a Merchant, provision Terminals, settle Transactions, and provide support.</li>
        <li><strong>Legal obligation</strong> &mdash; to meet CBN, NFIU, FIRS and NDPC obligations; to respond to lawful requests from regulators, law enforcement and the courts.</li>
        <li><strong>Legitimate interests</strong> &mdash; to secure the platform, detect fraud, prevent abuse, keep audit trails, and improve the Services with non-identifying analytics. Where we rely on legitimate interests we balance them against your rights and freedoms and record the assessment.</li>
        <li><strong>Consent</strong> &mdash; for optional communications and any non-essential cookies (we currently use none).</li>
      </ul>

      <h2>5. How we use it</h2>
      <ul>
        <li>Operate the dashboard, mobile apps and Terminals, and provide support.</li>
        <li>Authenticate users, enforce role scopes, and issue and rotate credentials.</li>
        <li>Route and reconcile Transactions with acquirers and processors.</li>
        <li>Detect, investigate and prevent fraud, abuse and security incidents.</li>
        <li>Meet AML / CFT, tax, data-protection and audit obligations.</li>
        <li>Improve the Services using aggregated, non-identifying analytics.</li>
        <li>Communicate service messages (billing, outages, security notices).</li>
      </ul>

      <h2>6. Sharing</h2>
      <p>We share personal data only with the following categories of recipient:</p>
      <ul>
        <li><strong>Acquirers and card schemes</strong> &mdash; to authorise, clear and settle Transactions.</li>
        <li><strong>Payment processors</strong> &mdash; to route Transactions and manage disputes.</li>
        <li><strong>Cloud infrastructure providers</strong> &mdash; hosting, storage, managed databases.</li>
        <li><strong>Email &amp; messaging vendors</strong> &mdash; to deliver invites, receipts and service notices.</li>
        <li><strong>Auditors and professional advisers</strong> &mdash; under confidentiality.</li>
        <li><strong>Regulators and law enforcement</strong> &mdash; where lawfully required.</li>
      </ul>
      <p>
        We do not sell personal data and we do not share personal data for cross-context
        behavioural advertising.
      </p>

      <h2>7. International transfers</h2>
      <p>
        We prefer processing in Africa-adjacent AWS regions and keep the primary data
        plane close to Nigerian users. Where a transfer outside Nigeria is necessary
        &mdash; for example to a card scheme or to a global processor &mdash; we rely
        on the safeguards permitted under section 41 of the NDPA, including adequacy,
        binding contractual protections, and, where applicable, your specific and
        informed consent.
      </p>

      <h2>8. Retention</h2>
      <ul>
        <li><strong>Transaction records</strong> &mdash; retained for at least seven (7) years in line with CBN record-keeping requirements.</li>
        <li><strong>KYC / KYB documents</strong> &mdash; retained for five (5) years after the end of the customer relationship, in line with the AML / CFT regime.</li>
        <li><strong>Terminal telemetry</strong> &mdash; kept on a rolling window sized to operational need, then aggregated or deleted.</li>
        <li><strong>Marketing contact data</strong> &mdash; retained until you opt out or two (2) years of inactivity.</li>
        <li><strong>Security &amp; audit logs</strong> &mdash; retained for at least one (1) year, longer where the incident record demands it.</li>
      </ul>

      <h2>9. Your rights under the NDPA</h2>
      <p>Subject to the limits and exceptions in the NDPA you have the right to:</p>
      <ul>
        <li>Access personal data we hold about you.</li>
        <li>Have inaccurate or incomplete personal data rectified.</li>
        <li>Request erasure of personal data (subject to our retention obligations).</li>
        <li>Receive your personal data in a portable, machine-readable format.</li>
        <li>Object to processing based on legitimate interests.</li>
        <li>Withdraw consent where processing is based on consent.</li>
        <li>Lodge a complaint with the NDPC.</li>
      </ul>

      <h2>10. How to exercise rights</h2>
      <p>
        Contact <a href="mailto:privacy@pokopayng.com">privacy@pokopayng.com</a>. We
        will verify your identity before acting on a request &mdash; typically by
        matching against the email, phone or role on file, and, for higher-risk
        requests, by asking for corroborating information. We aim to respond
        substantively within thirty (30) days; if we need more time we will tell you
        why and by when.
      </p>

      <h2>11. Security</h2>
      <p>
        We encrypt data at rest and in transit, scope access by role, log admin actions,
        and monitor for anomalies. For the broader security posture see our{" "}
        <a href="/security">Security</a> page and, for cardholder data specifically, the{" "}
        <a href="/legal/pci-notice">PCI Notice</a>.
      </p>

      <h2>12. Cookies</h2>
      <p>
        Our use of cookies is described in the{" "}
        <a href="/legal/cookies">Cookies Policy</a>. The marketing site uses essential
        cookies only; the dashboard uses secure authentication cookies with
        <code>SameSite=Strict</code>. We do not use cross-site advertising cookies.
      </p>

      <h2>13. Automated decision-making</h2>
      <p>
        We do not use fully automated decisions that produce legal or similarly
        significant effects on you. We do use automated signals to score fraud and
        risk, but any decision to suspend a Merchant, block a Transaction or exit a
        relationship involves human review.
      </p>

      <h2>14. Children</h2>
      <p>
        The Services are not directed at people under 18 and we do not knowingly
        collect personal data from children. If you believe we hold personal data of a
        child, contact <a href="mailto:privacy@pokopayng.com">privacy@pokopayng.com</a>
        {" "}and we will delete it.
      </p>

      <h2>15. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Material changes will be
        communicated by email or through the dashboard at least thirty (30) days
        before they take effect. The &quot;Last updated&quot; date at the top of the
        page always reflects the current version.
      </p>

      <h2>16. Contact &amp; complaints</h2>
      <p>
        Privacy questions or complaints &mdash;{" "}
        <a href="mailto:privacy@pokopayng.com">privacy@pokopayng.com</a>. If you are not
        satisfied with our response you may escalate to the Nigeria Data Protection
        Commission (NDPC).
      </p>
    </LegalShell>
  );
}
