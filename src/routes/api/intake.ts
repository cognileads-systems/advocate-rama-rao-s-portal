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

export const APIRoute = createAPIFileRoute("/api/intake")({
  POST: async ({ request }) => {
    const formData = await request.formData();

    if (stringValue(formData, "website_url")) {
      return json({ success: true });
    }

    const entryType = stringValue(formData, "entry_type");
    const matterCategory = stringValue(formData, "matter_category");
    const isCampaignReport = entryType === "Free Campaign Report (Loan App / Cyber Fraud)";

    if (!entryTypes.has(entryType) || !matterCategories.has(matterCategory)) {
      return json({ success: false }, 400);
    }

    const fullName = stringValue(formData, "full_name");
    const phone = stringValue(formData, "phone");
    const opposingParty = stringValue(formData, "opposing_party");
    const description = stringValue(formData, "description");
    const consultationTier = stringValue(formData, "consultation_tier");
    const preferredDateTime = stringValue(formData, "preferred_datetime");
    const sourcePage = stringValue(formData, "source_page");
    const attachments = formData.getAll("attachments").filter((value): value is File => value instanceof File && value.size > 0);

    if ((!isCampaignReport && (!fullName || !phone || !description || !consultationTier)) || (isCampaignReport && (!opposingParty || !description))) {
      return json({ success: false }, 400);
    }

    if (attachments.some((file) => file.size > MAX_FILE_SIZE)) {
      return json({ success: false }, 413);
    }

    const token = process.env.AIRTABLE_TOKEN;
    if (!token) {
      return json({ success: false }, 503);
    }

    const fields: Record<string, string> = {
      "Opposing Party": opposingParty,
      "Matter Description": description,
      "Matter Category": matterCategory,
      "Entry Type": entryType,
      "Status": "Pending Screening",
      "Source Page": sourcePage,
      "Submitted At": new Date().toISOString(),
    };

    if (fullName) fields["Full Name"] = fullName;
    if (phone) fields["WhatsApp Number"] = phone;
    if (consultationTier) fields["Consultation Tier Requested"] = consultationTier;
    if (preferredDateTime) fields["Preferred Date/Time"] = preferredDateTime;

    try {
      const recordResponse = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
      });

      if (!recordResponse.ok) {
        return json({ success: false }, 502);
      }

      const record = (await recordResponse.json()) as { id: string };
      await Promise.all(attachments.map((file) => uploadAttachment(record.id, file, token)));
      return json({ success: true });
    } catch {
      return json({ success: false }, 502);
    }
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
  if (!response.ok) throw new Error("Attachment upload failed");
}

async function toBase64(file: File) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function json(payload: { success: boolean }, status = 200) {
  return new Response(JSON.stringify(payload), { status, headers: { "Content-Type": "application/json" } });
}
