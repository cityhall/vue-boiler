# Vue 2 Decommission Plan

## Gate (all required)

- [ ] Go-Live + **≥2 weeks** (prefer 4) without rollback
- [ ] Error/perf/SSO metrics at or better than Vue2 baseline
- [ ] Must-port / drift backlog = **0**
- [ ] Support confirms no Vue2-only workarounds in use
- [ ] Security review: Vue2 stack no longer exposed externally

## Steps

1. Announce decommission date (T-14 notice).
2. Remove Vue2 upstream from proxy (404 or redirect to Vue3).
3. Archive Vue2 repo/tag `legacy-vue2-final`.
4. Revoke unused SSO redirect URIs for Vue2 origins.
5. Delete Vue2 deploy pipelines after 30-day backup retention.
6. Post-mortem + celebrate; schedule moment→dayjs backlog.

## Rollback after decommission?

Only via redeploy from `legacy-vue2-final` artifact — treat as Sev-1 project, not routine. Prefer fixing Vue3.
