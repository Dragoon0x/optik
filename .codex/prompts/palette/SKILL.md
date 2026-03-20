---
name: palette
provider: codex
description: Generate a complete 50-950 shade palette from a single hex color. Outputs 11 perceptually uniform shades with CSS variables, Tailwind config, and design token formats.
user-invokable: true
---

# /palette — Full Shade Palette Generator

## Usage
`/palette [hex-color]`

## Algorithm
Given a single brand color:
1. Convert to HSL
2. Generate 11 stops (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950)
3. 500 = the input color
4. Lighter stops: increase lightness, slightly decrease saturation
5. Darker stops: decrease lightness, slightly increase saturation, shift hue toward blue
6. 50 = near white with hue tint, 950 = near black with hue tint

## Output
- CSS custom properties: --color-primary-50 through --color-primary-950
- Tailwind config extension
- Hex values table
- Contrast ratio of each shade against white and black backgrounds

## Quality Checks
- Every shade must be visually distinct from adjacent shades
- 50 must work as a subtle background color
- 500-700 must pass AA contrast against white text
- 800-950 must work as dark mode surface colors
