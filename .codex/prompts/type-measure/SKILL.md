---
name: type-measure
provider: codex
description: Check line lengths (measure) across the interface. Optimal reading length is 45-75 characters per line.
user-invokable: true
---

# /type-measure — Line Measure Check

Calculate line measure for every text container:
1. Container width / (font-size * average character width)
2. Flag lines exceeding 75 characters (too wide, hard to read)
3. Flag lines under 45 characters (too narrow, too many line breaks)
4. Suggest max-width values to achieve optimal measure

The optimal measure depends on font and context:
- Long-form body text: 55-65 characters
- UI labels and short text: 30-50 characters
- Headings: no measure constraint needed
