# Proxy Routing (Path-based cutover)

## Target topology

```
users → gateway/proxy → vue3 (migrated routes)
                      → vue2 (legacy / rollback)
```

## Suggested path groups

| Group | Paths (example) | Default after W1 | Rollback target |
|-------|-----------------|------------------|-----------------|
| Auth | `/login`, `/auth/*` | Can stay Vue3 early | Vue2 |
| Shell assets | `/app-v3/*` or `v3.` host | Vue3 | Vue2 |
| Catalog | `/catalog*` | Vue3 after W2 | Vue2 |
| Perf Live | `/perf/live` | Vue3 only if flag on | Vue2 **independent** |
| Default | `/*` | Vue2 until Go-Live | — |

## Nginx sketch

```nginx
# deploy/nginx-proxy.conf.example
upstream vue2_upstream { server vue2:80; }
upstream vue3_upstream { server vue3:80; }

map $cookie_v3_override $vue3_force {
  default 0;
  "1" 1;
}

server {
  listen 443 ssl;
  server_name app.example.internal;

  # Module cutover flags (ops-controlled)
  set $catalog_v3 1;
  set $perf_v3 0;

  location /catalog {
    if ($catalog_v3 = 0) { proxy_pass http://vue2_upstream; }
    proxy_pass http://vue3_upstream;
  }

  location /perf/live {
    if ($perf_v3 = 0) { proxy_pass http://vue2_upstream; }
    proxy_pass http://vue3_upstream;
  }

  location / {
    proxy_pass http://vue2_upstream;
  }
}
```

## Staging

- Subdomain `v3.` **or** prefix `/app-v3/` during Preparation.
- Same API host; CORS not required if same-site proxy.

## Ops runbook snippet

```bash
# Example: flip perf back to Vue2 via config repo + reload
# (replace with your real config mechanism)
./ops/set-flag.sh perf_v3 0 && ./ops/reload-proxy.sh
```
