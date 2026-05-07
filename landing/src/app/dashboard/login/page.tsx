import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in — UdyamSetu Analytics',
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function DashboardLoginPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const error = params.error;

  return (
    <main className="min-h-screen bg-[#FFF6E8] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1F2A6D] font-[family-name:var(--font-poppins)]">
            UdyamSetu Analytics
          </h1>
          <p className="mt-2 text-sm text-[#1A1A1A]/70">
            Internal access only.
          </p>
        </div>

        <form
          action="/api/dashboard-auth"
          method="POST"
          className="mt-8 bg-white rounded-2xl border border-[#E9D8C3] p-6 md:p-8 shadow-lg space-y-4"
        >
          <label className="block">
            <span className="block text-sm font-medium text-[#1A1A1A]/85 mb-1">
              Admin token
            </span>
            <input
              type="password"
              name="token"
              autoComplete="current-password"
              autoFocus
              required
              placeholder="Paste your admin token"
              className="w-full px-4 py-3 rounded-xl border border-[#E9D8C3] bg-white text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1F2A6D]/40 focus:border-[#1F2A6D] font-mono text-sm"
            />
          </label>

          {error === 'invalid' && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              That token is not valid. Check the value and try again.
            </p>
          )}
          {error === 'unconfigured' && (
            <p className="text-sm text-yellow-900 bg-yellow-50 border border-yellow-300 rounded-lg px-3 py-2">
              The dashboard is hard-disabled because the{' '}
              <code>ADMIN_TOKEN</code> environment variable is not set on the
              server. Set it on Vercel and redeploy.
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#1F2A6D] hover:bg-[#2a3580] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Sign in
          </button>

          <p className="text-xs text-[#1A1A1A]/60 text-center">
            Your token is sent over HTTPS and stored in an httpOnly cookie for
            14 days. You can sign out from the dashboard.
          </p>
        </form>
      </div>
    </main>
  );
}
