import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const useCases = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/use-cases' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    industry: z.enum(['Distribution', 'Office and finance', 'Property management']),
    order: z.number(),
    invitation: z.string(),
    companion: z.string(),
  }),
});

export const collections = { 'use-cases': useCases };
