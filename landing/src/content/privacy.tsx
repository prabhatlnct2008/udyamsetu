import type { ReactNode } from 'react';

export const POLICY_LAST_UPDATED = '6 May 2026';

interface Section {
  id: string;
  heading: string;
  body: ReactNode;
}

export const PRIVACY_INTRO: ReactNode = (
  <>
    <p>
      UdyamSetu Growth Studio (&ldquo;UdyamSetu&rdquo;, &ldquo;we&rdquo;,
      &ldquo;us&rdquo;) builds AI, SEO, website, and lead-generation systems
      for Indian businesses. This page explains what information we collect
      when you use this website, why we collect it, how we use it, and the
      rights you have over it.
    </p>
    <p>
      We aim to be plain about this. If anything below is unclear, message us
      on WhatsApp at +918882567801 and we will explain or amend.
    </p>
  </>
);

export const PRIVACY_SECTIONS: Section[] = [
  {
    id: 'what-we-collect',
    heading: '1. What we collect',
    body: (
      <>
        <p>We only collect what we need to respond to enquiries and operate the site.</p>
        <h3 className="mt-4 font-semibold text-[#1F2A6D]">Information you give us directly</h3>
        <p>
          When you fill the lead form on a campaign landing page (for example
          our ₹6,000 launch offer at <code>/70-discount-offering</code>) or
          contact us through any other form on this website, you may share:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Your name</li>
          <li>Your WhatsApp number</li>
          <li>Your business name and business type</li>
          <li>Your locality (e.g. Saket, Greater Kailash)</li>
          <li>Your existing website or social handle (optional)</li>
          <li>A short note describing your marketing problem (optional)</li>
          <li>Your consent to be contacted by us on WhatsApp</li>
        </ul>

        <h3 className="mt-4 font-semibold text-[#1F2A6D]">Information collected automatically</h3>
        <p>
          When you visit any page on this site, our analytics providers
          collect technical data such as your IP address (truncated by Google
          Analytics in many regions), device and browser type, referring URL,
          pages viewed, time spent, and approximate location at city level.
          We use this in aggregate to improve the site and our advertising;
          we do not try to identify individual visitors from this data.
        </p>
        <p className="mt-2">
          Where required by law (for example, the EU and UK), our analytics
          tools support consent banners. In India, we follow the Digital
          Personal Data Protection Act, 2023 and ask for consent before
          contacting you on WhatsApp.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: '2. How we use this information',
    body: (
      <>
        <p>We use the information you provide to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Send you the proposal, audit, or material you requested</li>
          <li>Reply to your WhatsApp enquiry once and follow up if you have asked us to</li>
          <li>Build, deliver, and support the marketing services you have asked for</li>
          <li>Issue invoices and meet our tax / accounting obligations</li>
          <li>Improve our website, page copy, ad targeting, and services</li>
        </ul>
        <p className="mt-3">
          We will not use your details to sell you unrelated services, sign you
          up to bulk newsletters without consent, or share your contact data
          with other agencies.
        </p>
      </>
    ),
  },
  {
    id: 'cookies-and-tracking',
    heading: '3. Cookies and tracking technologies',
    body: (
      <>
        <p>This site uses a small number of cookies and similar technologies:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Google Analytics 4</strong> (gtag.js). Sets cookies such as
            <code>_ga</code> and <code>_ga_*</code> to measure pages, sessions,
            and conversions. We do not link this data to individual identities.
          </li>
          <li>
            <strong>Meta (Facebook) Pixel</strong>. Used only on our paid
            campaign landing pages when configured. It helps us measure
            ad performance and shows your ads only to people who fit a
            similar audience. You can opt out of ad personalisation in your
            Facebook account settings.
          </li>
          <li>
            <strong>UdyamSetu UX cookies</strong>. We set a small cookie
            (<code>udyamsetu_exit_shown</code>) that lasts 24 hours so the
            exit-intent prompt does not show twice in the same day.
          </li>
          <li>
            <strong>Search Console verification</strong>. A meta tag in the
            page <code>&lt;head&gt;</code> verifies that we control this
            domain. It does not set cookies and does not collect personal data.
          </li>
        </ul>
        <p className="mt-3">
          You can clear cookies in your browser settings or use private /
          incognito browsing to limit collection. Doing so may cause some
          features (form auto-fill, exit-intent throttling) to behave
          differently.
        </p>
      </>
    ),
  },
  {
    id: 'sharing-and-disclosure',
    heading: '4. Sharing and disclosure',
    body: (
      <>
        <p>
          We do <strong>not</strong> sell, rent, or trade your personal
          information. We share information only in the following limited
          situations:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Service providers we use to run the site.</strong> Hosting
            (Vercel), database (Turso, libSQL on AWS), analytics (Google
            Analytics 4), advertising (Meta), email and WhatsApp delivery
            providers, and payment processors. They process data on our
            instructions only.
          </li>
          <li>
            <strong>If you become a customer.</strong> Within the UdyamSetu
            team that builds and supports your project. Team members are
            bound by confidentiality.
          </li>
          <li>
            <strong>Legal compliance.</strong> If we are legally required to
            disclose information by an Indian authority or court, or to defend
            a claim. We will resist over-broad requests where reasonable.
          </li>
        </ul>
        <p className="mt-3">
          Some of these providers (for example Google and Meta) operate
          outside India. By using this site you consent to the transfer of
          your data to those jurisdictions, where it is protected under the
          provider&apos;s contractual safeguards.
        </p>
      </>
    ),
  },
  {
    id: 'security-and-storage',
    heading: '5. Storage and security',
    body: (
      <>
        <p>
          Lead-form submissions are stored in our managed Turso (libSQL)
          database, accessed over TLS using authenticated tokens that are
          rotated periodically. The application code runs on Vercel with
          standard production-grade security defaults.
        </p>
        <p className="mt-2">
          We restrict access to lead data to UdyamSetu team members who need
          it to do their job. We do not export lead lists to third parties.
        </p>
        <p className="mt-2">
          No system is perfectly secure. If we ever become aware of a breach
          that affects your personal data, we will notify you and the
          relevant Indian authority as required by the Digital Personal Data
          Protection Act, 2023.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    heading: '6. Your rights',
    body: (
      <>
        <p>
          Under the Digital Personal Data Protection Act, 2023 (and similar
          laws where applicable), you have the right to:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Ask us what personal data we hold about you</li>
          <li>Ask us to correct it if it is wrong</li>
          <li>Ask us to delete it (subject to records we must legally keep, such as invoices)</li>
          <li>Withdraw consent for future WhatsApp follow-up at any time</li>
          <li>Nominate someone to act on your behalf in the event of incapacity</li>
          <li>Lodge a complaint with the Data Protection Board of India if you believe we have mishandled your data</li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, message us on WhatsApp at
          +918882567801 with the request and the email or WhatsApp number
          you used. We will respond within a reasonable time, typically
          within 7 working days.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    heading: '7. How long we keep your data',
    body: (
      <>
        <p>We keep personal data only as long as we need it.</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Lead enquiries that do not become customers:</strong> up
            to 24 months from the last contact, then deleted or anonymised.
          </li>
          <li>
            <strong>Customer records:</strong> for the duration of our
            engagement, plus the period required by Indian tax and accounting
            law (currently up to 8 years for invoices and contracts).
          </li>
          <li>
            <strong>Analytics aggregates:</strong> retained per Google
            Analytics 4 default settings (we use the standard 14-month event
            data retention setting unless changed).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'children',
    heading: '8. Children',
    body: (
      <p>
        This website and our services are intended for business owners and
        adults. We do not knowingly collect personal data from anyone under
        the age of 18. If you believe a minor has submitted a form to us,
        message us on WhatsApp and we will delete the record.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    heading: '9. Third-party links',
    body: (
      <p>
        Some pages on this site link to third-party websites, including our
        portfolio examples, social media accounts, and review profiles. Once
        you click those links you are on someone else&apos;s site, governed
        by their privacy policies. We are not responsible for their practices.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '10. Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time when our practices
        change. The &ldquo;Last updated&rdquo; date at the top of this page
        will reflect the most recent change. For material changes that affect
        existing customers, we will reach out on WhatsApp to inform you.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '11. Contact us',
    body: (
      <>
        <p>For any privacy-related question, request, or complaint:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>WhatsApp: +918882567801</li>
          <li>
            Web:{' '}
            <a
              className="text-[#1F2A6D] underline"
              href="https://wa.me/918882567801?text=Hi%2C%20I%20have%20a%20privacy%20question."
              target="_blank"
              rel="noopener noreferrer"
            >
              wa.me/918882567801
            </a>
          </li>
        </ul>
        <p className="mt-3">
          We do our best to reply within 1–2 working days.
        </p>
      </>
    ),
  },
];

interface PolicyProps {
  variant?: 'privacy' | 'terms';
}

export function PolicyContent({ variant = 'privacy' }: PolicyProps) {
  const isTerms = variant === 'terms';
  return (
    <article className="prose-like">
      <p className="text-sm text-[#1A1A1A]/60">
        Last updated: {POLICY_LAST_UPDATED}
      </p>

      {isTerms && (
        <section className="mt-6 p-5 rounded-xl bg-[#FFF6E8] border border-[#E9D8C3]">
          <h2 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            Terms of Use
          </h2>
          <p className="mt-3 text-[#1A1A1A]/85">
            By using this website you agree to use it for lawful business
            purposes only. The content, design, and code on{' '}
            <code>udyamsetuai.in</code> are the property of UdyamSetu Growth
            Studio and may not be copied, scraped, or republished without
            written permission. Pricing and offers shown on campaign pages are
            subject to the cohort and validity dates stated on those pages and
            may change without notice. We provide marketing services and do
            not guarantee specific lead volumes, rankings, or sales — we
            guarantee the deliverables described in the relevant proposal.
          </p>
          <p className="mt-3 text-[#1A1A1A]/85">
            The privacy policy below covers how we collect and use the
            information you share with us through this site.
          </p>
        </section>
      )}

      <section className="mt-8 space-y-4 text-[#1A1A1A]/85">
        <h2 className="text-2xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
          Privacy Policy
        </h2>
        {PRIVACY_INTRO}
      </section>

      <nav
        aria-label="Privacy policy contents"
        className="mt-8 p-5 rounded-xl bg-white border border-[#E9D8C3]"
      >
        <p className="text-sm font-semibold text-[#1F2A6D] uppercase tracking-wider">
          On this page
        </p>
        <ol className="mt-3 grid sm:grid-cols-2 gap-1 text-sm">
          {PRIVACY_SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-[#1F2A6D] hover:text-[#FF8A00] transition-colors"
              >
                {s.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-10">
        {PRIVACY_SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              {s.heading}
            </h2>
            <div className="mt-3 text-[#1A1A1A]/85 space-y-3 leading-relaxed">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
