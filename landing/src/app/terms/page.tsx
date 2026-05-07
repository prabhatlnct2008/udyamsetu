import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components';
import { PolicyContent } from '@/content/privacy';

export const metadata: Metadata = {
  title: 'Terms & Privacy | UdyamSetu Growth Studio',
  description:
    'Terms of use for udyamsetuai.in plus our Privacy Policy explaining how UdyamSetu Growth Studio collects, uses, and protects information shared with us.',
  alternates: { canonical: 'https://udyamsetuai.in/terms' },
  openGraph: {
    title: 'Terms & Privacy | UdyamSetu',
    description:
      'Terms of use plus our Privacy Policy in plain language.',
    url: 'https://udyamsetuai.in/terms',
    siteName: 'UdyamSetu',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <Header />

      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-[#1A1A1A]/70"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-[#1F2A6D] transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-[#1F2A6D] font-medium">Terms &amp; Privacy</li>
        </ol>
      </nav>

      <section className="warli-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
              Terms &amp; Privacy
            </h1>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              The terms that apply when you use this website, plus our Privacy
              Policy explaining how we collect and use your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PolicyContent variant="terms" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
