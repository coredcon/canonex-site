# canonex-site

The public website for [Canonex](https://canonex.app): campaign intelligence for tabletop RPGs.

A static [Astro](https://astro.build) site, hosted on Namecheap (cPanel shared hosting) at `canonex.app`.

## Develop

Requires Node 22.12+ (the deploy builds with Node 24, pinned in `.node-version`).

```bash
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # type-check (astro check) and build to dist/
npm run preview    # build, then serve dist/ locally (Astro's preview server; .htaccess rules don't apply)
```

## Deploy

Pushing to `main` deploys to **Namecheap** (cPanel shared hosting, since 2026-10-12):
`.github/workflows/deploy-namecheap.yml` builds the site and uploads `dist/` over FTPS into `public_html`, only
what changed. It needs three repository secrets (`NAMECHEAP_FTP_SERVER`, `NAMECHEAP_FTP_USERNAME`,
`NAMECHEAP_FTP_PASSWORD`) from a cPanel FTP account whose directory is `public_html`. Run it by hand from the
Actions tab with *Run workflow*. `public/.htaccess` gives Apache the 404 page, keeps dotfiles (itself, the
deploy's `.ftp-deploy-sync-state.json`) private, and sends `http://` and `www.` to `https://canonex.app`.

**Beta installers** (the password-protected `/beta/` page) don't go through the repo: they're far over GitHub's
file-size limit. Attach the installer to a **draft** release here (drafts are private), then run
`.github/workflows/upload-beta-installer.yml` with that release's tag; it copies the `.exe` into `public_html/beta/`
over FTPS with the same secrets and checks the size on the server. Then update `closedBeta` in `src/data/site.ts`.

```bash
gh release create beta-0.9.0-2026-10-13 --draft --target main --title "Canonex 0.9.0 closed beta" --notes "" Canonex-0.9.0-Setup.exe
gh workflow run upload-beta-installer.yml -f tag=beta-0.9.0-2026-10-13
```

canonex.app's DNS, email (MX, SPF) and HTTPS certificate (Namecheap SSL) are all managed in cPanel: the domain
uses Namecheap's hosting nameservers (`dns1` / `dns2.namecheaphosting.com`), set at the registrar, Porkbun.
Until 2026-10-12 the site was a Cloudflare Worker; nothing of that setup is left in this repo.

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
