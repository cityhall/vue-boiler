# Conversion Waves W1–W5

Track cutover status here. Update `Status` as screens ship.

Statuses: `todo` | `in_progress` | `staging` | `cutover` | `done`

## W1 — Auth / Shell (3–4 weeks)

| Screen | Status | PR | Notes |
|--------|--------|----|-------|
| AUTH-LOGIN | done (skeleton) | — | demo/demo local |
| AUTH-SSO | done (skeleton) | — | wire IdP URLs |
| AUTH-LOGOUT | done (skeleton) | — | |
| SHELL-LAYOUT | done (skeleton) | — | Opus-X stubs |
| SHELL-403 | done (skeleton) | — | |
| SHELL-404 | done (skeleton) | — | |

**Exit criteria:** SSO/JWT parity tests green; shell navigable; rollback dry-run #1.

## W2 — Low risk (4–5 weeks)

| Screen | Status | PR | Notes |
|--------|--------|----|-------|
| HOME-DASH | todo | | Apex later in W3 if needed |
| SETTINGS-* | todo | | |
| CAT-* | in_progress | | List+Form vertical slice done |
| SQL/MD/XML viewers | todo | | keep framework-agnostic libs |
| USER/ROLE/AUDIT | todo | | |
| NOTIF / HELP | todo | | |

**Exit criteria:** ≥10 low-risk screens on staging behind proxy.

## W3 — Medium libs (4–5 weeks)

| Screen | Status | Replace |
|--------|--------|---------|
| CAL-* | todo | @fullcalendar/vue3 |
| UPLOAD-MGR | todo | OxUpload |
| SUGGEST-SEARCH | todo | OxAutocomplete |
| EXPORT-* | todo | xlsx/pdfmake/html-to-docx |
| CHART-APEX | todo | ApexChart wrapper |
| GRID-DASH | todo | OxGrid |
| MATH-DOC | todo | MathJax 3 |
| SSE-FEED | todo | fetch-event-source |

**Exit criteria:** No Vue2-only wrappers left in migrated modules.

## W4 — Performance Testing core (4–6 weeks)

| Screen | Status | Notes |
|--------|--------|-------|
| PERF-LIST | todo | |
| PERF-DETAIL | todo | |
| PERF-LIVE | in_progress | mock STOMP + canvas/Plotly composable |
| PERF-COMPARE | todo | |
| PERF-REPORT | todo | |

**Exit criteria:** Soak 2–4h pass; `realtime_v3_enabled` ready; independent proxy rollback proven.

## W5 — Remainder + drift (2–3 weeks)

| Screen | Status |
|--------|--------|
| REPORT-* | todo |
| INTEG-* | todo |
| ALERT-* | todo |
| TEAM-* | todo |
| ABOUT / FEATURE-FLAGS | todo |

**Exit criteria:** Drift board empty; hard cutover prep checklist complete.

## Per-screen checklist

Copy from [screen-checklist.md](./screen-checklist.md).
