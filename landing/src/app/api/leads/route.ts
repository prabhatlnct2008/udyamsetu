import { NextResponse } from 'next/server';
import { insertLead, TursoNotConfiguredError } from '@/lib/turso';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface LeadPayload {
  name?: unknown;
  whatsapp?: unknown;
  businessName?: unknown;
  businessType?: unknown;
  locality?: unknown;
  website?: unknown;
  problem?: unknown;
  consent?: unknown;
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
  // Strip a leading 91 country code if present and length is 12
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
  const consent = payload.consent === true;
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
  if (!consent) {
    return NextResponse.json(
      { error: 'Please accept the consent checkbox to continue' },
      { status: 400 },
    );
  }

  const businessName = asString(payload.businessName, 200);
  const businessType = asString(payload.businessType, 80);
  const locality = asString(payload.locality, 120);
  const website = asString(payload.website, 300);
  const problem = asString(payload.problem, 1000);

  // Main form requires business name + type + locality. Exit modal allows fewer fields.
  if (formVariant === 'main') {
    if (!businessName) {
      return NextResponse.json(
        { error: 'Business name is required' },
        { status: 400 },
      );
    }
    if (!businessType) {
      return NextResponse.json(
        { error: 'Business type is required' },
        { status: 400 },
      );
    }
    if (!locality) {
      return NextResponse.json(
        { error: 'Locality is required' },
        { status: 400 },
      );
    }
  }

  try {
    await insertLead({
      name,
      whatsapp,
      businessName,
      businessType,
      locality,
      website,
      problem,
      consent,
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
      // Return success to the user so the funnel still works in pre-prod
      // environments. Logs surface the misconfiguration.
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
