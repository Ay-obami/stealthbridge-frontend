# StealthBridge Frontend

<div align="center"><img src="public/brand/stealthbridge-logo.svg" alt="StealthBridge — Confidential payments. Without borders." width="540" /></div>

**Confidential payments. Without borders.** Next.js 16 / TypeScript 7 / Tailwind CSS 4 / Freighter / GSAP.

[Business](https://github.com/stealthbridge-labs/stealthbridge-frontend/tree/main/src/app/business) · [Send](https://github.com/stealthbridge-labs/stealthbridge-frontend/tree/main/src/app/send) · [Backend API](https://github.com/stealthbridge-labs/stealthbridge-backend) · [Contracts](https://github.com/stealthbridge-labs/stealthbridge-contracts) · [SDK](https://github.com/stealthbridge-labs/stealthbridge-sdk)

## Current functionality
- Animated product landing, Business/Send workspaces, and a real read-only transaction explorer at `/explorer`.
- **Actual Stellar Testnet ledger data** fetched from the configured backend; the backend verifies the RPC network passphrase.
- **Real operator-configured corridors** fetched from backend PostgreSQL, or explicit unavailable / empty states.
- Freighter browser wallet public-address connection and Testnet passphrase validation.
- Transaction hash lookup showing on-chain inclusion/failure without raw XDR or claims of fiat payout.
- Honest capabilities: fund-moving flows remain disabled until cryptographic integrations are verified.
- No mock transfers, seeded FX rates, hardcoded countries/partners, or fake balances.

**Important:** A connected RPC or wallet does **not** mean confidential transfers, real remittances, KYC, fiat payout, or asset custody work. Payment submission is intentionally unavailable. No real money.

## Run locally

Requires Node.js 22+, your own running StealthBridge backend, and public Stellar Testnet RPC connectivity.

```bash
npm install
cp .env.example .env.local
npm run typecheck
npm run build
npm run dev
```

Frontend server env variable: `STEALTHBRIDGE_API_URL=http://localhost:8080` for local development, or your HTTPS backend URL in hosting. It is server-only; the Next API route allows only `/health`, `/v1/network`, `/v1/capabilities`, `/v1/corridors` and does not forward arbitrary requests.

### How data flows

```
Browser → same-origin /api/bridge/v1/* → Rust Backend
                                         ├─ Stellar Testnet RPC (verified getNetwork/getLatestLedger)
                                         └─ PostgreSQL corridor catalog (operator config, no seed data)
Browser → Freighter extension → public wallet address + actual network (read-only)
```

The SDK provides equivalent typed read-only methods. Integrating a published SDK package and actual confidential transaction adapter remains future work.

## Source layout
- `src/app/page.tsx` and `src/components/home.tsx`: product landing with concept artwork
- `src/app/business/page.tsx` and `src/app/send/page.tsx`: real network/corridor status screens
- `src/components/workspace.tsx`: available corridor selection and restrictions
- `src/components/wallet-connect.tsx`: Freighter user consent + wrong-network detection
- `src/app/api/bridge/[...parts]/route.ts`: strict, read-only server proxy
- `src/hooks/use-bridge.ts`: network / corridor / capability requests with errors and refresh
- `docs/DESIGN-SYSTEM.md`, `docs/DEPLOYMENT.md`: style and deployment requirements

## Status and contribution
Frontend and SDK CI provide remote build validation. Do not claim live payment flows, partner support, security audits, or production readiness.

View [contribution guidance](CONTRIBUTING.md). Licensing decisions are documented through the project's open development governance. Only contribute non-sensitive research/code while the security policy is finalized.
