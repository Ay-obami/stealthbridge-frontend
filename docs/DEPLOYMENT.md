# Frontend deployment — Vercel quick start

The **public landing page is deployable as a standalone Next.js 16 project**, independently of the Rust backend, PostgreSQL, Stellar RPC, contracts, provider credentials or signing keys.

## Deploy the landing now

1. Visit [Vercel New Project](https://vercel.com/new), connect GitHub if needed.
2. Import **`stealthbridge-labs/stealthbridge-frontend`** (not the organization `.github` or contracts repo). Grant Vercel's GitHub app repository access only if prompted.
3. Set the **Framework Preset** to `Next.js`, **Root Directory** to `./` (repository root), and **Node.js** to version **22.x** in project settings.
4. **Keep default install/build/output commands**. `vercel.json` already identifies Next.js. The `package.json` contains `next build`.
5. **Do not add any environment variables for the public landing.** The default `landing` mode displays the homepage and hides incomplete `/business`, `/send`, `/explorer` workspaces and the read-only API proxy.
6. Click **Deploy**. Open your `https://<project>.vercel.app` URL, confirm the ribbon logo and interactive sections, and check mobile layout.

**No database, backend URL, wallet seed, RPC credentials, hosting secrets, or stablecoin configuration is required to deploy this public landing.**

Vercel normally configures subsequent deployments from GitHub commits. You can later attach a custom domain in project settings.

## Site modes

| Environment | Behavior | Backend required |
| --- | --- | --- |
| No `STEALTHBRIDGE_SITE_MODE` (default) | Public landing-only, future product routes return branded 404 | No |
| `STEALTHBRIDGE_SITE_MODE=landing` | Same as default, explicit | No |
| `STEALTHBRIDGE_SITE_MODE=preview` | Enables Work-in-progress Business, Send, Explorer and read-only API proxy | Yes, for live network features |

For **preview mode only**, set two *server-side* environment variables in Vercel Project Settings → Environment Variables:

```env
STEALTHBRIDGE_SITE_MODE=preview
STEALTHBRIDGE_API_URL=https://your-actual-backend.example
```

Redeploy after updating variables. Do not use `NEXT_PUBLIC_` for backend URL—only the Next.js server-side allowlisted proxy can contact it. Remote backend URL must be HTTPS. `http://localhost:8080` works in local development only.

Enabling preview does **not** enable value transfers, ZK proofs, quotes, compliance checks or fiat payouts. Those remain separately verified engineering milestones.

## Verify the deployed landing

Local no-service gate:

```bash
npm install
npm run typecheck
npm run build
npm run test:landing
```

In the deployed site, verify:
- `/` renders brand, hero, product switch, information sections and actionable links.
- `/brand/stealthbridge-symbol.svg` renders the approved compact logo.
- `/business`, `/send`, `/explorer` return a friendly 404 until preview is explicitly enabled.
- `/api/bridge/v1/network` returns 404 in landing mode.
- No real funds, fabricated rates, live payout claims, or wallet credentials are solicited.

Once preview is deployed with a real backend, use [the live integration smoke test](SMOKE-TESTING.md).

## Deployment troubleshooting

- **Repository missing in Vercel:** grant its GitHub integration access to the `stealthbridge-labs/stealthbridge-frontend` repository.
- **Build failure:** use Node.js 22.x and confirm the latest [frontend GitHub Actions](https://github.com/stealthbridge-labs/stealthbridge-frontend/actions) run. Avoid changing build commands unless there is evidence of a failure.
- **No backend data:** expected in landing mode. It does not block the homepage.
- **Business or Send 404:** deliberate until `STEALTHBRIDGE_SITE_MODE=preview`. Do not enable preview merely to remove the 404 for marketing.
- **Logo or mobile issues:** hard-refresh after deployment, check network requests for `/brand/`, and attach screenshots to the relevant frontend issue.
