import {
  EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  buildWhatsAppLink,
} from '@/content/aiRevenueStudio';

interface Props {
  eyebrow: string;
  title: string;
  body: string;
}

const WHATSAPP_GENERIC = buildWhatsAppLink(
  'Hi! I want to know about the ₹99 AI-designed website.',
);

export default function ContactSection({ eyebrow, title, body }: Props) {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-[#4F46E5] uppercase tracking-[0.2em]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)]">
            {title}
          </h2>
          <p className="mt-4 text-slate-600">{body}</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-5">
          <a
            href={WHATSAPP_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white border border-slate-100 p-6 text-center shadow-sm hover:border-[#25D366] transition-colors"
          >
            <p className="text-xs uppercase tracking-wider text-slate-400">WhatsApp</p>
            <p className="mt-2 font-semibold text-[#0F172A]">{WHATSAPP_DISPLAY}</p>
          </a>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="rounded-2xl bg-white border border-slate-100 p-6 text-center shadow-sm hover:border-[#4F46E5] transition-colors"
          >
            <p className="text-xs uppercase tracking-wider text-slate-400">Call us</p>
            <p className="mt-2 font-semibold text-[#0F172A]">{WHATSAPP_DISPLAY}</p>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-2xl bg-white border border-slate-100 p-6 text-center shadow-sm hover:border-[#4F46E5] transition-colors"
          >
            <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
            <p className="mt-2 font-semibold text-[#0F172A] break-all">{EMAIL}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
