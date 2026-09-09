# Legacy Patterns Catalog (Vue 2 → Vue 3)

> Hotspots that block mechanical porting. Counts are kickoff estimates — update with `rg` on the Vue 2 repo in Audit week 1.

## Summary

| Pattern | Est. occurrences | Severity | Target pattern |
|---------|------------------|----------|----------------|
| Options API SFCs | ~100 components | Med | Composition API + `<script setup>` |
| Mixins | ~25–40 | **High** | Composables (`useX`) |
| Filters (`\| filter`) | ~60–100 | High | utils / computed |
| Event bus `$on/$off/$once` | ~30–50 | **High** | mitt (scoped) or Pinia |
| `Vue.prototype.*` | ~10–15 | High | `app.config.globalProperties` sparingly / provide |
| `Vue.set` / `Vue.delete` | ~20 | Med | Direct reactive assignment |
| `$listeners` / `$scopedSlots` | ~15 | Med | `v-bind="$attrs"` / named slots |
| Filters in templates for i18n/date | common | Med | `vue-i18n` / format utils |
| Global `Vue.use` plugins | ~8–12 | Med | `app.use` |
| Sync modifiers / `.native` | few | Low | Update listeners |

## Mixin → composable map (priority)

| Mixin (legacy) | Composable | Phase |
|----------------|------------|-------|
| authMixin | `useAuth` | W1 |
| permissionMixin | `usePermission` | W1 |
| i18nHelperMixin | `useI18n` (vue-i18n) | W1 |
| stompMixin | `useStomp` | W4 (spike early) |
| chartMixin | `usePlotlyChart` / `useApexChart` | W3–W4 |
| loadingMixin | `useAsyncState` | W2 |
| paginationMixin | `usePagination` | W2 |
| formDirtyMixin | `useFormDirty` | W2 |
| busMixin | remove — use explicit events | All |

## Event bus inventory (policy)

**Forbidden in Vue 3 app:** new global event bus for feature communication.

Allowed:
- `mitt` emitter **scoped to a feature module** (e.g. performance testing panel)
- Pinia store actions/subscriptions for cross-route state
- `provide` / `inject` within layout trees

## Filters to utilities

| Filter | Utility |
|--------|---------|
| `date` / `datetime` | `formatDate` (moment temporary → dayjs backlog) |
| `capitalize` | `capitalize` in `utils/string.ts` |
| `truncate` | `truncate` |
| `fileSize` | `formatBytes` |
| `number` | `formatNumber` / `Intl` |

## Audit commands (run on Vue 2 repo)

```bash
rg -n "mixins:\s*\[" --type vue -c
rg -n "\|\s*\w+" --type vue -c   # filters (noisy — review manually)
rg -n "\$on\(|\$off\(|\$once\(" -c
rg -n "Vue\.set|Vue\.delete|Vue\.prototype" -c
rg -n "eventBus|EventBus|\$bus" -c
```

## Refactor rules for Conversion

1. Do **not** copy Options API SFC verbatim if it pulls mixins/filters/bus.
2. Extract shared logic to `src/composables/` before building the view.
3. One PR per screen (or tightly coupled pair); include pattern cleanup in same PR.
