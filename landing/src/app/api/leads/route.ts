import { NextResponse } from 'next/server';
import { insertLead, TursoNotConfiguredError } from '@/lib/turso';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadPayload {
  name?: unknown;
  whatsapp?: unknown;
  businessType?: unknown;
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

  try {
    // v2: consent is implicit by submission (DPDP-compliant for the
    // transactional purpose of sending the requested PDF + one follow-up).
    // The trust line on the form discloses this.
    await insertLead({
      name,
      whatsapp,
      businessType,
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
      return NextResponse.json({ ok: true, stored: false }, { status: 200 });
    }
    console.error('[leads] insert failed', err);
    return NextResponse.json(
      { error: 'Could not save your details right now. Please WhatsApp us instead.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}
