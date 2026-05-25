'use client';

interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function Chip({ label, selected, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-150 ${
        selected
          ? 'bg-[#0F172A] text-white border-[#0F172A]'
          : 'bg-white text-[#0F172A] border-slate-200 hover:border-[#4F46E5] hover:text-[#4F46E5]'
      }`}
    >
      {label}
    </button>
  );
}
