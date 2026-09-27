// Feature groups shared by the homepage and the Features page.
// `status` must stay honest: 'built' = in the current development build.

import type { ImageMetadata } from 'astro';
import codex from '../assets/screens/codex.png';
import graph from '../assets/screens/graph.png';
import desk from '../assets/screens/desk.png';
import plan from '../assets/screens/plan.png';
import creature from '../assets/screens/creature.png';
import home from '../assets/screens/home.png';

export type FeatureStatus = 'built' | 'early' | 'in-progress' | 'planned';

export const statusLabel: Record<FeatureStatus, string> = {
  built: 'In the current build',
  early: 'Early — being refined',
  'in-progress': 'In progress',
  planned: 'Planned',
};

export interface FeatureGroup {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  points: { text: string; status?: FeatureStatus }[];
  status: FeatureStatus;
  shot?: { src: ImageMetadata; alt: string; caption: string };
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'codex',
    kicker: 'Codex',
    title: 'Every record, kept like a dossier',
    summary:
      'NPCs, creatures, locations, factions, shops, deities, clues, quests and journals, each on a sheet shaped for the job it does at the table.',
    status: 'built',
    points: [
      { text: 'Purpose-built sheets: an NPC reads like a dossier, a creature like a combat instrument' },
      { text: 'Secrets and GM notes kept apart from what the players may learn' },
      { text: 'Your own record types, with fields and colours you define' },
      { text: 'Filters for forgotten prep: never used, planned but never reached, not tied to anything' },
    ],
    shot: {
      src: codex,
      alt: 'The Canonex Codex showing an NPC dossier for Rashida al-Qadir, with relationships, secrets and GM notes.',
      caption: 'The Codex: an NPC dossier with her ties, secrets and GM notes.',
    },
  },
  {
    id: 'relationships',
    kicker: 'Relationships',
    title: 'A campaign that knows how it connects',
    summary:
      'Ties between records carry a type, a direction and a secrecy level. The Campaign Graph shows the whole web and traces how any two records connect.',
    status: 'built',
    points: [
      { text: 'Structural, story and secret ties, each drawn differently' },
      { text: 'Campaign Graph and Matrix views of every record and tie' },
      { text: 'Trace a connection: the chain between two records, story-only or with secrets' },
      { text: 'Place related records near each other on the desk and the tie appears between them' },
    ],
    shot: {
      src: graph,
      alt: 'The Campaign Graph: records as coloured nodes joined by solid and dashed ties.',
      caption: 'The Campaign Graph. Dashed ember lines are secrets.',
    },
  },
  {
    id: 'desk',
    kicker: 'The Desk',
    title: 'A GM screen that arranges itself around you',
    summary:
      'A zoomable workspace where records become cards you summon, arrange, pin and dismiss, so what you need tonight stays within reach.',
    status: 'built',
    points: [
      { text: 'Summon any record with Ctrl+K without leaving the table' },
      { text: 'Pan, zoom and a minimap; pin, lock and snap cards to a grid' },
      { text: 'Saved layouts per scene, and reusable layout prefabs' },
      { text: 'Reference cards for web pages and PDFs, plus notes, clocks and undo' },
    ],
    shot: {
      src: desk,
      alt: 'The Canonex desk with NPC cards arranged on a dark workspace, joined by labelled relationship threads.',
      caption: 'The desk: cards placed near each other reveal their ties.',
    },
  },
  {
    id: 'sessions',
    kicker: 'Sessions',
    title: 'Plan the night, run it, carry it forward',
    summary:
      'Build a session outline from beats and campaign material, run it from a live cockpit, then wrap up what actually happened.',
    status: 'built',
    points: [
      { text: 'Session builder: drag records, encounters, maps and read-alouds onto beats' },
      { text: 'Scene Runner and a GM bar with Jot, names, DCs, clocks and rules lookup' },
      { text: 'Mark material reached, deferred or skipped, and carry it into the next session' },
      { text: 'Wrap-up turns runtime notes into campaign canon' },
    ],
    shot: {
      src: plan,
      alt: 'A session plan titled Session 33, The Foundry Below, with beats, expected party and loose material.',
      caption: 'Session planning: beats, the expected party and loose material.',
    },
  },
  {
    id: 'encounters',
    kicker: 'Encounters',
    title: 'Encounters built from your campaign',
    summary:
      'Drag creatures, NPCs, places and treasure onto an encounter. Canonex works out the threat and keeps each participant separate.',
    status: 'built',
    points: [
      { text: 'Threat from trivial to extreme, calculated for your party' },
      { text: 'Every creature its own participant; Elite and Weak adjustments by the rules' },
      { text: 'Creature sheets with the combat summary kept above the fold' },
      { text: 'A live tracker when the fight is running in Foundry VTT', status: 'early' },
    ],
    shot: {
      src: creature,
      alt: 'A creature sheet for the Foundry Wyrm showing combat tactics and Recall Knowledge DCs.',
      caption: 'A creature sheet, with tactics and Recall Knowledge DCs.',
    },
  },
  {
    id: 'continuity',
    kicker: 'Continuity',
    title: 'Campaign memory that keeps up',
    summary:
      'Canonex records what changed and when, and shows the threads you left open, the faces about to return and the prep you never used.',
    status: 'built',
    points: [
      { text: 'A change log for every record and tie, grouped by session' },
      { text: 'Open threads, quiet threads and returning faces on the campaign Home' },
      { text: '“Last time we saw…” on every record' },
      { text: 'Facts and knowledge: who knows, suspects or wrongly believes what', status: 'in-progress' },
    ],
    shot: {
      src: home,
      alt: 'The campaign Home showing Campaign memory with open threads, the party roster and quick actions.',
      caption: 'Campaign Home: open threads, the party and what to make next.',
    },
  },
];

