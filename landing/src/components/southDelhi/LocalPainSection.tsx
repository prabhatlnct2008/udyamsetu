import type { LocalPainBlock } from '@/content/southDelhi/types';

interface Props {
  block: LocalPainBlock;
}

export default function LocalPainSection({ block }: Props) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            {block.heading}
          </h2>

          <div className="mt-8 space-y-5 text-lg text-[#1A1A1A]/85">
            {block.body.map((p, i) => (
              <div key={i}>{typeof p === 'string' ? <p>{p}</p> : p}</div>
            ))}
          </div>

          {block.vignettes && block.vignettes.length > 0 && (
            <div className="mt-10 grid md:grid-cols-2 gap-4">
              {block.vignettes.map((v) => (
                <div
                  key={v.area}
                  className="p-5 rounded-xl border border-[#E9D8C3] bg-[#FFF6E8]"
                >
                  <p className="text-sm font-semibold text-[#FF8A00] uppercase tracking-wide">
                    {v.area}
                  </p>
                  <p className="mt-2 text-[#1A1A1A]/85">{v.story}</p>
                </div>
              ))}
            </div>
          )}

          {block.pullquote && (
            <p className="mt-10 text-xl md:text-2xl font-semibold text-[#1F2A6D] text-center border-l-4 border-[#FF8A00] pl-4 max-w-2xl mx-auto text-left">
              {block.pullquote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
