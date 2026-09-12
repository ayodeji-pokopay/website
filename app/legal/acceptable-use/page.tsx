import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Acceptable use policy",
  description: "Uses of the Pokopay platform that are prohibited, how to report abuse, and what happens when the policy is breached.",
};

const UPDATED = "12 September 2026";

export default function AcceptableUse() {
  return (
    <LegalShell title="Acceptable use policy" updated={UPDATED}>
      <p>
        This Acceptable Use Policy (&quot;AUP&quot;) lists uses of the Pokopay platform
        that are prohibited. It applies to every Merchant, Partner, staff user and
        cardholder-facing interaction on the Services, and it is incorporated by
        reference into our <a href="/legal/terms">Terms of Service</a>.
      </p>

      <p>
        Breach of this AUP is a breach of the Terms. The escalation path below applies
        in every case; the choice of step depends on severity, recurrence and
        regulatory exposure.
      </p>

      <h2>1. Illegal goods &amp; services</h2>
      <p>
        You must not use the Services to transact in goods or services that are
        unlawful under Nigerian law, including controlled drugs, weapons and munitions,
        wildlife and other trafficked goods, and any activity that facilitates human
        trafficking, forced labour or the sexual exploitation of minors.
      </p>

      <h2>2. Fraud &amp; structuring</h2>
      <p>
        You must not knowingly submit fraudulent Transactions, present a card you are
        not authorised to use, or structure activity to evade Transaction limits,
        reporting thresholds or AML controls. This includes running your own card
        through your own Terminal to generate fake volume or manipulate settlement.
      </p>

      <h2>3. Restricted MCCs</h2>
      <p>
        Some Merchant Category Codes are restricted or require specific written
        approval before we will onboard or continue to serve:
      </p>
      <ul>
        <li>Adult content and adult services.</li>
        <li>Unlicensed financial services (including unlicensed lending and unlicensed money transmission).</li>
        <li>Unregulated cryptocurrency exchange or off-ramp businesses.</li>
        <li>Multi-level marketing (MLM) without the appropriate SEC / CAC registrations.</li>
        <li>Gambling and lottery activity outside the licensing envelope of the relevant Nigerian regulator.</li>
        <li>Pharmaceuticals sold to consumers without the applicable licence.</li>
      </ul>

      <h2>4. Sanctions &amp; embargoes</h2>
      <p>
        You must not use the Services to transact with, on behalf of, or to the benefit
        of, any person, entity or jurisdiction subject to Nigerian, UN, EU, UK or US
        sanctions or trade embargoes.
      </p>

      <h2>5. Scheme rules</h2>
      <p>
        You must not circumvent card scheme rules, including surcharging where the
        scheme forbids it, splitting a Transaction to avoid a limit, misrepresenting
        the nature of the sale to obtain a different interchange rate, or laundering
        another business&apos;s Transactions through your MID (factoring).
      </p>

      <h2>6. Platform integrity</h2>
      <p>
        You must not:
      </p>
      <ul>
        <li>Scrape, crawl or otherwise programmatically extract data from the dashboard or marketing site outside of documented APIs.</li>
        <li>Reverse-engineer, decompile or disassemble the Terminal firmware, mobile applications, or backend services.</li>
        <li>Conduct port scans, vulnerability scans or exploitation attempts against Pokopay infrastructure without an executed written testing agreement.</li>
        <li>Attempt to open, reflash, tamper with or physically compromise a Terminal, or to extract cryptographic keys from any component of the platform.</li>
        <li>Introduce malware, submit deliberately malformed input, or otherwise interfere with the availability or integrity of the Services.</li>
      </ul>

      <h2>7. Reporting abuse</h2>
      <p>
        Report suspected abuse of the platform to{" "}
        <a href="mailto:abuse@pokopayng.com">abuse@pokopayng.com</a>. For security
        vulnerabilities, use <a href="mailto:security@pokopayng.com">security@pokopayng.com</a>{" "}
        instead. Include enough detail that we can act &mdash; the Merchant name or
        MID, timestamps, the behaviour observed, and any supporting evidence &mdash;
        and expect an acknowledgement within one business day.
      </p>

      <h2>8. Consequences of breach</h2>
      <p>
        The typical escalation path, adjusted for severity and regulatory exposure:
      </p>
      <ul>
        <li><strong>Warning</strong> &mdash; written notice with the specific breach and a window to remediate.</li>
        <li><strong>Suspension</strong> &mdash; access to the dashboard, Terminals or specific features paused pending remediation.</li>
        <li><strong>Termination</strong> &mdash; the commercial relationship ends, in line with the Terms and the commercial contract.</li>
        <li><strong>Freeze pending investigation</strong> &mdash; where fraud, AML or sanctions risk is credible, Settlement may be held while we investigate and, where required, engage the acquirer and the relevant regulator.</li>
      </ul>
      <p>
        Nothing in this AUP limits our obligation to file suspicious activity reports
        or otherwise cooperate with regulators and law enforcement.
      </p>
    </LegalShell>
  );
}
