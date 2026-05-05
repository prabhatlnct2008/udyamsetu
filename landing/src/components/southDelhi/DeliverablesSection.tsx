import type { DeliverablesBlock } from '@/content/southDelhi/types';
import WhatsAppCta from './WhatsAppCta';

interface Props {
  block: DeliverablesBlock;
  whatsappKeyword: string;
}

export default function DeliverablesSection({ block, whatsappKeyword }: Props) {
  return (
    <section id="deliverables" className="py-16 md:py-20">
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

        <ul className="mt-10 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {block.items.map((item) => (
            <li
              key={item.title}
              className="p-6 rounded-xl bg-white border border-[#E9D8C3]"
            >
              <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                {item.title}
              </h3>
              <div className="mt-2 text-[#1A1A1A]/85">
                {typeof item.body === 'string' ? <p>{item.body}</p> : item.body}
              </div>
            </li>
          ))}
        </ul>

        {block.ctaLabel && (
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              keyword={whatsappKeyword}
              label={block.ctaLabel}
              location="after-deliverables"
            />
          </div>
        )}
      </div>
    </section>
  );
}
