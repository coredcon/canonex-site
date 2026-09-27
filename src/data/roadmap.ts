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

export const roadmapUpdated = '2026-09-26';

export const roadmap: RoadmapLane[] = [
  {
    id: 'now',
    title: 'Now',
    blurb: 'Being designed or built at the moment.',
    items: [
      {
        title: 'Facts and knowledge',
        text: 'Facts as records, with who knows, suspects or wrongly believes each one, and when they learned it. The foundation for answering “who knows what?”',
      },
      {
        title: 'Session night polish',
        text: 'Refining Jot, the GM bar and the Scene Runner from real play.',
      },
    ],
  },
  {
    id: 'next',
    title: 'Next',
    blurb: 'Planned to follow directly.',
    items: [
      {
        title: 'Reveals at the table',
        text: 'Reveal a fact to the party or one character during play, and see what each of them knows.',
      },
      {
        title: 'Clocks and NPC memory',
        text: 'Progress clocks tied to campaign records, and NPCs that remember how the party treated them.',
      },
      {
        title: 'Graph intelligence',
        text: 'Ask who would know something, map which secrets depend on each other, and see the fallout when a key NPC dies.',
      },
      {
        title: 'Faction turns',
        text: 'Move factions forward between sessions, with the changes recorded in campaign memory.',
      },
    ],
  },
  {
    id: 'later',
    title: 'Later',
    blurb: 'Direction, not yet scheduled.',
    items: [
      {
        title: 'First public build',
        text: 'A packaged installer, and release notes kept here on the Changelog.',
      },
      {
        title: 'Richer player view',
        text: 'A “what the players can see” indicator, and sharing a region of a map.',
      },
      {
        title: 'More desk widgets',
        text: 'Random tables, timers, audio cues and Foundry encounter controls on the desk.',
      },
      {
        title: 'More game systems',
        text: 'Canonex’s core is system-neutral. Pathfinder 2e comes first; other systems will follow.',
      },
    ],
  },
];
