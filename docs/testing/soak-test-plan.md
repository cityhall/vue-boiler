# Realtime Soak Test Plan (PERF-LIVE)

## Setup

- Environment: staging with production-like STOMP rates
- Build: Vue 3 with `realtime_v3_enabled=true`
- Baseline: Vue 2 same scenario for comparison

## Scenarios

| ID | Scenario | Duration | Pass criteria |
|----|----------|----------|---------------|
| S1 | Single user live chart | 2h | No freeze >1s; memory growth <20% after min 15 |
| S2 | Peak message rate | 30m | Frame budget OK; drop policy documented if coalescing |
| S3 | Network flap (disable NIC 10s ×5) | 30m | Reconnect <5s; recovery ≥99% |
| S4 | Tab background → foreground | 15m | Resubscribe/backfill per product rules |
| S5 | N concurrent users (agree N) | 1h | Error/disconnect within SLO |
| S6 | 4h soak (release candidate) | 4h | S1 criteria + no leak trend |

## Instrumentation

- Browser Performance/Memory snapshots every 15m
- STOMP disconnect counters
- FE error telemetry on `/perf/live`
- CPU main-thread long tasks

## Rollback drill

During soak window, flip proxy `/perf/live` → Vue2 and confirm <15–30m including verification.
