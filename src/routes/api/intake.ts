import { createAPIFileRoute } from "@tanstack/react-start/api";

const AIRTABLE_BASE_ID = "appADrUf67hjafDOo";
const AIRTABLE_TABLE_ID = "tbl8gp6377Qo5zxVc";
const ATTACHMENT_FIELD_ID = "fld9dNfw1Nw3pPllU";
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const matterCategories = new Set([
  "Property Dispute / Land Litigation",
  "High Court Writ Petition",
  "Guardianship / Family Court Matter",
  "Consumer Rights / Fraud Matter",
  "Loan App Harassment / Cyber Fraud",
  "Other",
]);

const entryTypes = new Set([
  "Paid Consultation Intake",
  "Free Campaign Report (Loan App / Cyber Fraud)",
]);

// NOTE: "/report" is not yet a live choice in the Airtable "Source Page" field
// (live choices are currently "/", "/knowledge", "/practice" only). Add it as a
// real option in the Airtable UI before this form is used for real, or this
// Set will reject every /report submission with the 400 below — which is the
// correct behavior (loud, early) rather than letting Airtable reject it later
// with an opaque 502.
const sourcePages = new Set(["/", "/knowledge", "/practice", "/report"]);

export const APIRoute = createAPIFileRoute("/api/intake")({
  POST: async ({ request }) => {
    const formData = await request.formData();

    if (stringValue(formData, "website_url")) {
      return json({ success: true });
    }

    const entryType = stringValue(formData, "entry_type");
    const matterCategory = stringValue(formData, "matter_category");
    const sourcePage = stringValue(formData, "source_page");
    const isCampaignReport = entryType === "Free Campaign Report (Loan App / Cyber Fraud)";

    if (!entryTypes.has(entryType) || !matterCategories.has(matterCategory) || !sourcePages.has(sourcePage)) {
      console.error("[intake] rejected: invalid enum value", { entryType, matterCategory, sourcePage });
      return json({ success: false }, 400);
    }

    const fullName = stringValue(formData, "full_name");
    const phone = stringValue(formData, "phone");
    const opposingParty = stringValue(formData, "opposing_party");
    const description = stringValue(formData, "description");
    const consultationTier = stringValue(formData, "consultation_tier");
    const preferredDateTime = stringValue(formData, "preferred_datetime");
    const attachments = formData.getAll("attachments").filter((value): value is File => value instanceof File && value.size > 0);

    if ((!isCampaignReport && (!fullName || !phone || !description || !consultationTier)) || (isCampaignReport && (!fullName || !opposingParty || !description))) {
      return json({ success: false }, 400);
    }

    if (attachments.some((file: File) => file.size > MAX_FILE_SIZE)) {
      return json({ success: false }, 413);
    }

    const token = process.env.AIRTABLE_TOKEN;
    if (!token) {
      console.error("[intake] AIRTABLE_TOKEN not configured");
      return json({ success: false }, 503);
    }

    const fields: Record<string, string> = {
      "Matter Description": description,
      "Matter Category": matterCategory,
      "Entry Type": entryType,
      "Status": "Pending Screening",
      "Source Page": sourcePage,
      "Submitted At": new Date().toISOString(),
    };

    if (opposingParty) fields["Opposing Party"] = opposingParty;
    if (fullName) fields["Full Name"] = fullName;
    if (phone) fields["WhatsApp Number"] = phone;
    if (consultationTier) fields["Consultation Tier Requested"] = consultationTier;
    if (preferredDateTime) fields["Preferred Date/Time"] = preferredDateTime;

    let recordId: string;
    try {
      const recordResponse = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
      });

      if (!recordResponse.ok) {
        const body = await recordResponse.text();
        console.error("[intake] Airtable record creation failed", { status: recordResponse.status, body });
        return json({ success: false }, 502);
      }

      const record = (await recordResponse.json()) as { id: string };
      recordId = record.id;
    } catch (err) {
      console.error("[intake] Airtable record creation threw", err);
      return json({ success: false }, 502);
    }

    // Record is saved at this point regardless of what happens to attachments below.
    // Never let an attachment failure make the caller believe the whole submission
    // was lost — that's how duplicate resubmissions and abandoned reports happen.
    if (attachments.length > 0) {
      const results = await Promise.allSettled(attachments.map((file: File) => uploadAttachment(recordId, file, token)));
      const failedCount = results.filter((r) => r.status === "rejected").length;
      if (failedCount > 0) {
        console.error("[intake] some attachments failed to upload", { recordId, failedCount, total: attachments.length });
        return json({ success: true, attachmentsFailed: failedCount });
      }
    }

    return json({ success: true });
  },
});

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function uploadAttachment(recordId: string, file: File, token: string) {
  const response = await fetch(`https://content.airtable.com/v0/${AIRTABLE_BASE_ID}/${recordId}/${ATTACHMENT_FIELD_ID}/uploadAttachment`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ contentType: file.type || "application/octet-stream", filename: file.name, file: await toBase64(file) }),
  });
  if (!response.ok) {
    const body = await response.text();
    console.error("[intake] attachment upload failed", { recordId, filename: file.name, status: response.status, body });
    throw new Error("Attachment upload failed");
  }
}

async function toBase64(file: File) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function json(payload: { success: boolean; attachmentsFailed?: number }, status = 200) {
  return new Response(JSON.stringify(payload), { status, headers: { "Content-Type": "application/json" } });
}