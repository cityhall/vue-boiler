# Dependency Decision Log

> Signed decisions for Vue 3 greenfield. Update only via Lead change-control.

| Package (Vue 2) | Decision | Vue 3 approach | Risk | Owner | Status |
|-----------------|----------|----------------|------|-------|--------|
| vue | Replace | vue@3 | — | Lead | Approved |
| vuex | Replace | **pinia** | Med | Lead | Approved |
| vue-router | Replace | vue-router@4 | Low | Lead | Approved |
| vue-i18n | Upgrade | vue-i18n@9 | Med | Lead | Approved |
| uidev-component | Upgrade | **`uidev-component-vue3` (Opus-X) only** | Low | Lead | Approved |
| axios | Keep | axios | Low | FE | Approved |
| lodash | Keep→optimize | lodash-es per-function **when needed** (not in skeleton) | Low | FE | Deferred |
| mitt (new) | Add when needed | scoped events only | Low | Lead | Deferred |
| tailwindcss | **Do not use** | Styling via uidev-component-vue3 tokens/CSS | — | Lead | Approved |
| moment / moment-timezone | Keep temporary | backlog → dayjs/date-fns-tz post Go-Live | Med | FE | Approved |
| @fullcalendar | Upgrade | @fullcalendar/vue3 | Med | FE | Approved |
| vue-apexcharts | **Drop** | apexcharts + `ApexChart.vue` | Med | FE | Approved |
| plotly.js / plotly.js-dist-min | Keep | plotly.js + wrappers | Med | Senior | Approved |
| webtomp-client | Keep | + `useStomp` | **High** | Senior | Approved |
| @microsoft/fetch-event-source | Keep | same | Low | FE | Approved |
| vue-directive-tooltip | **Drop** | OxTooltip | Low | FE | Approved |
| vue-grid-layout | **Drop** | OxGrid / CSS grid | Med | FE | Approved |
| vue-simple-suggest | **Drop** | OxAutocomplete | Low | FE | Approved |
| vue-simple-uploader | **Drop** | OxUpload + axios | Med | FE | Approved |
| vue-mathjax | **Drop** | MathJax 3 component | Med | FE | Approved |
| markdown-it | Keep | + sanitize-html | Low | FE | Approved |
| sanitize-html | Keep | same | Low | FE | Approved |
| sql-formatter | Keep | same | Low | FE | Approved |
| pdfmake | Keep | same | Low | FE | Approved |
| html-to-docx | Keep | same | Low | FE | Approved |
| xlsx | Keep | same | Low | FE | Approved |
| xml-reader | Keep | same | Low | FE | Approved |
| sshpk | Keep | same | Low | FE | Approved |
| jest | Replace | **vitest** + @vue/test-utils | Med | FE | Approved |

## Explicit non-goals

- No Element Plus / Vuetify / Ant Design Vue.
- **No Tailwind** (or other utility CSS frameworks) — Opus-X via `uidev-component-vue3` only.
- No Vuex 4 “temporary forever”.
- No new global event bus.

## Sign-off

| Role | Date | Sign |
|------|------|------|
| Migration Lead (Senior Vue 3) | | |
| Eng Manager | | |
