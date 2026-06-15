import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQ } from '@/components';
import AnalyticsBeacon from '@/components/aiRevenueStudio/AnalyticsBeacon';
import LeadMagnetForm from '@/components/home/LeadMagnetForm';
import { SOUTH_DELHI_PAGES } from '@/content/southDelhi/shared';

export const metadata: Metadata = {
  title: 'n8n & AI Workflow Automation, Built and Maintained for You | UdyamSetu',
  description:
    'We build, host, and look after n8n automation for your business. Free n8n template packs. Managed n8n hosting. Help for teams stuck after install. Marketing, sales, and appointment workflows that keep running.',
  keywords:
    'n8n workflows, n8n templates, n8n hosting, managed n8n, ai workflow automation, ai business process automation, n8n deployment, zapier n8n, n8n cloud pricing',
  alternates: { canonical: 'https://udyamsetuai.in/' },
  openGraph: {
    title:
      'We Build AI Automation That Keeps Running After We Leave | UdyamSetu',
    description:
      'Free n8n template packs, managed n8n hosting, and rescue for broken automation. Marketing, sales, and appointment workflows that still work at 2 a.m.',
    url: 'https://udyamsetuai.in/',
    siteName: 'UdyamSetu',
    type: 'website',
  },
};

const WHATSAPP_AUDIT = `https://wa.me/918882567801?text=${encodeURIComponent(
  "Hi, I'd like to book a 15-minute automation audit.",
)}`;

const WHATSAPP_RESCUE = `https://wa.me/918882567801?text=${encodeURIComponent(
  'Hi, my automation is broken — can you look at it?',
)}`;

const FAQS = [
  {
    question: 'What is n8n, and why not just use Zapier?',
    answer:
      'n8n does what Zapier does — connects your apps and automates the steps between them. But you can host it yourself, there is no charge per task, and you can drop in real code or AI when a workflow gets tricky. For most growing businesses it is cheaper and far more flexible.',
  },
  {
    question: 'Do you offer managed n8n hosting?',
    answer:
      'Yes. We set up n8n on a server we watch — backups, updates, alerts, the lot. You get the low cost of self-hosting without having to run anything yourself.',
  },
  {
    question: 'Can you deploy n8n on my own server or with Docker?',
    answer:
      'Yes. We do Docker-based deployments on your own server, a VPS, or providers like DigitalOcean. You keep full ownership. We keep it running.',
  },
  {
    question: 'Is self-hosted n8n cheaper than n8n Cloud?',
    answer:
      'Usually, yes. n8n itself is free. You pay for a server (often a few dollars a month) plus our setup and care. For most businesses that beats n8n Cloud\'s per-execution pricing — and your data stays on your own machine.',
  },
  {
    question: 'My setup is broken and nobody maintains it. Can you take over?',
    answer:
      'That is one of the most common things we do. We look at what is there, write down how it works, fix what is broken, and put it under proper maintenance.',
  },
  {
    question: 'Is it safe to leave AI automation running on its own?',
    answer:
      'It is when it is built right. We give the AI a clear job, check its output against real data, get a human to approve anything risky, and set up alerts so you know the moment something is off.',
  },
  {
    question: 'Is my business data safe with self-hosted n8n?',
    answer:
      'Self-hosting actually gives you more control, because nothing sits on someone else\'s servers. We handle logins, access, and backups as part of every setup.',
  },
  {
    question: 'Do you work with businesses outside India?',
    answer:
      'Yes. We work with clients anywhere. Everything is done remotely, and you own all the workflows and the setup.',
  },
];

