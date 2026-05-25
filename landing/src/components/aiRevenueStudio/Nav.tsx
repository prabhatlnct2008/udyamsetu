interface NavProps {
  ctaLabel?: string;
  ctaHref?: string;
}

export default function Nav({
  ctaLabel = 'Get yours →',
  ctaHref = '#lead-form',
}: NavProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="flex items-center gap-2 font-bold text-lg font-[family-name:var(--font-poppins)]">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white text-sm">
            AI
          </span>
          AI Revenue Studio
        </span>
        <a
          href={ctaHref}
          className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}
