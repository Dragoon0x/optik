---
name: color-fix
provider: codex
description: Auto-fix color issues. Replace failing contrast pairs, consolidate near-duplicates, and add missing CSS custom properties.
user-invokable: true
---

# /color-fix — Color Auto-Fix

Apply automatic color corrections:
1. Adjust foreground/background pairs that fail WCAG AA to the nearest passing value
2. Replace near-duplicate colors with the most-used variant
3. Convert raw hex values to CSS custom properties
4. Remove pure black (#000) — replace with tinted dark
5. Show before/after for each change
