import { Metadata } from 'next';
import { Header, Footer, CTAButtons, ModuleCard, PackageCard, FAQ } from '@/components';
import SouthDelhiHubSection from '@/components/southDelhi/SouthDelhiHubSection';

export const metadata: Metadata = {
  title: 'UdyamSetu Growth Studio - अपने बिज़नेस को Lead Machine बनाइए',
  description: 'UdyamSetu आपके लिए एक पूरा सिस्टम बनाता है: 30–100 local landing pages + SEO foundation + safe brand mentions + backlinks/citations + Meta ads experiments + WhatsApp auto-replies',
};

export default function HinglishHome() {
  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <Header isHinglish />

      {/* Hero Section */}
      <section className="warli-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-mukta)]">
              अपने बिज़नेस को{' '}
              <span className="text-[#FF8A00]">&quot;Lead Machine&quot;</span>{' '}
              बनाइए
              <br className="hidden md:block" />
              — बिना भारी टीम हायर किए
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto font-[family-name:var(--font-mukta)]">
              UdyamSetu आपके लिए एक पूरा सिस्टम बनाता है:
              <br />
              <span className="font-semibold">30–100 local landing pages + SEO foundation + safe brand mentions + backlinks/citations + Meta ads experiments + WhatsApp auto-replies</span>
              <br />
              मतलब: आप busy हों तब भी leads miss नहीं होंगी।
            </p>

            {/* Hero Bullets */}
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-left md:text-center">
              <div className="flex items-center gap-2">
                <span className="text-[#1F7A3A] text-xl">⚡</span>
                <span className="text-[#1A1A1A] font-[family-name:var(--font-mukta)]"><strong>7–14 दिन में launch:</strong> first pages + WhatsApp flow live</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1F7A3A] text-xl">💬</span>
                <span className="text-[#1A1A1A] font-[family-name:var(--font-mukta)]"><strong>WhatsApp-first system:</strong> reply seconds में, hours में नहीं</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span className="text-[#1A1A1A] font-[family-name:var(--font-mukta)]"><strong>Clear deliverables:</strong> &quot;marketing&quot; के नाम पर confusion नहीं</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex justify-center">
              <CTAButtons isHinglish size="large" />
            </div>

            {/* Trust Strip */}
            <div className="mt-12 pt-8 border-t border-[#E9D8C3]">
              <p className="text-sm text-[#1A1A1A]/60 mb-4 font-[family-name:var(--font-mukta)]">भारत भर के businesses हमपर भरोसा करते हैं</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">क्लिनिक</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">पंडित जी</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">ट्यूटर</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">मैन्युफैक्चरर</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">सर्विस बिज़नेस</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">प्रोफेशनल्स</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-[#1A1A1A]/60">
                <span>Delhi/NCR</span>
                <span>•</span>
                <span>Mumbai</span>
                <span>•</span>
                <span>Pune</span>
                <span>•</span>
                <span>Bangalore</span>
                <span>•</span>
                <span>Tier-2 cities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              समस्या
              <span className="block text-lg font-normal text-[#1A1A1A]/60 mt-2">The Pain We Solve</span>
            </h2>
            <p className="mt-6 text-lg text-[#1A1A1A]/80 font-[family-name:var(--font-mukta)]">
              अधिकतर एजेंसी बस <span className="text-[#FF8A00] font-semibold">एक website बना देती है और random पोस्ट डालती है।</span>
            </p>
            <p className="mt-4 text-lg text-[#1A1A1A]/80 font-[family-name:var(--font-mukta)]">
              लेकिन lead आती है जब:
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span className="font-[family-name:var(--font-mukta)]">&quot;service + area&quot; वाला page मिलता है</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span className="font-[family-name:var(--font-mukta)]">WhatsApp पर तुरंत response होता है</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span className="font-[family-name:var(--font-mukta)]">ads और offer testing structured होता है</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span className="font-[family-name:var(--font-mukta)]">business की presence कई जगह दिखती है (listings, citations, mentions)</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl md:col-span-2 md:max-w-md md:mx-auto">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span className="font-[family-name:var(--font-mukta)]">content लगातार और useful होता है</span>
              </div>
            </div>

            <p className="mt-8 text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              <span className="text-[#FF8A00]">UdyamSetu</span> यही बनाता है।
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              UdyamSetu Lead Engine
              <span className="block text-lg font-normal text-[#1A1A1A]/60 mt-2">What We Build</span>
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80 font-[family-name:var(--font-mukta)]">
              Indian businesses के लिए designed complete growth system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ModuleCard
              number={1}
              title="Landing Page Factory"
              subtitle="Service × Area × Intent"
              description="Website नहीं, search footprint बनता है।"
              deliverables={[
                '1 main site (mobile-first)',
                '30–100 pages (plan के हिसाब से)',
                'Services pages: जैसे "गृह प्रवेश पूजा", "root canal"',
                'Area pages: जैसे "Saket", "Green Park", "Dwarka"',
                'Product pages: manufacturing के लिए',
                'Use-case pages: bulk/wholesale/emergency/24x7',
                'हर page में Call + WhatsApp CTA',
                'Offer block (price range / starting at)',
                'Proof block (reviews, photos, cases)',
                'FAQ block (Hindi/English mix)',
              ]}
              outcome="ज्यादा searches में visibility + ज्यादा enquiries"
              icon={<PagesIcon />}
              isHinglish
            />

            <ModuleCard
              number={2}
              title="WhatsApp Auto Reply"
              subtitle="Busy हो तब भी lead संभले"
              description="जब आप busy हों, तब भी leads handle होती हैं।"
              deliverables={[
                'Instant auto-reply (seconds में)',
                'Qualification सवाल: कौन सी service चाहिए?',
                'location/area? date/time?',
                'photo/doc (ज़रूरत हो तो)',
                'budget range (optional)',
                'Lead routing: owner + staff + backup number',
                'CRM-lite sheet: New / Follow-up / Booked / Closed',
                '10–20 templates: price, availability, timings, FAQ, reschedule',
              ]}
              outcome="lead cold नहीं होती, conversion बढ़ता है"
              icon={<WhatsAppModuleIcon />}
              isHinglish
            />

            <ModuleCard
              number={3}
              title="Brand Mention Engine"
              subtitle="Safe, Semi-Automated"
              description='"Comments scrape करके हर जगह spam" — ये risky है। हम safe तरीके से करते हैं: monitor + draft + approve + engage.'
              deliverables={[
                'Keyword monitoring: "best pandit", "dentist near me", "manufacturer wholesale"',
                'AI drafts replies; approval ke baad post',
                '200 / 500 / 1000 engagements per month',
                'Weekly "Hot Conversations" list',
                'Tracking links (UTM) ताकि पता चले traffic/leads कहाँ से आए',
              ]}
              outcome="brand discovery, trust, aur branded searches बढ़ते हैं"
              icon={<MegaphoneIcon />}
              isHinglish
            />

            <ModuleCard
              number={4}
              title="Backlink + Citations Engine"
              subtitle="SEO की नींव"
              description="लंबी term SEO success के लिए foundation layer।"
              deliverables={[
                'Local listings/citations (industry + city relevant)',
                'Partner outreach: vendors, associations, venues, RWAs',
                'Guest post draft + outreach (placement publisher pe depend)',
                'Monthly link report + inventory',
              ]}
              note="हम spam backlinks नहीं करते।"
              icon={<LinkIcon />}
              isHinglish
            />

            <ModuleCard
              number={5}
              title="Meta Ads Experiments"
              subtitle="Optional"
              description="Boost post नहीं — proper experiments।"
              deliverables={[
                'Pixel + event tracking setup',
                '2–4 experiments/month: creative test, audience test, offer test, landing page test',
                'Weekly optimization',
                'Creative refresh plan',
              ]}
              note="Ad spend client pay करेगा।"
              icon={<AdsIcon />}
              isHinglish
            />
          </div>
        </div>
      </section>

      <SouthDelhiHubSection isHinglish />

      {/* Packages Section */}
      <section id="packages" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              पैकेज
              <span className="block text-lg font-normal text-[#1A1A1A]/60 mt-2">Packages</span>
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80 font-[family-name:var(--font-mukta)]">
              Simple + capped — आपके business के लिए सही package चुनें
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PackageCard
              name='A) "Launch Sprint"'
              subtitle="One-time"
              bestFor="Fast lead-ready launch"
              setupIncludes={[
                '1 main site',
                '30 landing pages',
                'GA4 + Search Console + Pixel setup',
                'WhatsApp CTA + lead sheet',
              ]}
              mrpSetup="₹35,000 – ₹50,000"
              launchSetup="₹14,000 – ₹20,000"
              isHinglish
            />

            <PackageCard
              name='B) "WhatsApp Lead System"'
              subtitle="Setup + Monthly"
              bestFor="Clinics, professionals, services"
              setupIncludes={[
                '1 site + 25 pages',
                'WhatsApp automation + qualification + routing',
                'CRM-lite pipeline',
              ]}
              monthlyIncludes={[
                'automation tuning + reporting',
                '2 page improvements/month',
              ]}
              mrpSetup="₹50,000"
              mrpMonthly="₹20,000"
              launchSetup="₹20,000"
              launchMonthly="₹8,000"
              isHinglish
              featured
            />

            <PackageCard
              name='C) "SEO + Brand Growth"'
              subtitle="Monthly Compounding"
              bestFor="Long-term inbound"
              setupIncludes={[
                '1 site + 50 pages',
                'SEO structure + content calendar',
              ]}
              monthlyIncludes={[
                '12–20 posts/month',
                '4 SEO pages/blogs/month',
                'Brand mentions: 500 engagements/month',
                'Citations/links: 20–40/month',
              ]}
              mrpSetup="₹60,000"
              mrpMonthly="₹30,000"
              launchSetup="₹24,000"
              launchMonthly="₹12,000"
              isHinglish
            />

            <PackageCard
              name='D) "Ads + Conversion System"'
              subtitle="Performance-Lite"
              bestFor="Faster results with controlled spend"
              setupIncludes={[
                '10 conversion landing pages',
                'Tracking + WhatsApp flow',
              ]}
              monthlyIncludes={[
                '2–4 ad experiments/month',
                'Weekly optimization',
                '6–10 creatives/month',
              ]}
              mrpSetup="₹60,000"
              mrpMonthly="₹30,000"
              launchSetup="₹24,000"
              launchMonthly="₹12,000"
              isHinglish
            />
          </div>
        </div>
      </section>

      {/* Deliverables Caps Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              Deliverables Caps
              <span className="block text-lg font-normal text-[#1A1A1A]/60 mt-2">Scope clear</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">25-100</div>
              <div className="text-[#1A1A1A]/80 mt-2 font-[family-name:var(--font-mukta)]">Pages (plan-based)</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">2</div>
              <div className="text-[#1A1A1A]/80 mt-2 font-[family-name:var(--font-mukta)]">Revisions rounds</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">24-48h</div>
              <div className="text-[#1A1A1A]/80 mt-2 font-[family-name:var(--font-mukta)]">Change requests response</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">200-1000</div>
              <div className="text-[#1A1A1A]/80 mt-2 font-[family-name:var(--font-mukta)]">Brand engagements/month</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">20-40</div>
              <div className="text-[#1A1A1A]/80 mt-2 font-[family-name:var(--font-mukta)]">Citations/month</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">2-4</div>
              <div className="text-[#1A1A1A]/80 mt-2 font-[family-name:var(--font-mukta)]">Ads experiments/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              कैसे काम करता है
              <span className="block text-lg font-normal text-[#1A1A1A]/60 mt-2">Timeline</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#E9D8C3] md:left-1/2 md:-translate-x-0.5"></div>

              {/* Timeline items */}
              <div className="space-y-8">
                <TimelineItem
                  day="Day 1–2"
                  title="Business Intake"
                  description="services + areas + offers + proof (reviews/photos)"
                  isHinglish
                />
                <TimelineItem
                  day="Day 3–6"
                  title="Setup Phase"
                  description="page structure + copy + design setup"
                  isRight
                  isHinglish
                />
                <TimelineItem
                  day="Day 7–14"
                  title="Go Live"
                  description="first pages live + tracking + WhatsApp flow live"
                  isHinglish
                />
                <TimelineItem
                  day="Week 3+"
                  title="Monthly Loop"
                  description="monthly improvement loop"
                  isRight
                  isHinglish
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section id="reporting" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              Reporting
              <span className="block text-lg font-normal text-[#1A1A1A]/60 mt-2">WhatsApp-friendly</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF8A00]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#FF8A00] text-xl">📅</span>
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">Weekly</h3>
              </div>
              <ul className="space-y-2 text-[#1A1A1A]/80 font-[family-name:var(--font-mukta)]">
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>leads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>best pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>WhatsApp drop-off</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>next actions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1F7A3A]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#1F7A3A] text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">Monthly</h3>
              </div>
              <ul className="space-y-2 text-[#1A1A1A]/80 font-[family-name:var(--font-mukta)]">
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>pages added</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>citations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>mentions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>results + next plan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-mukta)]">
              FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQ
              isHinglish
              items={[
                {
                  question: 'SEO guarantee?',
                  answer: 'Guarantee नहीं—deliverables guarantee है। Competition पर depend करता है।',
                },
                {
                  question: 'Brand mentions automation safe है?',
                  answer: 'Full autoposting risky है। हम approval-based approach रखते हैं।',
                },
                {
                  question: 'Backlinks automated हो सकते हैं?',
                  answer: 'Prospecting/outreach/monitoring automate हो सकता है। Links "earn" होते हैं, spam नहीं।',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-[#1F2A6D] warli-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-mukta)]">
            WhatsApp पर &quot;PLAN&quot; भेजिए
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto font-[family-name:var(--font-mukta)]">
            हम आपके लिए free growth plan बनाएँगे:
          </p>
          <ul className="mt-6 space-y-2 text-white/80 font-[family-name:var(--font-mukta)]">
            <li>• कितने pages चाहिए</li>
            <li>• कौन से areas target करने हैं</li>
            <li>• WhatsApp flow में कौन से सवाल convert करेंगे</li>
            <li>• कौन सा package best है</li>
          </ul>

          <a
            href="https://wa.me/918882567801?text=PLAN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#FF8A00] hover:bg-[#F57C00] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 font-[family-name:var(--font-mukta)]"
          >
            <WhatsAppLargeIcon />
            <span>WhatsApp &quot;PLAN&quot;</span>
          </a>
        </div>
      </section>

      <Footer isHinglish />
    </main>
  );
}

// Timeline Item Component
function TimelineItem({ day, title, description, isRight = false, isHinglish = false }: { day: string; title: string; description: string; isRight?: boolean; isHinglish?: boolean }) {
  return (
    <div className={`relative flex items-center ${isRight ? 'md:flex-row-reverse' : ''}`}>
      <div className="absolute left-4 w-3 h-3 bg-[#FF8A00] rounded-full border-4 border-[#FFF6E8] md:left-1/2 md:-translate-x-1.5"></div>
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isRight ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
        <span className="text-[#FF8A00] font-semibold">{day}</span>
        <h3 className={`text-xl font-bold text-[#1F2A6D] mt-1 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>{title}</h3>
        <p className={`text-[#1A1A1A]/80 mt-1 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>{description}</p>
      </div>
    </div>
  );
}

// Icons
function PagesIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function WhatsAppModuleIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

function AdsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function WhatsAppLargeIcon() {
  return (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
