// Site-wide settings. Most day-to-day edits (release status, contact, nav) happen here.

export const site = {
  name: 'Canonex',
  tagline: 'Campaign intelligence for tabletop RPGs.',
  description:
    'Canonex is a desktop workstation for tabletop RPG game masters: a campaign codex, relationship graph, session planner and table-side desk for Pathfinder 2e, 5E and your own games, that remembers everything your campaign has become.',
  url: 'https://canonex.app',
  /** Optional contact address shown on Download and in the footer. Leave null to hide it. */
  contactEmail: 'feedback@canonex.app' as string | null,
};

export const nav = [
  { href: '/features/', label: 'Features' },
  { href: '/docs/', label: 'Docs' },
  { href: '/roadmap/', label: 'Roadmap' },
  { href: '/changelog/', label: 'Changelog' },
] as const;

export interface DownloadFile {
  platform: string;
  label: string;
  url: string;
  size?: string;
  note?: string;
}

export interface PublicBuild {
  version: string;
  /** ISO date, e.g. "2026-10-15". */
  date: string;
  channel: 'preview' | 'beta' | 'stable';
  files: DownloadFile[];
  notesHref?: string;
}

/**
 * Release status drives the Download page and the calls to action.
 * When the first public build exists, set `publicBuild` and the site switches from
 * "in development" messaging to real download buttons. Nothing else needs to change.
 */
/**
 * The closed beta's build, shown on the testers' page (/beta/), which cPanel's Directory Privacy keeps behind a
 * password. The installer itself is uploaded by hand to public_html/beta/ with cPanel's File Manager (it's far
 * over GitHub's file-size limit); the deploy only touches files it uploaded, so it never deletes it.
 * A new build: upload the new installer, then change these values.
 */
export const closedBeta = {
  version: '0.9.0',
  /** ISO date of the build. */
  date: '2026-10-12',
  file: 'Canonex-0.9.0-Setup.exe',
  size: '162 MB',
};

export const release: {
  stage: string;
  publicBuild: PublicBuild | null;
} = {
  stage: 'Closed beta (0.9)',
  publicBuild: null,
};
