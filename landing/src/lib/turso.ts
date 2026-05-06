import { createClient, type Client } from '@libsql/client';

let cachedClient: Client | null = null;
let leadsTableEnsured = false;

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.length > 0 ? value : undefined;
}

export class TursoNotConfiguredError extends Error {
  constructor() {
    super(
      'Turso is not configured. Set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN env vars.',
    );
    this.name = 'TursoNotConfiguredError';
  }
}

export function getTursoClient(): Client {
  if (cachedClient) return cachedClient;
  const url = readEnv('TURSO_DATABASE_URL');
  const authToken = readEnv('TURSO_AUTH_TOKEN');
  if (!url) throw new TursoNotConfiguredError();
  cachedClient = createClient({ url, authToken });
  return cachedClient;
}

export async function ensureLeadsTable(): Promise<void> {
  if (leadsTableEnsured) return;
  const client = getTursoClient();
  await client.execute(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      name TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      business_name TEXT,
      business_type TEXT,
      locality TEXT,
      website TEXT,
      problem TEXT,
      consent INTEGER NOT NULL,
      source TEXT,
      form_variant TEXT
    )
  `);
  leadsTableEnsured = true;
}

export interface LeadInput {
  name: string;
  whatsapp: string;
  businessName?: string | null;
  businessType?: string | null;
  locality?: string | null;
  website?: string | null;
  problem?: string | null;
  consent: boolean;
  source: string;
  formVariant: 'main' | 'exit';
}

export async function insertLead(lead: LeadInput): Promise<void> {
  await ensureLeadsTable();
  const client = getTursoClient();
  await client.execute({
    sql: `INSERT INTO leads
      (name, whatsapp, business_name, business_type, locality, website, problem, consent, source, form_variant)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      lead.name,
      lead.whatsapp,
      lead.businessName ?? null,
      lead.businessType ?? null,
      lead.locality ?? null,
      lead.website ?? null,
      lead.problem ?? null,
      lead.consent ? 1 : 0,
      lead.source,
      lead.formVariant,
    ],
  });
}
