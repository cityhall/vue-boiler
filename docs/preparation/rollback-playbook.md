# Rollback Playbook

**Principle:** Rollback = **traffic switch to Vue 2**, not git revert on live users.

## SLO

| Metric | Target |
|--------|--------|
| Decision → Vue2 traffic restored | **≤ 15–30 minutes** |
| User re-login required | **No** (shared JWT/SSO cookie contract) |
| Data loss | **None** (server-authoritative state) |

## Preconditions

- [ ] Vue 2 production still deployed (hot standby until decommission)
- [ ] Proxy supports per-route-group upstream (Auth, Catalog, Perf, …)
- [ ] Feature flag `realtime_v3_enabled` controllable without redeploy
- [ ] On-call knows proxy console / config repo
- [ ] Dry-run completed on staging this milestone

## Trigger criteria (any one)

1. FE/API error rate ≥ **2× baseline** for 15 minutes on migrated routes
2. SSO login success rate drops below agreed SLO
3. Performance Live: disconnect rate or chart freeze breaches soak SLO
4. Sev-1 business defect attributable to Vue 3 UI
5. Executive decision / security incident

## Procedure

1. **Declare** rollback in war-room channel; assign Incident Commander.
2. **Disable** feature flags for affected modules (`realtime_v3_enabled`, module flags).
3. **Point proxy** for affected path groups to Vue 2 upstream.
4. **Verify** health: login, 2–3 critical journeys, Perf Live if in scope.
5. **Communicate** status to stakeholders; open hotfix tickets on Vue 3.
6. **Post-incident**: timeline, root cause, re-cutover criteria.

## Proxy toggle examples

See [proxy-routing.md](./proxy-routing.md). Prefer config flags over rewriting app code.

## Dry-run checklist

- [ ] Staging mirror of prod routing
- [ ] Switch Catalog → Vue2 and back < 15 min
- [ ] Switch Perf Live independently
- [ ] Confirm session cookie still valid on Vue2
- [ ] Document exact commands / MR template for prod

## After Go-Live

Keep Vue 2 standby **2–4 weeks**. Decommission only when metrics stable, no rollback, drift backlog = 0 (see testing/decommission-plan.md).
