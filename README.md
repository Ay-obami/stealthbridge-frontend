# StealthBridge Frontend

<p align="center"><strong>StealthBridge</strong><br/><em>Confidential payments. Without borders.</em></p>

**StealthBridge** is an open-source-in-progress, testnet-first confidential cross-border payment platform on Stellar. This repository owns the web experience for two product lines:

- **StealthBridge Business** — institutional settlements where participants are known but payment amounts should remain confidential.
- **StealthBridge Send** — consumer remittances that aim to protect payment amounts and relationships between senders and receivers.

> [!IMPORTANT]
> This repository contains a **working frontend design/code scaffold**, not an operational payment system. The Business and Send pages are strictly local simulations. No live FX quotes, ZK proofs, Soroban transactions, fiat payouts, wallet signatures, or custody operations have been demonstrated. **Never use real funds.**

## View the product surfaces

| Path | Surface | Status |
| --- | --- | --- |
| \`/\` | Editorial landing page, animated corridor intelligence board and product switch | Implemented preview |
| \`/business\` | Configurable B2B settlement simulation and lifecycle explanation | Demo only |
| \`/send\` | Configurable remittance simulation and privacy explanation | Demo only |

Design narrative: *Move value. Not exposure.* A distinctive corridor visualization replaces generic crypto metrics. All motion must communicate flow, never fabricate transaction success.

## Stack
- Next.js 16, App Router
- React 19
- TypeScript 7 target
- Tailwind CSS 4
- shadcn-compatible local components and \`components.json\` (full CLI/registry setup still requires dependency installation)
- GSAP for intentional entrance and route animations
- lucide-react icons

## Quick start
Requires Node.js 22+ and an internet-enabled dependency installation environment.
\`\`\`bash
npm install
cp .env.example .env.local
npm run dev
\`\`\`
Open \`http://localhost:3000\`. For validation, run \`npm run typecheck\` and \`npm run build\` after installing dependencies.

No dependency installation, build, live browser render, or CI test was executed by this GitHub commit; the source is an implementation candidate awaiting validation. See [Development Notes](docs/DEVELOPMENT.md).

## Structure
\`\`\`
src/
  app/
    page.tsx             # Brand landing
    business/page.tsx    # Confidential B2B demo
    send/page.tsx        # Consumer remittance demo
    globals.css          # Visual tokens + Tailwind v4
  components/
    brand.tsx            # StealthBridge mark
    home.tsx             # Landing and GSAP routing diagram
    workspace.tsx        # Shared simulation with distinct privacy modes
    ui/button.tsx        # shadcn-style editable component
  lib/utils.ts           # cn() helper
docs/
  DESIGN-SYSTEM.md
  DEVELOPMENT.md
  PRODUCT-FLOWS.md
  OPEN-SOURCE-READINESS.md
\`\`\`

## App architecture
The frontend is one Next.js deployable with two independently scoped routes while components/design tokens mature. Neither privacy proving nor actual signing is implemented. In a future audited integration, browser wallets or secure local prover modules should own secrets/witnesses; the backend should receive authenticated public transaction intents and evidence, not raw spend keys.

The [backend](https://github.com/stealthbridge-labs/stealthbridge-backend) owns HTTP schema and workflow state. The [contracts](https://github.com/stealthbridge-labs/stealthbridge-contracts) repository owns Soroban ABI/deployment metadata. The [SDK](https://github.com/stealthbridge-labs/stealthbridge-sdk) publishes version-pinned clients. No contract addresses are hard-coded here.

## Design quality
See [Design System](docs/DESIGN-SYSTEM.md) for rationale, palette, typography, motion and accessibility requirements. The responsive layout includes keyboard-visible focus styling and reduced-motion support. Run manual screen-reader, mobile and WCAG audits before claiming accessibility conformance.

## Research and prior art
Tukar's detailed [product and security documentation](https://github.com/PugarHuda/tukar) is a reference for discipline, testnet evidence, and honest scoping — not a source of copied UI or cryptography. Our distinct direction is a **multi-provider platform** with B2B confidential stablecoin settlement and consumer relationship-private rails, connected by SDKs and strict state accounting. These are proposed product differentiators and not completed capabilities.

## Contributing, funding, licensing
We intend to grow StealthBridge openly and eventually explore Drips. No Drips registration, funding contracts, new GitHub issues, or external service setup is active. See [Open Source Readiness](docs/OPEN-SOURCE-READINESS.md). A license, contribution rules and disclosure contacts must be finalized before contributor outreach.

## Safety
No production use, financial custody or mainnet deployment. Never commit wallet seeds, ZK private witness material, API credentials or real KYC data.
