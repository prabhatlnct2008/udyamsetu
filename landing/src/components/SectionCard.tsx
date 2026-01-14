import { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export default function SectionCard({ children, className = '' }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-[#E9D8C3] p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
