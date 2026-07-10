import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

function cleanMarkdown(body: string): string {
  if (!body) return '';
  let text = body;

  // Remove markdown links [text](url) -> text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // Remove markdown bold/italic
  text = text.replace(/(\*\*|__)(.*?)\1/g, '$2');
  text = text.replace(/(\*|_)(.*?)\1/g, '$2');

  // Remove inline code
  text = text.replace(/`(.*?)`/g, '$1');

  // Remove headings, lists, blockquotes symbols at the start of lines
  text = text.replace(/^\s*#+\s+/gm, '');
  text = text.replace(/^\s*[-*+]\s+/gm, '');
  text = text.replace(/^\s*\d+\.\s+/gm, '');
  text = text.replace(/^\s*>\s*/gm, '');

  // Remove HTML tags
  text = text.replace(/<[^>]*>/g, ' ');

  // Normalize spaces and newlines
  text = text.replace(/\r?\n/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles');

  // Sort articles:
  // 1. publishedAt desc (newest first)
  // 2. slug asc (alphabetical order for same date)
  const sortedArticles = articles.sort((a, b) => {
    const dateComparison = b.data.publishedAt.localeCompare(a.data.publishedAt);
    if (dateComparison !== 0) return dateComparison;
    return a.data.slug.localeCompare(b.data.slug);
  });

  const searchDatabase = sortedArticles.map((article) => ({
    slug: article.data.slug,
    url: `/articles/${article.data.slug}/`,
    title: article.data.title,
    subtitle: article.data.subtitle ?? '',
    description: article.data.description ?? '',
    category: article.data.category,
    categorySlug: article.data.categorySlug,
    publishedAt: article.data.publishedAt,
    publishedLabel: article.data.publishedLabel,
    tags: article.data.tags ?? [],
    body: cleanMarkdown(article.body ?? ''),
  }));

  return new Response(JSON.stringify(searchDatabase), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
