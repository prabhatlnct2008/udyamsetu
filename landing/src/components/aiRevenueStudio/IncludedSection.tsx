export interface IncludedCard {
  n: string;
  title: string;
  body: string;
}

interface Props {
  title: string;
  cards: IncludedCard[];
}

export default function IncludedSection({ title, cards }: Props) {
  // 2 cards → 2-col, 3 → 3-col, 4 → 2-col on md and 4-col on lg.
  const gridCols =
    cards.length === 2
      ? 'md:grid-cols-2'
      : cards.length === 4
      ? 'md:grid-cols-2 lg:grid-cols-4'
      : 'md:grid-cols-3';

  return (
    <section id="included" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-[#4F46E5] uppercase tracking-[0.2em]">
            What&apos;s included
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
            {title}
          </h2>
        </div>

        <div className={`mt-12 grid ${gridCols} gap-6`}>
          {cards.map((c) => (
            <div
              key={c.n}
              className="rounded-2xl bg-white border border-slate-100 p-7 shadow-sm"
            >
              <span className="text-sm font-bold text-[#4F46E5] font-[family-name:var(--font-poppins)]">
                {c.n}
              </span>
              <h3 className="mt-3 text-xl font-semibold font-[family-name:var(--font-poppins)]">
                {c.title}
              </h3>
              <p className="mt-3 text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
