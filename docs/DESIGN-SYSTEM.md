# StealthBridge Design Direction

Visual thesis: **a confidential route through visible infrastructure.** Unlike generic crypto dashboards, the dominant visual language is the route map with an intentionally opaque settlement amount and a calm, institutional palette. Use the already-approved StealthBridge gradient mark as the basis for identity.

## Tokens
- Deepest ink: #031419
- Surface: #092129
- Ocean layer: #0c3943
- Verified mint: #80f6db
- Information blue: #80b9ff
- Body text: #eaf9f6
- Secondary text: #99b7b8

## Type
Contemporary sans (Arial system fallback for reproducible demo), broad headline leading and narrow copy columns. No generic dashboard KPI grid in the landing hero.

## Motion
GSAP entrance choreography for the first hero, SVG corridor stroke draw. Reduced-motion media query disables non-essential animations. Never animate transaction statuses or suggest a completed settlement without actual chain/payout verification.

## Experience quality gates
Contrast and legibility; keyboard and screen-reader navigation; clear demo/testnet disclosure; genuine loading/empty/error states before network wiring; avoid fake live quotes or invented volume stats; no user secrets sent to server; desktop, tablet and mobile responsive.
