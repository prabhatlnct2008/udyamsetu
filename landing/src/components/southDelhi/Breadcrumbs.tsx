import Link from 'next/link';

interface BreadcrumbsProps {
  current: string;
}

export default function Breadcrumbs({ current }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm text-[#1A1A1A]/70"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-[#1F2A6D] transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-[#1F2A6D] font-medium">{current}</li>
      </ol>
    </nav>
  );
}
