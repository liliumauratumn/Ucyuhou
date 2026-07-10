---
name: astro-ai-editable-static-site
description: Use when building a static Astro site intended to be readable and maintainable by AI agents later. Enforces simple Astro structure, content collections, semantic components, ordinary CSS, no Tailwind by default, no unnecessary React, and portable static output.
---

# Astro AI-Editable Static Site

Use this skill when creating or modifying a static Astro site that should remain easy for future AI agents and non-engineers to edit.

## Core Goal

The site should be:

- Static-first.
- Easy to understand from file names.
- Easy to modify by AI.
- Portable to Vercel and ordinary static hosting.
- Not dependent on framework-specific magic unless necessary.

## Stack Rules

Use:
- Astro.
- Static output.
- Markdown or MDX for articles.
- Content Collections for repeatable content.
- Ordinary CSS.
- CSS variables.
- Semantic HTML.
- Small components with meaningful names.

Avoid by default:
- Tailwind.
- UI libraries.
- Unnecessary React.
- Client-side routing.
- Heavy animation libraries.
- Server-only APIs.
- Vendor-specific deployment features.
- Complex CMS before the content model is stable.

## Recommended Project Structure

Use this shape unless the existing project already has a clear convention:

```text
/
  astro.config.mjs
  package.json
  README.md
  SPEC.md
  AI_EDITING_GUIDE.md

  public/
    assets/
      images/

  src/
    pages/
      index.astro
      about.astro
      contact.astro
      articles/
        index.astro
        [slug].astro
      category/
        [slug].astro

    layouts/
      BaseLayout.astro
      SiteLayout.astro
      ArticleLayout.astro

    components/
      SiteHeader.astro
      SiteFooter.astro
      LogoMark.astro
      ArticleCard.astro
      LatestList.astro
      NewsletterBlock.astro

    content/
      articles/
        sample-article.md

    styles/
      tokens.css
      global.css
      pages/
        top.css
        article.css
```

## Content Rules

For article-like content, prefer frontmatter:

```yaml
---
title: "Article title"
description: "Short deck or excerpt."
category: "悟り"
tags: ["Eckhart Tolle", "Buddha"]
publishedAt: "2026-07-09"
readTime: "8 min read"
featured: true
image: "/assets/images/placeholder-article.jpg"
---
```

Do not hard-code all article cards in page files if the site is meant to grow.

## Component Rules

Components should be named by purpose, not visual accident.

Good:
- `MainStory.astro`
- `ArticleCard.astro`
- `LatestList.astro`
- `NewsletterBlock.astro`
- `ArticleActionBar.astro`

Avoid:
- `Box1.astro`
- `CoolThing.astro`
- `RandomCard.astro`
- `BlackMagicSection.astro`

## CSS Rules

Use CSS variables for repeated values:

```css
:root {
  --color-bg: #ffffff;
  --color-ink: #1f1f1f;
  --color-muted: #6b6b6b;
  --line: #e5e5e5;
  --max-content: 1120px;
}
```

Keep:
- global reset and base typography in `global.css`.
- tokens in `tokens.css`.
- page-specific layout in `styles/pages/*.css`.
- component-specific classes close to the component if preferred by project convention.

## AI Editing Guide Requirement

Create or maintain `AI_EDITING_GUIDE.md`.

It should explain:
- Where pages live.
- Where articles live.
- Where images live.
- Where global styles live.
- How to add an article.
- How to change navigation.
- What not to change.
- How to run dev/build/check commands.

## Verification

Before reporting success:
- Run the available Astro check/build command.
- Confirm generated pages render.
- Review the diff.
- Report exact commands run.
- Do not claim deployment unless it was actually deployed.

## Success Criteria

A good result should:
- Build as static HTML.
- Have meaningful file names.
- Have reusable layouts/components.
- Store repeatable content as content files.
- Avoid unnecessary client JS.
- Be clear enough that another AI can edit it safely.
