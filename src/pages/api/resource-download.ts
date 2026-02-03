import type { APIRoute } from 'astro';

export const prerender = false;

const GH_API_BASE = 'https://auto.mation.cc/build3r/wp-json/gh/v4';

export const POST: APIRoute = async ({ request, locals }) => {
  const runtime = (locals as any).runtime;
  const GH_TOKEN = runtime?.env?.GH_TOKEN || import.meta.env.GH_TOKEN || '';
  const GH_PUBLIC_KEY = runtime?.env?.GH_PUBLIC_KEY || import.meta.env.GH_PUBLIC_KEY || '';
  try {
    const body = await request.json();
    const { firstName, lastName, email, resource, downloadFile } = body;

    if (!email || !firstName) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create or update contact in Groundhog with tags
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
        tags: ['resource-download', `resource:${resource || 'unknown'}`],
        meta: {
          source: 'build3r.io',
          download_file: downloadFile || '',
        },
      }),
    });

    const contactData = await contactRes.json();
    const contactId = contactData?.item?.ID || contactData?.item?.data?.ID;

    // Add a note recording the download
    if (contactId) {
      const noteContent = [
        `📄 Resource Downloaded`,
        ``,
        `Resource: ${resource || 'Unknown'}`,
        `File: ${downloadFile || 'N/A'}`,
        ``,
        `Downloaded: ${new Date().toISOString()}`,
      ].join('\n');

      await fetch(`${GH_API_BASE}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Gh-Token': GH_TOKEN,
          'Gh-Public-Key': GH_PUBLIC_KEY,
        },
        body: JSON.stringify({
          data: {
            object_id: contactId,
            object_type: 'contact',
            content: noteContent,
            type: 'note',
            context: 'user',
          },
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
