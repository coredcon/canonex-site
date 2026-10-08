// Feature groups shared by the homepage and the Features page.
// `status` must stay honest: 'built' = in the current build (the 0.9 closed beta).
// Naming (2026-10-08): "Pathfinder 2e" only to say what Canonex works with; the other system is "fifth edition (5E)",
// never the publisher's brand. Licensing for a paid release is still open.

import type { ImageMetadata } from 'astro';
import codex from '../assets/screens/codex.png';
import graph from '../assets/screens/graph.png';
import desk from '../assets/screens/desk.png';
import plan from '../assets/screens/plan.png';
import creature from '../assets/screens/creature.png';
import home from '../assets/screens/home.png';
import fifth from '../assets/screens/fifth.png';
import worldturn from '../assets/screens/worldturn.png';

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
      'NPCs, creatures, locations, factions, shops, deities, facts, quests and journals, each on a sheet shaped for the job it does at the table.',
    status: 'built',
    points: [
      { text: 'Purpose-built sheets: an NPC reads like a dossier, a creature like a combat instrument' },
      { text: 'Drag one record onto another’s sheet to tie them, and Canonex asks how when it could mean several things' },
      { text: 'Long- and short-term goals for NPCs and factions; secrets and GM notes kept apart from what players may learn' },
      { text: 'Side cards you fold, reorder and choose per record type' },
      { text: 'Your own record types and groups, with any of 5,000+ icons' },
      { text: 'Filters for forgotten prep: never used, planned but never reached, not tied to anything' },
    ],
    shot: {
      src: codex,
      alt: 'The Canonex Codex showing an NPC dossier for Rashida al-Qadir, with her relationships, goals, facts, secrets and GM notes.',
      caption: 'The Codex: an NPC dossier with her ties, goals, secrets and GM notes.',
    },
  },
  {
    id: 'relationships',
    kicker: 'Relationships',
    title: 'A campaign that knows how it connects',
    summary:
      'Ties between records carry a kind, a direction and a secrecy level. The Campaign Graph shows the whole web, and you can build it right there by dragging one record onto another.',
    status: 'built',
    points: [
      { text: 'Structural, story and secret ties, each drawn differently' },
      { text: 'Drag a record’s + onto another to tie them; name your own kinds of relationship' },
      { text: 'Fold a party, group or faction into one disc, and trace how any two records connect' },
      { text: 'A Matrix view of every pair, and ties that show between records you place near each other on the desk' },
    ],
    shot: {
      src: graph,
      alt: 'The Campaign Graph: records as coloured discs joined by solid and dashed ties, the party clustered to one side.',
      caption: 'The Campaign Graph. Brass lines are story ties; dashed ember lines are secrets.',
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
      { text: 'Reference cards for web pages and PDFs, plus notes, clocks, counters, tables and undo' },
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
      { text: 'Run: the scene you’re in, who’s there, quick notes, and what the party can learn here' },
      { text: 'A GM bar on every screen: Create, Jot, names, DCs, rules lookup, the Bestiary, Equipment and Loot' },
      { text: 'Wrap-up turns runtime notes into campaign canon, and unreached material carries forward' },
    ],
    shot: {
      src: plan,
      alt: 'A session plan titled Session 33, The Foundry Below, with beats, the expected party and loose material.',
      caption: 'Session planning: beats, the expected party and loose material.',
    },
  },
  {
    id: 'systems',
    kicker: 'Game systems',
    title: 'Pathfinder 2e and 5E, ready out of the box',
    summary:
      'Choose a system for each campaign and everything follows it: sheets, DCs, encounter maths, the creature builder, treasure, names and the rules lookup. The rules content comes with the app, so there is nothing to install first.',
    status: 'built',
    points: [
      { text: 'Pathfinder 2e: the ORC-licensed remaster creatures, spells and equipment included' },
      { text: 'Fifth edition (5E, 2024 rules): the SRD 5.2 monsters, spells and items included', status: 'early' },
      { text: 'Bring what you own: character and creature exports, the content in your own Foundry install' },
      { text: 'Paste a stat block, or point Canonex at a PDF, and it reads the creatures out', status: 'in-progress' },
      { text: '“Other / my own” for any other game: every tool that doesn’t need rules still works' },
    ],
    shot: {
      src: fifth,
      alt: 'A 5E creature sheet for an Adult Red Dragon: challenge rating, hit points, armour class and initiative tiles, an At the table summary and the full stat block.',
      caption: 'A 5E creature from the included SRD 5.2, with its stat block.',
    },
  },
  {
    id: 'encounters',
    kicker: 'Encounters',
    title: 'Encounters built from your campaign',
    summary:
      'Drag creatures, NPCs, places and treasure onto an encounter. Canonex works out the threat for your party in your system and keeps each participant separate.',
    status: 'built',
    points: [
      { text: 'Threat calculated for your party: Pathfinder 2e’s trivial to extreme, or 5E’s XP budget' },
      { text: 'Every creature its own participant; Elite and Weak adjustments in Pathfinder 2e' },
      { text: 'Create original NPCs, creatures, items and places that are rules-correct for your system' },
      { text: 'Bestiary and Equipment browsers, and a Loot generator that rolls treasure by level' },
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
      'Canonex records what changed and when, who knows what, and how each NPC feels about the party, and shows the threads you left open and the prep you never used.',
    status: 'built',
    points: [
      { text: 'Facts: who knows, suspects or wrongly believes what, and when they learned it' },
      { text: 'What the party knows, and who in the world would know a given secret' },
      { text: 'NPC memory: attitude and relationship changes remembered by themselves, with the session and scene' },
      { text: 'Open threads, quiet threads and returning faces on the campaign Home; “Last time we saw…” on every record' },
    ],
    shot: {
      src: home,
      alt: 'The campaign Home showing Campaign memory with open threads, the party roster and quick actions.',
      caption: 'Campaign Home: open threads, the party and what to make next.',
    },
  },
  {
    id: 'world',
    kicker: 'The world turn',
    title: 'The world keeps moving between sessions',
    summary:
      'Say how much time passes and who acts. Canonex writes a briefing from everything your campaign has recorded; paste it into the AI chat of your choice, paste the answer back, and Canonex files what happened.',
    status: 'built',
    points: [
      { text: 'Factions and NPCs act on their goals, from what the party actually did' },
      { text: 'Events land in each actor’s memory, rumours become facts nobody knows yet, hooks go into the next session' },
      { text: 'Check and edit everything before it is filed' },
      { text: 'Copy and paste: no account, no API key, nothing sent anywhere by Canonex' },
    ],
    shot: {
      src: worldturn,
      alt: 'The World turn window: time passes, who acts, the briefing to copy, and the AI’s answer turned into events and rumours to file.',
      caption: 'The world turn: who acts, the briefing, and what comes back.',
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
    title: 'Pathfinder 2e',
    summary: 'Deep support, with the open-licensed remaster content included.',
    status: 'built',
    points: [
      'Native stat blocks that match Foundry imports',
      'Characters from Pathbuilder 2e, Wanderer’s Guide and Foundry exports',
      'Creatures, spells and equipment from the ORC-licensed remaster, in the app',
      'DCs by level, encounter threat, Elite / Weak, and treasure by level',
    ],
  },
  {
    id: 'fifth',
    title: 'Fifth edition (5E)',
    summary: 'The 2024 rules, with the SRD 5.2 included.',
    status: 'early',
    points: [
      '333 monsters, 340 spells and 633 items from the SRD 5.2',
      'The 2024 stat block, 5E sheets, and creatures built by challenge rating',
      'Encounter difficulty from the XP budget; treasure by rarity',
      'Your own content from Foundry exports, or from your Foundry install',
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
      'Live sync only while you choose it, so the relay is not polled all evening',
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
    title: 'A guided tour',
    text: 'A short tour over a sample campaign shows the parts you’ll use most, and has you tie two records together yourself.',
    status: 'built',
  },
  {
    title: 'Backups',
    text: 'A daily automatic backup of each campaign you open, plus one-click backups to a single .canonex file you can restore as a copy.',
    status: 'built',
  },
  {
    title: 'Your files, on your disk',
    text: 'Each campaign is a folder of readable JSON: easy to back up, sync or version, with no account and no cloud required.',
    status: 'built',
  },
  {
    title: 'Party board',
    text: 'Player characters and parties as records, with PC sheets and a party hub every member is tied to.',
    status: 'built',
  },
  {
    title: 'Player view',
    text: 'A separate window that shows only what you choose — a portrait, handout, map or read-aloud — and never your GM desk.',
    status: 'early',
  },
  {
    title: 'Themes',
    text: 'Seven presets and your own: colours, fonts, corners and background art across the whole app.',
    status: 'built',
  },
  {
    title: 'Campaign Library',
    text: 'Run several campaigns side by side, each with its own system, records, sessions, desk and settings.',
    status: 'built',
  },
  {
    title: 'Keyboard first',
    text: 'Ctrl+K to summon, Ctrl+J to jot a note from anywhere, and undo on the desk.',
    status: 'built',
  },
];
