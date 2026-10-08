// Public roadmap. Order within a lane is rough priority; nothing here is a date promise.

export interface RoadmapItem {
  title: string;
  text: string;
}

export interface RoadmapLane {
  id: 'now' | 'next' | 'later';
  title: string;
  blurb: string;
  items: RoadmapItem[];
}

export const roadmapUpdated = '2026-10-08';

export const roadmap: RoadmapLane[] = [
  {
    id: 'now',
    title: 'Now',
    blurb: 'Being designed or built at the moment.',
    items: [
      {
        title: 'Closed beta (0.9)',
        text: 'Canonex 0.9 is with a small group of testers. Their sessions decide what gets polished first.',
      },
      {
        title: 'Public beta',
        text: 'A Windows installer published on the Download page, with release notes on the Changelog.',
      },
      {
        title: '5E, refined at the table',
        text: 'Fifth edition support is new: wording, sheets and encounter maths checked by people who run 5E every week.',
      },
    ],
  },
  {
    id: 'next',
    title: 'Next',
    blurb: 'Planned to follow directly.',
    items: [
      {
        title: 'Stat blocks from text and PDFs',
        text: 'Paste a stat block, or open a PDF you own, and Canonex makes the creatures. The readers are built; the window that uses them comes next.',
      },
      {
        title: 'Send to your tabletop',
        text: 'Creatures, NPCs and encounters sent to Foundry VTT, stat blocks ready to paste into Roll20, and token images for Owlbear Rodeo.',
      },
      {
        title: 'More ways to bring your party in',
        text: 'Character-sheet PDFs from popular 5E builders and Roll20 characters, beside today’s Pathbuilder, Wanderer’s Guide and Foundry imports.',
      },
      {
        title: 'The 2014 5E rules',
        text: 'Encounter maths and rules text for groups still playing the 2014 edition.',
      },
      {
        title: 'Hazards',
        text: 'Traps and hazards in the Bestiary and on encounters.',
      },
    ],
  },
  {
    id: 'later',
    title: 'Later',
    blurb: 'Direction, not yet scheduled.',
    items: [
      {
        title: 'Session recaps from a recording',
        text: 'Turn a session’s recording into a recap you review and keep.',
      },
      {
        title: 'Commands in Summon',
        text: 'Type an action, not just a name: open a session, start an encounter, jump anywhere.',
      },
      {
        title: 'Richer player view',
        text: 'A “what the players can see” indicator, and sharing a region of a map.',
      },
      {
        title: 'More desk widgets',
        text: 'Random tables, timers, audio cues and Foundry encounter controls on the desk.',
      },
    ],
  },
];
