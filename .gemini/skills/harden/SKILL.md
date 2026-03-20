---
name: harden
description: Improve interface resilience. Add error handling, i18n support, text overflow handling, and edge case management.
user-invokable: true
---

# /harden — Production Resilience

Make the interface survive real-world conditions:

1. **Text overflow** — Add text-overflow: ellipsis where needed. Handle long words with overflow-wrap: break-word.
2. **Error states** — Form validation messages, failed API calls, empty results.
3. **Loading states** — Skeleton screens, spinner on buttons, progressive loading.
4. **i18n readiness** — No hardcoded widths that break with longer translations. RTL-safe spacing (use logical properties: padding-inline, margin-block).
5. **Missing content** — Fallback for missing images, empty lists, null data.
6. **Browser support** — Check for CSS feature support with @supports.
