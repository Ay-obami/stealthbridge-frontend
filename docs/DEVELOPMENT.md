# Frontend development

Stack target: Next.js 16 App Router, TypeScript 7, Tailwind CSS 4, shadcn-compatible components and GSAP 3.

## Setup
1. Node.js 22 or newer.
2. Run `npm install` and `npm run dev` (dependencies not installed by repo commit).
3. Copy `.env.example` to `.env.local` and configure **testnet only** endpoints.
4. `npm run typecheck` and `npm run build` once dependencies resolve.

Root route = editorial product landing. `/business` and `/send` = interactive, locally calculated demo workspaces **without signing or network submission**. This preserves one deployable Next app while shared UI is still evolving. A split into distinct Next workspaces requires an ADR.

## Skills to run locally after reviewing upstream source
- `npx ui-skills` (UI design review)
- `npx skills add vercel-labs/agent-skills --skill web-design-guidelines`
- `npx skills add anthropics/skills@frontend-design`
- `npx skills add shadcn-ui/ui@shadcn`

These commands are **not** executed by the GitHub commit. External CLI installations should be reviewed before running. Consult `docs/DESIGN-SYSTEM.md` and the current official shadcn docs for actual component generation.
