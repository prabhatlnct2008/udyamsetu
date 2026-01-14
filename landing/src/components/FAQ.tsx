'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  isHinglish?: boolean;
}

export default function FAQ({ items, isHinglish = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-[#E9D8C3] overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#EEF1FF]/50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className={`font-semibold text-[#1F2A6D] ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : 'font-[family-name:var(--font-poppins)]'}`}>
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-[#1F2A6D] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className={`text-[#1A1A1A]/80 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