const COMPARE_ROWS = [
  ['Cost as you grow', 'Climbs fast', 'Per-execution pricing', 'Flat server cost'],
  ['Where your data lives', 'Their servers', 'Their servers', 'Your server'],
  ['AI steps', 'Bolt-on', 'Built in', 'Built in'],
  ['Who keeps it running', 'You', 'n8n', 'We do'],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFF6E8] text-[#1A1A1A]">
      <AnalyticsBeacon />

      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-[#E9D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]"
          >
            UdyamSetu
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1A1A1A]">
            <a href="#templates" className="hover:text-[#1F2A6D]">Templates</a>
            <a href="#hosting" className="hover:text-[#1F2A6D]">Hosting</a>
            <a href="#rescue" className="hover:text-[#1F2A6D]">Rescue</a>
            <Link href="/agentic-ai" className="hover:text-[#1F2A6D]">Field guide</Link>
            <a href="#how-it-works" className="hover:text-[#1F2A6D]">How it works</a>
            <a href="#faq" className="hover:text-[#1F2A6D]">FAQs</a>
          </nav>
          <a
            href={WHATSAPP_AUDIT}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF8A00] hover:bg-[#F57C00] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            Book a 15-min call
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="warli-pattern relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <p className="text-xs font-semibold text-[#FF8A00] uppercase tracking-[0.2em]">
            AI workflow automation, done for you
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
            We Build AI Automation That Keeps Running After We Leave
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#1A1A1A]/80 max-w-3xl mx-auto">
            We set up, host, and look after n8n workflows for your business. The
            boring, repeated work — chasing leads, sending follow-ups,
            reminders, reports — runs on its own. You get your time back. No
            half-finished builds. No &ldquo;it broke and nobody knows why.&rdquo;
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#templates"
              className="bg-[#FF8A00] hover:bg-[#F57C00] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get the free n8n template pack →
            </a>
            <a
              href={WHATSAPP_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF] px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              Book a 15-minute call
            </a>
          </div>

          <p className="mt-6 text-sm text-[#1A1A1A]/60">
            Self-hosted or managed · Marketing, sales, and appointment workflows ·
            You own everything
          </p>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-white border-y border-[#E9D8C3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold text-[#1A1A1A]/55 uppercase tracking-[0.2em] text-center">
            Built by an engineer, not a reseller
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              '15+ years building backend and data systems',
              'We work in n8n every day',
              'Live workflows running for real businesses',
              'Setups that hold up under real load',
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-2 p-3 rounded-xl bg-[#FFF6E8] border border-[#E9D8C3]"
              >
                <span className="text-[#1F7A3A] mt-0.5">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[#1A1A1A]/75 max-w-3xl mx-auto">
            We&apos;ve shipped this stuff for paying clients. So we know the
            difference between a demo that looks good and a workflow that still
            works at 2 a.m. without anyone watching it.
          </p>
        </div>
      </section>

      {/* 3. PAIN */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            You Didn&apos;t Start a Business to Do Data Entry at 11 p.m.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[#1A1A1A]/85">
            <p>
              The follow-up you forgot. The invoice that went out three days
              late. The lead who messaged on Saturday and heard back Tuesday —
              and bought from someone else by then.
            </p>
            <p>
              None of it is hard work. It just never ends. And it eats the hours
              you actually wanted from running your own thing.
            </p>
            <p>
              You can keep doing it by hand. Or you can hand it to something
              that does it the same way every time and never gets tired.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="#templates"
              className="border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF] px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Show me what to automate first →
            </a>
          </div>
        </div>
      </section>

      {/* 4. REFRAME */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            You Don&apos;t Want &ldquo;Automation.&rdquo; You Want the Result.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[#1A1A1A]/85">
            <p>
              Nobody gets excited about workflows. You want leads answered in
              seconds. Follow-ups that actually happen. Invoices that chase
              themselves. A quote that goes out before the customer cools off.
            </p>
            <p>
              The tool underneath — n8n, the AI models, the integrations — is
              our problem, not yours.
            </p>
            <p>
              What you get is hours back and fewer things slipping through the
              cracks.
            </p>
            <p>
              So we don&apos;t hand you a fifty-page plan. We find the one
              workflow that&apos;s costing you the most right now. We fix that
              first. Then we add more once you can see it working.
            </p>
          </div>
        </div>
      </section>

      {/* 5. LEAD MAGNET */}
      <section id="templates" className="py-16 md:py-20 scroll-mt-20">
        <div id="lead-form" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              Free: Our n8n Workflow Template Pack
            </h2>
            <p className="mt-4 text-lg text-[#1A1A1A]/80">
              Three ready-to-use packs you can import and run today. Not toy
              demos. These are the same n8n workflows we set up for paying
              clients.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.1fr_1fr] gap-8 items-start">
            <div className="space-y-4">
              {[
                {
                  title: 'Marketing pack',
                  body: 'Catch leads, sort them, and send follow-ups on their own.',
                },
                {
                  title: 'Sales pack',
                  body: 'Qualify enquiries, update your CRM, and chase the ones who go quiet.',
                },
                {
                  title: 'Appointment pack',
                  body: 'Bookings, reminders, and fewer no-shows.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white border border-[#E9D8C3] p-5"
                >
                  <h3 className="text-lg font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[#1A1A1A]/80">{p.body}</p>
                </div>
              ))}
              <p className="text-sm text-[#1A1A1A]/65 italic">
                Every template comes with a simple setup note and a short
                &ldquo;here&apos;s what usually breaks and how to fix it&rdquo;
                section.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#E9D8C3] p-6 md:p-8 shadow-sm">
              <LeadMagnetForm />
            </div>
          </div>
        </div>
      </section>

      {/* 6. THREE WAYS TO WORK */}
      <section id="services" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Three Ways to Work With Us
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6">
              <h3 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                Build
              </h3>
              <p className="mt-3 text-[#1A1A1A]/85">
                We build your automation from scratch. We start with one
                workflow that matters, get it right, then grow from there. You
                get a clean, documented n8n setup wired into the tools you
                already use.
              </p>
              <a
                href={WHATSAPP_AUDIT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[#1F2A6D] hover:text-[#FF8A00] font-semibold"
              >
                Scope a build →
              </a>
            </div>
            <div id="hosting" className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6 scroll-mt-20">
              <h3 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                Host and run it for you
              </h3>
              <p className="mt-3 text-[#1A1A1A]/85">
                Managed n8n hosting. We put your n8n on a server we watch.
                Backups, updates, alerts, and a real person who fixes things
                before you even notice. Cheaper than n8n Cloud, and you
                don&apos;t have to touch a server.
              </p>
              <a
                href="#managed-hosting"
                className="mt-5 inline-block text-[#1F2A6D] hover:text-[#FF8A00] font-semibold"
              >
                See managed hosting →
              </a>
            </div>
            <div id="rescue" className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6 scroll-mt-20">
              <h3 className="text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                Rescue what&apos;s already broken
              </h3>
              <p className="mt-3 text-[#1A1A1A]/85">
                Got a tangle of half-working flows? We take a look, write down
                how it works, fix what&apos;s broken, and keep it running. No
                lectures about how it got that way.
              </p>
              <a
                href={WHATSAPP_RESCUE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-[#1F2A6D] hover:text-[#FF8A00] font-semibold"
              >
                Book a rescue audit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. USE CASES */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            The Workflows People Ask Us For
          </h2>
          <ul className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              { t: 'Marketing automation', b: 'Pull in leads from forms, ads, and chat. Sort them. Send the right follow-up. Build your weekly report on its own.' },
              { t: 'Sales automation', b: 'Qualify new enquiries, push them to your CRM, nudge the ones who don\'t reply, and ping you when a hot lead comes in.' },
              { t: 'Appointment and booking', b: 'Take bookings, send reminders, handle reschedules, and win back no-shows.' },
              { t: 'Email automation', b: 'Sort the inbox, draft replies in your voice, and flag the ones a human needs to handle.' },
              { t: 'Document automation', b: 'Pull data out of invoices and PDFs, check it, and file it where it belongs.' },
              { t: 'Content automation', b: 'Draft, schedule, and reuse content, with you approving before anything goes out.' },
            ].map((u) => (
              <li
                key={u.t}
                className="p-5 rounded-xl bg-white border border-[#E9D8C3]"
              >
                <p className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  {u.t}
                </p>
                <p className="mt-1 text-[#1A1A1A]/80 text-sm">{u.b}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-[#1A1A1A]/75">
            Each pack above is a starting point. We shape it around how you
            actually work.
          </p>
        </div>
      </section>

      {/* 8. AI CLEANUP */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            &ldquo;The AI Did It&rdquo; Isn&apos;t the Same as &ldquo;It&apos;s Done.&rdquo;
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[#1A1A1A]/85">
            <p>
              There&apos;s a reason a whole quiet industry has popped up around
              fixing AI&apos;s work.
            </p>
            <p>
              Businesses handed their writing, their replies, and their
              decisions to a bot to save money. Then they paid a person to redo
              all of it — sometimes for more than it would have cost to do it
              right the first time.
            </p>
            <p>
              Plain AI writes emails that are technically fine and completely
              empty. And customers can tell the moment your messages start
              sounding like everyone else&apos;s.
            </p>
            <p>
              Real automation isn&apos;t &ldquo;let the model wing it and
              hope.&rdquo; It runs on your voice, your rules, and a human check
              where it matters. So what goes out is something you&apos;d
              happily put your name on.
            </p>
          </div>
        </div>
      </section>

      {/* 9. RUN UNATTENDED */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            The Real Question Is: Can You Walk Away From It?
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A]/85">
            Most AI projects never make it past the demo. Not because the tools
            can&apos;t do the job. It&apos;s that a confident wrong answer
            looks exactly like a right one. So things break quietly, and nobody
            notices until a customer does.
          </p>
          <p className="mt-3 text-lg text-[#1A1A1A]/85">
            We build for that. Not for the demo.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'We give the AI a clear, bounded job. Not "do whatever you think is best."',
              'We check it against your real data, so it isn\'t guessing.',
              'A human approves anything risky before it goes out.',
              'It tells you the moment it\'s stuck — instead of pretending it isn\'t.',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E9D8C3]"
              >
                <span className="text-[#1F7A3A] mt-0.5">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-medium text-[#1F2A6D] text-center">
            The whole point was to take work off your plate. Not to give you a
            new thing to babysit.
          </p>
        </div>
      </section>

      {/* 10. COMPARISON */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Why We Use Self-Hosted n8n
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A]/85">
            You&apos;ve probably used Zapier or Make. They&apos;re easy, but
            the bill climbs fast, your data sits on their servers, and you hit
            a wall the moment a workflow gets complex.
          </p>
          <p className="mt-3 text-lg text-[#1A1A1A]/85">
            n8n gives you the same drag-and-drop feel, plus real code when you
            need it. No charge per task. Your data stays on your own server.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E9D8C3] bg-white">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-[#FFF6E8] text-[#1A1A1A]/65">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold"></th>
                  <th className="text-left px-4 py-3 font-semibold">Zapier / Make</th>
                  <th className="text-left px-4 py-3 font-semibold">n8n Cloud</th>
                  <th className="text-left px-4 py-3 font-semibold bg-[#EEF1FF] text-[#1F2A6D]">
                    Self-hosted n8n (us)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9D8C3]">
                {COMPARE_ROWS.map(([label, a, b, c]) => (
                  <tr key={label}>
                    <td className="px-4 py-3 font-semibold text-[#1F2A6D]">{label}</td>
                    <td className="px-4 py-3">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                    <td className="px-4 py-3 bg-[#EEF1FF] font-medium">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-[#1A1A1A]/75">
            There&apos;s only one catch with self-hosted n8n: someone has to
            run it properly. That&apos;s the whole reason we exist.
          </p>
        </div>
      </section>

      {/* 11. MANAGED HOSTING */}
      <section id="managed-hosting" className="py-16 md:py-20 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Managed n8n Hosting — Set Up Right, and Yours to Keep
          </h2>
          <p className="mt-6 text-lg text-[#1A1A1A]/85">
            We deploy n8n the proper way. Docker-based, backed up, and watched.
            On your own server, a cheap VPS, or somewhere like DigitalOcean —
            your call. You get the savings of self-hosting without the
            late-night debugging.
          </p>
          <p className="mt-6 font-semibold text-[#1F2A6D]">What&apos;s included:</p>
          <ul className="mt-3 space-y-2">
            {[
              'A clean n8n deployment with versions locked down',
              'Backups that we\'ve actually tested, not just set up',
              'Alerts when something fails — you hear it from us first',
              'Updates handled without breaking your live workflows',
              'A cap and watch on executions, so one bad loop can\'t drain your budget',
              'A simple monthly health report',
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#E9D8C3]"
              >
                <span className="text-[#1F7A3A] mt-0.5">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <a
              href={WHATSAPP_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8A00] hover:bg-[#F57C00] text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
            >
              Get a hosting quote →
            </a>
          </div>
        </div>
      </section>

      {/* 12. ALREADY BURNED */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Your Automation Worked Once. Then It Quietly Stopped.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[#1A1A1A]/85">
            <p>
              Maybe you built it yourself. Maybe a freelancer set it up and
              vanished. Either way, it usually goes the same.
            </p>
            <p>
              The first workflow runs. Everyone&apos;s happy. Then a node
              updates, a login expires, or a loop fires ten thousand times and
              burns through your budget before anyone catches it. Now it&apos;s
              sitting on a server you&apos;re scared to touch, with no notes,
              and &ldquo;automated&rdquo; has quietly turned back into
              &ldquo;I&apos;ll just do it myself.&rdquo;
            </p>
            <p>
              The install was never the hard part. Keeping it correct, watched,
              and fixed before it breaks — that&apos;s the part nobody warned
              you about.
            </p>
            <p className="font-medium text-[#1F2A6D]">
              That&apos;s the part we take off your hands.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={WHATSAPP_RESCUE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8A00] hover:bg-[#F57C00] text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
            >
              Book a rescue audit →
            </a>
          </div>
        </div>
      </section>

      {/* 13. HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-20 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            From &ldquo;It&apos;s a Mess&rdquo; to &ldquo;It Just Runs&rdquo;
          </h2>
          <ol className="mt-10 space-y-4">
            {[
              ['Day 1–2', 'We look.', 'We map what you have or what you need, and find the one workflow worth doing first.'],
              ['Day 3–10', 'We build or fix.', 'Documented, tested, no guesswork.'],
              ['Day 7–14', 'We put it live.', 'On a server we watch, with backups and alerts.'],
              ['Ongoing', 'We keep it running.', 'Your tools change, your team changes, and we keep up. We add more workflows as you grow.'],
            ].map(([day, title, body]) => (
              <li
                key={title}
                className="flex gap-4 rounded-xl bg-white border border-[#E9D8C3] p-5"
              >
                <span className="flex-shrink-0 w-24 text-sm font-semibold text-[#FF8A00] uppercase tracking-wider">
                  {day}
                </span>
                <div>
                  <p className="font-semibold text-[#1F2A6D]">{title}</p>
                  <p className="mt-1 text-[#1A1A1A]/80">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 14. ENGAGEMENTS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Simple, Clear, No Surprises
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { t: 'Build Sprint', tag: 'One-time', body: 'We build and ship one workflow, set up properly.' },
              { t: 'Managed Automation', tag: 'Monthly', body: 'Hosting, monitoring, maintenance, and a set number of changes each month.' },
              { t: 'Rescue Retainer', tag: 'Monthly', body: 'We take over a broken setup, fix it, and keep it alive.' },
            ].map((p) => (
              <div
                key={p.t}
                className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-6"
              >
                <p className="text-xs font-semibold text-[#FF8A00] uppercase tracking-wider">
                  {p.tag}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  {p.t}
                </h3>
                <p className="mt-3 text-[#1A1A1A]/80">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[#1A1A1A]/75 max-w-2xl mx-auto">
            Clear scope. Clear caps. No vague &ldquo;marketing services&rdquo; bill.
            And you always own your workflows and your data. If you ever leave,
            all of it comes with you.
          </p>
        </div>
      </section>

      {/* 15. FAQ */}
      <section id="faq" className="py-16 md:py-20 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] text-center">
            Straight Answers
          </h2>
          <div className="mt-10">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#1F2A6D] text-white warli-pattern">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
            Get a Free Automation Audit
          </h2>
          <p className="mt-6 text-lg text-white/85">
            Give us 15 minutes. We&apos;ll tell you the one thing worth
            automating first, whether your current setup is healthy, and what
            it would take to build it or fix it. No pitch, no pressure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_AUDIT}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF8A00] hover:bg-[#F57C00] text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5"
            >
              Book the 15-minute audit →
            </a>
            <a
              href="#templates"
              className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-xl font-semibold transition-all"
            >
              Or just grab the free template pack →
            </a>
          </div>
        </div>
      </section>

      {/* 17. OTHER UDYAMSETU RESOURCES (preservation block) */}
      <section className="py-16 md:py-20 bg-white border-t border-[#E9D8C3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#FF8A00] uppercase tracking-[0.2em]">
              Other UdyamSetu resources
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
              Looking for our growth-engine services?
            </h2>
            <p className="mt-3 text-[#1A1A1A]/75">
              UdyamSetu also runs landing-page, SEO, and lead-system services
              for South Delhi businesses. The original lead-machine landing
              page and the full South Delhi cluster live here.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              href="/agentic-ai"
              className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-5 hover:border-[#1F2A6D] transition-colors"
            >
              <p className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                Before you pick a tool, read this
              </p>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">
                A plain field guide to AI agents — brain, wiring, memory,
                knowledge, hands, and the watching, with 2026 tool
                comparisons. No selling.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[#1F2A6D]">
                Read the guide →
              </span>
            </Link>
            <Link
              href="/landing-turn-your-business-into-lead-magnet"
              className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-5 hover:border-[#1F2A6D] transition-colors"
            >
              <p className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                Turn your business into a lead machine
              </p>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">
                30–100 landing pages, SEO foundation, WhatsApp auto-replies,
                ad experiments — our original growth bundle.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[#1F2A6D]">
                Read more →
              </span>
            </Link>
            <Link
              href="/landing-turn-your-business-into-lead-magnet-hindi"
              className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-5 hover:border-[#1F2A6D] transition-colors"
            >
              <p className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)] font-[family-name:var(--font-mukta)]">
                हिंदी version (Lead Machine)
              </p>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">
                वही growth bundle, हिंदी / Hinglish में।
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[#1F2A6D]">
                पढ़ें →
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="rounded-2xl bg-[#FFF6E8] border border-[#E9D8C3] p-5 hover:border-[#1F2A6D] transition-colors"
            >
              <p className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                Portfolio
              </p>
              <p className="mt-2 text-sm text-[#1A1A1A]/75">
                Landing pages, local SEO sites, and WhatsApp lead systems we
                have shipped across healthcare, logistics, education, travel,
                mobility, and SaaS.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-[#1F2A6D]">
                See builds →
              </span>
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold text-[#1A1A1A]/60 uppercase tracking-wider">
              South Delhi cluster
            </p>
            <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm">
              {SOUTH_DELHI_PAGES.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="text-[#1F2A6D] hover:text-[#FF8A00] hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faqs"
                  className="text-[#1F2A6D] hover:text-[#FF8A00] hover:underline"
                >
                  All 50 FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 18. FOOTER */}
      <footer className="bg-[#1F2A6D] text-white/80 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-base text-white">
            We build, host, and look after n8n and AI automation for your
            business.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-white/85">
            <li>
              <a href="#templates" className="hover:text-[#FF8A00]">
                Template packs
              </a>
            </li>
            <li>
              <a href="#managed-hosting" className="hover:text-[#FF8A00]">
                Managed hosting
              </a>
            </li>
            <li>
              <a href="#rescue" className="hover:text-[#FF8A00]">
                Rescue audit
              </a>
            </li>
            <li>
              <Link href="/agentic-ai" className="hover:text-[#FF8A00]">
                AI agent field guide
              </Link>
            </li>
            <li>
              <a href="#services" className="hover:text-[#FF8A00]">
                Use cases
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#FF8A00]">
                FAQs
              </a>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-[#FF8A00]">
                Portfolio
              </Link>
            </li>
            <li>
              <a
                href={WHATSAPP_AUDIT}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF8A00]"
              >
                Contact
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#FF8A00]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#FF8A00]">
                Terms
              </Link>
            </li>
          </ul>
          <p className="mt-8 text-xs text-white/55">
            © {new Date().getFullYear()} UdyamSetu Growth Studio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
