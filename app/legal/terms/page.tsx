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
        agree to these Terms.
      </p>

      <h2>1. Who we are</h2>
      <p>
        The Services are provided by Pokopay, a company organised under the laws of the
        Federal Republic of Nigeria. Contact us at{" "}
        <a href="mailto:hello@pokopayng.com">hello@pokopayng.com</a>.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You may use the Services only if you can form a binding contract with Pokopay
        under applicable law, and are not barred from receiving services under any
        applicable regulation.
      </p>

      <h2>3. Accounts</h2>
      <p>
        You are responsible for keeping your account credentials confidential and for all
        activity that occurs under your account. Notify us immediately of any suspected
        unauthorised access at <a href="mailto:security@pokopayng.com">security@pokopayng.com</a>.
      </p>

      <h2>4. Use of the Services</h2>
      <p>
        You agree not to misuse the Services, including but not limited to attempting to
        access non-public areas, disrupting the platform, or using the Services in
        violation of applicable law or the rights of third parties.
      </p>

      <h2>5. Fees & settlement</h2>
      <p>
        Fees and settlement terms are set out in your commercial contract with Pokopay
        or your acquiring partner. All amounts are net of applicable taxes unless
        otherwise stated.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        The Services, including all associated intellectual property, are the property
        of Pokopay and its licensors. Nothing in these Terms transfers any ownership
        rights to you.
      </p>

      <h2>7. Data & privacy</h2>
      <p>
        Our handling of personal data is described in our{" "}
        <a href="/legal/privacy">Privacy Policy</a>. Handling of cardholder data is
        described in our <a href="/legal/pci-notice">PCI Notice</a>.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate access to the Services for cause, including
        non-payment, breach, or conduct that risks the security or reputation of the
        platform. You may terminate your account at any time by contacting us in
        writing.
      </p>

      <h2>9. Disclaimers & liability</h2>
      <p>
        The Services are provided &quot;as is&quot; without warranty of any kind, express
        or implied. To the maximum extent permitted by law, Pokopay&apos;s aggregate
        liability under these Terms is limited to the fees paid by you to Pokopay in the
        twelve (12) months preceding the event giving rise to the claim.
      </p>

      <h2>10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Federal Republic of Nigeria. Any
        dispute arising out of these Terms will be resolved in the courts of Lagos,
        unless otherwise agreed in a written commercial contract between the parties.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be notified
        via the dashboard or by email at least 30 days before they take effect.
      </p>

      <p className="mt-10 text-sm text-[color:var(--color-ink-faint)]">
        This page is a placeholder. Have your lawyers review it before you rely on it in
        production.
      </p>
    </LegalShell>
  );
}
