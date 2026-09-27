import { getCollection, type CollectionEntry } from 'astro:content';

export const docSections = ['Start here', 'Using Canonex', 'Integrations', 'Reference'] as const;

export type Doc = CollectionEntry<'docs'>;

/** All docs grouped by section, in sidebar order. */
export async function getDocTree() {
  const docs = await getCollection('docs');
  return docSections
    .map((section) => ({
      section,
      docs: docs.filter((d) => d.data.section === section).sort((a, b) => a.data.order - b.data.order),
    }))
    .filter((g) => g.docs.length > 0);
}

export const docHref = (doc: Doc) => `/docs/${doc.id}/`;
