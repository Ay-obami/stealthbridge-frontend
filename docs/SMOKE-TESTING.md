# Public site and staging verification

## Marketing release

```bash
npm install
npm run typecheck
npm run build
npm run test:landing
```

The script checks `/`, `/business`, `/send`, and `/platform` (all return 200); ensures no public page HTML contains direct GitHub/source roadmap links; checks the logo; and confirms technical routes and API proxy return 404 by default.

Manually view **https://stealthbridge.vercel.app/** on real desktop and mobile browsers to confirm the scroll-triggered animation, product switch, modal-free navigation and reduced-motion mode. CI does not execute a visual browser test, so a screenshot/device review is still needed.

## Engineering staging

To run real backend smoke checks without exposing internal workspaces on the marketing site, deploy a staging environment with `STEALTHBRIDGE_SITE_MODE=preview` and a real, HTTPS `STEALTHBRIDGE_API_URL`. The existing `npm run smoke -- https://staging-url` checks RPC/network connectivity; product marketing pages remain independent.

No public site test performs wallet signing, fund movements, proof generation or fiat payouts.
