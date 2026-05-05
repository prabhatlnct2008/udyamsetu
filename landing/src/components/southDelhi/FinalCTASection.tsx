import type { FinalCtaBlock } from '@/content/southDelhi/types';
import WhatsAppCta from './WhatsAppCta';

interface Props {
  block: FinalCtaBlock;
  whatsappKeyword: string;
}

export default function FinalCTASection({ block, whatsappKeyword }: Props) {
  return (
    <section id="final-cta" className="py-16 md:py-24 bg-[#1F2A6D] text-white warli-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
            {block.heading}
          </h2>
          <div className="mt-6 text-lg text-white/85">
            {typeof block.body === 'string' ? <p>{block.body}</p> : block.body}
          </div>

          {block.bullets && block.bullets.length > 0 && (
            <ul className="mt-6 space-y-2 text-left max-w-xl mx-auto text-white/90">
              {block.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#FF8A00]">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              keyword={whatsappKeyword}
              label={block.ctaLabel}
              size="large"
              location="final-cta"
            />
          </div>

          {block.supportingLine && (
            <p className="mt-6 text-sm text-white/70">{block.supportingLine}</p>
          )}
        </div>
      </div>
    </section>
  );
}
