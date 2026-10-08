// Site-wide settings. Most day-to-day edits (release status, contact, nav) happen here.

export const site = {
  name: 'Canonex',
  tagline: 'Campaign intelligence for tabletop RPGs.',
  description:
    'Canonex is a desktop workstation for tabletop RPG game masters: a campaign codex, relationship graph, session planner and table-side desk for Pathfinder 2e, 5E and your own games, that remembers everything your campaign has become.',
  url: 'https://canonex.app',
  /** Optional contact address shown on Download and in the footer. Leave null to hide it. */
  contactEmail: null as string | null,
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
export const release: {
  stage: string;
  publicBuild: PublicBuild | null;
} = {
  stage: 'Closed beta (0.9)',
  publicBuild: null,
};
