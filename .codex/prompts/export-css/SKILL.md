---
name: export-css
provider: codex
description: Export the current design system as CSS custom properties. Includes color, typography, spacing, shadows, and radii tokens.
user-invokable: true
---

# /export-css — CSS Custom Properties Export

Extract all design tokens from the current codebase and output as a clean :root declaration block.

Group by category:
```css
:root {
  /* Color */
  --color-surface: ...;
  
  /* Typography */
  --font-display: ...;
  --type-scale-sm: ...;
  
  /* Spacing */
  --space-1: ...;
  
  /* Shadows */
  --shadow-sm: ...;
  
  /* Radii */
  --radius-sm: ...;
}
```

Include dark mode overrides in a separate @media block.
