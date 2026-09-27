import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Documentation pages: one Markdown file per page in src/content/docs.
const docs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Sidebar group, in the order given by `docSections` in src/data/docs.ts. */
    section: z.enum(['Start here', 'Using Canonex', 'Integrations', 'Reference']),
    /** Position within the section. */
    order: z.number(),
  }),
});

// Changelog: one Markdown file per entry in src/content/changelog, newest shown first.
const changelog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/changelog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Version or build label, e.g. "Development build" or "1.0.0". */
    version: z.string(),
    summary: z.string(),
  }),
});

export const collections = { docs, changelog };
