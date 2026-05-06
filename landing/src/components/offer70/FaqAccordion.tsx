'use client';

import { useState } from 'react';
import type { OfferFaq } from '@/content/offer70';

interface Props {
  items: OfferFaq[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="bg-white rounded-xl border border-[#E9D8C3] overflow-hidden"
          >
            <button
              type="button"
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 hover:bg-[#FFF6E8]/60 transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-[#1F2A6D] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-[#1A1A1A]/85">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