export interface Integration {
  id: string;
  title: string;
  summary: string;
  status: FeatureStatus;
  points: string[];
}

export const integrations: Integration[] = [
  {
    id: 'pf2e',
    title: 'Pathfinder Second Edition',
    summary: 'First-class support for PF2e, while the core stays system-neutral.',
    status: 'built',
    points: [
      'Native stat blocks that match Foundry imports',
      'Import characters from Pathbuilder 2e JSON and Foundry actor exports',
      'A Bestiary built from the Foundry compendiums already on your disk',
      'GM Core DCs by level, encounter threat and Elite / Weak adjustments',
    ],
  },
  {
    id: 'foundry',
    title: 'Foundry VTT',
    summary: 'Canonex prepares, runs and remembers. Foundry stays the tabletop.',
    status: 'early',
    points: [
      'Link records to Foundry actors and pull their sheets',
      'Follow combats started in Foundry, with live hit points, AC and conditions',
      'Record a Foundry combat as a Canonex encounter',
      'Connects through the Foundry REST API module and relay',
    ],
  },
];

export interface MinorFeature {
  title: string;
  text: string;
  status: FeatureStatus;
}

export const moreFeatures: MinorFeature[] = [
  {
    title: 'Player view',
    text: 'A separate window that shows only what you choose — a portrait, handout, map or read-aloud — and never your GM desk.',
    status: 'early',
  },
  {
    title: 'Party board',
    text: 'Player characters and parties as records, with PC sheets and a party hub every member is tied to.',
    status: 'built',
  },
  {
    title: 'Your files, on your disk',
    text: 'Each campaign is a folder of readable JSON: easy to back up, sync or version, with no account and no cloud required.',
    status: 'built',
  },
  {
    title: 'Themes',
    text: 'Seven presets and your own: colours, fonts, corners and background art across the whole app.',
    status: 'built',
  },
  {
    title: 'Campaign Library',
    text: 'Run several campaigns side by side, each with its own records, sessions, desk and settings.',
    status: 'built',
  },
  {
    title: 'Keyboard first',
    text: 'Ctrl+K to summon, Ctrl+J to jot a note from anywhere, and undo on the desk.',
    status: 'built',
  },
];
