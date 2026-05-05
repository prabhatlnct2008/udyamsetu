import Link from 'next/link';
import type { HeroBlock } from '@/content/southDelhi/types';
import WhatsAppCta from './WhatsAppCta';

interface HeroProps {
  block: HeroBlock;
  whatsappKeyword: string;
}

export default function Hero({ block, whatsappKeyword }: HeroProps) {
  return (
    <section className="warli-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
            {block.h1}
          </h1>

          <div className="mt-6 text-lg md:text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
            {typeof block.subhead === 'string' ? <p>{block.subhead}</p> : block.subhead}
          </div>

          {block.bullets && block.bullets.length > 0 && (
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              {block.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#E9D8C3]"
                >
                  <span className="text-[#1F7A3A] text-lg leading-tight">✓</span>
                  <span className="text-[#1A1A1A]">{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCta
              keyword={whatsappKeyword}
              label={block.primaryCtaLabel}
              size="large"
              location="hero"
            />
            {block.secondaryCtaLabel && block.secondaryCtaHref && (
              <Link
                href={block.secondaryCtaHref}
                className="border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF] px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-200 inline-flex items-center justify-center"
              >
                {block.secondaryCtaLabel}
              </Link>
            )}
          </div>

          {block.trustChips && block.trustChips.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#E9D8C3]">
              {block.trustNote && (
                <p className="text-sm text-[#1A1A1A]/60 mb-4">{block.trustNote}</p>
              )}
              <div className="flex flex-wrap justify-center gap-2 text-sm text-[#1F2A6D]">
                {block.trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
