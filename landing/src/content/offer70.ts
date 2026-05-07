export const OFFER_SLUG = '70-discount-offering';
export const PROPOSAL_PDF_PATH = '/guides/UdyamSetu_AI_Complete_Proposal.pdf';

// v2 pricing — anchor moves up so the discount math is honest.
// ₹65,000 reflects the real ₹55K–₹85K mid-tier Delhi agency band for these
// four deliverables. ₹19,500 is the launch-cohort offer (70% off).
export const ANCHOR_PRICE = '₹65,000';
export const OFFER_PRICE = '₹19,500';
export const SAVINGS_AMOUNT = '₹45,500';
export const DISCOUNT_PERCENT = 70;

// Cohort cap that justifies the launch-offer discount under
// Indian Consumer Protection (E-Commerce) Rules 2020.
export const COHORT_CAP_LABEL = 'First 50 South Delhi businesses';

export const WHATSAPP_PRESET_TEXT =
  'Hi UdyamSetu, I saw the ₹19,500 launch offer and want to know more.';

export const BUSINESS_TYPES = [
  'Clinic / Wellness (dental, derma, physio, salon, spa, yoga)',
  'Coach / Consultant',
  'Local service (interiors, design, photography, legal, CA)',
  'Shop / Studio / Café',
  'Institute / Tuition / Academy',
  'Other',
];

export interface OfferFaq {
  question: string;
  answer: string;
}

export const OFFER_FAQS: OfferFaq[] = [
  {
    question: 'What exactly do I get for ₹19,500?',
    answer:
      'Four deliverables: a conversion-focused landing page, 30 SEO pages targeting South Delhi searches, one AI workflow setup for automated follow-up, and a 30-day content calendar. Built and delivered in 14 days. The free PDF on this page shows you the page-by-page breakdown.',
  },
  {
    question: 'Is ₹19,500 the full price? Are there hidden fees?',
    answer:
      'Yes, ₹19,500 is the full setup cost — inclusive of GST. There are no hidden fees. Hosting, domain, paid ad spend, and any third-party tools you choose to add later are separate and clearly listed in the PDF — they are not part of our fee.',
  },
  {
    question: "Why is the discount 70%? What's the catch?",
    answer:
      'We are building our launch cohort of South Delhi businesses, and we deliver faster when we work in batches. Once the cohort closes, the price moves to ₹65,000. The deliverables, moderator seniority, and scope are identical at both prices. There is no catch — you are trading early-cohort timing for a lower price.',
  },
  {
    question: 'How fast do I get the PDF after filling the form?',
    answer:
      "Instantly. The PDF arrives on the WhatsApp number you submit, usually within 60 seconds. If it does not arrive within 2 minutes, message us on WhatsApp and we will resend it manually.",
  },
  {
    question: 'Will you spam me on WhatsApp?',
    answer:
      "No. We send the PDF, then check in once within 24 hours to answer any questions. If you do not reply, we leave you alone. We do not have an automated drip — we would rather lose your number than annoy you.",
  },
  {
    question: 'What are "30 SEO pages"?',
    answer:
      'Thirty individual pages on your website, each targeting a real Google search someone in South Delhi types in — like "physiotherapist in Greater Kailash" or "yoga classes in Saket". Each page is optimised, internally linked, and submitted to Google. They bring traffic over time, not on day 1.',
  },
  {
    question: 'What is an AI workflow setup?',
    answer:
      'When someone fills your form or messages you on WhatsApp, an automated flow responds within seconds — confirms the enquiry, sends your basic info, and keeps the lead warm until you reply personally. Set up on tools you already use; no new subscriptions required for the basic setup.',
  },
  {
    question: 'Do you guarantee leads, sales, or Google rankings?',
    answer:
      'No, and we would be lying if we did. SEO takes 4–8 weeks to start ranking, and the number of leads depends on your offer, your reviews, and the demand in your locality. What we do guarantee is the deliverables themselves — built, working, and handed over within 14 days.',
  },
  {
    question: 'Is this only for South Delhi businesses?',
    answer:
      "The setup is optimised for South Delhi searches and localities — that is our launch focus. We can do it for businesses elsewhere in Delhi NCR, but the SEO pages will not be as locally targeted. Outside Delhi NCR, message us first.",
  },
  {
    question: 'Do I need an existing website?',
    answer:
      "Not necessarily. If you do not have one, we will set up a simple WordPress or Webflow site (you pay for domain + hosting separately, around ₹3,000 per year). If you have a site, we add the new pages to it.",
  },
  {
    question: 'What happens after I download the PDF?',
    answer:
      "You read it (5 minutes on your phone). If you have questions, you message us on WhatsApp — no call required. If you want to proceed, you pay ₹19,500 via UPI / transfer and we start within 24 hours. If you do not want to proceed, you have still got a useful PDF and we will not chase you.",
  },
  {
    question: "Why only 3 fields on the form? Don't you need more details?",
    answer:
      'We need just enough to send you the PDF on WhatsApp. Anything else — your business name, locality, current website, marketing problem — we ask in the WhatsApp conversation, where it is easier for you to type and easier for us to respond meaningfully. The form is the on-ramp, not an interrogation.',
  },
  {
    question: 'How is this different from hiring a freelancer?',
    answer:
      'A freelancer typically does one piece — a landing page, or some SEO, or a calendar. Each piece works in isolation. We build all four as a coordinated system, so the SEO pages send traffic to the landing page, the page captures the lead, the workflow follows up, and the calendar keeps you visible. The whole is more useful than the parts.',
  },
  {
    question: 'Can I just talk to someone first?',
    answer:
      'Yes. The WhatsApp button appears below the offer if you scroll. We reply within business hours — usually within 30 minutes. But honestly: read the PDF first. It answers most questions before you have to ask them.',
  },
];
