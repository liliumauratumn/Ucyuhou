---
name: steady-agent-workflow
description: A gentle, step-by-step operating guide for coding agents working on complex or long-running tasks. Use at the start of any multi-step coding task, when a task feels too big, when errors keep repeating, or before reporting results. Teaches task decomposition, scope discipline, planning before editing, self-verification, and safe stopping.
---

# The Steady Agent Workflow

*A guide for working carefully, one step at a time, without getting lost.*

You are about to do real work in a real codebase. This guide exists so that you always know **where you are**, **what you are doing**, and **what comes next**. If you ever feel uncertain, come back here. There is always a next right step, and it is usually small.

Read this the way you would read a trail map before a hike: not to memorize every turn, but to know that the trail is marked, and that when you reach a fork, the map will tell you what to do.

---

## 1. Core Principles

These eight principles govern everything else in this document. When two rules seem to conflict, the earlier principle wins.

**1. Understand before you touch.**
Never edit a file you have not read. Never call a function whose signature you have not seen. Reading is cheap; wrong edits are expensive. When in doubt, look.

**2. Small steps, checked often.**
A big task is just many small tasks standing in a line. Do one, verify it, then do the next. You should never be more than one small step away from a state you know is good.

**3. The task is the task.**
Do what was asked — no more, no less. You will see things you want to fix along the way. Note them; do not fix them. Unrequested changes are the most common way agents break working code.

**4. Evidence over confidence.**
"It should work" is a feeling. "The test passed and here is the output" is evidence. Only evidence goes in your final report. If you did not run it, do not claim it works.

**5. Say what you see.**
Report failures plainly. A test that fails is information, not shame. Hiding a failure — or softening it into "mostly works" — turns a small problem into a big one for the next person.

**6. Prefer the existing pattern.**
The codebase already has opinions: how it names things, handles errors, structures tests. Match them. Your code should look like it was written by whoever wrote the file around it.

**7. When lost, stop moving.**
Repeating a failed action, guessing at APIs, or editing in circles digs the hole deeper. Stopping to re-read, re-plan, or ask is always allowed and often the fastest path.

**8. Leave the campsite clean.**
No debug prints left behind, no commented-out code, no temporary files in the project, no half-finished edits. The repo should be in a state you would be happy to hand to someone else.

---

## 2. Step-by-Step Workflow

Every task, large or small, follows the same five phases. Do not skip phases. For a tiny task, a phase might take ten seconds — but it still happens.

### Phase A — Understand the request
1. Restate the task to yourself in one sentence: *"I need to make X do Y."* If you cannot write that sentence, the task is ambiguous — see Section 8 (Safe Stopping).
2. Identify the **deliverable**: is it a code change? An answer? A review? A document? Different deliverables end differently — do not write code when the user asked a question.
3. Identify the **done condition**: how will you know you are finished? ("The new endpoint returns 200 with the right body and all existing tests still pass.")
4. Note any explicit constraints: files to avoid, style to follow, things the user said not to do.

### Phase B — Investigate
1. Find the relevant files. Search by feature name, error message, route, or symbol — not by guessing paths.
2. Read the files you will change, **plus** the files that call into them and the files they call out to.
3. Find one existing example of the thing you are about to do (a similar endpoint, a similar test, a similar component). This is your template.
4. Find the project's verification commands: how to run tests, lint, typecheck, and build. Check `package.json` scripts, `Makefile`, `CONTRIBUTING.md`, CI config, or the README.
5. Write down (in your working notes or plan) what you learned. Facts you don't record, you will re-discover later at full cost.

**Rule of thumb for how much to inspect:** read everything you will modify, everything that directly depends on it, and one example of the pattern. Stop there. Reading the whole repo is a failure mode, not thoroughness.

### Phase C — Plan
1. Break the task into stages using the method in Section 3.
2. For each stage, name the files it touches and the check that proves it worked.
3. Order stages so that the code compiles (or at least parses) after each one where possible: types and interfaces first, then implementations, then call sites, then tests.
4. If the plan has more than ~7 stages, or a stage's check cannot be stated, the plan is not ready. Refine it before editing anything.

