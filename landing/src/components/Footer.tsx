import Link from 'next/link';
import { SOUTH_DELHI_PAGES } from '@/content/southDelhi/shared';

interface FooterProps {
  isHinglish?: boolean;
}

export default function Footer({ isHinglish = false }: FooterProps) {
  const cities = isHinglish
    ? ['Delhi/NCR', 'Mumbai', 'Pune', 'Bangalore', 'Tier-2 Cities']
    : ['Delhi/NCR', 'Mumbai', 'Pune', 'Bangalore', 'Tier-2 Cities'];

  const links = isHinglish
    ? [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Contact', href: '#contact' },
      ]
    : [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Contact', href: '#contact' },
      ];

  return (
    <footer className="bg-[#1F2A6D] text-white warli-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] mb-4">
              UdyamSetu
            </h3>
            <p className={`text-white/80 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : 'font-[family-name:var(--font-inter)]'}`}>
              {isHinglish
                ? 'अपना बिज़नेस, अपनी growth'
                : 'Turn Your Business Into a Lead Machine'}
            </p>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-poppins)]">
              {isHinglish ? 'हम यहाँ serve करते हैं' : 'Cities We Serve'}
            </h4>
            <ul className="space-y-2 text-white/80">
              {cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-poppins)]">
              {isHinglish ? 'लिंक्स' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#FF8A00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={isHinglish ? '/' : '/hi'}
                  className="text-white/80 hover:text-[#FF8A00] transition-colors"
                >
                  {isHinglish ? 'English Version' : 'हिंदी Version'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/20">
          <h4 className="font-semibold mb-4 font-[family-name:var(--font-poppins)]">
            {isHinglish ? 'South Delhi Pages' : 'South Delhi Pages'}
          </h4>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm">
            {SOUTH_DELHI_PAGES.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="text-white/75 hover:text-[#FF8A00] transition-colors"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} UdyamSetu Growth Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
