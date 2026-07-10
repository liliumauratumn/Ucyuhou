import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    category: z.enum([
      '悟り',
      '引き寄せ',
      '宇宙の法則',
      '目覚め',
      '文書',
      '実践',
      '思考の欠片',
      '宇宙通信'
    ]),
    categorySlug: z.enum([
      'satori',
      'hikiyose',
      'law',
      'mezame',
      'bunsho',
      'jissen',
      'kakera',
      'tsushin'
    ]),
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    publishedLabel: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    theme: z.enum(['default', 'cosmic']),
    sourceFile: z.string().optional(),
    tags: z.array(z.string()).optional(),
    authorName: z.literal('宇宙を悟り法則を引き寄せる'),
    readTime: z.string().optional(),
  })
});

export const collections = { articles };
