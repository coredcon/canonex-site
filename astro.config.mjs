// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only: the built `dist/` folder is uploaded to the Namecheap hosting account's
// public_html (see .github/workflows/deploy-namecheap.yml). No adapter is needed until the site needs server code.
export default defineConfig({
  site: 'https://canonex.app',
  output: 'static',
  // `/features/` style URLs: each page is a folder with an index.html, and Apache adds the slash to `/features`.
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
