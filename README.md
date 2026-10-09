# PulseGrid

PulseGrid is a zero-cost-first utility and discovery website with browser-side tools, SEO guides, local personalization, and a Cloudflare Worker/D1 one-minute trend architecture.

## Repository status (2026-10-10)

**This repository is not currently deployable.** The complete v45 prelaunch source is maintained in the release archive outside this repository. Do not configure Cloudflare Pages to build from this repository until the complete source, including the static pages, `cloudflare/src/worker.js`, and deployment scripts, has been synchronized and validated.

## Operating requirements

- No automatic GitHub Actions CI or scheduled GitHub Actions refreshes.
- Zero-cost-first Cloudflare Pages and Worker/D1 architecture; no paid upgrades without approval.
- Worker Cron Trigger is designed for one-minute checks; source-specific rate limits and backoff still apply.
- Production origin, Worker URL, D1 database and cron execution are not yet verified.
- Keep search indexing disabled until a public HTTPS deployment and production audit are complete.

## Next steps

Synchronize and audit the complete source, validate the Pages/Worker/D1 deployment, then verify live trends, accessibility, security, Core Web Vitals and consent-based analytics. No live traffic or revenue claims have been established.
