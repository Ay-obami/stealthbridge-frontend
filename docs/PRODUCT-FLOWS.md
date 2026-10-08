# StealthBridge Product Experience Flows

## Business operator
1. Choose a corridor and asset with verified issuer policies.
2. Request an expiring indicative quote, then a signed provider quote (future).
3. Present compliance/participant permissions while preserving amount confidentiality.
4. Prepare a transaction locally; present wallet authorization and explicit network review.
5. Submit and separately track chain confirmation, partner payout and reconciliation.
6. Export a privacy-aware receipt with only authorized disclosure fields.

Dashboard future routes: overview, settlements, counterparties, corridors, reconciliation, policy/audit, settings.
States: empty (no settlements), loading (network), quote expired, wrong wallet network, proof generation, signature declined, chain rejected, payout pending, recovery required, completed.

## Send
1. Select source and destination countries.
2. Check eligible payout methods and receive estimate.
3. Verify funding and make payment/shielding locally.
4. Securely deliver a recipient claim method without leaking spend data in analytics.
5. Track payout after separate off-ramp acknowledgement.
6. Provide recovery guidance for lost keys, delayed payouts or privacy pool admission denial.

Future routes: send, review, protect claim, recipient redeem, history, support and recovery.
Risk: off-ramp or timing data may deanonymize parties despite private transfer leg; say so in product copy.

## Current implemented preview
Landing page plus /business and /send form simulation. These are UI exploration only. Quote output is illustrative; no wallet/payment/network submission implemented.

## Interaction and accessibility acceptance
- Keyboard navigation / visible focus throughout.
- No fabricated completed status or fake live statistics.
- Reduced motion, adequate touch targets and high contrast.
- Clear offline, rejected transaction and expired quote states before production integration.
- Payment amount typography is legible and never obscured by decorative animations.
