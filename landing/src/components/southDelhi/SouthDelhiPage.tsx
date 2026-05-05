import { Header, Footer, FAQ } from '@/components';
import type { PageContent } from '@/content/southDelhi/types';
import Breadcrumbs from './Breadcrumbs';
import Hero from './Hero';
import LocalPainSection from './LocalPainSection';
import DeliverablesSection from './DeliverablesSection';
import FirstProjectsSection from './FirstProjectsSection';
import ProcessSection from './ProcessSection';
import ProofSection from './ProofSection';
import FinalCTASection from './FinalCTASection';
import RelatedPagesSection from './RelatedPagesSection';
import JsonLd from './JsonLd';

interface Props {
  content: PageContent;
}

export default function SouthDelhiPage({ content }: Props) {
  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <Header />
      <Breadcrumbs current={content.breadcrumbName} />
      <Hero block={content.hero} whatsappKeyword={content.whatsappKeyword} />
      <LocalPainSection block={content.localPain} />
      <DeliverablesSection
        block={content.deliverables}
        whatsappKeyword={content.whatsappKeyword}
      />
      {content.firstProjects && (
        <FirstProjectsSection block={content.firstProjects} />
      )}
      <ProcessSection
        block={content.process}
        whatsappKeyword={content.whatsappKeyword}
      />
      <ProofSection block={content.proof} />

      <section id="faqs" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
              Frequently asked questions
            </h2>
            <div className="mt-10">
              <FAQ items={content.faqs} />
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        block={content.finalCta}
        whatsappKeyword={content.whatsappKeyword}
      />
      <RelatedPagesSection slugs={content.relatedSlugs} />
      <Footer />
      <JsonLd content={content} />
    </main>
  );
}
