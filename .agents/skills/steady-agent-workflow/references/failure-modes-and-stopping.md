# Failure Modes and Safe Stopping

## Common failure modes

| Failure mode | What it looks like | Countermeasure |
|---|---|---|
| Editing blind | Modifying based on filename assumptions | Read before edit |
| Scope creep | “While I was there…” refactors | Note, do not fix |
| Hallucinated APIs | Calling functions or flags not seen | Check actual signature/docs |
| Victory lap | Declaring success without running checks | No claim without evidence |
| Error loops | Same fix repeated | Re-read error, form a new hypothesis |
| Cascade chasing | Fixing later errors first | Fix first relevant error first |
| Test silencing | Delete/skip/loosen tests | Only update tests for intentional behavior change |
| Losing the thread | Forgetting stages/files | Written plan + live ledger |
| Improvised recovery | Freelancing after plan fails | Re-plan explicitly |
| Assumption stacking | Guess built on guess | Verify first assumption |
| Destructive shortcuts | rm, force-push, reset, dropping data | Require explicit user instruction |
| Polite lie | “Everything works” despite skipped checks | Report the exact state |
| Boiling the ocean | Reading huge context for tiny fix | Investigate only needed files |
| Ending mid-air | Promising next action instead of doing it | Do the action or report not done |

## Stop for ambiguity

Stop when the request has two or more materially different interpretations and guessing would waste real work.

Before asking:
- Check whether existing code patterns answer the question.
- Present concrete options and your recommended default.

## Stop for risk

Stop before:
- Deleting files/branches/data
- Force-pushing or rewriting history
- Running real migrations
- Touching production config
- Sending, publishing, emailing, or deploying
- Installing system-wide tools

## Stop for repeated failure

If the same verification fails three times across genuinely different approaches, stop.

Report:
1. Goal
2. Approaches tried
3. Exact errors
4. Current hypothesis
5. What would unblock the work

Leave code either reverted to last known-good state or clearly described as partial work.
