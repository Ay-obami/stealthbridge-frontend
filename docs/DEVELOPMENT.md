# StealthBridge frontend development

## Stack
Next.js 16 (App Router), TypeScript 7, Tailwind 4, local shadcn-compatible primitives, GSAP, Freighter API 6.

## Requirements
- Node.js 22+
- `npm install` (repo dependency resolution)
- `STEALTHBRIDGE_API_URL` for server-side access to a running Rust backend
- Browser Freighter extension for wallet connectivity

```bash
npm run typecheck
npm run build
npm run dev
```

## Real data only
The frontend never creates transaction amounts, demo corridor records, FX rates or fake payment statuses. The landing's route illustration is labeled as a concept, not a ledger visualization. Runtime displays actual data from `/api/bridge/v1/*`; backend failures are explicit.

## Deployment
See [DEPLOYMENT.md](DEPLOYMENT.md). Public backend must use HTTPS, should be behind rate limiting/TLS and must not accept fund-moving commands. Testnet wallet address must be publicly sourced from Freighter, not stored server-side.

## UI skills (source reviewed, not installed automatically)
- `npx ui-skills`
- `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`
- `npx skills add anthropics/skills@frontend-design`
- `npx skills add shadcn-ui/ui@shadcn`

Review remote installers/source before running on developer machines.

## Brand consistency

The approved logo is shared by the organization community repository and mirrored as `public/brand/stealthbridge-logo.svg` and `public/brand/stealthbridge-symbol.svg`. UI navigation and favicon use the same traced ribbon symbol. Avoid introducing alternate monograms.
