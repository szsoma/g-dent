import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

const hours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hours' }),
  schema: z.object({
    day: z.string(),
    time: z.string(),
    order: z.number(),
  }),
});

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: z.object({
    visible: z.boolean().default(false),
    text: z.string(),
    textEn: z.string().optional(),
  }),
});

export const collections = { posts, hours, announcements };
