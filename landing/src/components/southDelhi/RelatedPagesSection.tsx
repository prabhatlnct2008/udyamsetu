import Link from 'next/link';
import { PAGES_BY_SLUG } from '@/content/southDelhi/shared';

interface Props {
  slugs: string[];
}

export default function RelatedPagesSection({ slugs }: Props) {
  const cards = slugs
    .map((slug) => PAGES_BY_SLUG[slug])
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (cards.length === 0) return null;

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            Related South Delhi growth systems
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70">
            Explore the rest of UdyamSetu&apos;s South Delhi cluster.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {cards.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group p-6 rounded-xl bg-white border border-[#E9D8C3] hover:border-[#1F2A6D] hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)] group-hover:text-[#FF8A00] transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">{c.oneLiner}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1F2A6D] group-hover:text-[#FF8A00]">
                Read more <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
