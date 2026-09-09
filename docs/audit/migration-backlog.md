# Migration Backlog (Ordered)

Priority = business criticality × technical risk. Execute top-down; do not reorder W4 behind convenience ports.

## Epic order

1. **E0 Audit closeout** — inventory signed, gaps escalated, risk register live
2. **E1 Preparation** — Vite skeleton, Opus-X, auth, proxy, rollback dry-run, vertical slice
3. **E2 W1** — Auth JWT/SSO + Shell + guards + i18n
4. **E3 Spike realtime** — useStomp + Plotly benchmark (parallel with early W2)
5. **E4 W2** — Low-risk screens (settings, catalog, viewers, admin CRUD)
6. **E5 W3** — Medium libs (calendar, upload, export, apex, grid)
7. **E6 W4** — Performance Testing suite (list/detail/live/compare/report)
8. **E7 W5** — Remainder + drift burn-down
9. **E8 Testing & Go-Live** — regression, UAT, cutover, standby, decommission plan

## Ordered backlog items

| Rank | ID | Item | Wave | Est (d) | Depends |
|------|----|------|------|---------|---------|
| 1 | AUD-01 | Finalize screen inventory owners/traffic | Audit | 2 | — |
| 2 | AUD-02 | Opus-X gap sign-off + UIdev escalate | Audit | 3 | AUD-01 |
| 3 | AUD-03 | Legacy pattern counts from Vue2 repo | Audit | 2 | — |
| 4 | AUD-04 | Auth cookie/SSO contract measured | Audit | 2 | — |
| 5 | AUD-05 | Perf STOMP contract documented | Audit | 2 | — |
| 6 | PREP-01 | Repo Vite + uidev-component-vue3 (Opus-X) | Prep | 2 | — |
| 7 | PREP-02 | Pinia, router, i18n, axios | Prep | 2 | PREP-01 |
| 8 | PREP-03 | useAuth / usePermission / SSO routes | Prep | 3 | PREP-02, AUD-04 |
| 9 | PREP-04 | Proxy staging + rollback playbook dry-run | Prep | 2 | DevOps |
| 10 | PREP-05 | Vertical slice CRUD on staging | Prep | 3 | PREP-03 |
| 11 | W1-01 | Shell layout Opus-X | W1 | 3 | PREP-05 |
| 12 | W1-02 | Login + SSO callback parity | W1 | 4 | PREP-03 |
| 13 | W1-03 | Route guards + 403/404 | W1 | 1.5 | W1-01 |
| 14 | SPK-01 | Realtime Plotly spike report | Spike | 5 | W1-01 |
| 15 | W2-* | Screens #7–22 per inventory | W2 | 31 | W1 |
| 16 | W3-* | Screens #23–35 | W3 | 28 | W2 foundation |
| 17 | W4-* | Screens #36–40 (PERF-LIVE critical) | W4 | 19 | SPK-01 |
| 18 | W5-* | Screens #41–50 + drift | W5 | 18 | W3/W4 |
| 19 | QA-01 | Full regression matrix | Test | 5 | W5 |
| 20 | REL-01 | Go-Live + Vue2 standby 2–4 weeks | Test | 5 | QA-01 |

## Capacity note

~104 screen-days + prep/audit/spike/QA ≈ fits **7-month baseline** with 1 Senior (60–70%) + 1–2 FE (50–70%) and dual-track Vue2 load — buffer to month 8 for realtime slip.
