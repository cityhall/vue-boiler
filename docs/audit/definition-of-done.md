# Definition of Done — Per Screen

A screen is **Done** only when all boxes pass.

## Functional

- [ ] Visual parity with Opus-X design (not pixel-legacy if Opus-X differs by standard)
- [ ] API parity with Vue 2 for same user journeys
- [ ] Auth/permission gates equivalent
- [ ] i18n keys present (vi + en minimum)
- [ ] Error / empty / loading states handled via Opus-X

## Technical

- [ ] Composition API + `<script setup>` (no new mixins/filters/bus)
- [ ] Shared logic in composables/Pinia as appropriate
- [ ] No forbidden legacy packages (see dependency-decision-log)
- [ ] Lint + unit/smoke tests green in CI
- [ ] Bundle impact reviewed if adding heavy lib (plotly, pdfmake, …)

## Quality

- [ ] QA checklist signed (desktop + mobile breakpoint)
- [ ] Basic a11y: focus order, labels, contrast on critical controls
- [ ] Security: user HTML sanitized (markdown paths)

## Release

- [ ] Proxy route toggled on staging
- [ ] Error budget watch 3–5 days (or agreed soak) before next wave dependency
- [ ] Must-port tickets for dual-track features closed or dated
