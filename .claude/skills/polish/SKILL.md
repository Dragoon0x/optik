---
name: polish
description: Final quality pass before shipping. Checks alignment, spacing consistency, hover states, focus styles, loading states, edge cases, and overall refinement.
user-invokable: true
---

# /polish — Final Quality Pass

The last check before shipping. Fix details that separate good from exceptional:

1. **Alignment** — Verify all text and elements align to the grid. Check that headings, body text, and images share alignment points.
2. **Spacing consistency** — Look for any remaining off-grid values. Ensure section spacing is rhythmic.
3. **Hover states** — Every interactive element must have a hover state. Check that hover transitions are smooth (200-300ms).
4. **Focus styles** — Verify :focus-visible on all interactive elements.
5. **Loading states** — Buttons should show loading state. Skeleton screens for async content.
6. **Empty states** — What does it look like with no data? Is there a helpful message?
7. **Edge cases** — Very long text, very short text, missing images, slow network.
8. **Consistency** — Same patterns used the same way everywhere. No one-off styles.

Run /score after polishing. Target: 85+.
