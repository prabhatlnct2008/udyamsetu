import type { Metadata } from 'next';
import Link from 'next/link';
import ConversionTracker from '@/components/offer70/ConversionTracker';
import MetaPixel from '@/components/offer70/MetaPixel';
import {
  PROPOSAL_PDF_PATH,
  WHATSAPP_PRESET_TEXT,
} from '@/content/offer70';

export const metadata: Metadata = {
  title: 'Thank you — your Complete Proposal is on the way | UdyamSetu',
  description:
    'Your Complete Proposal is on its way to your WhatsApp. We will personally check in within 24 hours.',
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{
    name?: string;
    last4?: string;
    v?: string;
  }>;
}

const WHATSAPP_HREF = `https://wa.me/918882567801?text=${encodeURIComponent(WHATSAPP_PRESET_TEXT)}`;

export default async function ThankYouPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const firstName = params.name?.trim() || 'there';
  const last4 = params.last4?.trim() || '';
  const variant = params.v === 'exit' ? 'exit' : 'main';

  return (
    <main className="min-h-screen bg-[#FFF6E8] flex flex-col">
      <MetaPixel />
      <ConversionTracker variant={variant} />

      <header className="bg-white border-b border-[#E9D8C3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link
            href="/"
            className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]"
          >
            UdyamSetu
          </Link>
        </div>
      </header>

      <section className="flex-1 flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1F7A3A] text-white text-3xl">
            ✓
          </div>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            All set, {firstName}.
          </h1>
          <p className="mt-4 text-lg text-[#1A1A1A]/85">
            The Complete Proposal is on its way to your WhatsApp
            {last4 ? (
              <>
                {' '}
                at <span className="font-semibold">98XXXXX{last4}</span>
              </>
            ) : (
              ''
            )}
            . It should arrive in under 60 seconds — if it does not, tap below
            to message us directly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              💬 Open WhatsApp Chat
            </a>
            <a
              href={PROPOSAL_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1F2A6D] hover:bg-[#2a3580] text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              📥 Download PDF Now
            </a>
          </div>

          <p className="mt-8 text-[#1A1A1A]/70">
            In the meantime: we will personally check in on WhatsApp within 24
            hours to answer any questions you have. <strong>No call. No pressure.</strong>
          </p>

          <div className="mt-12 pt-8 border-t border-[#E9D8C3] text-sm text-[#1A1A1A]/60">
            <p>
              Want to come back to the offer page?{' '}
              <Link
                href="/70-discount-offering"
                className="text-[#1F2A6D] hover:text-[#FF8A00] underline font-medium"
              >
                Re-open the offer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1F2A6D] text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          © {new Date().getFullYear()} UdyamSetu Growth Studio.
        </div>
      </footer>
    </main>
  );
}
