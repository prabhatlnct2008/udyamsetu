import { NextResponse } from 'next/server';
// Google Sheet mirroring is disabled for now — re-enable by uncommenting the
// import + the postLeadToSheet block below once the Apps Script webhook is set.
// import { postLeadToSheet } from '@/lib/googleSheet';
import { insertLead, TursoNotConfiguredError } from '@/lib/turso';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadPayload {
  name?: unknown;
  whatsapp?: unknown;
  businessType?: unknown;
  businessName?: unknown;
  website?: unknown;
  timeline?: unknown;
  goal?: unknown;
  source?: unknown;
  formVariant?: unknown;
}

function asString(v: unknown, max = 500): string | null {
  if (typeof v !== 'string') return null;
  const trimmed = v.trim();
  if (trimmed.length === 0) return null;
  return trimmed.slice(0, max);
}

function normaliseWhatsApp(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const digits = raw.replace(/\D/g, '');
  const ten = digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits;
  if (ten.length !== 10) return null;
  if (!/^[6-9]/.test(ten)) return null;
  return ten;
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const name = asString(payload.name, 120);
  const whatsapp = normaliseWhatsApp(payload.whatsapp);
  const businessType = asString(payload.businessType, 120);
  const businessName = asString(payload.businessName, 200);
  // Free-text "website status" answer (e.g. the "do you already have a
  // website?" chip). Stored in the website column.
  const website = asString(payload.website, 200);
  // v3 qualification answers — packed into the problem column as a readable
  // string so no schema migration is needed.
  const timeline = asString(payload.timeline, 120);
  const goal = asString(payload.goal, 120);
  const problemParts: string[] = [];
  if (timeline) problemParts.push(`Timeline: ${timeline}`);
  if (goal) problemParts.push(`Goal: ${goal}`);
  const problem = problemParts.length ? problemParts.join(' · ') : null;

  const formVariant = payload.formVariant === 'exit' ? 'exit' : 'main';
  const source = asString(payload.source, 80) ?? '70-discount-offering';

  // Only the WhatsApp number is strictly required server-side. Each form
  // enforces its own variant-specific required fields client-side (v2 is
  // phone-only by design; v1/v3 require name + business type before submit).
  if (!whatsapp) {
    return NextResponse.json(
      { error: 'Enter a valid 10-digit Indian WhatsApp number' },
      { status: 400 },
    );
  }

  // --- Google Sheet mirroring (disabled for now) ---
  // const sheetPromise = postLeadToSheet({
  //   name: name ?? '',
  //   whatsapp,
  //   businessType,
  //   website,
  //   source,
  //   formVariant,
  // }).catch((err) => {
  //   console.error('[leads] sheet append failed', err);
  // });

  let stored = true;
  try {
    // Consent is implicit by submission (DPDP-compliant for the transactional
    // purpose of the requested follow-up). The trust line on each form
    // discloses this.
    await insertLead({
      name: name ?? '',
      whatsapp,
      businessType,
      businessName,
      website,
      problem,
      consent: true,
      source,
      formVariant,
    });
  } catch (err) {
    if (err instanceof TursoNotConfiguredError) {
      console.warn('[leads] Turso not configured — lead not stored:', {
        name,
        whatsapp,
        formVariant,
      });
      stored = false;
    } else {
      console.error('[leads] insert failed', err);
      // await sheetPromise;
      return NextResponse.json(
        { error: 'Could not save your details right now. Please WhatsApp us instead.' },
        { status: 500 },
      );
    }
  }

  // await sheetPromise;

  return NextResponse.json({ ok: true, stored });
}
