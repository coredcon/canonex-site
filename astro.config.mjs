// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only: Cloudflare serves the built `dist/` folder as Worker static
// assets (see wrangler.jsonc). No adapter is needed until the site needs server code.
export default defineConfig({
  site: 'https://canonex.app',
  output: 'static',
  // `/features/` style URLs, matching Workers' default `auto-trailing-slash` handling.
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
