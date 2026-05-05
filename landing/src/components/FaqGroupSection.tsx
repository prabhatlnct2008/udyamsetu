import FAQ from './FAQ';
import type { FaqGroup } from '@/content/faqs';

interface Props {
  group: FaqGroup;
}

export default function FaqGroupSection({ group }: Props) {
  return (
    <section
      id={group.id}
      className="py-12 md:py-16 scroll-mt-20 border-b border-[#E9D8C3] last:border-b-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            {group.heading}
          </h2>
          {group.intro && (
            <p className="mt-3 text-[#1A1A1A]/80">{group.intro}</p>
          )}
          <div className="mt-8">
            <FAQ items={group.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
