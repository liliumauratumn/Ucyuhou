# Multi-File Coding Procedure

Use this for changes touching several files.

## 1. Map the change surface

Before editing, list expected files to modify. Find them by searching for:
- feature name
- route
- component
- symbol
- error message
- importers and callers

Stop when following references adds no new relevant files.

## 2. Classify files

Classify each file as:

- **Source of truth**: type, schema, model, or core function
- **Dependents**: call sites and importers
- **Tests**: existing tests to update or new tests to add
- **Config/docs**: route registration, exports, docs, build config

## 3. Edit in dependency order

Preferred order:

1. Contracts: types, interfaces, schemas, migrations
2. Core logic
3. Wiring: routes, handlers, UI, call sites
4. Tests
5. Config/docs

After source-of-truth edits, run typecheck. Treat errors as a machine-generated to-do list.

## 4. Keep a live ledger

Maintain a checklist:

```md
- [ ] file A — purpose
- [ ] file B — purpose
- [ ] test file — purpose
```

Mark files done as you finish them.

## 5. One coherent change at a time

If the task contains two logical changes, complete and verify one before starting the other.

Bad:
- Rename X and add feature Y interleaved across ten files.

Good:
- Complete rename, verify.
- Then add feature, verify.

## 6. Full verification

At the end, run whole-project checks where available:
- lint
- typecheck
- tests
- build
