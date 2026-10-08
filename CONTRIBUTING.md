# Contributing to StealthBridge Frontend

Thank you for helping us build responsibly. We are at a testnet research stage, **not** delivering payments or holding funds yet.

Choose one of the scoped [issues](https://github.com/stealthbridge-labs/stealthbridge-frontend/issues), comment with your intended approach, then submit a focused PR. Include screenshots or recordings for UI changes and tests for behavior changes.

## Requirements
- `npm run typecheck` and `npm run build` pass.
- UI respects keyboard focus, reduced-motion setting and responsive layouts.
- No fake asset balances, FX rates, enabled countries, known business partners or settlement-success status.
- Never collect seed phrases, hidden notes, payment witnesses or personal financial details.
- Do not add wallet signing/deposit/payment actions without a reviewed protocol and security ADR.

Read [design system](docs/DESIGN-SYSTEM.md) and [deployment spec](docs/DEPLOYMENT.md). Licensing and security contacts will be finalized as the project matures; discuss significant external dependency and licensing changes with maintainers.
