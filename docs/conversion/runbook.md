# Conversion runbook (engineers)

1. Pick next screen from [waves.md](./waves.md) in current wave order.
2. Check Opus-X gap doc; escalate gaps before coding workarounds.
3. Implement view under `src/views/<module>/`.
4. Add route in `src/router/index.ts` with `meta.permission` if needed.
5. Complete [screen-checklist.md](./screen-checklist.md).
6. Open PR using coding-standards checklist.
7. After staging soak, ask DevOps to flip proxy path group.
8. Update wave status → `cutover` / `done`.

## Parallel Vue2 rule

If product ships a feature on Vue2 for a not-yet-migrated screen, create **must-port** ticket same day (see governance).
