---
name: export-tailwind
provider: codex
description: Export the current design system as a Tailwind CSS configuration. Generates theme.extend with colors, fonts, spacing, shadows, and custom screens.
user-invokable: true
---

# /export-tailwind — Tailwind Config Export

Generate a tailwind.config.js theme extension:

```js
module.exports = {
  theme: {
    extend: {
      colors: { /* full palette + semantic */ },
      fontFamily: { display: [...], body: [...], mono: [...] },
      fontSize: { /* type scale */ },
      spacing: { /* spacing scale */ },
      boxShadow: { /* elevation system */ },
      borderRadius: { /* radius scale */ },
      screens: { /* breakpoints */ }
    }
  }
}
```

Include all computed values, not references to other tokens.
