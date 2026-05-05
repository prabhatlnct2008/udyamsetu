import type { ProofBlock } from '@/content/southDelhi/types';

interface Props {
  block: ProofBlock;
}

export default function ProofSection({ block }: Props) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            {block.heading}
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {block.blocks.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-xl bg-[#EEF1FF] border border-[#E9D8C3]"
            >
              <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                {b.title}
              </h3>
              <div className="mt-2 text-[#1A1A1A]/85">
                {typeof b.body === 'string' ? <p>{b.body}</p> : b.body}
              </div>
            </div>
          ))}
        </div>

        {block.disclaimers && block.disclaimers.length > 0 && (
          <ul className="mt-8 max-w-3xl mx-auto space-y-2 text-sm text-[#1A1A1A]/65">
            {block.disclaimers.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
