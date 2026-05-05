import type { ProcessBlock } from '@/content/southDelhi/types';
import WhatsAppCta from './WhatsAppCta';

interface Props {
  block: ProcessBlock;
  whatsappKeyword: string;
}

export default function ProcessSection({ block, whatsappKeyword }: Props) {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            {block.heading}
          </h2>
        </div>

        <ol className="mt-10 grid gap-5 max-w-3xl mx-auto">
          {block.steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-4 p-5 rounded-xl bg-white border border-[#E9D8C3]"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#1F2A6D] text-white font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  {s.title}
                </h3>
                <div className="mt-1 text-[#1A1A1A]/85">
                  {typeof s.body === 'string' ? <p>{s.body}</p> : s.body}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {block.ctaLabel && (
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              keyword={whatsappKeyword}
              label={block.ctaLabel}
              location="after-process"
            />
          </div>
        )}
      </div>
    </section>
  );
}
