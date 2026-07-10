# Verification Checklist

Run this before writing any final report.

## Correctness

- [ ] Every requirement in the original request is either done or explicitly reported as not done.
- [ ] The change was exercised, not just compiled.
- [ ] Edge cases named in the request are handled and, ideally, tested.

## Automated checks

Run whichever exist in the project, roughly cheap to expensive:

- [ ] Format/lint on changed files.
- [ ] Typecheck across the project.
- [ ] Nearest tests.
- [ ] Full test suite if reasonable.
- [ ] Build, if the project has a build step.

## Interpreting results

- Read failures from the first relevant error.
- Distinguish:
  - Your change is wrong → fix it.
  - Test is outdated because behavior intentionally changed → update test and report it.
  - Failure is pre-existing → verify and report it, do not silently fix it.
- Do not delete, skip, or loosen tests merely to pass verification.

## Hygiene

- Diff contains no debug prints, commented-out code, added TODOs, or stray files.
- No secrets or credentials were added.
- Only intended files changed.

## Honesty

- Every claim in the report is backed by something you ran or read.
- Anything skipped, assumed, or unverifiable is listed under “Not verified.”
