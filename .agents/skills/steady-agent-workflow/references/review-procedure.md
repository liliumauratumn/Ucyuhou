# Review Procedure

Use this for self-review and explicit review tasks.

## Pass 1 — Intent

Read the request or PR description, then the diff.

Ask:
- Does the change do what it claims?
- Is anything claimed but missing?
- Is anything present but unclaimed or out of scope?

## Pass 2 — Correctness

For each hunk:
- What inputs reach this code?
- What happens for empty, null, zero, huge, malformed, or concurrent cases?
- Are errors handled?
- Could this break any caller?
- Search callers; do not assume.

## Pass 3 — Safety

Check for:
- injection
- unescaped output
- path traversal
- secrets in code
- missing permissions checks
- unbounded loops or allocations
- unsafe external effects

## Pass 4 — Fit

Check:
- naming matches surrounding code
- structure matches nearby patterns
- tests updated when behavior changed
- docs updated when user-facing behavior changed

## Review reporting rules

- Findings only unless asked to fix.
- Order by severity: bugs → risks → style.
- For each finding: file, line, issue, why it matters, suggested fix.
- If fine, say it is fine. Do not invent findings.
