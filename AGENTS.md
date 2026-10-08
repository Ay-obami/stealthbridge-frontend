# StealthBridge Frontend Agent Instructions

Project: Next.js 16 / TypeScript 7 / Tailwind CSS 4 / shadcn-compatible local primitives / GSAP.

Read docs/DESIGN-SYSTEM.md, docs/PRODUCT-FLOWS.md and docs/DEVELOPMENT.md before editing UI. Respect StealthBridge's approved cyan/teal gradient brand, confidential corridor concept and security/testnet disclosure.

Review relevant upstream design guidance:
- https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines
- https://github.com/anthropics/skills/tree/main/skills/frontend-design
- https://github.com/shadcn-ui/ui/tree/main/skills/shadcn
- https://github.com/PugarHuda/tukar/tree/main/.agents/skills/impeccable (pattern reference, not vendored)
- https://skills.stellar.org/skills/dapp/SKILL.md

Rules: Accessible focus, keyboard navigation, meaningful labels, reduced-motion support. Avoid generic rounded-card kit, unactionable animations, fake on-chain stats, unverified partner logos, and fabricated transaction success. Keep client-side secrets/proofs out of server requests by default. Distinguish a local demo from an actual Stellar submission.

Do not run npx skill installation, provider onboarding, deploy, secret-backed services, or destructive repo operations without explicit confirmation. Generate local shadcn components through the official CLI after source review.
