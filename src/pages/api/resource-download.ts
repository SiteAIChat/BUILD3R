import type { APIRoute } from 'astro';

export const prerender = false;

const GH_API_BASE = 'https://auto.mation.cc/build3r/wp-json/gh/v4';
const GH_TOKEN = import.meta.env.GH_TOKEN || '';
const GH_PUBLIC_KEY = import.meta.env.GH_PUBLIC_KEY || '';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, resource, downloadFile } = body;

    if (!email || !firstName) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Create or update contact in Groundhog
    const contactRes = await fetch(`${GH_API_BASE}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Gh-Token': GH_TOKEN,
        'Gh-Public-Key': GH_PUBLIC_KEY,
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName || '',
        meta: {
          source: 'build3r.io',
          download_file: downloadFile || '',
        },
      }),
    });

    const contactData = await contactRes.json();
    const contactId = contactData?.item?.ID || contactData?.ID;

    // 2. Add tags to the contact
    if (contactId) {
      // Add "resource-download" tag
      await fetch(`${GH_API_BASE}/contacts/${contactId}/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Gh-Token': GH_TOKEN,
          'Gh-Public-Key': GH_PUBLIC_KEY,
        },
        body: JSON.stringify({
          tags: ['resource-download', `resource:${resource || 'unknown'}`],
        }),
      });
    }

    return new Response(JSON.stringify({ success: true, contactId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Resource download error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
