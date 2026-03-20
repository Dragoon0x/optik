---
name: audit
description: Comprehensive design quality audit with severity ratings, specific line references, and actionable fix instructions. Deeper than /score — examines every declaration.
user-invokable: true
---

# /audit — Comprehensive Design Audit

Examine every CSS declaration and HTML element for quality issues. Unlike /score which gives a summary, /audit produces a detailed report with line-by-line findings.

## Process

1. Parse all CSS declarations in scope
2. Check each against the OPTIK anti-pattern registry
3. Grade each of the five pillars with specific findings
4. Generate fix instructions for every issue
5. Prioritize fixes by impact (highest score improvement first)

## Report Sections

### Critical (fix immediately)
- Anti-pattern violations (banned fonts, purple gradients, nested cards, outline:none)
- WCAG contrast failures
- Missing focus styles

### Warning (fix before shipping)
- Off-grid spacing values
- Inconsistent type scale
- Missing responsive breakpoints
- Motion without reduced-motion fallback

### Info (optional improvements)
- Opportunities for CSS custom properties
- Animation timing suggestions
- Semantic HTML improvements
- Touch target sizing

Every finding includes: severity, affected selector, current value, recommended fix, and score impact.
