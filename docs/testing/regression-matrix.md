# Regression Matrix (50 screens)

Mark result: `PASS` / `FAIL` / `BLOCKED` / `N/A`

| # | Screen | Critical path | Desktop | Mobile | Authz | i18n | Notes |
|---|--------|---------------|---------|--------|-------|------|-------|
| 1 | AUTH-LOGIN | login success/fail | | | | | |
| 2 | AUTH-SSO | SSO round-trip | | | | | |
| 3 | AUTH-LOGOUT | session cleared | | | | | |
| 4 | SHELL-LAYOUT | nav all modules | | | | | |
| 5–6 | 403/404 | correct pages | | | | | |
| 7 | HOME-DASH | loads widgets | | | | | |
| 8–10 | SETTINGS-* | save prefs | | | | | |
| 11–13 | CAT-* | CRUD | | | | | |
| 14–16 | Viewers | render sample files | | | | | |
| 17–22 | Admin/Help | list/form | | | | | |
| 23–24 | Calendar | create/edit event | | | | | |
| 25–26 | Upload/Files | upload+list | | | | | |
| 27 | Suggest | search select | | | | | |
| 28–30 | Export | golden files | | | | | |
| 31–35 | Charts/Grid/Math/SSE | render | | | | | |
| 36–40 | **Perf suite** | see soak plan | | | | | |
| 41–50 | W5 remainder | smoke | | | | | |

## Cross-cutting

- [ ] JWT refresh mid-session
- [ ] Deep-link after login
- [ ] Rollback session continuity (Vue3→Vue2)
- [ ] sanitize-html / markdown XSS samples
- [ ] Missing i18n key scan
- [ ] LCP / main bundle budget recorded
