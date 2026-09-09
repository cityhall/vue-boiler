# Dual-Track Governance (Vue 2 features ∥ Vue 3 migration)

## Policy

1. **Feature delivery continues on Vue 2** until the owning module is cut over.
2. Every Vue 2 UI change **must** create a twin ticket: `must-port` to Vue 3 with estimate.
3. After a module’s proxy points to Vue 3: **freeze Vue 2 UI** for that module (hotfix Sev-1/2 only).
4. Weekly 30′ sync (Lead + PM + 1 FE): ports done, blockers, drift aging.

## RACI

| Decision | Responsible | Accountable | Consulted | Informed |
|----------|-------------|-------------|-----------|----------|
| Wave order change | Lead | EM | PM | Team |
| Module freeze | Lead | EM | PM, Support | Team |
| Accept Vue2-only hotfix post-cutover | EM | EM | Lead | PM |
| Go-Live / Rollback | Lead+DevOps | EM | Product | BGH |

## Capacity split (guideline)

| Phase | Vue2 features | Vue3 migration |
|-------|---------------|----------------|
| T1–T2 | 40–50% | 50–60% (skeleton) |
| T3–T5 | 30–40% | 60–70% |
| T6–T7 | 20–30% hotfix | 70–80% stabilize |

## Enforcement

- PR template checkbox: “Must-port ticket linked / N/A (migration PR)”
- CI does not block, but Lead rejects Vue2 PRs missing twin when UI changes.
- Drift > 14 days without owner → escalate EM.

See board template: [must-port-board.md](./must-port-board.md).
