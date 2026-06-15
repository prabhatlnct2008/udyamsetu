/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'What an AI Agent Actually Is — A Plain Field Guide (2026) | UdyamSetu',
  description:
    'No hype. What an AI agent is made of — brain, wiring, memory, knowledge, hands, monitoring — plus the real free and paid tools for each, and when not to build one.',
  alternates: { canonical: 'https://udyamsetuai.in/agentic-ai' },
  openGraph: {
    title:
      'Before you pick a tool, read this — a plain field guide to AI agents',
    description:
      'Understand AI agents part by part, with real 2026 tool comparisons. Built to teach, not sell.',
    url: 'https://udyamsetuai.in/agentic-ai',
    type: 'article',
    images: ['/images/what-is-an-ai-agent-loop.png'],
  },
};

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Before you pick a tool, read this: a plain field guide to AI agents',
  description:
    'A plain-English field guide to what an AI agent is actually made of — brain, wiring, memory, knowledge, hands, and monitoring — with real free and paid tool comparisons for 2026.',
  image: 'https://udyamsetuai.in/images/what-is-an-ai-agent-loop.png',
  author: {
    '@type': 'Organization',
    name: 'UdyamSetu',
    url: 'https://udyamsetuai.in',
  },
  publisher: {
    '@type': 'Organization',
    name: 'UdyamSetu',
  },
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://udyamsetuai.in/agentic-ai',
  },
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between a chatbot and an agent?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A chatbot answers questions. An agent gets a goal and works out the steps to reach it itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to pick a model or framework forever?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Both the model and the framework are swappable. Pick in a way that lets you change later, because you will.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is RAG in plain words?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Before the agent answers, it looks things up in your own documents and answers from those, instead of guessing.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I build an AI agent myself for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, with self-hosted tools like n8n or Dify. Bring in an engineer once it touches real customers or money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do AI agents make mistakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are confident guessers. Grounding in your documents, guardrails, a human check on risky steps, and ongoing evals keep them honest.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I not use an AI agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the task is the same predictable steps every time. A plain automation or workflow is cheaper and more reliable.',
      },
    },
  ],
};

const BOOK_CALL = `https://wa.me/918882567801?text=${encodeURIComponent(
  "Hi, I read the agentic AI field guide. I'd like to book a scoping call.",
)}`;

// The new home (/) is the n8n services page on this site.
const N8N_PAGE = '/';

const linkClass =
  'text-[#1F2A6D] underline decoration-[#FF8A00]/40 hover:text-[#FF8A00] hover:decoration-[#FF8A00] transition-colors';

const sectionHeading =
  'mt-16 mb-5 text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)] scroll-mt-20';

