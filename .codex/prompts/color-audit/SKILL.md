---
name: color-audit
provider: codex
description: Map all colors in the codebase. Find duplicates, near-duplicates, one-off values, and colors not in the token system.
user-invokable: true
---

# /color-audit — Color Audit

Extract every color value from CSS:
1. List all unique hex, rgb, rgba, hsl values
2. Group similar colors (within deltaE 5)
3. Flag one-off values not in the design tokens
4. Count usage frequency
5. Identify opportunities to consolidate

Show a visual swatch grid with usage counts.
