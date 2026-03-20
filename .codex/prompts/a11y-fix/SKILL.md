---
name: a11y-fix
provider: codex
description: Auto-fix detectable accessibility issues. Adds focus styles, semantic HTML, ARIA attributes, and touch target sizing.
user-invokable: true
---

# /a11y-fix — Accessibility Auto-Fix

Automatically repair common accessibility failures:
1. Add :focus-visible styles where missing
2. Replace div soup with semantic elements (header, main, nav, footer, section)
3. Add aria-label to icon-only buttons
4. Add aria-hidden to decorative elements  
5. Increase touch targets below 44x44px
6. Add skip link if missing
7. Fix heading hierarchy (no skipped levels)

Show before/after for each change.
