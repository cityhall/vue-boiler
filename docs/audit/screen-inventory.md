# Screen Inventory (50 screens)

> Phase Audit deliverable. Owner/traffic estimates are placeholders for kickoff refinement. Wave mapping drives Conversion order.

| # | Screen ID | Name | Module | Traffic | Realtime | Key libs | Wave | Effort (d) | Owner |
|---|-----------|------|--------|---------|----------|----------|------|------------|-------|
| 1 | AUTH-LOGIN | Login | Auth | High | No | axios | W1 | 2 | Senior |
| 2 | AUTH-SSO | SSO Callback | Auth | High | No | axios | W1 | 2 | Senior |
| 3 | AUTH-LOGOUT | Logout | Auth | Med | No | — | W1 | 0.5 | Senior |
| 4 | SHELL-LAYOUT | App Shell / Nav | Shell | High | No | uidev | W1 | 3 | Senior |
| 5 | SHELL-403 | Forbidden | Shell | Low | No | — | W1 | 0.5 | FE |
| 6 | SHELL-404 | Not Found | Shell | Low | No | — | W1 | 0.5 | FE |
| 7 | HOME-DASH | Home Dashboard | Core | High | No | apexcharts | W2 | 3 | FE |
| 8 | SETTINGS-GEN | General Settings | Settings | Med | No | — | W2 | 2 | FE |
| 9 | SETTINGS-I18N | Language / Locale | Settings | Low | No | vue-i18n | W2 | 1 | FE |
| 10 | SETTINGS-PROF | User Profile | Settings | Med | No | — | W2 | 2 | FE |
| 11 | CAT-LIST | Catalog List | Catalog | Med | No | — | W2 | 2 | FE |
| 12 | CAT-DETAIL | Catalog Detail | Catalog | Med | No | markdown-it | W2 | 2 | FE |
| 13 | CAT-FORM | Catalog Form | Catalog | Med | No | — | W2 | 2 | FE |
| 14 | SQL-VIEWER | SQL Viewer | Tools | Med | No | sql-formatter | W2 | 2 | FE |
| 15 | MD-VIEWER | Markdown Viewer | Tools | Low | No | markdown-it, sanitize-html | W2 | 2 | FE |
| 16 | XML-VIEWER | XML Viewer | Tools | Low | No | xml-reader | W2 | 1.5 | FE |
| 17 | NOTIF-LIST | Notifications | Core | Med | No | — | W2 | 1.5 | FE |
| 18 | AUDIT-LOG | Audit Log | Admin | Low | No | — | W2 | 2 | FE |
| 19 | USER-LIST | User List | Admin | Med | No | — | W2 | 2 | FE |
| 20 | USER-FORM | User Form | Admin | Med | No | — | W2 | 2 | FE |
| 21 | ROLE-LIST | Roles & Permissions | Admin | Med | No | — | W2 | 2 | FE |
| 22 | HELP-CENTER | Help Center | Content | Low | No | markdown-it | W2 | 1.5 | FE |
| 23 | CAL-MONTH | Calendar Month | Schedule | Med | No | @fullcalendar | W3 | 3 | FE |
| 24 | CAL-EVENT | Calendar Event Form | Schedule | Med | No | @fullcalendar | W3 | 2 | FE |
| 25 | UPLOAD-MGR | Upload Manager | Files | Med | No | vue-simple-uploader→Opus | W3 | 3 | FE |
| 26 | FILE-BROWSER | File Browser | Files | Med | No | — | W3 | 2 | FE |
| 27 | SUGGEST-SEARCH | Global Suggest Search | Search | High | No | vue-simple-suggest→Opus | W3 | 2 | FE |
| 28 | EXPORT-XLSX | Export Excel | Export | Med | No | xlsx | W3 | 1.5 | FE |
| 29 | EXPORT-PDF | Export PDF | Export | Med | No | pdfmake | W3 | 2 | FE |
| 30 | EXPORT-DOCX | Export DOCX | Export | Low | No | html-to-docx | W3 | 2 | FE |
| 31 | CHART-APEX | Apex Analytics | Analytics | Med | No | apexcharts | W3 | 2.5 | FE |
| 32 | GRID-DASH | Draggable Grid Dash | Analytics | Low | No | vue-grid-layout→Opus | W3 | 3 | FE |
| 33 | MATH-DOC | Math Document | Content | Low | No | vue-mathjax→MathJax3 | W3 | 2 | FE |
| 34 | SSE-FEED | SSE Live Feed | Live | Low | SSE | fetch-event-source | W3 | 2 | FE |
| 35 | TOOLTIP-DEMO | Contextual Help Overlays | UX | Low | No | vue-directive-tooltip→Opus | W3 | 1 | FE |
| 36 | PERF-LIST | Performance Test Runs | Perf | High | No | — | W4 | 3 | Senior |
| 37 | PERF-DETAIL | Performance Run Detail | Perf | High | No | plotly | W4 | 3 | Senior |
| 38 | PERF-LIVE | **Performance Testing (Live)** | Perf | **Critical** | **STOMP** | webtomp-client, plotly | W4 | 8 | Senior |
| 39 | PERF-COMPARE | Run Comparison | Perf | Med | No | plotly | W4 | 3 | Senior |
| 40 | PERF-REPORT | Performance Report | Perf | Med | No | pdfmake, xlsx | W4 | 2 | FE |
| 41 | REPORT-BUILDER | Report Builder | Reports | Med | No | — | W5 | 3 | FE |
| 42 | REPORT-SCHED | Scheduled Reports | Reports | Low | No | moment-timezone | W5 | 2 | FE |
| 43 | INTEG-LIST | Integrations | Admin | Low | No | sshpk | W5 | 2 | FE |
| 44 | INTEG-FORM | Integration Form | Admin | Low | No | sshpk | W5 | 2 | FE |
| 45 | ALERT-RULES | Alert Rules | Ops | Med | No | — | W5 | 2 | FE |
| 46 | ALERT-HISTORY | Alert History | Ops | Med | No | — | W5 | 1.5 | FE |
| 47 | TEAM-LIST | Teams | Admin | Low | No | — | W5 | 1.5 | FE |
| 48 | TEAM-DETAIL | Team Detail | Admin | Low | No | — | W5 | 1.5 | FE |
| 49 | ABOUT | About / Version | Shell | Low | No | — | W5 | 0.5 | FE |
| 50 | FEATURE-FLAGS | Feature Flags Admin | Admin | Low | No | — | W5 | 2 | FE |

## Summary by wave

| Wave | Screens | Est. days | Focus |
|------|---------|-----------|-------|
| W1 | 6 | ~8.5 | Auth, shell, guards |
| W2 | 16 | ~31 | Low-risk CRUD / viewers |
| W3 | 13 | ~28 | Vue2 wrappers → Opus-X |
| W4 | 5 | ~19 | Core realtime Performance Testing |
| W5 | 10 | ~18 | Remainder + drift cleanup |
| **Total** | **50** | **~104.5** | ≈ 5–6 FE-months wall-clock with parallelization |

## DoD (per screen)

See [definition-of-done.md](./definition-of-done.md).