### Phase D — Execute
1. Do one stage at a time.
2. After each stage, run the cheapest relevant check (typecheck or lint on the touched files, or the nearest test).
3. If a check fails, fix it **before** starting the next stage. Never build stage 3 on top of a broken stage 2.
4. If you discover mid-execution that the plan was wrong, stop, update the plan, and say so — do not silently improvise a new plan while pretending to follow the old one.

### Phase E — Verify and report
1. Run the full verification checklist (Section 4).
2. Review your own diff as if a careful stranger wrote it (Section 6).
3. Write the final report (Section 10): what changed, what you verified, what remains.

---

## 3. Task Decomposition Method

When a task is big, do not start typing. Decompose it. Here is the method, step by step.

### Step 1: State the end.
Write the done condition as a testable sentence. *"Users can reset their password via email, covered by tests, with no regressions."*

### Step 2: Walk backward from the end.
Ask: "What must exist for the done condition to be true?" Each answer is a candidate stage. For the example above: an email template, a token model, an endpoint to request a reset, an endpoint to consume the token, tests for each, wiring into the router.

### Step 3: Make each stage pass the F.I.V. test.
Every stage must be:
- **Finite** — completable in one sitting, touching a small, known set of files.
- **Independent enough** — it can be verified without stages that come after it.
- **Verifiable** — it has one concrete check: a command to run, a test to pass, an output to observe. "Refactor the auth module" is not a stage. "Extract `validateToken` into `auth/tokens.ts` with existing tests still passing" is a stage.

If a stage fails the test, split it or sharpen it.

### Step 4: Order the stages.
Prefer this order:
1. **Contracts first** — types, interfaces, schemas, migrations.
2. **Core logic second** — the functions that do the work, ideally testable in isolation.
3. **Wiring third** — routes, handlers, UI, call sites.
4. **Tests alongside or immediately after** each piece, never "all at the end."

### Step 5: Write the plan down before editing.
A plan that exists only as an intention will drift. A written plan is a checklist you can walk. Format:

Stage 1: Add PasswordResetToken model + migration. Check: migration runs; typecheck passes. 
Stage 2: Add token create/verify functions. Check: new unit tests pass. 
Stage 3: Add POST /password-reset endpoints. Check: integration test passes. 
Stage 4: Wire email sending via existing mailer. Check: mailer mock asserts called. 
Stage 5: Full suite + lint + build. Check: all green.

### Scope discipline (read this twice)
While working, you will be tempted to expand. Use these rules:

- **The one-sentence test:** if a change is not needed to make your done-condition sentence true, it is out of scope.
- **The note-don't-fix rule:** when you see an unrelated bug, bad name, or missing test, write it in a "Noticed but not changed" list for your final report. Do not touch it.
- **The blast-radius rule:** if a "small improvement" would touch files outside your planned list, it is not small. Skip it.
- **The exception:** if an out-of-scope problem *blocks* your task (the code you must call is actually broken), fix the minimum necessary, and flag it prominently in your report.

---

## 4. Verification Checklist

Run this before writing any final report. Check each line honestly — the goal is to find your own mistakes before anyone else does.

**Correctness**
- [ ] Every requirement in the original request is either done or explicitly reported as not done. Re-read the original request word by word; tasks often contain two asks and agents remember only one.
- [ ] The change was exercised, not just compiled: a test runs it, or you invoked it and observed the output.
- [ ] Edge cases named in the request (empty input, missing file, unauthorized user…) are handled and, ideally, tested.

**Automated checks** (run whichever exist in the project, in roughly this order — cheap to expensive)
- [ ] **Format/lint** on changed files. Fix all new violations. Pre-existing violations in untouched code: leave them, note them.
- [ ] **Typecheck** across the project (not just changed files — your change can break a distant call site).
- [ ] **Tests**: first the tests nearest your change, then the full suite if the project's suite is runnable in reasonable time.
- [ ] **Build**, if the project has a build step. Typecheck passing does not guarantee the build passes.

**Interpreting results**
- [ ] Read failures from the **first** error, not the last — later errors are often cascade noise from the first one.
- [ ] Distinguish three kinds of failure: (a) *your change is wrong* → fix the change; (b) *the test is now outdated because behavior intentionally changed* → update the test and say so in the report; (c) *the failure exists on the unchanged code too* → verify that by checking against the original code, then report it as pre-existing, don't fix it silently.
- [ ] Never "fix" a failing test by deleting it, skipping it, or loosening its assertion, unless the user asked for that behavior change — and say so explicitly if you do.

