# Executive Brief — Vue 2 → Vue 3 (Greenfield + Opus-X)

**Audience:** Ban Giám đốc / Eng leadership  
**Recommendation:** **Approve** 7-month baseline (buffer to 8) greenfield migration with dual-track delivery and proxy rollback.  
**Owner:** Migration Lead (Senior Vue 3) + Eng Manager

---

## 1. Why now

- Vue 2 is **EOL** (no official security/maintenance patches since end of 2023). Remaining on Vue 2 is a **compliance and security exposure**, not a neutral delay.
- Vue-specific wrappers in the current stack (`vue-apexcharts`, `vue-grid-layout`, `vue-simple-*`, …) are increasingly unmaintained → rising cost of “temporary patches”.
- Hiring and onboarding favor Vue 3 / Composition API; Options + heavy mixins slow every feature.

## 2. What we will deliver

| Item | Detail |
|------|--------|
| Approach | **New Vue 3 app** (Vite), same UX via **UIdev Opus-X**, not risky in-place rewrite |
| Scope | ~50 screens / ~100 components |
| Core risk isolated | **Performance Testing** (WebSTOMP + Plotly) in dedicated wave + feature flag |
| Parallel delivery | Vue 2 features continue under **must-port governance** |
| Safety | Path-based proxy cutover; **rollback ≤ 15–30 minutes** to Vue 2 |

## 3. Business outcomes

- **Performance:** leaner runtime/bundles (Vite + Vue 3 reactivity) — material for realtime charts.
- **Maintainability:** Composition API / composables replace mixins & event bus → faster change, fewer regressions.
- **Design system:** single Opus-X source of truth → lower UI inconsistency cost.
- **TypeScript-ready platform:** safer expansion of the product.

## 4. Investment (people)

| Role | Allocation |
|------|------------|
| Senior Vue 3 (Lead) | 60–70% for 6–8 months |
| FE (1–2) | 40–70% alternating with Vue 2 features |
| DevOps / BE | 10–20% at milestones (SSO, proxy, flags) |
| QA | ramps from month 3 |

Rough engineering effort on screens alone ~100 person-days; with prep/spike/QA fits **Q-spanning 7 months** given dual-track load.

## 5. Timeline (baseline 7 months)

1. Audit (3 weeks)  
2. Preparation / skeleton (4–6 weeks) — **repo already bootstrapped**  
3. Conversion waves W1→W5 (~4 months)  
4. UAT / Go-Live / Vue2 standby 2–4 weeks  

Hard Go-Live targets end of month 7; month 8 is contingency for realtime soak slip.

## 6. Risk control (what BGH should hear)

| Risk | Control |
|------|---------|
| Big-bang outage | Module cutover + independent Perf flag |
| Realtime regression | Early spike, soak 2–4h, dedicated rollback |
| Feature drift | Must-port board + module freeze |
| Single senior bottleneck | Templates, PR checklist, pairing |

## 7. Ask of BGH

1. Approve dual-track policy (features on Vue 2 + migration capacity protected).  
2. Approve 7–8 month window and Lead allocation.  
3. Endorse rollback SLO and standby Vue 2 until decommission gates pass.  
4. Support UIdev escalation for Opus-X gaps without waiting for end of project.

## 8. Cost of “do nothing”

Continued Vue 2 = accumulating security debt, slower features, harder hiring, and a **larger, riskier** future migration under incident pressure rather than a controlled program.

---

**Decision requested:** Go / Go-with-changes / No-Go  
**Sponsor signature:** __________________ Date: __________
