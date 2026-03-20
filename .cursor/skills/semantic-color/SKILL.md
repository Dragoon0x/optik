---
name: semantic-color
description: Generate a complete semantic color token set from a brand palette. Produces surface, text, border, accent, feedback, and interactive state tokens.
user-invokable: true
---

# /semantic-color — Semantic Token Generator

From a brand palette (or a single color via /palette), generate:

**Surface tokens:** surface, surface-elevated, surface-sunken, surface-overlay
**Text tokens:** text, text-secondary, text-muted, text-inverse
**Border tokens:** border, border-strong, border-subtle
**Accent tokens:** accent, accent-hover, accent-pressed, accent-subtle
**Feedback tokens:** danger, danger-subtle, success, success-subtle, warning, warning-subtle, info, info-subtle
**Interactive tokens:** focus-ring, disabled, disabled-text

All tokens must have dark mode variants. Output as CSS custom properties inside :root and @media (prefers-color-scheme: dark).
