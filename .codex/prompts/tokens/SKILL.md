---
name: tokens
provider: codex
description: Generate a complete design token set. Covers color, typography, spacing, shadows, radii, and breakpoints. Exports as CSS custom properties, Tailwind config, SCSS variables, and W3C Design Tokens JSON.
user-invokable: true
---

# /tokens — Complete Design Token Generator

Generate tokens for every design dimension:

**Color:** Full palette (via /palette) + semantic tokens (via /semantic-color)
**Typography:** Type scale (via /type-scale) + font stacks + line heights + letter spacing
**Spacing:** Full spacing scale (via /spacing)
**Shadows:** Elevation system (sm, md, lg, xl, 2xl)
**Border Radius:** Scale (sm: 4px, md: 8px, lg: 12px, xl: 16px, 2xl: 24px, full: 9999px)
**Breakpoints:** sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1440px

Output ALL tokens in four formats:
1. CSS Custom Properties (:root block)
2. Tailwind config (theme.extend)
3. SCSS variables
4. W3C Design Tokens JSON
