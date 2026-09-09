# Auth: JWT + Internal SSO — Sequence & Parity Spec

> Goal: Vue 3 auth behaves identically for users so **rollback does not force mass re-login**.

## Components

| Piece | Vue 2 (legacy) | Vue 3 (target) |
|-------|----------------|----------------|
| Login form | Local JWT password grant | Same API contract |
| SSO | Internal IdP redirect | Same client_id / redirect URIs (+ v3 callback if needed) |
| Token storage | Prefer **same cookie name/domain/path** as Vue 2 | Mirror exactly |
| API auth | `Authorization: Bearer <access>` | Same axios interceptor |
| Refresh | Refresh token rotation endpoint | Same |
| Logout | Revoke + clear storage + IdP logout optional | Same |

## Sequence — Password JWT

```mermaid
sequenceDiagram
  participant U as User
  participant V3 as Vue3_App
  participant API as Backend_API
  U->>V3: Submit credentials
  V3->>API: POST /auth/login
  API-->>V3: access_token + refresh_token
  V3->>V3: Persist tokens (shared cookie/storage)
  V3->>API: GET /me with Bearer
  API-->>V3: profile + permissions
  V3->>U: Redirect to shell
```

## Sequence — SSO

```mermaid
sequenceDiagram
  participant U as User
  participant V3 as Vue3_App
  participant IdP as Internal_SSO
  participant API as Backend_API
  U->>V3: Click SSO
  V3->>IdP: Authorize redirect
  IdP->>U: Authenticate
  IdP->>V3: Redirect /auth/sso/callback?code=
  V3->>API: POST /auth/sso/exchange
  API-->>V3: tokens
  V3->>U: Enter app
```

## Token contract (must match Vue 2)

Document actual values from legacy during Audit:

| Key | Expected | Actual (fill) |
|-----|----------|---------------|
| Access cookie name | e.g. `access_token` | |
| Refresh cookie name | e.g. `refresh_token` | |
| Cookie Domain | e.g. `.company.local` | |
| Cookie Path | `/` | |
| Cookie Secure / SameSite | Secure; Lax or None | |
| LocalStorage keys (if any) | | |
| JWT claims used | `sub`, `roles`, `exp` | |
| Clock skew tolerance | 30–60s | |

## Router guards (Vue 3)

1. `requiresAuth` — no valid access → login (preserve `redirect` query).
2. `requiresPermission` — use `usePermission`.
3. SSO callback route **public**.
4. After login, honor `redirect` only if same-origin relative path.

## Rollback implications

- Shared cookie domain ⇒ switching proxy Vue3 ↔ Vue2 keeps session.
- If Vue 3 must use a new SSO redirect URI, register it **before** W1 cutover; keep Vue 2 URI active.
- Never encrypt tokens with app-specific keys that differ between apps.

## Test cases (Auth parity)

- [ ] Login password success/fail
- [ ] SSO success / deny / cancel
- [ ] Token refresh mid-session
- [ ] Expire access → silent refresh → retry API
- [ ] Logout clears both apps’ readable storage
- [ ] Deep-link `/perf/live` while logged out → login → return
- [ ] Rollback during session: user still authenticated on Vue 2
