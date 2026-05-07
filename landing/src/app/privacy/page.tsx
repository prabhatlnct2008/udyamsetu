import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components';
import { PolicyContent } from '@/content/privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy | UdyamSetu Growth Studio',
  description:
    'How UdyamSetu Growth Studio collects, uses, stores, and protects information shared on udyamsetuai.in — written for clarity, compliant with the Digital Personal Data Protection Act, 2023.',
  alternates: { canonical: 'https://udyamsetuai.in/privacy' },
  openGraph: {
    title: 'Privacy Policy | UdyamSetu',
    description:
      'How we collect, use, and protect information you share with us.',
    url: 'https://udyamsetuai.in/privacy',
    siteName: 'UdyamSetu',
    type: 'website',
  },
};

export default function PrivacyPage() {
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
          <li className="text-[#1F2A6D] font-medium">Privacy Policy</li>
        </ol>
      </nav>

      <section className="warli-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              Plain-language explanation of what we collect, why we collect it,
              and the rights you have over it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <PolicyContent variant="privacy" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
