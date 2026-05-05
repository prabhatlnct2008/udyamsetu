import Link from 'next/link';
import { SOUTH_DELHI_PAGES } from '@/content/southDelhi/shared';

interface Props {
  isHinglish?: boolean;
}

export default function SouthDelhiHubSection({ isHinglish = false }: Props) {
  const heading = isHinglish
    ? 'South Delhi AI, SEO & Lead Systems'
    : 'South Delhi AI, SEO & Lead Systems';
  const subhead = isHinglish
    ? 'Saket, GK, Hauz Khas, Nehru Place, Okhla aur South Delhi ke baaki business hubs ke liye banaye gaye 10 growth pages.'
    : 'Ten focused growth pages for Saket, GK, Hauz Khas, Nehru Place, Okhla, and the rest of South Delhi.';
  const ctaLabel = isHinglish ? 'Page khole' : 'Read page';

  return (
    <section
      id="south-delhi"
      className="py-16 md:py-20 bg-[#FFF6E8] border-y border-[#E9D8C3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#FF8A00] uppercase tracking-wider">
            South Delhi cluster
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            {heading}
          </h2>
          <p
            className={`mt-4 text-lg text-[#1A1A1A]/80 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}
          >
            {subhead}
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOUTH_DELHI_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group p-6 rounded-xl bg-white border border-[#E9D8C3] hover:border-[#1F2A6D] hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)] group-hover:text-[#FF8A00] transition-colors">
                {p.title}
              </h3>
              <p
                className={`mt-2 text-sm text-[#1A1A1A]/75 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}
              >
                {p.oneLiner}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1F2A6D] group-hover:text-[#FF8A00]">
                {ctaLabel} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
