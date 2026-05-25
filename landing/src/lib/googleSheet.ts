// Best-effort append of a lead to a Google Sheet via a bound Apps Script
// web app. Configure GOOGLE_SHEETS_WEBHOOK_URL (the Apps Script deployment
// URL) and optionally GOOGLE_SHEETS_WEBHOOK_SECRET (a shared secret the
// script verifies). If the URL is unset this is a silent no-op so the form
// keeps working without the integration.

export interface SheetLead {
  name: string;
  whatsapp: string;
  businessType: string | null;
  website: string | null;
  source: string;
  formVariant: string;
}

export async function postLeadToSheet(lead: SheetLead): Promise<void> {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return; // integration not configured

  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET ?? '';

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        secret,
        timestamp: new Date().toISOString(),
        name: lead.name,
        whatsapp: lead.whatsapp,
        businessType: lead.businessType ?? '',
        website: lead.website ?? '',
        source: lead.source,
        formVariant: lead.formVariant,
      }),
      signal: controller.signal,
      // Apps Script web apps 302-redirect to googleusercontent.com; fetch
      // follows redirects by default, so the final status is 200.
      redirect: 'follow',
    });
    if (!res.ok) {
      throw new Error(`Sheets webhook returned ${res.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}
