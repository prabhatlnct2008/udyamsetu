import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const ADMIN_COOKIE_NAME = 'udyamsetu_admin_token';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 14; // 14 days

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);
  const action = String(formData?.get('action') ?? 'login');

  const url = new URL(request.url);
  const loginUrl = new URL('/dashboard/login', url.origin);
  const dashboardUrl = new URL('/dashboard', url.origin);

  if (action === 'logout') {
    const res = NextResponse.redirect(loginUrl, { status: 303 });
    res.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    });
    return res;
  }

  const submittedRaw = formData?.get('token');
  const submitted = typeof submittedRaw === 'string' ? submittedRaw.trim() : '';
  const expected = process.env.ADMIN_TOKEN ?? '';

  if (!expected) {
    loginUrl.searchParams.set('error', 'unconfigured');
    return NextResponse.redirect(loginUrl, { status: 303 });
  }
  if (!submitted || !timingSafeEqual(submitted, expected)) {
    loginUrl.searchParams.set('error', 'invalid');
    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const res = NextResponse.redirect(dashboardUrl, { status: 303 });
  res.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: submitted,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });
  return res;
}
