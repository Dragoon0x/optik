---
name: a11y-audit
description: Full accessibility audit covering focus management, semantic HTML, ARIA attributes, color contrast, touch targets, screen reader experience, and motion safety.
user-invokable: true
---

# /a11y-audit — Accessibility Audit

Comprehensive accessibility check:

## Focus Management
- Every interactive element must have visible :focus-visible styles
- Focus order must match visual order
- No focus traps (except intentional modals)
- Skip link present for keyboard users

## Semantic HTML
- Proper heading hierarchy (h1 > h2 > h3, no skipping)
- Landmark elements: header, main, nav, footer
- Lists use ul/ol, not styled divs
- Buttons are <button>, links are <a>

## ARIA
- aria-label on icon-only buttons
- aria-hidden on decorative elements
- aria-live regions for dynamic content
- Role attributes only where needed

## Color Contrast
- All text meets WCAG AA (4.5:1 normal, 3:1 large)
- Interactive elements 3:1 against backgrounds
- Don't rely on color alone for meaning

## Touch Targets
- Minimum 44x44px on mobile
- Adequate spacing between targets

## Motion Safety
- prefers-reduced-motion query present if animations exist
- No autoplaying video without user control
