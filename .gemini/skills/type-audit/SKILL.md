---
name: type-audit
description: Audit all font-family, font-size, font-weight, line-height, and letter-spacing declarations across the codebase. Find inconsistencies, banned fonts, and missing hierarchy.
user-invokable: true
---

# /type-audit — Typography Audit

Scan every typography-related CSS declaration and report:

1. **Font families in use** — list all, flag any on the banlist
2. **Font sizes** — list all unique sizes, check for mathematical ratio consistency
3. **Font weights** — verify 2-4 weights are used for hierarchy
4. **Line heights** — check against recommended ranges
5. **Letter spacing** — verify all-caps text has positive tracking
6. **Hierarchy depth** — count distinct heading levels in use

Present as a structured report with pass/fail per check.
