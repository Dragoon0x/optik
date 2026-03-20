---
name: spacing
provider: codex
description: Generate a complete spacing scale from a base unit. Outputs CSS custom properties and shows recommended usage for each step.
user-invokable: true
---

# /spacing — Spacing Scale Generator

## Usage
`/spacing [base-unit]` (default: 4px)

Generate the full scale:
- --space-1: 4px (tight inline spacing)
- --space-2: 8px (default inline spacing, icon gaps)
- --space-3: 12px (compact card padding)
- --space-4: 16px (standard card padding, form gaps)
- --space-5: 20px (comfortable padding)
- --space-6: 24px (section internal padding)
- --space-8: 32px (large gaps, card spacing)
- --space-10: 40px (section breaks)
- --space-12: 48px (major section padding)
- --space-16: 64px (section vertical padding)
- --space-20: 80px (large section padding)
- --space-24: 96px (hero-level spacing)
- --space-32: 128px (maximum spacing)

Output as CSS custom properties and Tailwind spacing config.
