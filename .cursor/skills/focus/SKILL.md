---
name: focus
description: Generate a complete focus ring system. Creates consistent, visible :focus-visible styles that match the design aesthetic while meeting accessibility requirements.
user-invokable: true
---

# /focus — Focus Ring System

Generate focus styles for all interactive elements:

## Default Focus Ring
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: inherit;
}
```

Adapt the ring color to work against both light and dark backgrounds. Use outline (not box-shadow) for reliability. Always set outline-offset for breathing room.

For specific elements:
- Buttons: ring matches button radius
- Inputs: ring matches input radius
- Cards/links: ring follows the clickable area
- Skip link: visible position when focused

Never use outline: none without a visible replacement.
