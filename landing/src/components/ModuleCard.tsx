import { ReactNode } from 'react';

interface ModuleCardProps {
  number: number;
  title: string;
  subtitle?: string;
  description: string;
  deliverables: string[];
  outcome?: string;
  note?: string;
  icon: ReactNode;
  isHinglish?: boolean;
}

export default function ModuleCard({
  number,
  title,
  subtitle,
  description,
  deliverables,
  outcome,
  note,
  icon,
  isHinglish = false,
}: ModuleCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E9D8C3] p-6 md:p-8 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-[#EEF1FF] rounded-xl flex items-center justify-center text-[#1F2A6D] shrink-0">
          {icon}
        </div>
        <div>
          <span className="text-sm text-[#FF8A00] font-semibold">Module {number}</span>
          <h3 className={`text-xl font-bold text-[#1F2A6D] mt-1 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : 'font-[family-name:var(--font-poppins)]'}`}>
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-[#1A1A1A]/60 mt-1">{subtitle}</p>
          )}
        </div>
      </div>

      <p className={`text-[#1A1A1A]/80 mb-4 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>
        {description}
      </p>

      <div className="mb-4">
        <h4 className="font-semibold text-[#1F2A6D] mb-2">
          {isHinglish ? 'Deliverables:' : 'Deliverables:'}
        </h4>
        <ul className={`space-y-2 text-[#1A1A1A]/80 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#1F7A3A] mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {outcome && (
        <div className="bg-[#1F7A3A]/10 rounded-lg p-3 border-l-4 border-[#1F7A3A]">
          <p className={`text-[#1F7A3A] font-medium ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>
            {outcome}
          </p>
        </div>
      )}

      {note && (
        <div className="mt-4 text-sm text-[#1A1A1A]/60 italic">
          {note}
        </div>
      )}
    </div>
  );
}
