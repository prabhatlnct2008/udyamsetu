interface PackageCardProps {
  name: string;
  subtitle: string;
  bestFor: string;
  setupIncludes: string[];
  monthlyIncludes?: string[];
  mrpSetup: string;
  mrpMonthly?: string;
  launchSetup: string;
  launchMonthly?: string;
  isHinglish?: boolean;
  featured?: boolean;
}

export default function PackageCard({
  name,
  subtitle,
  bestFor,
  setupIncludes,
  monthlyIncludes,
  mrpSetup,
  mrpMonthly,
  launchSetup,
  launchMonthly,
  isHinglish = false,
  featured = false,
}: PackageCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border-2 p-6 md:p-8 relative ${featured ? 'border-[#FF8A00]' : 'border-[#E9D8C3]'} hover:shadow-lg transition-shadow`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF8A00] text-white px-4 py-1 rounded-full text-sm font-semibold">
          {isHinglish ? 'लोकप्रिय' : 'Popular'}
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold text-[#1F2A6D] ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : 'font-[family-name:var(--font-poppins)]'}`}>
          {name}
        </h3>
        <p className="text-sm text-[#1A1A1A]/60 mt-1">{subtitle}</p>
        <p className={`text-[#1F7A3A] font-medium mt-2 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>
          {isHinglish ? 'Best for:' : 'Best for:'} {bestFor}
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="font-semibold text-[#1F2A6D] mb-2">
            {isHinglish ? 'Setup includes:' : 'Setup Includes:'}
          </h4>
          <ul className={`space-y-1 text-sm text-[#1A1A1A]/80 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>
            {setupIncludes.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#1F7A3A]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {monthlyIncludes && monthlyIncludes.length > 0 && (
          <div>
            <h4 className="font-semibold text-[#1F2A6D] mb-2">
              {isHinglish ? 'Monthly includes:' : 'Monthly Includes:'}
            </h4>
            <ul className={`space-y-1 text-sm text-[#1A1A1A]/80 ${isHinglish ? 'font-[family-name:var(--font-mukta)]' : ''}`}>
              {monthlyIncludes.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#1F7A3A]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-[#E9D8C3] pt-4">
        <div className="text-center">
          <p className="text-sm text-[#1A1A1A]/60 line-through">
            MRP: {mrpSetup} {mrpMonthly && `| Monthly ${mrpMonthly}`}
          </p>
          <div className="mt-2">
            <span className="bg-[#FF8A00]/10 text-[#FF8A00] px-2 py-1 rounded text-sm font-semibold">
              60% OFF
            </span>
          </div>
          <p className="text-2xl font-bold text-[#1F2A6D] mt-2">
            {launchSetup}
          </p>
          {launchMonthly && (
            <p className="text-lg text-[#1F2A6D]/80">
              + {launchMonthly}/month
            </p>
          )}
        </div>

        <a
          href="https://wa.me/918882567801?text=PLAN"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-[#FF8A00] hover:bg-[#F57C00] text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
        >
          <WhatsAppIcon />
          <span>{isHinglish ? 'इसे चुनें' : 'Choose This Plan'}</span>
        </a>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
