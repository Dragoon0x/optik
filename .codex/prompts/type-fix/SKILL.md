---
name: type-fix
provider: codex
description: Auto-fix typography issues found by /type-audit. Replaces banned fonts, normalizes type scale, adds missing line-height and letter-spacing declarations.
user-invokable: true
---

# /type-fix — Typography Auto-Fix

Apply automatic fixes for typography issues:

1. Replace any banned font with a contextually appropriate alternative
2. Normalize font sizes to the nearest mathematical scale value
3. Add line-height where missing (body: 1.6, headings: 1.15)
4. Add letter-spacing to uppercase text (+0.08em)
5. Ensure minimum 2 font weights for hierarchy

Always show before/after for each change. Do not change the overall design intent — only fix technical violations.
