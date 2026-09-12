import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms of service governing the use of Pokopay's platform and services.",
  robots: { index: true, follow: true },
};

const UPDATED = "12 September 2026";

export default function Terms() {
  return (
    <LegalShell title="Terms of service" updated={UPDATED}>
      <p>
        These Terms of Service (the &quot;Terms&quot;) govern your access to and use of the
        Pokopay platform, including our dashboard, mobile applications, POS software and
        associated services (together, the &quot;Services&quot;). By using the Services you
        agree to these Terms. Commercial specifics &mdash; pricing, settlement cadence,
        SLAs, exclusivity &mdash; live in a separate signed commercial contract; where
        the two documents disagree, the commercial contract governs.
      </p>

      <h2>1. Introduction &amp; who we are</h2>
      <p>
        The Services are provided by Pokopay (&quot;Pokopay&quot;, &quot;we&quot;,
        &quot;us&quot;, &quot;our&quot;), a company organised under the laws of the
        Federal Republic of Nigeria with its head office in Lagos. Our RC number is
        RC pending and will be published here once registration is finalised. General
        enquiries: <a href="mailto:hello@pokopayng.com">hello@pokopayng.com</a>.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li><strong>Merchant</strong> &mdash; a business onboarded to accept payments through Pokopay.</li>
        <li><strong>Partner</strong> &mdash; an acquirer, CSA (Card Scheme Associate) or reseller working with Pokopay under a written agreement.</li>
        <li><strong>Terminal</strong> &mdash; a PCI PTS approved PIN entry device deployed to a Merchant to accept card-present transactions.</li>
        <li><strong>Transaction</strong> &mdash; any payment authorisation, capture, refund or reversal processed through the Services.</li>
        <li><strong>Settlement</strong> &mdash; the transfer of a Merchant&apos;s net proceeds (gross Transactions less fees and adjustments) to their nominated bank account.</li>
        <li><strong>MID</strong> &mdash; Merchant Identifier issued by the acquirer.</li>
        <li><strong>TID</strong> &mdash; Terminal Identifier bound to a specific Terminal at a specific Merchant location.</li>
        <li><strong>JWT</strong> &mdash; the signed JSON Web Token issued by Pokopay to authenticate a dashboard or API session.</li>
        <li><strong>CHD</strong> &mdash; cardholder data, as defined by the PCI DSS.</li>
        <li><strong>HSM</strong> &mdash; hardware security module used for cryptographic key operations.</li>
      </ul>

      <h2>3. Eligibility &amp; KYC</h2>
      <p>
        To use the Services you must be lawfully able to form a binding contract under
        applicable Nigerian law. All Merchants are subject to Know Your Customer (KYC)
        and Know Your Business (KYB) checks aligned with the Nigerian AML/CFT regime,
        including the Central Bank of Nigeria&apos;s AML/CFT Regulations, the Money
        Laundering (Prevention and Prohibition) Act 2022 and applicable NFIU guidance.
      </p>
      <p>
        We screen against Nigerian and international sanctions and PEP (Politically
        Exposed Persons) lists. PEP relationships are permitted but subject to enhanced
        due diligence and, where applicable, senior-management approval. We may decline
        or exit relationships that we cannot risk-rate to our satisfaction, without
        being required to give reasons beyond what regulation obliges.
      </p>

      <h2>4. Account creation &amp; credentials</h2>
      <p>
        Access to the dashboard is issued by invitation. Every user has an explicit role
        that scopes what they can see and do:
      </p>
      <ul>
        <li><code>SUPER_ADMIN</code> &mdash; Pokopay platform operators.</li>
        <li><code>ADMIN</code> &mdash; Pokopay staff with elevated but scoped rights.</li>
        <li><code>CSA</code> &mdash; Card Scheme Associate operators, scoped to their portfolio.</li>
        <li><code>OWNER</code> &mdash; the Merchant principal, with full rights inside their tenancy.</li>
        <li><code>MANAGER</code> &mdash; delegated Merchant operator (staff, terminals, reporting).</li>
        <li><code>CASHIER</code> &mdash; read-mostly role, transaction acceptance at the terminal.</li>
      </ul>
      <p>
        You are responsible for keeping credentials confidential, for enforcing MFA
        where offered, and for every action taken under your account. Notify us
        immediately of any suspected unauthorised access at{" "}
        <a href="mailto:security@pokopayng.com">security@pokopayng.com</a>.
      </p>

      <h2>5. Merchant onboarding</h2>
      <p>
        Onboarding requires, at a minimum, incorporation documents (CAC certificate,
        status report, memorandum &amp; articles), the beneficial owners&apos;
        identification, proof of the Merchant&apos;s business address, tax identification
        (TIN) and settlement account details. Additional documents may be requested for
        higher-risk MCCs. Onboarding timelines are set in your commercial contract; this
        page does not create a service level around them.
      </p>

      <h2>6. Fees, settlement &amp; taxes</h2>
      <p>
        Fees, MDR splits and settlement cadence &mdash; typically T+0 or T+1 depending
        on the acquirer &mdash; are set out in your commercial contract. No fee waivers
        or grace periods apply by default: any waiver must be documented in writing and
        signed by an authorised Pokopay signatory. Amounts are stated exclusive of VAT
        and other applicable taxes unless expressly stated otherwise; you are
        responsible for taxes you owe on your own income.
      </p>

      <h2>7. Chargebacks, refunds &amp; disputes</h2>
      <p>
        Chargebacks, refunds and retrieval requests are governed by the applicable card
        scheme rules (Visa Core Rules, Mastercard Chargeback Guide and equivalents for
        Verve and other domestic schemes). You agree to respond to retrieval requests
        within the window set by the scheme, generally not more than seven (7) business
        days from our notice, and to provide the supporting evidence we reasonably
        request. Where a chargeback is upheld against a Merchant we will debit the
        disputed amount plus any scheme-imposed fees from the next Settlement.
      </p>

      <h2>8. Terminals</h2>
      <p>
        Terminals deployed to a Merchant are, unless a separate purchase agreement says
        otherwise, loaned. Title remains with Pokopay, the Merchant is responsible for
        reasonable care while in possession, and Terminals must be returned in working
        condition on termination. Damage beyond fair wear and tear will be assessed and
        chargeable. Cryptographic key material provisioned to a Terminal never leaves
        the HSM path (see our{" "}
        <a href="/legal/pci-notice">PCI Notice</a>) and Merchants must not attempt to
        open, reflash or tamper with Terminals.
      </p>

      <h2>9. Acceptable use</h2>
      <p>
        Your use of the Services is subject to our{" "}
        <a href="/legal/acceptable-use">Acceptable Use Policy</a>, which lists
        prohibited use categories and the reporting mechanism for abuse. Breach of the
        Acceptable Use Policy is a breach of these Terms.
      </p>

      <h2>10. Data &amp; privacy</h2>
      <p>
        Our handling of personal data is described in our{" "}
        <a href="/legal/privacy">Privacy Policy</a>. Our use of cookies is described in
        our <a href="/legal/cookies">Cookies Policy</a>. Both policies are incorporated
        into these Terms by reference.
      </p>

      <h2>11. Cardholder data &amp; PCI</h2>
      <p>
        We handle cardholder data as described in our{" "}
        <a href="/legal/pci-notice">PCI Notice</a>. The dashboard never accepts full
        PAN, PIN, CVV or track data; PAN is masked to last four digits at every render.
      </p>

      <h2>12. Third-party services</h2>
      <p>
        Delivering the Services depends on third parties &mdash; acquirers, card
        schemes, processors, cloud infrastructure, email vendors and telemetry
        providers. Their availability, SLAs and terms flow through to you on a
        pass-through basis: we cannot commit to more than the underlying provider
        commits to us. Where a third party fails, we will use commercially reasonable
        efforts to mitigate and to communicate.
      </p>

      <h2>13. Uptime &amp; maintenance</h2>
      <p>
        We target high availability for the dashboard and APIs. Any specific uptime
        commitment, credit or remedy is a matter for the commercial contract; the
        target on this page is aspirational, not contractual. Planned maintenance is
        communicated in the dashboard and by email where practical.
      </p>

      <h2>14. Intellectual property</h2>
      <p>
        The Services, including all associated software, documentation, brand assets
        and other intellectual property, are the property of Pokopay and its licensors.
        Nothing in these Terms transfers ownership. You get a non-exclusive,
        non-transferable, revocable licence to use the Services for their intended
        purpose during the term of the commercial contract.
      </p>

      <h2>15. Confidentiality</h2>
      <p>
        Each party will treat the other&apos;s non-public information as confidential
        and will use it only to perform under these Terms and the commercial contract.
        Standard exceptions apply (public information, information received from a
        third party without duty of confidence, information independently developed,
        disclosures required by law or regulator).
      </p>

      <h2>16. Indemnification</h2>
      <p>
        Each party will indemnify the other against third-party claims arising from its
        own breach of these Terms, its violation of applicable law, or its infringement
        of third-party intellectual property. Indemnification is capped at the amount
        set in the commercial contract; absent a specific cap, at the fees paid or
        payable in the twelve (12) months preceding the claim.
      </p>

      <h2>17. Disclaimers &amp; limitation of liability</h2>
      <p>
        The Services are provided &quot;as is&quot; and &quot;as available&quot; without
        warranty of any kind, express or implied, except as expressly stated in the
        commercial contract. To the maximum extent permitted by Nigerian law,
        Pokopay&apos;s aggregate liability under these Terms is limited to the fees
        paid by you to Pokopay in the twelve (12) months preceding the event giving
        rise to the claim. Neither party is liable for indirect, consequential or loss
        of profit damages. Nothing in this clause limits liability that cannot be
        limited under Nigerian law.
      </p>

      <h2>18. Force majeure</h2>
      <p>
        Neither party is liable for delay or failure caused by events beyond its
        reasonable control &mdash; including natural disasters, civil unrest,
        governmental action, telecommunications and power failures, and cyber attacks
        &mdash; provided it takes reasonable steps to mitigate and to resume
        performance.
      </p>

      <h2>19. Suspension &amp; termination</h2>
      <p>
        We may suspend or terminate access for cause &mdash; including non-payment,
        breach of these Terms, breach of the Acceptable Use Policy, or conduct that
        risks the security, reputation or regulatory standing of the platform
        &mdash; with immediate effect where the risk requires it, or after notice
        and opportunity to cure where the breach is capable of cure. Termination for
        convenience is governed by the commercial contract; absent a specific notice
        period there, thirty (30) days&apos; written notice by either party.
      </p>

      <h2>20. Governing law &amp; dispute resolution</h2>
      <p>
        These Terms are governed by the laws of the Federal Republic of Nigeria.
        Disputes will be resolved in the courts of Lagos, unless the commercial
        contract provides for arbitration, in which case that clause governs.
      </p>

      <h2>21. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be notified
        via the dashboard or by email at least thirty (30) days before they take
        effect. Continued use of the Services after the effective date constitutes
        acceptance of the updated Terms.
      </p>

      <h2>22. Notices</h2>
      <p>
        Notices to Pokopay should be sent to{" "}
        <a href="mailto:legal@pokopayng.com">legal@pokopayng.com</a> and, for security
        matters, to{" "}
        <a href="mailto:security@pokopayng.com">security@pokopayng.com</a>. Notices to
        you may be given via the email address on file or through the dashboard.
      </p>

      <h2>23. Contact</h2>
      <p>
        General &mdash; <a href="mailto:hello@pokopayng.com">hello@pokopayng.com</a>.
        Privacy &mdash; <a href="mailto:privacy@pokopayng.com">privacy@pokopayng.com</a>.
        Abuse &mdash; <a href="mailto:abuse@pokopayng.com">abuse@pokopayng.com</a>.
      </p>
    </LegalShell>
  );
}
