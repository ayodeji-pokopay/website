import type { Metadata } from "next";
import { LegalShell } from "../legal-shell";

export const metadata: Metadata = {
  title: "Cookies policy",
  description: "How Pokopay uses cookies on the marketing site and dashboard.",
};

const UPDATED = "12 September 2026";

export default function Cookies() {
  return (
    <LegalShell title="Cookies policy" updated={UPDATED}>
      <p>
        This Cookies Policy explains what cookies are, which ones Pokopay uses on the
        marketing site at <a href="/">pokopayng.com</a> and on the dashboard, and how
        you can control them. It sits alongside our{" "}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What cookies are</h2>
      <p>
        A cookie is a small text file a website stores on your device so it can
        recognise your browser on your next request. Cookies can be first-party (set by
        the site you&apos;re visiting) or third-party (set by another domain the page
        embeds). They can be session cookies (deleted when you close the browser) or
        persistent (kept until they expire or you clear them).
      </p>

      <h2>2. What we use them for on the marketing site</h2>
      <p>
        The marketing site uses <strong>essential cookies only</strong>. These are
        limited to the small set of first-party cookies needed for the site to render
        correctly &mdash; for example, preserving your theme or dismissing a notice.
        We do not run advertising cookies, cross-site trackers, or third-party
        marketing pixels on the marketing site.
      </p>

      <h2>3. What the dashboard uses them for</h2>
      <p>
        The dashboard at <code>dashboard.pokopayng.com</code> uses cookies strictly to
        keep your session secure:
      </p>
      <ul>
        <li>An authentication cookie carrying the JWT for your session, flagged <code>HttpOnly</code>, <code>Secure</code> and <code>SameSite=Strict</code>.</li>
        <li>A CSRF token cookie used to protect state-changing requests.</li>
        <li>A short-lived session identifier used by our idle-timeout and cross-tab logout logic.</li>
      </ul>
      <p>
        The dashboard does not run third-party analytics or advertising cookies. If we
        ever add product analytics we will list them here and, where they are not
        strictly necessary, ask for your consent first.
      </p>

      <h2>4. Third-party services &amp; their cookies</h2>
      <p>
        Currently, none. If we adopt a hosting-level analytics tool (for example,
        Vercel&apos;s first-party analytics on the marketing site) we will name it
        here and describe what it collects. This section is the source of truth: if
        it says &quot;none&quot;, that is what is deployed.
      </p>

      <h2>5. How to control cookies</h2>
      <p>
        You can block or delete cookies at any time using your browser settings. Most
        browsers let you refuse third-party cookies wholesale, clear cookies on close,
        or exempt specific sites. Because we don&apos;t use non-essential cookies,
        clearing our cookies won&apos;t affect analytics you don&apos;t want &mdash; it
        will just log you out of the dashboard. We honour the Do Not Track (DNT) signal
        where it is meaningful for our stack.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions &mdash;{" "}
        <a href="mailto:privacy@pokopayng.com">privacy@pokopayng.com</a>.
      </p>
    </LegalShell>
  );
}
