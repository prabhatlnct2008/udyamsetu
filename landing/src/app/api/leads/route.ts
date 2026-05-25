import { NextResponse } from 'next/server';
import { postLeadToSheet } from '@/lib/googleSheet';
import { insertLead, TursoNotConfiguredError } from '@/lib/turso';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadPayload {
  name?: unknown;
  whatsapp?: unknown;
  businessType?: unknown;
  website?: unknown;
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
  // Optional free-text "website status" answer (e.g. AI Revenue Studio's
  // "do you already have a website?" chip). Stored in the website column.
  const website = asString(payload.website, 200);
  const formVariant = payload.formVariant === 'exit' ? 'exit' : 'main';
  const source = asString(payload.source, 80) ?? '70-discount-offering';

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }
  if (!whatsapp) {
    return NextResponse.json(
      { error: 'Enter a valid 10-digit Indian WhatsApp number' },
      { status: 400 },
    );
  }
  if (!businessType) {
    return NextResponse.json(
      { error: 'Pick a business type' },
      { status: 400 },
    );
  }

  // Append to the Google Sheet in parallel with the Turso insert (best-effort).
  // A failure here never fails the request — the lead is still stored in Turso.
  const sheetPromise = postLeadToSheet({
    name,
    whatsapp,
    businessType,
    website,
    source,
    formVariant,
  }).catch((err) => {
    console.error('[leads] sheet append failed', err);
  });

  let stored = true;
  try {
    // v2: consent is implicit by submission (DPDP-compliant for the
    // transactional purpose of sending the requested PDF + one follow-up).
    // The trust line on the form discloses this.
    await insertLead({
      name,
      whatsapp,
      businessType,
      website,
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
      // Let the sheet append finish so the lead is not lost there too.
      await sheetPromise;
      return NextResponse.json(
        { error: 'Could not save your details right now. Please WhatsApp us instead.' },
        { status: 500 },
      );
    }
  }

  // Ensure the sheet append completes before the serverless function returns.
  await sheetPromise;

  return NextResponse.json({ ok: true, stored });
}
