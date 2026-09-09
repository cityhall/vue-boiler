# Per-screen conversion checklist

Screen ID: ____________  Wave: ____  Owner: ____________

## Build

- [ ] Rebuilt with Opus-X (no Vue2 SFC copy with mixins/filters/bus)
- [ ] Logic in composables / Pinia as needed
- [ ] API parity + axios error handling
- [ ] i18n vi/en
- [ ] Feature flag / proxy route noted

## Verify

- [ ] Unit or smoke test
- [ ] QA visual checklist (desktop + mobile)
- [ ] a11y basics
- [ ] Security (sanitize user HTML if applicable)

## Release

- [ ] Staging proxy enabled
- [ ] Error budget watch 3–5 days
- [ ] Must-port dual-track tickets closed/dated
- [ ] Mark done in [waves.md](./waves.md)
