# Opus-X Vue 3 App (Greenfield)

Vite + Vue 3 + Pinia + vue-i18n v9 + **uidev-component-vue3** (Opus-X). No Tailwind.

## Quick start

```bash
cp .env.example .env
npm install
npm run dev
```

Login demo: `demo` / `demo`

## UI kit

App imports the internal package:

```ts
import { OxButton, OxPage } from 'uidev-component-vue3'
import 'uidev-component-vue3/style.css'
```

Local stand-in lives in `packages/uidev-component-vue3` (`file:` dependency). Swap to the private registry package when ready — keep the same import name.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev (proxy `/api`) |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm run test` | Vitest unit tests |
| `npm run typecheck` | `vue-tsc` |

## Docs

See [docs/README.md](docs/README.md) for the full migration pack (audit → Go-Live → BGH brief).
