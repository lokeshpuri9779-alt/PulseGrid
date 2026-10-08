# PulseGrid

PulseGrid is a zero-cost-first utility and discovery website with browser-side tools, SEO guides, local personalization, and a one-minute Cloudflare Worker/D1 trend architecture.

## Deployment

This repository stores the production release as base64 chunks to avoid CI/build overhead in ChatGPT-driven publishing. Run `bash build.sh` to reconstruct the static site into `public/`.

Cloudflare Pages settings:
- Build command: `bash build.sh`
- Build output directory: `public`
- CI remains disabled.

The Worker/D1 live-trend layer is contained in the original v20 source package and is deployed separately when Cloudflare access is available.
