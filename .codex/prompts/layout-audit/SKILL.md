---
name: layout-audit
provider: codex
description: Map all layout patterns. Identify grid/flexbox usage, spacing patterns, nesting depth, and responsive breakpoints across the codebase.
user-invokable: true
---

# /layout-audit — Layout Pattern Audit

Comprehensive layout analysis:
1. Map every display: grid and display: flex usage
2. List all unique spacing values used
3. Measure maximum nesting depth per component
4. Count media queries and breakpoints
5. Check for max-width constraints on text content
6. Identify absolute positioning (often a red flag)
7. Report gap vs margin usage consistency
