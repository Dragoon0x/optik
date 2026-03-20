---
name: system-audit
description: Check for design system drift. Finds tokens that are defined but unused, used values that aren't in tokens, and inconsistencies between token definition and usage.
user-invokable: true
---

# /system-audit — Design System Drift Audit

Audit the health of the design system:
1. Tokens defined but never referenced (dead tokens)
2. Values used in code that should be tokens but aren't
3. Tokens referenced but not defined (broken references)
4. Inconsistent token naming conventions
5. Token categories with gaps (e.g., shadow-sm and shadow-xl but no shadow-md)

Present as a system health report with actionable fixes.
