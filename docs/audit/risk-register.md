# Risk Register

| ID | Risk | Likelihood | Impact | Score | Mitigation | Owner | Status |
|----|------|------------|--------|-------|------------|-------|--------|
| R1 | Vue 2 EOL — no security patches if stay | High | High | Crit | Migrate to Vue 3 in 6–8 months | EM | Open |
| R2 | webtomp + Plotly realtime perf/memory | Med | High | High | Early spike; extendTraces; soak 2–4h; flag rollback | Senior | Open |
| R3 | Opus-X component gaps vs legacy UI | Med | Med | Med | Gap analysis week 1–2; escalate UIdev | Lead+Design | Open |
| R4 | Feature drift Vue2 ↔ Vue3 dual-track | High | High | Crit | Must-port board; module freeze after cutover | PM+Lead | Open |
| R5 | Single Senior bottleneck | High | Med | High | Templates, PR checklist, pair 2×/week | EM | Open |
| R6 | Auth/SSO cookie mismatch breaks rollback | Med | High | High | Shared token contract; parity tests | Senior | Open |
| R7 | Vue2 wrappers unmaintained | High | Med | High | Replace per decision log | FE | Open |
| R8 | Mixins/filters/bus rewrite overrun | Med | Med | Med | Catalog + composable map; DoD | Lead | Open |
| R9 | Proxy misroute during partial cutover | Low | High | Med | Route groups; dry-run rollback | DevOps | Open |
| R10 | moment tech debt deferred | Low | Low | Low | Post Go-Live backlog | FE | Accepted |

## Scoring

Score = Likelihood × Impact (qualitative). Crit/High require weekly review in migration sync.
