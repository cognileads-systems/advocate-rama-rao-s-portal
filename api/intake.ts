export default async function handler(req: Request) {
  // CORS Headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  // Handle preflight OPTIONS request
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

    let body: any = {};
    try {
      body = await req.json();
    } catch (e) {
      body = {};
    }

    const fullName = body.fullName || body['Full Name'] || 'Anonymous Reporter';
    const whatsapp = body.whatsappNumber || body.whatsapp || body['WhatsApp Number'] || '';
    const opposingParty = body.opposingParty || body['Opposing Party'] || '';
    const jurisdiction = body.jurisdiction || body['Jurisdiction'] || 'Cyber Cell';
    const matterCategory = body.matterCategory || body['Matter Category'] || 'Loan App Harassment / Cyber Fraud';
    const description = body.matterDescription || body.description || body['Matter Description'] || '';
    const sourcePage = body.sourcePage || body['Source Page'] || '/report';

    const airtablePayload = {
      fields: {
        'Full Name': fullName,
        'WhatsApp Number': whatsapp,
        'Opposing Party': opposingParty,
        'Jurisdiction': jurisdiction,
        'Matter Category': matterCategory,
        'Matter Description': description,
        'Status': 'Pending Screening',
        'Source Page': sourcePage,
        'Submitted At': new Date().toISOString(),
      },
    };

    console.log('[intake] Posting payload to Airtable:', JSON.stringify(airtablePayload));

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
    console.error('[intake] Unhandled Server Error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: err.message }),
      { status: 500, headers: corsHeaders }
    );
  }
}