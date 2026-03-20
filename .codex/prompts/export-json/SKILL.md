---
name: export-json
provider: codex
description: Export the current design system as W3C Design Tokens JSON format. Compatible with Style Dictionary, Figma Tokens, and other token management tools.
user-invokable: true
---

# /export-json — W3C Design Tokens Export

Output in the W3C Design Tokens Community Group format:

```json
{
  "color": {
    "primary": {
      "50": { "$value": "#fef3c7", "$type": "color" },
      "500": { "$value": "#f59e0b", "$type": "color" }
    }
  },
  "typography": {
    "font-display": { "$value": "Instrument Serif", "$type": "fontFamily" },
    "scale-base": { "$value": "16px", "$type": "dimension" }
  }
}
```

Compatible with Style Dictionary, Figma Tokens, and token management tools.
