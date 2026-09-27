# canonex-site

The public website for [Canonex](https://canonex.app): campaign intelligence for tabletop RPGs.

A static [Astro](https://astro.build) site, deployed as static assets on a Cloudflare Worker (`canonex-site`)
that serves `canonex.app`.

## Develop

Requires Node 22.12+ (Cloudflare builds with Node 24, pinned in `.node-version`).

```bash
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # type-check (astro check) and build to dist/
npm run preview    # build, then serve dist/ through Wrangler exactly as Cloudflare will
```

## Deploy

Pushing to `main` deploys. Cloudflare Workers Builds runs `npx wrangler deploy`, and `wrangler.jsonc`'s
`build.command` runs `npm run build` first, so the dashboard needs no build command of its own.
`npm run deploy` does the same from your machine (requires `wrangler login`).

## Where things live

| To change | Edit |
|---|---|
| Release status, download files, contact email | `src/data/site.ts` (`release`, `site.contactEmail`) |
| Feature groups and their status | `src/data/features.ts` |
| Roadmap | `src/data/roadmap.ts` |
| Changelog | add a Markdown file to `src/content/changelog/` |
| Docs | add a Markdown file to `src/content/docs/` (frontmatter: `title`, `description`, `section`, `order`) |
| Colours, type, spacing | `src/styles/global.css` (tokens match the app's `palette.gd`) |
| Screenshots | `src/assets/screens/` (1600×960 PNGs from the app; optimised to WebP at build) |

### Publishing the first build

Set `release.publicBuild` in `src/data/site.ts`:

```ts
publicBuild: {
  version: '1.0.0',
  date: '2026-11-01',
  channel: 'preview',
  files: [{ platform: 'Windows', label: 'Installer (.exe)', url: 'https://…', size: '98 MB' }],
  notesHref: '/changelog/',
},
```

The Download page, homepage and calls to action switch from "in development" to real download buttons.

### Refreshing screenshots

Screenshots come from the app's sandboxed sample campaign, so no real campaign data is used:

```bash
godot_console.exe --path <Canonex repo> -- --add-sample --area=codex --entity=rashida --screenshot=<out>.png
```

Useful areas: `home`, `codex`, `relationships`, `workspace --demo`, `sessions --demo-session`.
