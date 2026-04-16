import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categorie: z.enum(['metiers', 'formations', 'ecoles', 'orientation', 'actualites']),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    auteur: z.string(),
    date: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
