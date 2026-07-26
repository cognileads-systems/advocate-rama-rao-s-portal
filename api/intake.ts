export default async function handler(req: Request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: corsHeaders }
    );
  }

  try {
    const token = process.env.AIRTABLE_TOKEN;
    if (!token) {
      console.error('AIRTABLE_TOKEN is missing');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: corsHeaders }
      );
    }

    let fullName = 'Anonymous Reporter';
    let whatsapp = '';
    let opposingParty = '';
    let matterCategory = 'Loan App Harassment / Cyber Fraud';
    let description = '';
    let sourcePage = '/';
    let entryType = 'General';
    let reviewType = '';
    let preferredDateTime = '';

    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      
      fullName = (formData.get('full_name') || formData.get('fullName') || formData.get('Full Name') || fullName) as string;
      whatsapp = (formData.get('phone') || formData.get('whatsappNumber') || formData.get('whatsapp') || formData.get('contact') || whatsapp) as string;
      opposingParty = (formData.get('opposing_party') || formData.get('opposingParty') || formData.get('appName') || opposingParty) as string;
      matterCategory = (formData.get('matter_category') || formData.get('matterCategory') || matterCategory) as string;
      description = (formData.get('description') || formData.get('matterDescription') || description) as string;
      sourcePage = (formData.get('source_page') || formData.get('sourcePage') || sourcePage) as string;
      entryType = (formData.get('entry_type') || formData.get('entryType') || entryType) as string;
      reviewType = (formData.get('review_type') || formData.get('reviewType') || reviewType) as string;
      preferredDateTime = (formData.get('preferred_datetime') || formData.get('preferredDateTime') || preferredDateTime) as string;
      
      // Handle file attachments
      const attachments = formData.getAll('attachments');
      const attachmentNames = attachments
        .filter((a): a is File => a instanceof File)
        .map((a) => a.name)
        .join(', ');
      
      // You can log or store attachmentNames if needed
      console.log('[intake] Attachments:', attachmentNames || 'None');
    } else {
      let body: any = {};
      try {
        body = await req.json();
      } catch (e) {
        body = {};
      }
      fullName = body.full_name || body.fullName || body['Full Name'] || fullName;
      whatsapp = body.phone || body.whatsappNumber || body.whatsapp || body.contact || whatsapp;
      opposingParty = body.opposing_party || body.opposingParty || body.appName || opposingParty;
      matterCategory = body.matter_category || body.matterCategory || matterCategory;
      description = body.description || body.matterDescription || description;
      sourcePage = body.source_page || body.sourcePage || sourcePage;
      entryType = body.entry_type || body.entryType || entryType;
      reviewType = body.review_type || body.reviewType || reviewType;
      preferredDateTime = body.preferred_datetime || body.preferredDateTime || preferredDateTime;
    }

    const airtablePayload = {
      fields: {
        'Full Name': String(fullName).slice(0, 500),
        'WhatsApp Number': String(whatsapp).slice(0, 50),
        'Opposing Party': String(opposingParty).slice(0, 500),
        'Matter Category': String(matterCategory).slice(0, 200),
        'Matter Description': String(description).slice(0, 5000),
        'Status': 'Pending Screening',
        'Source Page': String(sourcePage).slice(0, 200),
        'Entry Type': String(entryType).slice(0, 200),
        'Review Type': String(reviewType).slice(0, 200),
        'Preferred DateTime': String(preferredDateTime).slice(0, 100),
        'Submitted At': new Date().toISOString(),
      },
    };

    console.log('[intake] Sending to Airtable:', JSON.stringify(airtablePayload));

    const response = await fetch(
      'https://api.airtable.com/v0/appADrUf67hjafDOo/tbl8gp6377Qo5zxVc',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtablePayload),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('[intake] Airtable API Error:', response.status, errText);
      return new Response(
        JSON.stringify({ error: 'Airtable submission failed', details: errText }),
        { status: response.status, headers: corsHeaders }
      );
    }

    const data = await response.json();
    return new Response(
      JSON.stringify({ success: true, recordId: data.id }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error('[intake] Server Error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: err.message }),
      { status: 500, headers: corsHeaders }
    );
  }
}