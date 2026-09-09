# Go-Live Runbook

## T-14 days

- [ ] Regression matrix ≥95% PASS on critical paths
- [ ] Perf soak S6 pass
- [ ] UAT sign-off scheduled
- [ ] Rollback dry-run on staging signed
- [ ] Comms draft for users/support

## T-7 days

- [ ] Freeze non-critical Vue3 features
- [ ] Confirm Vue2 standby healthy
- [ ] SSO redirect URIs production-ready
- [ ] On-call roster + war-room channel

## T-0 cutover

1. Enable monitoring dashboards (errors, SSO, perf disconnects).
2. Flip default proxy `/*` → Vue3 (or agreed percentage ramp).
3. Keep `/perf/live` on dedicated flag if not already.
4. Smoke: login, catalog, perf live, export sample.
5. Announce Go-Live; start **2–4 week** standby clock.

## T+1…T+14

- Daily error budget review
- Must-port drift = 0 before decommission
- No Sev-1 ⇒ continue; else execute rollback playbook

## Sign-off

| Role | Name | Date |
|------|------|------|
| Migration Lead | | |
| QA Lead | | |
| Product | | |
| Eng Manager | | |
