# Example Prompts

## Restating a task

> My understanding: add rate limiting to the public API endpoints using the existing middleware pattern. Done means limits are enforced, configurable, covered by tests, and existing tests still pass.

## Announcing a plan

> Plan: 1) Read existing middleware pattern. 2) Add rate limit middleware. 3) Register it for public routes. 4) Add tests. 5) Run lint/typecheck/tests/build. I will not touch admin routes.

## Handling discovery

> Found that config has no schema entry for the new key, which blocks the task. I will add the minimal schema entry required and note unrelated missing config schema entries without fixing them.

## Stopping on ambiguity

> The request says “migrate the users table.” I found two possible meanings: add `last_login`, or perform the rename described in issue #42. These create different migrations. I would default to `last_login` because it matches the code TODO, but I need confirmation.

## Stopping on repeated failure

> Stopping after three different approaches failed to get the e2e test past login. Tried seeding user, mocking auth, and extending timeout. Same failure remains. Hypothesis: test DB is not reset between runs. Code is reverted to last safe state.
