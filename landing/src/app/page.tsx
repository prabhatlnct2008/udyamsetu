import { Header, Footer, CTAButtons, ModuleCard, PackageCard, FAQ } from '@/components';
import SouthDelhiHubSection from '@/components/southDelhi/SouthDelhiHubSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF6E8]">
      <Header />

      {/* Hero Section */}
      <section className="warli-pattern relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
              Turn Your Business Into a{' '}
              <span className="text-[#FF8A00]">Lead Machine</span>
              <br className="hidden md:block" />
              — Without Hiring a Full Marketing Team
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
              We build a complete growth system for Indian businesses:
              <br />
              <span className="font-semibold">30–100 local landing pages + SEO foundation + safe brand mention engine + backlinks/citations + Meta ads experiments + WhatsApp auto-replies</span>
              <br />
              So you capture leads even when you&apos;re busy (clinic, puja, meetings, factory).
            </p>

            {/* Hero Bullets */}
            <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-left md:text-center">
              <div className="flex items-center gap-2">
                <span className="text-[#1F7A3A] text-xl">⚡</span>
                <span className="text-[#1A1A1A]"><strong>Launch fast:</strong> first lead-ready pages in 7–14 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1F7A3A] text-xl">💬</span>
                <span className="text-[#1A1A1A]"><strong>WhatsApp-first:</strong> instant replies + qualification + lead routing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span className="text-[#1A1A1A]"><strong>Clear deliverables:</strong> no vague &quot;marketing&quot; promises</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex justify-center">
              <CTAButtons size="large" />
            </div>

            {/* Trust Strip */}
            <div className="mt-12 pt-8 border-t border-[#E9D8C3]">
              <p className="text-sm text-[#1A1A1A]/60 mb-4">Trusted by businesses across India</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-[#1F2A6D]">
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">Local services</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">Clinics</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">Tutors</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">Manufacturers</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">Real estate</span>
                <span className="px-3 py-1 bg-white rounded-full border border-[#E9D8C3]">Professionals</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              The Pain We Solve
            </h2>
            <p className="mt-6 text-lg text-[#1A1A1A]/80">
              Most agencies do: <span className="text-[#FF8A00] font-semibold">&quot;1 website + random posts.&quot;</span>
            </p>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              But leads actually come from:
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span>Specific pages for specific intent (service + area + product + use-case)</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span>Fast WhatsApp response (seconds, not hours)</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span>Structured experiments (ads + page A/B + offers)</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span>Trusted presence (citations, directories, partner mentions, safe backlinks)</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#EEF1FF] rounded-xl md:col-span-2 md:max-w-md md:mx-auto">
                <span className="text-[#1F7A3A] text-xl">✓</span>
                <span>Consistent content (not spam)</span>
              </div>
            </div>

            <p className="mt-8 text-xl font-semibold text-[#1F2A6D]">
              That&apos;s exactly what <span className="text-[#FF8A00]">UdyamSetu</span> builds.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              What We Build: The UdyamSetu Lead Engine
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              A comprehensive growth system designed for Indian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ModuleCard
              number={1}
              title="Landing Page Factory"
              subtitle="Service × Location × Intent"
              description="We don't build 'a website'. We build a search footprint."
              deliverables={[
                '1 main website (fast, mobile-first)',
                '30 to 100 pages (based on plan)',
                'Service pages (core offerings)',
                'Location pages (e.g., Green Park, Saket, Dwarka)',
                'Product pages (for manufacturers)',
                'Use-case pages (bulk, wholesale, repair, emergency)',
                'Click-to-call + WhatsApp CTA on every page',
                'Offer block + proof block + FAQ block',
                'Map embed / service area (where relevant)',
                'Speed optimization (lightweight pages)',
              ]}
              outcome="Why this works: People search 'exactly what they want' + 'exactly where they want it.'"
              icon={<PagesIcon />}
            />

            <ModuleCard
              number={2}
              title="WhatsApp Lead Automation"
              subtitle="Never Miss Leads"
              description="When you're busy, leads still get handled."
              deliverables={[
                'Instant WhatsApp auto-reply within seconds',
                'Qualification flow: service needed, location, date/time, budget range, photos/docs',
                'Lead routing: owner + receptionist/team + backup number',
                'Lead capture: Google Sheet / simple CRM pipeline with status',
                '10–20 pre-approved reply templates (pricing, availability, FAQs, reschedule)',
              ]}
              note="Optional add-on: Appointment reminders + no-show reduction messages."
              icon={<WhatsAppModuleIcon />}
            />

            <ModuleCard
              number={3}
              title="Safe Brand Mention Engine"
              subtitle="Automation + Approval"
              description="We increase brand discovery without spam."
              deliverables={[
                'Monitoring: keywords, competitor mentions, problem statements',
                'Drafting: AI creates reply drafts in your voice',
                'Tracking: weekly engagement + click reports',
                'Human-in-loop: You/our team approves before posting',
                '200 / 500 / 1000 engagements per month (by package)',
                'Weekly "Hot Conversations" list (best lead opportunities)',
                'UTM tracked links to measure traffic/leads',
              ]}
              note="Reality check: Social mentions don't magically 'rank' you, but they increase branded searches, referral traffic, trust, and conversions."
              icon={<MegaphoneIcon />}
            />

            <ModuleCard
              number={4}
              title="Backlink + Citations Engine"
              subtitle="SEO Credibility"
              description="This is the foundation layer for long-term SEO success."
              deliverables={[
                'Local citations/listings (niche + city relevant)',
                'Partner outreach for "real" mentions (vendors, RWAs, venues, associations)',
                'Guest post drafting + outreach (placements depend on publisher response)',
                'Link inventory + monthly report',
              ]}
              note="Important: We don't do risky backlink spam or '1000 links for ₹X'."
              icon={<LinkIcon />}
            />

            <ModuleCard
              number={5}
              title="Meta Ads Experiments"
              subtitle="Optional"
              description="We run ads like an engineering system, not gambling."
              deliverables={[
                'Tracking setup: Pixel + events + conversions',
                '2–4 experiments/month: Creative test, audience test, offer test, landing page test',
                'Weekly optimization',
                'Creative refresh plan',
              ]}
              note="Note: Ad spend is paid directly by the client."
              icon={<AdsIcon />}
            />
          </div>
        </div>
      </section>

      <SouthDelhiHubSection />

      {/* Packages Section */}
      <section id="packages" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              Packages
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              Clear, capped, and scalable — choose what fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PackageCard
              name='Package A — "Launch Sprint"'
              subtitle="One-Time Setup"
              bestFor="Fast lead-ready launch"
              setupIncludes={[
                '1 main site',
                '30 landing pages',
                'Tracking setup: GA4 + Search Console + Pixel',
                'WhatsApp CTA integration + basic lead sheet',
              ]}
              mrpSetup="₹35,000 – ₹50,000"
              launchSetup="₹14,000 – ₹20,000"
            />

            <PackageCard
              name='Package B — "WhatsApp Lead System"'
              subtitle="Setup + Monthly"
              bestFor="Clinics, professionals, services"
              setupIncludes={[
                '1 main site + 25 pages',
                'WhatsApp automation + qualification + routing',
                'CRM-lite pipeline',
              ]}
              monthlyIncludes={[
                'Automation tuning + reporting',
                '2 page optimizations/month',
              ]}
              mrpSetup="₹50,000"
              mrpMonthly="₹20,000"
              launchSetup="₹20,000"
              launchMonthly="₹8,000"
              featured
            />

            <PackageCard
              name='Package C — "SEO + Brand Growth"'
              subtitle="Monthly Compounding"
              bestFor="Long-term inbound"
              setupIncludes={[
                '1 main site + 50 pages (services + locations)',
                'SEO structure + content calendar',
              ]}
              monthlyIncludes={[
                '12–20 posts/month',
                '4 SEO pages/blogs/month',
                'Brand Mention Engine: 500 engagements/month',
                'Citations/links: 20–40/month + partner outreach',
              ]}
              mrpSetup="₹60,000"
              mrpMonthly="₹30,000"
              launchSetup="₹24,000"
              launchMonthly="₹12,000"
            />

            <PackageCard
              name='Package D — "Ads + Conversion System"'
              subtitle="Performance-Lite"
              bestFor="Faster results with controlled spend"
              setupIncludes={[
                '10 conversion landing pages',
                'Pixel + events + lead tracking',
                'WhatsApp lead flow',
              ]}
              monthlyIncludes={[
                '2–4 ad experiments/month',
                'Weekly optimizations',
                'Creative refresh: 6–10 creatives/month',
              ]}
              mrpSetup="₹60,000"
              mrpMonthly="₹30,000"
              launchSetup="₹24,000"
              launchMonthly="₹12,000"
            />
          </div>
        </div>
      </section>

      {/* Deliverables Caps Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              What You Get
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              Hard deliverables + clear caps to keep it clean and scalable
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">25-100</div>
              <div className="text-[#1A1A1A]/80 mt-2">Pages included (plan-based)</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">2</div>
              <div className="text-[#1A1A1A]/80 mt-2">Revision rounds per page set</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">24-48h</div>
              <div className="text-[#1A1A1A]/80 mt-2">Response time for changes</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">10-20</div>
              <div className="text-[#1A1A1A]/80 mt-2">WhatsApp script templates</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">200-1000</div>
              <div className="text-[#1A1A1A]/80 mt-2">Brand engagements/month</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3] text-center">
              <div className="text-3xl font-bold text-[#FF8A00]">2-4</div>
              <div className="text-[#1A1A1A]/80 mt-2">Ad experiments/month</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              From intake to launch — a clear timeline
            </p>
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
                  description="Services + locations + offers + proof collection"
                />
                <TimelineItem
                  day="Day 3–6"
                  title="Setup Phase"
                  description="Page architecture + copy + design setup"
                  isRight
                />
                <TimelineItem
                  day="Day 7–14"
                  title="Go Live"
                  description="First batch live + tracking + WhatsApp flow live"
                />
                <TimelineItem
                  day="Week 3+"
                  title="Growth Loops"
                  description="Monthly growth loops (content, mentions, links, ads tests)"
                  isRight
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              Reporting
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              Simple, WhatsApp-friendly reports you can actually use
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FF8A00]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#FF8A00] text-xl">📅</span>
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D]">Weekly Snapshot</h3>
              </div>
              <ul className="space-y-2 text-[#1A1A1A]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>Leads received</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>WhatsApp completion rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>Best pages by clicks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>Ad performance (if running)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E9D8C3]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1F7A3A]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[#1F7A3A] text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-[#1F2A6D]">Monthly Report</h3>
              </div>
              <ul className="space-y-2 text-[#1A1A1A]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>Pages added</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>Citations/links added</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>Engagement/mentions summary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">•</span>
                  <span>Next month priorities</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQ
              items={[
                {
                  question: 'Do you guarantee rankings?',
                  answer: 'No. We guarantee deliverables and best practices. Rankings depend on competition.',
                },
                {
                  question: 'Can brand mention posting be fully automated?',
                  answer: 'Not safely. We automate discovery + drafting + tracking, and keep approval for posting.',
                },
                {
                  question: 'Can backlinks be automated?',
                  answer: 'Prospecting + outreach + monitoring can be automated. Link acquisition is earned, not spammed.',
                },
                {
                  question: 'Do you reply to customers manually?',
                  answer: 'We set automation + templates. Your team closes leads.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-[#1F2A6D] warli-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-poppins)]">
            Get a Free Growth Plan in 15 minutes
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            We&apos;ll tell you:
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• How many pages you need</li>
            <li>• Which locations to target</li>
            <li>• What WhatsApp questions convert best</li>
            <li>• Which package fits your budget</li>
          </ul>

          <a
            href="https://wa.me/918882567801?text=PLAN"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#FF8A00] hover:bg-[#F57C00] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <WhatsAppLargeIcon />
            <span>WhatsApp &quot;PLAN&quot; to Get Started</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Timeline Item Component
function TimelineItem({ day, title, description, isRight = false }: { day: string; title: string; description: string; isRight?: boolean }) {
  return (
    <div className={`relative flex items-center ${isRight ? 'md:flex-row-reverse' : ''}`}>
      <div className="absolute left-4 w-3 h-3 bg-[#FF8A00] rounded-full border-4 border-[#FFF6E8] md:left-1/2 md:-translate-x-1.5"></div>
      <div className={`ml-12 md:ml-0 md:w-1/2 ${isRight ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
        <span className="text-[#FF8A00] font-semibold">{day}</span>
        <h3 className="text-xl font-bold text-[#1F2A6D] mt-1">{title}</h3>
        <p className="text-[#1A1A1A]/80 mt-1">{description}</p>
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