const para = 'my-4 text-[17px] leading-[1.75] text-[#1A1A1A]/90';

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-[#E9D8C3] bg-white">
      <table className="w-full text-sm min-w-[640px]">
        <thead className="bg-[#FFF6E8] text-[#1A1A1A]/70">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="text-left px-4 py-3 font-semibold align-top"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E9D8C3]">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 1 ? 'bg-[#FFF6E8]/40' : ''}>
              {r.map((c, j) => (
                <td
                  key={j}
                  className="px-4 py-3 align-top text-[#1A1A1A]/90"
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AgenticAIFieldGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Quiet brand bar (no CTA, no sticky nav fighting the read) */}
      <header className="border-b border-[#E9D8C3] bg-[#FFF6E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link
            href="/"
            className="text-lg font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]"
          >
            UdyamSetu
          </Link>
        </div>
      </header>

      <main className="bg-[#FFF6E8] py-12 md:py-16">
        <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-[#1A1A1A]">
          {/* HERO */}
          <header className="mb-12">
            <p className="text-xs font-semibold text-[#FF8A00] uppercase tracking-[0.2em]">
              Agentic AI · Field Guide
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-[#1F2A6D] leading-tight font-[family-name:var(--font-poppins)]">
              Before you pick a tool, read this
            </h1>
            <p className="mt-4 italic text-lg text-[#1A1A1A]/75">
              A plain field guide to AI agents — for people who keep hearing the
              words and want to actually understand them.
            </p>
          </header>

          {/* INTRO */}
          <p className={para}>
            Most people come to a page like this wanting to know which tool to
            buy. That&rsquo;s the wrong question to start with, and it&rsquo;s
            the one everyone starts with anyway. Businesses get gullible about
            things they don&rsquo;t fully understand yet, and right now almost
            nobody fully understands this.
          </p>

          <p className={para}>
            Here&rsquo;s the thing nobody tells you. You don&rsquo;t need to
            pick a tool yet. You need to understand what an AI agent is
            actually made of. Once you know that, the tools start to make sense
            on their own.
          </p>

          <p className={para}>
            I&rsquo;ll be honest, half the &ldquo;AI agencies&rdquo; you&rsquo;ll
            talk to don&rsquo;t really understand this either. Anyway.
          </p>

          <p className={para}>
            So that&rsquo;s what this page does. Part by part. For each one
            I&rsquo;ll show you what&rsquo;s out there right now — free, paid,
            which are doing well, which are quietly dying. No selling.
          </p>

          <p className={para}>
            An agent is six things, really. A brain. The wiring that holds it
            together. Memory. Knowledge of your business. Hands to actually do
            things. And a way to keep an eye on it once it&rsquo;s running.
            We&rsquo;ll go through them one by one. The order matters less than
            you&rsquo;d think, but a brain is a reasonable place to start.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §1 */}
          <h2 id="section-1" className={sectionHeading}>
            1. What &ldquo;agentic&rdquo; even means
          </h2>

          <p className={para}>
            A chatbot answers. An automation runs the same steps every single
            time. An agent gets a goal and works out the steps itself.
          </p>

          <p className={para}>
            It&rsquo;s easier to see than to define. Say a customer emails you.
            A chatbot can tell them your opening hours. An agent reads the
            email, works out it&rsquo;s actually a refund they&rsquo;re after,
            pulls the order, checks if it qualifies, refunds it or flags it for
            you, and writes back. Nobody wrote those steps down for it. It
            found the path on its own — and it&rsquo;d take a different path
            for the next email.
          </p>

          <p className={para}>
            That&rsquo;s all &ldquo;agentic&rdquo; means. Able to act. It
            doesn&rsquo;t mean clever, and it definitely doesn&rsquo;t mean
            conscious, whatever the LinkedIn crowd is posting this week.
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            Half the briefs I get want an &ldquo;agent&rdquo; and what they
            actually want is a button that emails their team. Sell them the
            button. Agent money for agent work, not for a Google Form in a
            hoodie.
          </p>

          <p className={para}>
            Underneath, every agent runs the same small loop. Look at the
            situation. Decide. Do the thing. Check what happened. Go again.
            That loop is the whole magic trick.
          </p>

          <figure className="my-8">
            <Image
              src="/images/what-is-an-ai-agent-loop.png"
              alt="The AI agent loop: look, decide, act, check, then repeat."
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl border border-[#E9D8C3] bg-white"
              loading="lazy"
            />
          </figure>

          <p className={para}>
            Quick gut check before anyone sells you an &ldquo;agent.&rdquo; Ask
            four things. Does it decide its own next step? Can it actually do
            stuff — send, update, create — not just talk? Does it remember
            anything? Can it recover when a step goes wrong? If the answers are
            mostly no, it&rsquo;s a chatbot wearing a nicer jacket. And
            that&rsquo;s fine, sometimes a chatbot is all you need.{' '}
            <a href="#section-10" className={linkClass}>
              More on that at the end.
            </a>
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §2 */}
          <h2 id="section-2" className={sectionHeading}>
            2. The brain
          </h2>

          <p className={para}>
            The brain is the model. The thing that does the reasoning. Claude,
            GPT, Gemini, the open-source ones — that&rsquo;s the brain.
          </p>

          <p className={para}>
            Good news first: you don&rsquo;t marry one. Agents swap models the
            way you&rsquo;d swap a part in a machine. So this decision, the one
            people agonise over, matters less than it sounds.
          </p>

          <p className={para}>
            There are really only two questions. Do you want the smartest model
            going, or one you can run on your own servers? And do you care
            whether your data leaves the building?
          </p>

          <p className={para}>
            The smartest ones are closed. You rent them by the word.
            They&rsquo;re very good at thinking through a job that has ten
            steps. The other camp is open-weight — Llama, Mistral, Qwen,
            DeepSeek. You run those yourself. Cheaper once you&rsquo;re doing
            real volume, private, and you need somebody who can keep a server
            breathing.
          </p>

          <Table
            headers={['Model', 'Type', 'Where it runs', "What it's good at", 'Cost']}
            rows={[
              ['Claude', 'closed', 'their servers', 'reasoning, using tools, long multi-step jobs', 'per word'],
              ['GPT', 'closed', 'their servers', 'all-rounder, huge ecosystem around it', 'per word'],
              ['Gemini', 'closed', 'their servers', 'images + video, fits the Google stack', 'per word'],
              ['Llama / Mistral / Qwen / DeepSeek', 'open-weight', 'yours, or rented', 'privacy, cheaper at scale, you can fine-tune', "the model's free — you pay for the machine"],
            ]}
          />

          <p className={para}>
            One warning, because people get this wrong. Model rankings shift
            almost every month. Don&rsquo;t pick because of a benchmark you saw
            once. Pick so you can switch later, because you will switch later.
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            Everyone reaches for GPT-4o by reflex and then can&rsquo;t work out
            why the bill blew up on a job a 7B open model would&rsquo;ve done
            in its sleep. Pick by the job, not the headline ranking.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §3 */}
          <h2 id="section-3" className={sectionHeading}>
            3. The wiring
          </h2>

          <p className={para}>
            If the model is the brain, the framework is the wiring. It decides
            what the agent does first, what it does next, and what happens when
            something breaks halfway through.
          </p>

          <p className={para}>
            You&rsquo;ll never touch it. But &ldquo;which framework?&rdquo; is
            one of the first things any developer asks you, and the answer
            quietly decides how hard it&rsquo;ll be to change things later.
            Pick wrong and a small change turns into a rebuild.
          </p>

          <p className={para}>
            The landscape went mad for two years and then settled down fast.
            Every big AI lab ships its own now. And they mostly speak a shared
            standard these days, so swapping pieces between them got cheaper
            than it used to be.
          </p>

          <Table
            headers={['Framework', 'Free / open?', 'Paid bit', 'Known for', 'Worth knowing']}
            rows={[
              ['LangGraph', 'yes', 'managed add-ons', 'the serious one — approvals, retries, audit trails, surviving real traffic', 'overtook CrewAI in popularity early this year'],
              ['CrewAI', 'yes', 'cloud + enterprise (~$25/mo up)', 'getting a first agent working fast, agents that act like a little team', 'often 30–60 lines to something that runs'],
              ['AutoGen → Microsoft Agent Framework', 'yes', 'Azure-tied', 'Microsoft shops, conversational multi-agent', 'AutoGen got folded into the MS framework; AG2 is the community fork keeping the old spirit'],
              ['OpenAI Agents SDK', 'yes', 'tied to OpenAI usage', 'quickest path for one OpenAI-based agent', "very OpenAI-centric, as you'd guess"],
              ['Claude Agent SDK', 'yes', 'tied to Claude usage', 'tool use, computer use, safety baked in', "pulled out of Claude's own coding tool"],
              ['Google ADK', 'yes', 'Vertex managed', 'layered agents, multimodal', 'best if you already live on Google Cloud'],
              ['Agno', 'yes', '—', 'lightweight, role-based', 'smaller crowd, fewer ready-made bits'],
            ]}
          />

          <p className={para}>
            The honest filter isn&rsquo;t &ldquo;which is best.&rdquo;
            It&rsquo;s which one your team can still operate six months after
            launch, when the person who built it has moved on. The flashiest
            framework in a weekend demo is often the worst at that.
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            We&rsquo;ve moved most production builds to LangGraph this past
            year — not because it&rsquo;s fashionable but because the audit
            trail and a real retry layer save you the 2 a.m. call. CrewAI is
            still where we prototype on day one.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §4 */}
          <h2 id="section-4" className={sectionHeading}>
            4. Memory
          </h2>

          <p className={para}>
            Left alone, a model forgets everything the second the chat ends.
            Memory is the bolt-on layer that lets an agent remember a customer,
            recall what got decided last week, hang on to what it learned.
          </p>

          <p className={para}>
            Here&rsquo;s the catch people miss. A lot of what gets sold as
            &ldquo;memory&rdquo; is just the agent re-reading the last few
            messages. Real memory stores things and then pulls the{' '}
            <em>right</em> thing back out later, which is harder than it sounds
            and is a top reason agents quietly go stupid over time.
          </p>

          <p className={para}>
            Most of these are free to self-host, with paid cloud tiers once you
            grow.
          </p>

          <Table
            headers={['Tool', 'Free?', 'Paid', 'Best for', 'Note']}
            rows={[
              ['Mem0', 'free tier, ~1K memories', '$19/mo (10K), Pro $249/mo for the graph stuff', 'general "remember this customer" personalisation', "biggest community, runs AWS's agent memory"],
              ['Zep / Graphiti', "Graphiti's open and free to self-host", 'Zep Cloud free for 1K episodes, then ~$125/mo up', '"what was true back in Q1" — facts that change with time', 'heavier to set up, wants a graph DB underneath'],
              ['Letta (was MemGPT)', 'open source', 'managed cloud, in beta', 'long-running agents that edit their own memory', 'the OS-style memory idea, if that means anything to your dev'],
              ['LangMem', 'open source', '—', 'teams already on LangGraph', 'path of least resistance there'],
              ['Cognee', 'open source', 'cloud tiers', 'knowledge-graph-heavy needs', 'newer, smaller'],
            ]}
          />

          <p className={para}>
            You can start free. The jump to paid is about scale and the fancier
            graph features. Fair to put that off until the agent&rsquo;s
            actually earning.
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            Built a support agent that cheerfully asked every returning
            customer to pay again — every conversation, fresh slate. Memory off
            by default does that. Now we ship it on by default and turn it down
            later if we have to.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §5 */}
          <h2 id="section-5" className={sectionHeading}>
            5. Knowledge — how it knows <em>your</em> business
          </h2>

          <p className={para}>
            Models know the public internet up to some cutoff date. They do not
            know your price list, your refund policy, or last year&rsquo;s
            support tickets. So out of the box, an agent will answer questions
            about your business by guessing, confidently, and wrongly.
          </p>

          <p className={para}>
            The fix is a thing called RAG. Strip the jargon and it&rsquo;s
            simple: before the agent answers, it goes and looks things up in
            your documents, then answers from those. The bit that makes the
            lookup fast is a vector database — think of it as a search engine
            that finds by meaning instead of exact words.
          </p>

          <p className={para}>
            It&rsquo;s not magic, though. If your documents are a mess, or they
            contradict each other, the agent will be a confident mess too.
            Garbage in, confident garbage out.
          </p>

          <Table
            headers={['Vector DB', 'Free / open?', 'Managed price', 'Best for', 'Note']}
            rows={[
              ['pgvector', "yes — it's a Postgres add-on", 'free, lives in the DB you already have', "you're on Postgres already, under a few million records", 'with the right index it’s 5–8ms, genuinely fine'],
              ['Chroma', 'yes', 'cloud tiers', 'prototypes, new projects', 'a small cheap server handles millions of records'],
              ['Qdrant', 'yes (Rust)', 'cloud from ~$25/mo', 'heavy filtering — legal, compliance', 'easiest of the dedicated ones to self-host'],
              ['Weaviate', 'yes', 'cloud from ~$25/mo', 'keyword + meaning search in one go', 'brings its own embedding bits'],
              ['Pinecone', 'free tier, 100K vectors', 'storage ~$0.33/GB/mo + usage; ~$70/mo at 10M vectors', 'fully managed, zero fuss', "can't self-host or air-gap it; gets pricey way up high"],
              ['Milvus', 'yes', 'Zilliz Cloud', 'billion-record monsters', 'overkill for most, heavier to run'],
            ]}
          />

          <p className={para}>
            Most small businesses never outgrow free pgvector or Chroma. Let me
            say that again because it saves you money: most of you will never
            need the paid one. You pay for a managed database to buy back the
            time your dev would&rsquo;ve spent babysitting infrastructure — not
            to &ldquo;go faster.&rdquo;
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            Pulled a clinic&rsquo;s policies out of three Google Drives, two
            WhatsApp folders, and a Word doc named &ldquo;Final v7 USE THIS
            ONE&rdquo;. The agent only answered correctly after we threw out
            half of them and rewrote what was left. The RAG wasn&rsquo;t the
            hard bit.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §6 */}
          <h2 id="section-6" className={sectionHeading}>
            6. Hands — how it actually does things
          </h2>

          <p className={para}>
            A model that only talks is, again, a chatbot. What turns it into an
            agent is the ability to <em>do</em> — send the email, update the
            CRM, raise the invoice, check stock.
          </p>

          <p className={para}>
            Two ideas worth knowing the names of. <strong>Function calling</strong>{' '}
            is where the model gets handed a list of buttons it&rsquo;s allowed
            to press. <strong>MCP</strong> is a newer shared standard — picture
            USB, but for plugging tools into AI — so the same connector works
            across different agents instead of being rebuilt every time. There
            are hundreds of these ready to go now.
          </p>

          <Table
            headers={['Way to do it', 'Free?', 'Best for', 'Note']}
            rows={[
              ['native function calling', 'yes, comes with the framework', 'custom actions your dev defines', 'most control, most code'],
              ['MCP servers', 'yes, open standard', 'reusable connectors across tools', 'files, databases, the usual SaaS apps'],
              ['Composio', 'free tier + paid', 'pre-built, already-authed app connections', 'saves wiring each integration by hand'],
              [
                <>
                  <Link href={N8N_PAGE} className={linkClass}>
                    n8n
                  </Link>{' '}
                  as the hands
                </>,
                'free to self-host',
                'plugging an agent into 400+ business apps',
                'mature, and it can be the whole engine, not just the hands',
              ],
            ]}
          />

          <p className={para}>
            &ldquo;Can it connect to the tools we already use?&rdquo; The
            answer is almost always yes now. The real question is how much
            wiring, not whether it&rsquo;s possible.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §7 */}
          <h2 id="section-7" className={sectionHeading}>
            7. &ldquo;Can&rsquo;t I just build it myself?&rdquo;
          </h2>

          <p className={para}>Fair question. Honest answer has a fork in it.</p>

          <p className={para}>
            No-code builders let someone who isn&rsquo;t an engineer drag boxes
            around a canvas and end up with a working agent. Genuinely useful.
            Great for proving an idea exists before anyone spends real money.
          </p>

          <p className={para}>
            The catch — and I&rsquo;ll say it plainly because it builds trust —
            these things work beautifully in the demo and get painful to fix
            the moment something breaks at scale. You can&rsquo;t easily step
            through what went wrong. So the pattern that actually works is:
            prototype it yourself in no-code, then move it to code once
            it&rsquo;s doing work that matters.
          </p>

          <Table
            headers={['Tool', 'Free / self-host?', 'Paid from', 'Skill needed', 'Best for']}
            rows={[
              [
                <Link key="n8n" href={N8N_PAGE} className={linkClass}>
                  n8n
                </Link>,
                'yes, unlimited runs',
                '~$24/mo cloud',
                'some',
                'business automation + agents, most integrations of the lot',
              ],
              ['Flowise', 'yes (open)', '~$35/mo cloud', 'some', 'visual building, full self-hosted control'],
              ['Langflow', 'yes (open)', 'cloud tiers', 'some', 'biggest community, friendlier if your dev likes Python'],
              ['Dify', 'yes (open)', '~$59/mo pro', 'low–some', 'all-in-one: agent, RAG and monitoring in one box'],
              ['Lindy', 'no, managed', '~$30/mo per agent', 'low', 'SMB agents — inbox, leads, CRM — compliance sorted'],
              ['Relevance AI', 'free tier', '~$19/mo up', 'low', 'no-code business-ops agents'],
              ['Make / Zapier', 'free tiers', '~$9 / ~$20 mo', 'low', 'light AI-flavoured automations, widest app lists'],
            ]}
          />

          <p className={para}>
            You can genuinely start this yourself this week, for nothing, with{' '}
            <Link href={N8N_PAGE} className={linkClass}>
              n8n
            </Link>{' '}
            or Dify. The day it touches money or real customers at volume, get
            an engineer&rsquo;s eyes on it. Not before. Before that, just play.
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            n8n is brilliant for getting from idea to running thing in a
            weekend, and it fights you the second you need real branching
            logic. I still reach for it first anyway. We move things into code
            only when the failure mode stops being amusing.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §8 */}
          <h2 id="section-8" className={sectionHeading}>
            8. The part nobody warns you about — keeping it alive
          </h2>

          <p className={para}>
            Getting an agent working once is the easy bit. Keeping it working
            is the actual job, and it&rsquo;s where most projects quietly die.
          </p>

          <p className={para}>
            Two plain ideas. <strong>Deployment</strong> is putting it
            somewhere it runs reliably, with the right permissions and a record
            of what it did. <strong>Watching it</strong> — observability and
            evals, if you want the words — is keeping an eye on what it&rsquo;s
            actually doing, because an agent isn&rsquo;t predictable. It can
            take a different route every time, get stuck in a loop, or run up a
            surprise bill while you sleep.
          </p>

          <p className={para}>
            You can&rsquo;t test an agent like normal software, where the same
            input gives the same output. You watch real runs and score them.
            The good news is the best tools for this have free or open
            versions, so it&rsquo;s not some luxury only big companies get.
          </p>

          <Table
            headers={['Tool', 'Free / open?', 'Paid from', 'Best for', 'Note']}
            rows={[
              ['Langfuse', 'yes, free self-host, no limits', 'cloud tiers', 'the default open choice — tracing and evals', 'got acquired this January, still open'],
              ['Arize Phoenix', 'yes, standards-based', 'cloud from ~$50/mo', 'proper eval rigour, hallucination metrics', '25K free traces a month on cloud'],
              ['Helicone', 'yes, open proxy', 'usage-based', 'the simplest start — barely any code change', 'good for "just start capturing data today"'],
              ['LangSmith', 'free for 5K traces/mo', '$39/seat + ~$0.50 per 1k traces', 'LangChain/LangGraph stacks', "deepest if you're already in that world"],
              ['Braintrust', 'yes, generous free (1M traces/mo)', 'usage Pro', 'eval-first teams, catching regressions', 'strong testing harness'],
              ['Laminar', 'yes, free 1GB', '$30/mo hobby', 'debugging agents, replaying a session', 'agent-first, nice for finding the broken step'],
            ]}
          />

          <p className={para}>
            Here&rsquo;s a question to ask anyone quoting you a build.
            &ldquo;How will we watch this after launch?&rdquo; If they
            don&rsquo;t have a real answer, that&rsquo;s the trap — the one
            where a brilliant demo turns into a dead project three months
            later. Most of them won&rsquo;t have an answer. Now you&rsquo;ll
            know what the silence means.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §9 */}
          <h2 id="section-9" className={sectionHeading}>
            9. Why agents make things up
          </h2>

          <p className={para}>
            Let&rsquo;s kill the scary word. &ldquo;Hallucination&rdquo; just
            means the model is a confident guesser, so when it doesn&rsquo;t
            have the right facts in front of it, it makes something up that{' '}
            <em>sounds</em> right.
          </p>

          <p className={para}>
            No tool removes this. A stack of habits reduces it, though, and the
            habits aren&rsquo;t complicated:
          </p>

          <ul className="my-5 space-y-2 list-disc pl-6 text-[17px] leading-[1.75] text-[#1A1A1A]/90">
            <li>
              <strong>Grounding</strong> — feed it your real documents so it
              answers from those, not from vibes. (That&rsquo;s the RAG bit
              from section 5.)
            </li>
            <li>
              <strong>Guardrails</strong> — rules on what it&rsquo;s allowed to
              say and do.
            </li>
            <li>
              <strong>A human in the loop</strong> — a person signs off the
              risky steps. Refunds over a certain amount, say.
            </li>
            <li>
              <strong>Evals</strong> — keep scoring real answers so you catch
              it drifting.
            </li>
          </ul>

          <p className={para}>
            The goal was never a perfect agent. It&rsquo;s a reliable-enough
            one that you&rsquo;re watching — same as a decent employee who
            still needs the odd check. Anyone promising you flawless is either
            lying or doesn&rsquo;t know yet.
          </p>

          <figure className="my-8">
            <Image
              src="/images/why-ai-agents-hallucinate-guardrails.png"
              alt="Four guardrails that reduce AI agent mistakes: grounding, guardrails, a human check, and evals."
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl border border-[#E9D8C3] bg-white"
              loading="lazy"
            />
          </figure>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            Watched an agent quote a customer{' '}
            {'{{verify: real number — e.g. ten times the actual price}}'} with
            full confidence because the price list had a typo it inherited
            cleanly. The lesson wasn&rsquo;t &ldquo;AI is dumb.&rdquo; It was
            &ldquo;fix the source first.&rdquo;
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §10 */}
          <h2 id="section-10" className={sectionHeading}>
            10. When you should NOT build an agent
          </h2>

          <p className={para}>
            This is the section that makes the rest believable, so I&rsquo;ll
            be straight.
          </p>

          <p className={para}>
            Agents are the right tool when the job needs judgement on messy
            input. If your task is the same predictable steps every time, you
            don&rsquo;t want an agent. You want a plain automation — often just{' '}
            <Link href={N8N_PAGE} className={linkClass}>
              n8n
            </Link>{' '}
            — and it&rsquo;ll be cheaper, faster and far less likely to
            surprise you. An agent there is a sports car for the school run.
          </p>

          <Table
            headers={['If the job is…', 'You want…', 'Why']}
            rows={[
              [
                'the same steps every time',
                <>
                  a workflow (
                  <Link key="n8n-workflow" href={N8N_PAGE} className={linkClass}>
                    n8n
                  </Link>
                  )
                </>,
                'cheaper, predictable, boring in a good way',
              ],
              ['simple rule-based decisions', 'automation + a bit of logic', 'an agent is overkill'],
              ['varying input that needs a judgement call', 'an actual agent', 'this is the thing agents are for'],
              ['understanding messy language or documents', 'an agent, with RAG', 'models genuinely shine here'],
            ]}
          />

          <p className={para}>
            A good partner will sometimes tell you <em>not</em> to build the
            agent. That honesty is worth more than the build is.
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            A clinic group asked us for an &ldquo;AI agent&rdquo; for
            appointment confirmations. We built them three n8n rules and a
            WhatsApp template instead. Costs a tenth, runs without anyone
            watching, hasn&rsquo;t broken in months. The right answer was the
            boring one.
          </p>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* §11 */}
          <h2 id="section-11" className={sectionHeading}>
            11. That&rsquo;s the whole map
          </h2>

          <p className={para}>
            If you read this far, you now understand AI agents better than most
            of the people trying to sell them to you. The six parts — brain,
            wiring, memory, knowledge, hands, and the watching — that&rsquo;s
            the whole thing. Everything else is detail.
          </p>

          <p className={para}>
            So go play. Spin up{' '}
            <Link href={N8N_PAGE} className={linkClass}>
              n8n
            </Link>
            , it&rsquo;s free. Break something.
          </p>

          <p className={`${para} text-[#1A1A1A]/80 border-l-2 border-[#FF8A00] pl-4 italic`}>
            Build the smallest one you can stand to look at, then put it in
            front of real users this week. The half-finished thing in
            production teaches you more in a fortnight than the perfect plan
            does in six months.
          </p>

          <p className={para}>
            And if, after all that, you&rsquo;d rather hand it to someone who
            lives in this stuff every day — that&rsquo;s what we do. No pitch
            on the call. Just a conversation about what you&rsquo;re actually
            trying to fix.
          </p>

          <div className="my-10 flex">
            <a
              href={BOOK_CALL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FF8A00] hover:bg-[#F57C00] text-white px-7 py-3.5 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40"
            >
              Book a scoping call →
            </a>
          </div>

          <hr className="my-12 border-[#E9D8C3]" />

          {/* FAQ */}
          <h2 id="faqs" className={sectionHeading}>
            A few FAQs
          </h2>
          <dl className="my-6 space-y-5">
            {[
              [
                "What's the difference between a chatbot and an agent?",
                'A chatbot answers. An agent gets a goal and does the steps itself.',
              ],
              [
                'Do I have to pick a model or framework forever?',
                'No. Both are swappable. Pick so you can change later.',
              ],
              [
                "What's RAG, in plain words?",
                'The agent looks things up in your documents before answering, instead of guessing.',
              ],
              [
                'Can I build an agent myself for free?',
                'Yes — n8n or Dify, self-hosted. Get an engineer in once it touches real customers.',
              ],
              [
                'Why do agents make mistakes?',
                "They're confident guessers. Grounding, guardrails, a human check and evals keep it honest.",
              ],
              [
                'When should I NOT use an agent?',
                'When the task is the same every time. Use a plain workflow.',
              ],
            ].map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
                  {q}
                </dt>
                <dd className="mt-1 text-[#1A1A1A]/85 leading-[1.7]">{a}</dd>
              </div>
            ))}
          </dl>

        </article>
      </main>
    </>
  );
}
