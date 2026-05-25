/**
 * UdyamSetu / AI Revenue Studio — lead capture to Google Sheet.
 *
 * This Apps Script receives lead submissions from the website's
 * /api/leads endpoint and appends one row per lead to the sheet.
 *
 * SETUP (5 minutes)
 * 1. Open the target spreadsheet:
 *    https://docs.google.com/spreadsheets/d/1CMomH3dOXcEFeuijamIvdU_XYwYEVtHRe9SotQXU5LU/edit
 * 2. Extensions -> Apps Script. Delete the sample code, paste THIS file.
 * 3. (Recommended) Set SHARED_SECRET below to a random string and use the
 *    same value for the GOOGLE_SHEETS_WEBHOOK_SECRET env var on Vercel.
 *    Leave it as '' to disable the check.
 * 4. Deploy -> New deployment -> type "Web app".
 *      - Description: lead capture
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy, authorise when prompted, copy the Web app URL
 *    (it looks like https://script.google.com/macros/s/AKfy.../exec).
 * 5. On Vercel, set:
 *      GOOGLE_SHEETS_WEBHOOK_URL    = the Web app URL from step 4
 *      GOOGLE_SHEETS_WEBHOOK_SECRET = the same secret as SHARED_SECRET (if set)
 *    Redeploy.
 *
 * After this, every form submission appends a row. The header row is
 * created automatically on the first submission.
 */

var SPREADSHEET_ID = '1CMomH3dOXcEFeuijamIvdU_XYwYEVtHRe9SotQXU5LU';
var SHEET_NAME = 'Leads'; // a tab named "Leads" is created if missing
var SHARED_SECRET = ''; // set to match GOOGLE_SHEETS_WEBHOOK_SECRET on Vercel

var HEADERS = [
  'Timestamp',
  'Name',
  'WhatsApp',
  'Business Type',
  'Has Website',
  'Source',
  'Form Variant',
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (SHARED_SECRET && data.secret !== SHARED_SECRET) {
      return jsonOutput({ ok: false, error: 'unauthorized' });
    }

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.whatsapp || '',
      data.businessType || '',
      data.website || '',
      data.source || '',
      data.formVariant || '',
    ]);

    return jsonOutput({ ok: true });
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) });
  }
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
