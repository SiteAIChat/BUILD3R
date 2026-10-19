import type { SSRManifest } from 'astro';
import { App } from 'astro/app';
import { handle } from '@astrojs/cloudflare/handler';

// build3r.io is the canonical host. www.build3r.io is attached to this Pages
// project so it gets a certificate, and every request to it is permanently
// redirected here (path and query preserved), the same way fire-your-website.com
// handles its www host (GetVibeControl/vibecontrol#3019).
//
// This is a custom worker entry rather than Astro middleware because the site is
// `output: 'static'`: prerendered pages are served from assets before middleware
// runs. public/_routes.json routes page requests through this worker.
const CANONICAL_HOST = 'build3r.io';
const REDIRECT_HOSTS = new Set([`www.${CANONICAL_HOST}`]);

export function createExports(manifest: SSRManifest) {
  const app = new App(manifest);
  return {
    default: {
      async fetch(request: Request, env: any, context: any) {
        const url = new URL(request.url);
        if (REDIRECT_HOSTS.has(url.hostname)) {
          url.hostname = CANONICAL_HOST;
          url.protocol = 'https:';
          url.port = '';
          return new Response(null, { status: 301, headers: { Location: url.toString() } });
        }
        return handle(manifest, app, request as any, env, context);
      },
    },
  };
}
