import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://build3r.io/sitemap-index.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
