---
name: rhythm
description: Enforce vertical spacing rhythm. Ensures consistent vertical flow using a baseline grid approach.
user-invokable: true
---

# /rhythm — Vertical Rhythm

Check that vertical spacing follows a rhythm:
1. Define the baseline unit (typically line-height of body text, e.g., 24px)
2. Every vertical space should be a multiple of this unit
3. Heading margin-top and margin-bottom should maintain rhythm
4. Section padding should be multiples of the baseline
5. Images and other blocks should have heights that are multiples

Report violations and suggest corrections.
