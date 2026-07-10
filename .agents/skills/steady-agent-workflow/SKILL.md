---
name: steady-agent-workflow
description: Use at the start of complex or multi-step coding tasks, when a task feels too big, when errors repeat, or before final reporting. Guides coding agents to understand before editing, keep scope small, plan before touching files, verify with evidence, and stop safely instead of guessing.
---

# Steady Agent Workflow

Use this skill to keep coding work orderly, finite, and evidence-based.

## Core Principles

1. **Understand before you touch.** Read relevant files before editing. Do not call APIs or functions whose signatures you have not checked.
2. **Small steps, checked often.** Break large work into stages. Verify each stage before moving on.
3. **The task is the task.** Do what was asked. Note unrelated issues, but do not fix them unless they block the task.
4. **Evidence over confidence.** Do not claim success without a command, test, screenshot, or observed result.
5. **Prefer the existing pattern.** Match naming, structure, error handling, and test style already present in the codebase.
6. **When lost, stop moving.** Re-read, re-plan, or ask. Repeating guesses usually makes the code worse.
7. **Leave the campsite clean.** No debug prints, stray files, commented-out experiments, or half-finished edits.

## Workflow

### 1. Understand
- Restate the task in one sentence.
- Identify the deliverable: code change, review, document, or answer.
- Identify the done condition.
- List explicit constraints and files/features to avoid.

### 2. Investigate
- Find relevant files by symbol, route, feature name, or error message.
- Read the files you will change, their direct callers/importers, and one similar example.
- Find verification commands in `package.json`, README, Makefile, CI config, or project docs.
- Do not read the whole repo unless the task truly requires it.

### 3. Plan
Break the task into finite, verifiable stages.

Each stage must have:
- Files it touches
- The concrete change
- The check that proves it worked

If the plan has more than about 7 stages, split the task or re-scope before editing.

### 4. Execute
- Edit one stage at a time.
- Run the cheapest relevant check after each stage.
- If a check fails, fix that before starting the next stage.
- If the plan becomes wrong, stop and update the plan explicitly.

### 5. Verify
Before reporting:
- Re-read the original request.
- Review the diff.
- Run the relevant checks: lint, typecheck, tests, build, or manual browser verification.
- Report only what was actually verified.

## Multi-File Coding Rules

Before editing multiple files:
1. Map the change surface.
2. Classify files as source of truth, dependents, tests, or config/docs.
3. Edit in dependency order: contracts → core logic → wiring → tests/config.
4. Keep a live checklist of touched files.
5. Run whole-project verification at the end.

For detailed procedure, read `references/multi-file-procedure.md`.

## Scope Discipline

Use these rules:
- If a change is not needed for the done condition, it is out of scope.
- If you notice unrelated cleanup, list it under “Noticed but not changed.”
- If a “small improvement” touches files outside the planned list, it is not small.
- If an out-of-scope problem blocks the task, fix the minimum necessary and report it.

## Verification Checklist

Before final report, confirm:
- Every original requirement is done or explicitly listed as not done.
- The change was exercised, not just compiled.
- Lint/format/typecheck/tests/build were run where available and relevant.
- Failures were interpreted from the first relevant error.
- The diff contains no debug prints, stray files, secrets, or accidental changes.
- Claims in the final report are backed by evidence.

For the full checklist, read `references/verification-checklist.md`.

## Safe Stopping Rules

Stop and report instead of guessing when:
- The request has multiple materially different interpretations.
- The next step is destructive or affects the outside world.
- The same verification fails three times across genuinely different approaches.
- Required information, credentials, environment, or project context is missing.

When stopping, report:
1. What you were trying to achieve
2. What you tried
3. Exact errors or blockers
4. Best current hypothesis
5. What would unblock the work

For detailed stopping examples, read `references/failure-modes-and-stopping.md`.

## Review Rules

For explicit review tasks:
- Do not edit code unless asked.
- Report findings ordered by severity: bugs, risks, style.
- For each finding, include location, issue, why it matters, and suggested fix.
- If the diff is fine, say so. Do not invent findings.

For detailed review procedure, read `references/review-procedure.md`.

## Final Report Format

Use this structure:

```md
**Done / Partially done / Stopped:** <outcome>

**What changed**
- <file or area> — <change>

**Verified**
- <command/check> — <result>

**Not verified**
- <anything not checked>

**Noticed but not changed**
- <out-of-scope observations>
```

For longer examples, read `references/final-report-formats.md`.

## When to Read References

- Repeated errors: `references/failure-modes-and-stopping.md`
- Large multi-file change: `references/multi-file-procedure.md`
- Before final report: `references/verification-checklist.md`
- Review task: `references/review-procedure.md`
- Need examples: `references/examples.md`
