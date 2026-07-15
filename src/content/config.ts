import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Digital Factory'),
    tags: z.array(z.string()).default([]),
    productUrl: z.string().url().optional(),
    canonical: z.string().url().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    schema: z
      .object({
        type: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
