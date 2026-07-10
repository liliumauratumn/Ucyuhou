---
name: ucyuhou-article-planning
description: Use when proposing, selecting, or structuring a new Ucyuhou article before drafting. Scans all existing articles, prevents overlap, selects the correct category, defines the question and conclusion, identifies research needs, and creates an Article Brief.
---

# Ucyuhou Article Planning

## Goal

Create a publication-worthy article plan before prose is written. Do not begin by generating a generic spiritual article.

## Required reading

Read these files first:

1. `docs/EDITORIAL_CONSTITUTION.md`
2. `docs/AUTHOR_IDENTITY.md`
3. `docs/CATEGORY_EDITORIAL_GUIDE.md`
4. `docs/ARTICLE_FORMAT_SPEC.md`
5. `docs/IMAGE_EDITORIAL_POLICY.md`
6. `src/content.config.ts`

Then inspect all files in `src/content/articles/`.

## Existing-content scan

For every existing article collect:

- slug
- title
- category
- subtitle or description
- tags
- headings
- one-sentence central claim
- heroImage

Do not judge overlap from titles alone.

For the proposed topic, identify the closest existing articles and compare:

- question
- conclusion
- source material
- example
- category function

If the new article is only a paraphrase, choose one of these actions:

1. change the question;
2. turn it into a documented comparison or rebuttal;
3. recommend updating the existing article;
4. reject the idea.

## Category selection

Choose the category based on what the article does, not which nouns appear in it. Follow the decision order in `CATEGORY_EDITORIAL_GUIDE.md`.

Always output both `category` and `categorySlug`.

## Claim classification

List the intended claims under the appropriate types:

- verifiable fact
- teaching summary
- Ucyuhou interpretation
- experience or hypothesis
- cosmic communication

Flag which claims require external research. Quotes, dates, books, historical claims, medical/scientific claims, and current facts require verification.

## Image direction

Do not simply assign an existing image. State what the image must do for the article. Check current `heroImage` usage and reject overused legacy images, especially `hero-main.jpg`.

## Output format

Return this brief:

```markdown
# Article Brief

- Working title:
- Proposed slug:
- category / categorySlug:
- One-sentence question:
- One-sentence conclusion:
- Reader distinction after reading:
- Closest existing articles:
- Exact difference from them:
- Main sections:
- Counterargument or limit:
- Claims and certainty levels:
- Required sources:
- Image role and visual direction:
- Expected article type and approximate length:
- Publication blockers:
```

## Boundaries

- Do not write the full article unless the user explicitly requests the complete pipeline.
- Do not invent a user experience, quote, source, or historical fact.
- Do not create a new category.
- Do not change site code or design.
- Do not use fake engagement metrics.

When the user requests the full pipeline, still produce the brief first, then pass it to the writing skill without adding an approval loop unless a publication blocker exists.
