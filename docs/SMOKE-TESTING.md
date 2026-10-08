# Deployment verification

## Public landing (no backend required)

Build the current Next.js application and run the environment-independent local gate:

```bash
npm install
npm run build
npm run test:landing
```

This starts a local Next server in landing mode and checks the public homepage, logo asset, deliberately disabled future product routes, and disabled API proxy.

For your first Vercel deployment, **no backend URL or environment variables are required**. Visit the published HTTPS link in a desktop and mobile browser. Confirm the homepage, mobile navigation, interactive Business/Send product switch and GitHub links.

## Preview mode (requires a real backend)

Only after configuring `STEALTHBRIDGE_SITE_MODE=preview` and `STEALTHBRIDGE_API_URL=https://your-backend`, run:

```bash
npm run smoke -- https://your-deployed-frontend.example
```

This existing live smoke script checks landing, Business and Send pages, an actual Stellar Testnet RPC ledger result, real configured corridor responses (or explicit 503), and capability flags. You may also visit `/explorer` and look up a real Testnet transaction hash. It does **not** prove fiat payout, cryptographic privacy, live FX or regulated service readiness.

Never paste wallet seeds or secret keys into Vercel build settings.
