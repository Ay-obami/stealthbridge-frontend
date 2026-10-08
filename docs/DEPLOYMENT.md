# Frontend deployment

## Required environment
Set `STEALTHBRIDGE_API_URL` to the deployed backend HTTPS base URL. It is a **server-only** variable (no NEXT_PUBLIC prefix). Development default: `http://localhost:8080`. The server route refuses remote non-HTTPS endpoints and only forwards four allow-listed read-only endpoints.

The frontend does **not** contain fake corridors, FX quotes, mock fund movements, or seeded asset data. Without a reachable backend it shows an explicit integration error. Without a configured PostgreSQL corridor registry it explains that corridors are not yet available.

## Wallet
Install Freighter browser extension. The wallet button explicitly requests access to the public address and checks the Stellar Testnet passphrase. It never requests a seed or invokes a funds transfer.

## Deployment validation
1. Build with `npm install`, `npm run typecheck`, `npm run build`.
2. Set the backend HTTPS URL on the frontend hosting provider.
3. Confirm /api/bridge/v1/network responds with an actual ledger head and `network=testnet`.
4. Confirm /api/bridge/v1/corridors responds with operator-configured records (or a clearly visible 503 if database missing).
5. Test wallet connection, rejection and wrong-network handling with Freighter.
6. Validate keyboard navigation and reduced motion on desktop and mobile.
7. Never advertise live transfers until privacy protocol evidence is published.
