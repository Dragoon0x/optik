---
name: layout-fix
description: Auto-fix layout issues. Snaps off-grid spacing, adds missing max-width constraints, and normalizes gap usage.
user-invokable: true
---

# /layout-fix — Layout Auto-Fix

Apply automatic layout corrections:
1. Snap all spacing values to the nearest grid value (4px increments)
2. Add max-width to text containers exceeding 75ch
3. Replace margin-based gaps with the gap property where flex/grid is used
4. Add missing responsive breakpoints for layouts wider than 600px
5. Show before/after for each change