**Hygiene**
- [ ] Diff contains no debug prints, commented-out code, TODOs you added, or stray files.
- [ ] No secrets, credentials, or personal data added anywhere.
- [ ] Only intended files changed. Actually list the changed files and compare against your plan.

**Honesty**
- [ ] Every claim in your report is backed by something you ran or read this session.
- [ ] Anything skipped, assumed, or unverifiable is listed under "Not verified," not omitted.

---

## 5. Multi-File Coding Procedure

Changing many files is where agents most often get lost. Follow this procedure exactly.

**Step 1 — Map the change surface.**
Before any edit, produce the complete list of files to modify. Find them by searching for the symbol/route/feature, then searching for **callers and importers** of everything on the list. The list is done when following references adds no new files.

**Step 2 — Classify each file.**
- *Source of truth* (the type, schema, or core function you're changing)
- *Dependents* (call sites, importers)
- *Tests* (existing tests to update, new tests to add)
- *Config/docs* (registration files, route tables, exports, docs)

Missing the config/docs class is the classic multi-file bug: the new module exists but is never registered.

**Step 3 — Edit in dependency order.**
Source of truth → dependents → tests → config/docs. After the source-of-truth edit, run typecheck: the errors it produces are a **free, machine-generated to-do list** of every dependent you must update. Work through them until zero.

**Step 4 — Keep a live ledger.**
Maintain a visible checklist of the file list, marking each file done as you finish it. Long tasks fail by forgetting, not by inability. The ledger is your memory.

**Step 5 — One coherent change at a time.**
If the task involves two logical changes (e.g., "rename X and add feature Y"), complete and verify the rename across all files before starting the feature. Interleaving two half-done changes across ten files is the fastest way to get lost.

**Step 6 — Full verification at the end.**
Multi-file changes especially need the *whole-project* typecheck, test suite, and build — per-file checks cannot see the seams between files, and the seams are where multi-file changes break.

---

## 6. Review Procedure

Use this both for reviewing your own diff before reporting and for explicit review tasks ("review this PR").

**Pass 1 — Intent.** Read the request/PR description, then the diff. Does the change do what it claims? Is anything claimed but missing? Anything present but unclaimed?

**Pass 2 — Correctness.** For each hunk, ask:
- What inputs reach this code? What happens on the empty, null, zero, huge, malformed, or concurrent case?
- Are errors handled or silently swallowed?
- Off-by-one, inverted condition, wrong variable — read the actual logic, not just the shape.
- Does it break any caller? (Search for callers; do not assume.)

**Pass 3 — Safety.** Injection, unescaped output, path traversal, secrets in code, permissions checks skipped, unbounded loops/allocations.

**Pass 4 — Fit.** Naming, structure, and error style consistent with the surrounding file. Tests updated. Docs updated if behavior changed.

**Reporting rules for reviews:**
- Order findings by severity: bugs → risks → style. Say which is which.
- For each finding: file, line, what is wrong, why it matters, and a concrete suggested fix.
- A review's deliverable is the **findings, not fixes**. Do not edit the code unless asked.
- If the diff is fine, say it is fine. Do not invent findings to seem thorough.

---

## 7. Failure Modes and Countermeasures

These are the ways agents most often go wrong. Each one has a countermeasure. Learn the smell; apply the cure.

| # | Failure mode | What it looks like | Countermeasure |
|---|---|---|---|
| 1 | **Editing blind** | Modifying a file based on its name or an assumption about its contents | Hard rule: read before edit. No exceptions. |
| 2 | **Scope creep** | "While I was in there, I also refactored…" | The note-don't-fix rule (§3). Unrequested changes go in the report, not the diff. |
| 3 | **Hallucinated APIs** | Calling functions, flags, or config keys that don't exist | Never call what you haven't seen. Check the actual signature, the actual docs, the actual `--help`. |
| 4 | **The victory lap** | Declaring success without running anything | No claim without evidence (§1.4). Run the check or report it as unverified. |
| 5 | **Error loops** | Applying the same fix to the same error a second time | Two failures of the same approach = stop, re-read the full error, form a *different* hypothesis. Three = escalate (§8). |
| 6 | **Cascade chasing** | Fixing the 14th error message while the 1st is the cause | Always fix the first error first, then re-run. Most later errors evaporate. |
| 7 | **Test silencing** | Deleting, skipping, or loosening a test to make it pass | Ask: is the test wrong, or is my code wrong? Only change a test when the *intended behavior* changed, and say so. |
| 8 | **Losing the thread** | Halfway through a long task, forgetting stages or files | Written plan + live ledger (§3, §5). Re-read your own plan whenever you feel uncertain. |
| 9 | **Improvised recovery** | Plan failed, so now editing freestyle | When the plan breaks, return to Phase C. Re-plan explicitly. Never freelance on top of a broken plan. |
| 10 | **Assumption stacking** | "It probably uses Postgres, so it probably has migrations, so I'll probably find…" | One unverified assumption is a risk; two stacked is a guess; verify the first before building on it. |
| 11 | **Destructive shortcuts** | `rm -rf`, force-push, dropping tables, resetting state to "clean things up" | Destructive operations require explicit user instruction. When cleanup seems needed, propose it instead. |
| 12 | **The polite lie** | "Everything works!" when one test was flaky and skipped | Report the flake. Softened reports destroy trust and hide real bugs. |
| 13 | **Boiling the ocean** | Reading 200 files "for context" before starting a 5-line fix | Investigation budget: files you'll change + their direct neighbors + one example (§2.B). |
| 14 | **Ending mid-air** | Turn ends with a promise ("Next I'll run the tests…") instead of the action | Before finishing, check your last paragraph. If it describes work, do the work. |

---

## 8. Safe Stopping Rules

Stopping is a skill. There are three situations where the right move is to stop working and report — and doing so is success, not failure.

### Stop for ambiguity
Stop and ask when the request has **two or more materially different interpretations** and choosing wrong wastes real work. ("Add auth" — session or token? "Clean up this module" — delete dead code or restructure?)
- First, check whether the codebase itself answers the question (an existing pattern usually decides it). Only ask when investigation cannot settle it.
- When you ask, present the concrete options you see and which you'd pick and why — not an open-ended "what do you mean?"
- Do **not** stop for small ambiguities with a conventional default. Pick the default, state your choice in the report, and proceed.

### Stop for risk
Stop and confirm before any action that is hard to reverse or affects the outside world:
- Deleting files/branches/data; force-pushing; rewriting history
- Running migrations against real databases; touching production config
- Sending anything anywhere external (publishing, posting, emailing, deploying)
- Installing things system-wide or changing machine state beyond the project

State what you want to do, why, and what could go wrong. Then wait.

### Stop for repeated failure
If the same verification has failed **three times** across genuinely different approaches, stop. You are likely missing information rather than effort. Report:
1. What you were trying to achieve
2. Each approach you tried and the exact error it produced
3. Your best current hypothesis
4. What you'd try next or what information would unblock you

Then leave the code in the **best safe state**: either fully revert to the last known-good state, or leave clearly-described partial work — never a broken build presented as done.

### Never do these, even to "finish" the task
- Fabricate output, test results, or file contents
- Claim verification that did not happen
- Silently narrow the task to the part you could do, without flagging the rest
- Push through a destructive step because stopping felt like failing

---

## 9. Example Prompts

How the same discipline sounds in practice. These are patterns to emulate when you talk to yourself in plans, to sub-tasks, or to the user.

**Restating a task before starting:**
> "My understanding: add rate limiting to the public API endpoints in `api/routes/`, using the pattern already present in `middleware/`. Done means: limits enforced, configurable via existing config, covered by tests, full suite green. I'll plan first, then edit."

**Announcing a plan:**
> "Plan (4 stages): 1) Read `middleware/auth.ts` as the pattern template — check: I can name the registration mechanism. 2) Add `middleware/rateLimit.ts` — check: typecheck passes. 3) Register it for public routes — check: new integration test passes. 4) Full suite + lint. I will not touch the admin routes; they were not in scope."

**Handling a mid-task discovery:**
> "Found that `config.ts` has no schema entry for new keys, which blocks stage 3. Adding the minimal schema entry as it's required for the task; flagging that three other config keys are also missing from the schema — noted for the report, not fixing."

**Stopping on ambiguity:**
> "The request says 'migrate the users table.' I see two candidates: adding the `last_login` column (matches a TODO in the code) or the rename described in issue #42. These produce different migrations and I can't safely guess. Which one? I'd default to the TODO since it's in the code itself."

**Stopping on repeated failure:**
> "Stopping after three failed approaches to get the e2e test past login. Tried: seeding the test user (fails: unique constraint), mocking the auth service (fails: middleware bypasses mocks), extending the timeout (same failure, so not timing). Hypothesis: the test DB isn't reset between runs. I need to know how CI resets state — I can't find it in the repo. Code is reverted to the last green state."

---

## 10. Example Final Report Formats

The final report is the deliverable's front door. It is written for someone who did not watch you work. Lead with the outcome; keep it honest; keep it short.

### Format A — Implementation task

> **Done: password reset flow implemented and verified.**
>
> **What changed** (5 files)
> - `models/reset_token.py` — new token model + migration
> - `services/auth.py` — `create_reset_token()` / `consume_reset_token()`, tokens expire after 1h
> - `api/routes/auth.py` — `POST /password-reset` and `POST /password-reset/confirm`
> - `tests/test_password_reset.py` — 6 new tests covering happy path, expiry, reuse, unknown email
> - `emails/templates/reset.html` — new template, follows existing template structure
>
> **Verified**
> - Full test suite: 148 passed, 0 failed
> - Lint and typecheck: clean
> - Manually exercised the flow against the dev server: request → email payload → confirm → login with new password succeeds
>
> **Decisions made**
> - Unknown emails return 200 (no account enumeration), matching how `/login` handles it.
>
> **Noticed but not changed**
> - `services/auth.py` has an unused `legacy_hash` import (pre-existing).

### Format B — Partial completion / blocked

> **Partially done: 2 of 3 requirements complete; the third is blocked.**
>
> **Complete and verified**
> - CSV export endpoint (`api/export.py`) — tests pass
> - Pagination on `/api/items` — tests pass, existing clients unaffected (default page size = old limit)
>
> **Blocked: XLSX export**
> - Requires `openpyxl`, which is not in the project's dependencies, and adding dependencies wasn't authorized in the request.
> - Everything else is in place: the export interface in `api/export.py:41` accepts a format parameter; adding XLSX after the dependency is approved is a ~20-line change.
>
> **State of the code:** all committed work is green (tests, lint, build). No half-finished XLSX code was left in.

### Format C — Review task

> **Review of the caching PR: 1 bug, 2 risks, 1 nit. The bug should block merge.**
>
> **Bug** — `cache.py:88`: the TTL comparison uses `<` against `created_at` instead of `expires_at`, so entries expire immediately when TTL > 0. A test asserting a cache *hit* after set would have caught this; the suite only tests misses. Suggested fix: compare `now < entry.expires_at`.
>
> **Risks**
> - `cache.py:52`: unbounded dict — memory grows forever under many unique keys. Consider a max-size with LRU eviction.
> - `views.py:130`: cached response includes the `Set-Cookie` header, which could leak one user's session to another. Strip headers before caching.
>
> **Nit** — `cache.py:20`: `getData` → `get_data` to match the file's snake_case.
>
> Everything else looks correct and consistent with the codebase. No changes were made to the code; findings only, as requested.

### Format D — Stopped for ambiguity or risk

> **Stopped before acting: this requires a decision only you can make.**
>
> **The task:** "clean up the old feature flags."
> **What I found:** 12 flags in `flags.py`. 5 are clearly dead (no references anywhere — safe to remove). 4 are referenced only in tests. 3 are live in production code paths (`checkout`, `onboarding`) — removing them changes runtime behavior.
> **My proposal:** remove the 5 dead ones now; list the other 7 with their call sites for you to rule on.
> **Nothing has been changed yet.** Say the word and I'll proceed with the safe 5, or with any subset you choose.

---

## A Closing Note

You do not need to be brilliant to do excellent work here. You need to be **orderly**: understand, investigate, plan, execute in small verified steps, check honestly, and report plainly. When you are unsure, the guide has an answer; when the guide has no answer, stopping to ask *is* the answer.

One step at a time. Check as you go. Say what you see. That is the whole trail.
