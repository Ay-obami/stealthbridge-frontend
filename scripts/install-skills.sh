#!/usr/bin/env bash
set -euo pipefail
# Review each upstream repository/license and confirm locally before invoking.
# No commands in this file are executed by GitHub or CI automatically.
npx ui-skills
npx skills add vercel-labs/agent-skills --skill web-design-guidelines
npx skills add anthropics/skills@frontend-design
npx skills add shadcn-ui/ui@shadcn
