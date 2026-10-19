import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://build3r.io',
  output: 'static',
  // Custom entry adds the www.build3r.io -> build3r.io redirect (see src/worker.ts).
  adapter: cloudflare({ workerEntryPoint: { path: 'src/worker.ts' } }),
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
// auto-deploy test 1770088532
