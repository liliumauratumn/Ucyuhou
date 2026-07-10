---
name: ucyuhou-editorial-review
description: Use when reviewing a Ucyuhou article before publication or auditing an existing article. Checks overlap, argument, facts, quotations, author identity, category fit, AI-like padding, frontmatter, image use, and build readiness.
---

# Ucyuhou Editorial Review

## Goal

Decide whether an article is a valid Ucyuhou publication candidate. Review content, not only grammar.

## Required reading

Read:

1. `docs/EDITORIAL_CONSTITUTION.md`
2. `docs/AUTHOR_IDENTITY.md`
3. `docs/CATEGORY_EDITORIAL_GUIDE.md`
4. `docs/ARTICLE_FORMAT_SPEC.md`
5. `docs/IMAGE_EDITORIAL_POLICY.md`
6. the Article Brief, if available
7. the draft
8. all close existing articles
9. `src/content.config.ts`

## Review order

### 1. Thesis

- What exact question does the article answer?
- What exact answer does it give?
- Does each section move toward that answer?

Fail if the article has a topic but no argument or observation.

### 2. Overlap

Compare with existing articles using question, conclusion, examples, source material, and structure. A changed title is not enough.

Fail if the central claim is already covered and the draft adds no new source, contrast, rebuttal, application, or observation.

### 3. Epistemic accuracy

Mark each important claim as:

- verified fact;
- teaching summary;
- Ucyuhou interpretation;
- hypothesis or experience;
- cosmic communication.

Fail on fabricated quotes, sources, dates, scientific claims, or false certainty.

### 4. Author identity

Reject unauthorized author names, invented biography, guru voice, sales language, dependence-building language, or a newly invented cosmic speaker.

### 5. Category fit

Judge what the article does. Recommend a category change only if it materially improves editorial accuracy.

### 6. AI-scent and Readability check

Cut or flag:

- generic opening paragraphs;
- repeated conclusions;
- mechanical numbered lists;
- empty transitions;
- article-wide restatement in the ending;
- grandiose abstraction without an object;
- phrases that could appear in any spiritual article.

Verify readability for middle school students (Iwanami Shonen Bunko level):
- Check if a middle school student can read through the article smoothly without losing the thread of meaning.
- Reject articles that use spiritual jargon (such as "vibration", "connection to the universe", "higher dimension", or "awakening") without clear, everyday explanations.
- Ensure abstract concepts are replaced or explained with daily life emotions or behavioral examples.
- Ensure sentences are short and clear, prioritizing direct Japanese words over difficult Chinese-character compounds.
- Confirm that jargon is used only when removing it would harm accuracy, and that a brief explanation is always attached.


### 7. Frontmatter

Check every field against `src/content.config.ts`.

Confirm:

- slug and filename match;
- category pair matches;
- date pair matches;
- authorName is exact;
- image exists;
- alt describes the image;
- sourceFile is omitted for new articles;
- no fake engagement fields exist.

### 8. Image

Check current reuse counts, topic fit, rights/source status, filename, and alt. `hero-main.jpg` is not acceptable for a new article.

### 9. Build readiness

When editing files, run:

```bash
pnpm exec astro check
pnpm build
git diff --check
```

## Verdicts

Use exactly one:

- `PASS`: publishable candidate with no required content edits.
- `PASS WITH FIXES`: publishable after listed local fixes.
- `FAIL`: requires new research, new planning, category reconsideration, or substantial rewrite.

## Output format

```markdown
# Editorial Review

Verdict: PASS | PASS WITH FIXES | FAIL

## What the article adds
...

## Required fixes
1. file/section — issue — exact correction

## Fact and source risks
...

## Overlap check
...

## Frontmatter and image check
...

## Verification
- astro check:
- build:
- diff check:
```

Do not add speculative improvements after the article already meets the brief. Separate required fixes from optional ideas, and keep optional ideas out of the publication gate.
