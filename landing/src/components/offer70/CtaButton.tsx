'use client';

import { trackEvent, type OfferEventName } from './tracking';

interface CtaButtonProps {
  href?: string;
  external?: boolean;
  location: string;
  eventName?: OfferEventName;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  size?: 'normal' | 'large';
  children: React.ReactNode;
  className?: string;
}

export default function CtaButton({
  href = '#lead-form',
  external = false,
  location,
  eventName = 'cta_click_primary',
  variant = 'primary',
  size = 'normal',
  children,
  className = '',
}: CtaButtonProps) {
  const sizeClasses =
    size === 'large' ? 'px-8 py-4 text-lg' : 'px-6 py-3.5 text-base';

  const variantClasses =
    variant === 'primary'
      ? 'bg-[#FF8A00] hover:bg-[#F57C00] text-white shadow-lg hover:shadow-xl'
      : variant === 'whatsapp'
      ? 'bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-lg hover:shadow-xl'
      : 'border-2 border-[#1F2A6D] text-[#1F2A6D] hover:bg-[#EEF1FF]';

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={() => trackEvent(eventName, { location })}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
}
