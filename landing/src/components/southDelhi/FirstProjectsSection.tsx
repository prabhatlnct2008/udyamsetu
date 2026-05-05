import type { FirstProjectsBlock } from '@/content/southDelhi/types';

interface Props {
  block: FirstProjectsBlock;
}

export default function FirstProjectsSection({ block }: Props) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            {block.heading}
          </h2>
          {block.intro && (
            <div className="mt-4 text-lg text-[#1A1A1A]/80">
              {typeof block.intro === 'string' ? <p>{block.intro}</p> : block.intro}
            </div>
          )}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {block.cards.map((c) => (
            <div
              key={c.audience}
              className="p-6 rounded-xl border border-[#E9D8C3] bg-[#FFF6E8]"
            >
              <p className="text-sm font-semibold text-[#FF8A00] uppercase tracking-wide">
                {c.audience}
              </p>
              <p className="mt-2 text-[#1A1A1A]/85">{c.pilot}</p>
            </div>
          ))}
        </div>

        {block.closingNote && (
          <div className="mt-10 max-w-3xl mx-auto text-center text-[#1A1A1A]/80">
            {typeof block.closingNote === 'string' ? (
              <p>{block.closingNote}</p>
            ) : (
              block.closingNote
            )}
          </div>
        )}
      </div>
    </section>
  );
}
