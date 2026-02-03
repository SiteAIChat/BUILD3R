import type { APIRoute } from 'astro';

export const prerender = false;

const GH_API_BASE = 'https://auto.mation.cc/build3r/wp-json/gh/v4';

export const POST: APIRoute = async ({ request, locals }) => {
  const runtime = (locals as any).runtime;
  const GH_TOKEN = runtime?.env?.GH_TOKEN || import.meta.env.GH_TOKEN || '';
  const GH_PUBLIC_KEY = runtime?.env?.GH_PUBLIC_KEY || import.meta.env.GH_PUBLIC_KEY || '';
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, complexity, size, speed, addons, estimateRange, timeline } = body;

    if (!email || !firstName) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), {
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
        tags: ['estimate-request', `service:${projectType || 'unknown'}`],
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
    const contactId = contactData?.item?.ID || contactData?.item?.data?.ID;

    // Generate a simple reference ID
    const estimateId = `EST-${Date.now().toString(36).toUpperCase()}`;

    // Add a note with full estimate details
    if (contactId) {
      const packageLabels: Record<string, string> = {
        ai_jumpstart: 'AI Jumpstart',
        automation: 'Automation Accelerator',
        mvp: 'MVP Builder',
        commerce: 'Commerce Modules',
      };
      const addonLabels: Record<string, string> = {
        design_polish: 'Design polish',
        multi_role_auth: 'Multi-role auth',
        payments: 'Payments & billing',
        training: 'Team training & docs',
        integrations: 'Advanced integrations',
      };
      const addonList = Array.isArray(addons) && addons.length > 0
        ? addons.map((a: string) => addonLabels[a] || a).join(', ')
        : 'None';

      const noteContent = [
        `📊 Estimate Request — ${estimateId}`,
        ``,
        `Project type: ${packageLabels[projectType] || projectType}`,
        `Complexity: ${complexity}`,
        `Size: ${size}`,
        `Speed: ${speed}`,
        `Add-ons: ${addonList}`,
        ``,
        `Estimated range: ${estimateRange}`,
        `Timeline: ${timeline}`,
        ``,
        `Submitted: ${new Date().toISOString()}`,
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
