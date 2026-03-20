---
name: type-hierarchy
description: Enforce proper heading and body text hierarchy. Verify h1 > h2 > h3 progression, size ratios, and weight differentiation.
user-invokable: true
---

# /type-hierarchy — Type Hierarchy Enforcement

Check the heading hierarchy:
1. Is there exactly one h1?
2. Do heading levels follow order (h1 > h2 > h3, no skipping)?
3. Does each level have a distinct font-size from the type scale?
4. Is there weight differentiation (not all the same weight)?
5. Are heading margins consistent?
6. Is the ratio between levels consistent?

Fix violations by mapping headings to the type scale.
