interface NotebookVisualProps {
  className?: string;
}

const ITEMS = [
  { label: 'Landing Page', strong: true },
  { label: '30 SEO Pages', strong: true },
  { label: 'AI Follow-Up Workflow', strong: true },
  { label: '30-Day Content Calendar', strong: true },
  { label: 'Posted a Reel', strong: false },
];

export default function NotebookVisual({ className = '' }: NotebookVisualProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-2xl border border-[#E9D8C3] p-6 md:p-7 max-w-md mx-auto ${className}`}
      style={{ transform: 'rotate(-1.5deg)' }}
      aria-hidden="true"
    >
      {/* Spiral binding */}
      <div className="absolute -top-2 left-6 right-6 flex justify-between">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-4 bg-[#1F2A6D] rounded-full opacity-80"
          />
        ))}
      </div>

      <div className="text-xs text-[#1A1A1A]/50 uppercase tracking-[0.2em] font-semibold mb-4 mt-2">
        Marketing Setup
      </div>

      <ul className="space-y-3">
        {ITEMS.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 border-b border-dashed border-[#E9D8C3] pb-2"
          >
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                item.strong
                  ? 'bg-[#1F7A3A] text-white'
                  : 'bg-[#E9D8C3] text-[#1A1A1A]/40'
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span
              className={`text-base md:text-lg font-medium ${
                item.strong
                  ? 'text-[#1A1A1A]'
                  : 'text-[#1A1A1A]/40 italic'
              }`}
            >
              {item.label}
              {!item.strong && (
                <span className="ml-2 text-xs uppercase tracking-wider text-[#FF8A00]/80">
                  (only 10%)
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 text-sm text-[#1F2A6D] font-semibold">
        ✓ The complete system, not just the reel.
      </div>
    </div>
  );
}
