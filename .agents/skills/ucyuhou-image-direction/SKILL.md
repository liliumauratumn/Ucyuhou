---
name: ucyuhou-image-direction
description: Use when selecting, commissioning, generating, or reviewing a hero image for a Ucyuhou article. Enforces article-specific visual meaning, category vocabulary, reuse tracking, rights awareness, accurate alt text, and no generic spiritual imagery.
---

# Ucyuhou Image Direction

## Required reading

Read:

1. `docs/IMAGE_EDITORIAL_POLICY.md`
2. `docs/EDITORIAL_CONSTITUTION.md`
3. the Article Brief
4. the article draft
5. all article frontmatter containing `heroImage`

Inspect actual files in `public/assets/images/`.

## First decision: what job does the image do?

Choose one primary job:

- identify a real person or document;
- establish a concrete scene;
- visualize a relationship or structure;
- provide a symbolic object;
- create the distinct visual language of a cosmic communication.

Do not use “spiritual atmosphere” as the job.

## Reuse check

Create a current image-to-article usage map. Reject overused legacy images for new articles. `hero-main.jpg` is legacy-only and must not be assigned to a new article.

Reuse is allowed only when:

- the articles are an explicit series;
- the same document is intentionally being examined in multiple parts;
- the user specifically requests a shared visual system.

State the reason for reuse.

## Existing image vs new image

Prefer an existing image only if it is unused or clearly unique to the article's subject. Otherwise create or commission a new one.

For real historical people, documents, artworks, or places, do not generate an image that appears to be authentic evidence. Use a rights-cleared real source or an explicitly symbolic image.

## Direction output

Provide:

```markdown
# Image Direction

- Article / slug:
- Image job:
- Category visual vocabulary:
- Proposed scene or object:
- Composition and crop:
- Texture / lighting:
- Elements to exclude:
- Existing-image reuse decision:
- Source type: user-provided | rights-cleared | generated | unresolved
- Proposed filename:
- Proposed heroImage path:
- Alt text:
- Generation prompt, if needed:
- Negative prompt, if needed:
- Publication blocker:
```

## Generation prompt rules

A useful prompt must name:

- a concrete subject;
- setting and perspective;
- composition;
- editorial-photo or archival quality;
- monochrome compatibility;
- no text, logo, UI, watermark;
- category-specific exclusions.

Do not write only “mystical cosmic spiritual image.”

## Completion rule

If the image tool or usable source is unavailable, deliver direction and mark the image unresolved. Do not pretend a file was created and do not approve the article for publication with a placeholder.
