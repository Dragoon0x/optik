---
name: type-scale
provider: codex
description: Generate a mathematical type scale from base size and ratio. Outputs pixel values, rem equivalents, and CSS custom properties. Use Perfect Fourth (1.333) for compact UIs, Major Third (1.250) for standard, or Perfect Fifth (1.500) for dramatic hierarchy.
user-invokable: true
---

# /type-scale — Mathematical Type Scale Generator

## Usage
`/type-scale [base] [ratio]`

Default: base=16px, ratio=1.250 (Major Third)

## Available Ratios
- Minor Second: 1.067 — very tight, for data-heavy UIs
- Major Second: 1.125 — compact apps and dashboards
- Minor Third: 1.200 — balanced, good default for apps
- Major Third: 1.250 — clear hierarchy, good for marketing
- Perfect Fourth: 1.333 — strong hierarchy, landing pages
- Augmented Fourth: 1.414 — dramatic, editorial
- Perfect Fifth: 1.500 — very dramatic, hero-focused

## Output
Generate 7 scale stops and output as:
1. Pixel values (rounded to nearest integer)
2. Rem equivalents
3. CSS custom properties
4. Suggested usage (which element gets which size)

## Rules
- Round all values to whole pixels
- Body text is always the base size
- Minimum heading size is 1 step above base
- Maximum 7 steps in the scale
- For app UIs: use fixed scale. For marketing: fluid typography with clamp() is acceptable
- Always pair with line-height recommendations: headings 1.1-1.2, body 1.5-1.7
