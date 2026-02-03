import type { APIRoute } from 'astro';

export const prerender = false;

const GH_API_BASE = 'https://auto.mation.cc/build3r/wp-json/gh/v4';
const GH_TOKEN = import.meta.env.GH_TOKEN || '';
const GH_PUBLIC_KEY = import.meta.env.GH_PUBLIC_KEY || '';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, complexity, size, speed, addons, estimateRange, timeline } = body;

    if (!email || !firstName) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create or update contact in Groundhog
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
          estimate_project_type: projectType || '',
          estimate_complexity: complexity || '',
          estimate_size: size || '',
          estimate_speed: speed || '',
          estimate_addons: Array.isArray(addons) ? addons.join(', ') : '',
          estimate_range: estimateRange || '',
          estimate_timeline: timeline || '',
        },
      }),
    });

    const contactData = await contactRes.json();
    const contactId = contactData?.item?.ID || contactData?.ID;

    // Add tags
    if (contactId) {
      await fetch(`${GH_API_BASE}/contacts/${contactId}/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Gh-Token': GH_TOKEN,
          'Gh-Public-Key': GH_PUBLIC_KEY,
        },
        body: JSON.stringify({
          tags: ['estimate-request', `service:${projectType || 'unknown'}`],
        }),
      });
    }

    // Generate a simple reference ID
    const estimateId = `EST-${Date.now().toString(36).toUpperCase()}`;

    return new Response(JSON.stringify({ success: true, estimateId, contactId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Estimate submission error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
