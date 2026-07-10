---
name: ucyuhou-article-writing
description: Use when turning an approved Ucyuhou Article Brief into a complete Markdown article. Preserves the official author identity, category-specific voice, evidence boundaries, exact frontmatter, and non-generic prose.
---

# Ucyuhou Article Writing

## Preconditions

Write only from an Article Brief containing at least:

- question
- conclusion
- category / categorySlug
- difference from existing articles
- section plan
- research requirements
- image direction

If no brief exists and the user requested a full article, create a compact brief using `ucyuhou-article-planning` before drafting. Under the simplified one-shot pipeline, do not present this brief to the user or stop for approval; execute the pipeline continuously.

## Required reading

Read:

1. `docs/EDITORIAL_CONSTITUTION.md`
2. `docs/AUTHOR_IDENTITY.md`
3. `docs/CATEGORY_EDITORIAL_GUIDE.md`
4. `docs/ARTICLE_FORMAT_SPEC.md`
5. the Article Brief
6. the closest existing articles named in the brief

## Voice

Use the official author name exactly:

```text
宇宙を悟り法則を引き寄せる
```

Use calm, precise Japanese in the `である` style. Write as a reader of structures, not a salesperson, guru, beginner, or AI assistant.

Ensure the writing style is accessible to middle school students (similar to the readability level of Iwanami Shonen Bunko):
- Do not assume the reader has prior knowledge of spiritual concepts.
- Avoid difficult expressions and spiritual jargon (such as "raising vibration", "connecting with the universe", "higher dimensions", or "awakening") without explanation. If you must use them, explain their meaning in simple terms at the first appearance.
- Replace abstract descriptions with everyday emotions or behavioral examples.
- Keep sentences concise and clear. Prefer plain Japanese words over complex Sino-Japanese characters or difficult phrasing.
- If omitting a jargon term would make the meaning inaccurate, keep it but always provide a short, simple explanation.


## Drafting rules

- Start with the article's actual distinction or problem, not a generic preamble.
- Every section must advance the argument.
- Distinguish facts, teachings, Ucyuhou interpretation, and hypothesis in wording.
- Include a counterargument, limit, or ambiguity when the topic requires it.
- Use concrete examples only when they clarify the structure.
- End by answering the opening question. Do not repeat the entire article as a summary.
- Do not pad to reach a target length.
- Do not use unverified direct quotes.
- Do not imitate the sentence structure of one existing article throughout.

## Category-specific behavior

Follow `CATEGORY_EDITORIAL_GUIDE.md`.

- `文書`: establish source, date, transmission, translation, and interpretation boundaries.
- `実践`: provide steps, observation points, failure conditions, and no effect guarantee.
- `思考の欠片`: If designated as "思考の欠片" or "思考メモ" by the user, you must keep the user's text exactly as-is. Do NOT rewrite, edit, summarize, correct grammar/typos, or translate. Keep word order, punctuation, and formatting errors as "necessary noise." Do NOT add any headings, intros, conclusions, images, or summaries. Only append required frontmatter metadata and standard Markdown formatting. Do NOT auto-classify into this category unless explicitly requested by the user.
- `宇宙通信`: use the communication form, but never present it as scientific proof or actionable prophecy.

## Frontmatter

Use the exact schema in `ARTICLE_FORMAT_SPEC.md` and `src/content.config.ts`.

- `slug` equals filename.
- `publishedAt` and `publishedLabel` match.
- `authorName` is exact.
- Omit `sourceFile` for a new Astro-native article.
- Do not add reaction, comment, view, share, or ranking numbers.
- Do not point `heroImage` to a nonexistent file.
- If the final image is not ready, mark the draft as not publishable outside the frontmatter rather than using a legacy placeholder.

## Research use

When sources are required, use verified source notes from the brief or perform the necessary research before making claims. Never invent bibliographic details to make an article look researched.

## Deliverable

Produce one complete Markdown file, ready for editorial review, plus a short note listing:

- claims that depend on external sources;
- any unresolved wording;
- image status;
- deliberate differences from the closest existing articles.

Do not declare it published. Do not deploy.
