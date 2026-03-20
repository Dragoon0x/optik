---
name: dark-mode
description: Generate dark mode color variant that preserves contrast ratios and visual hierarchy from the light theme. Not just color inversion — proper dark surface design.
user-invokable: true
---

# /dark-mode — Intelligent Dark Mode Generation

## Rules
- Dark mode is NOT color inversion
- Surface colors use dark shades (800-950) from the brand palette
- Text uses light shades (50-200)
- Accent colors may need lightness adjustment to maintain contrast
- Reduce elevation differences (shadows are less visible on dark backgrounds — use surface color shifts instead)
- Reduce pure white usage (use off-whites)
- Maintain the same contrast ratios as light mode

## Implementation
Output as @media (prefers-color-scheme: dark) overriding the CSS custom properties from the light theme.
