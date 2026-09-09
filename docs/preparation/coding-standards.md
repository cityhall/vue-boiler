# Coding Standards (Vue 3 Opus-X)

## Hard rules

1. **Composition API + `<script setup>`** for all new SFCs.
2. **No mixins.** Extract `useX` composables.
3. **No filters.** Use functions / computed.
4. **No global event bus.** Prefer Pinia, props/emits, provide/inject, or **scoped** `mitt`.
5. **UI only from `uidev-component-vue3` (Opus-X).** No Tailwind, Element Plus, Vuetify, or Ant Design Vue.
6. **Pinia** for shared state — do not add Vuex.
7. **i18n** every user-visible string (`vue-i18n` v9).

## PR checklist

- [ ] Screen DoD satisfied ([definition-of-done](../audit/definition-of-done.md))
- [ ] No new Vue2 wrapper libs
- [ ] Types for public composable APIs
- [ ] Unit/smoke test or explicit QA note
- [ ] Must-port ticket linked if dual-track feature
- [ ] Screenshot / Loom for UI-heavy changes

## File layout

```
src/
  api/           # HTTP modules
  composables/   # useAuth, useStomp, …
  stores/        # Pinia
  views/         # route-level pages
  layouts/
  utils/
packages/
  uidev-component-vue3/  # local stand-in → replace with registry package
```

## Realtime

- Batch/throttle before Plotly updates.
- Gate production traffic with `realtime_v3_enabled`.
