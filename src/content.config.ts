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
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    theme: z.enum(['default', 'cosmic']),
    sourceFile: z.string().optional(),
    tags: z.array(z.string()).optional(),
    authorName: z.literal('宇宙を悟り法則を引き寄せる'),
    readTime: z.string().optional(),
  }).superRefine((data, ctx) => {
    const isKakera = data.categorySlug === 'kakera';

    // 1 & 2. categorySlug が 'kakera' 以外の場合、heroImage と heroAlt は必須
    if (!isKakera) {
      if (!data.heroImage) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "heroImage is required for non-kakera articles.",
          path: ["heroImage"]
        });
      }
      if (!data.heroAlt) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "heroAlt is required for non-kakera articles.",
          path: ["heroAlt"]
        });
      }
    }

    // 3. heroImage が指定されている場合は、category に関係なく heroAlt が必須
    if (data.heroImage && !data.heroAlt) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "heroAlt is required when heroImage is specified.",
        path: ["heroAlt"]
      });
    }
  })
});

export const collections = { articles };
