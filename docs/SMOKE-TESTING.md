# Testing the deployed StealthBridge frontend and backend

After you configure and deploy both services, run:

```bash
npm install
npm run smoke -- https://your-actual-frontend-url.example
```

The smoke script checks:
1. Public landing, Business and Send routes return HTML.
2. Backend proxy responds with **actual** Stellar Testnet network passphrase, ledger head and 64-hex hash.
3. Corridor catalog response is either a real array from PostgreSQL (possibly empty) or an explicit 503.
4. Capability flags are returned rather than fake transaction status.

It does not connect a wallet, send money, deploy contracts, verify zero-knowledge proofs or claim successful fiat payouts. Browser-level Freighter and UI testing remains necessary.

**Deployment prerequisites:** frontend `STEALTHBRIDGE_API_URL` must be HTTPS backend URL (localhost HTTP only); backend `STELLAR_RPC_URL` must be Testnet RPC; PostgreSQL `DATABASE_URL` optional but required for corridor discovery.

Never paste your signing key or seed to a test script. Record actual contract addresses/tx hashes after independently authorized deployments.

## New explorer verification

Open `/explorer` and paste a public Testnet transaction hash from a transaction you actually submitted. The lookup must show only success/failure inclusion and ledger number, or an explicit retention/error state. No raw XDR or transfer history is returned. For a malformed hash, the form must reject the input before a network request.

The `/business` and `/send` screens also support filtering only *operator-configured* corridor records. Validate the no-corridor case; do not seed a fictional payout location to make a screenshot appear populated.
