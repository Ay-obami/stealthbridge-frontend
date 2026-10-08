# Product flows — real integration milestone

StealthBridge Business and Send show live backend/ledger data and wallet state. Transfers are not enabled.

## Current Business
- Observe the actual Testnet RPC ledger head (or a truthful RPC failure).
- Select an operator-configured institutional corridor from database results if one exists.
- Inspect privacy capability and issuer identity stored in the catalog (which is *not* issuer certification).
- Request Freighter public-address access and verify Testnet network.
- View explicit "not enabled" until the cryptographic rail, compliance process and settlement engine are functional.

## Current Send
- Observe the actual network state and only database-configured private-payment corridors.
- Connect Freighter on Testnet (does not create private notes or transfer money).
- Do not show balances, rates, payees, transaction history or payouts unless retrieved and verified from real integrations.

## Next
Business: verified confidential amount transfer, issuer policy and authenticated settlements.
Send: verified SPP deposit/transfer/withdraw, note protection and recovery, real payout provider integration subject to licensing and compliance.

No fictional data, seeded countries, placeholder prices or invented "live" settlement statuses in runtime product screens. Fixtures may only appear in isolated tests.
