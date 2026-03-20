---
name: overdrive
description: Push past conventional limits with technically ambitious effects. WebGL shaders, spring physics, GPU-accelerated particle systems, scroll-driven 3D transforms. Use sparingly for maximum impact.
user-invokable: true
---

# /overdrive — Beyond Conventional Limits

For when the brief demands something that makes users ask 'how did they do that?'

**Possible effects:**
- WebGL background shaders (noise fields, fluid simulation)
- Spring physics on UI elements (dialog entrances, card interactions)
- 3D CSS transforms on scroll (parallax layers, card tilt)
- Canvas particle systems (ambient floating elements)
- SVG morphing animations
- Scroll-driven animation API (modern browsers)
- View Transitions API for page changes
- GPU-accelerated blur/glow effects

**Rules:**
- Maximum one overdrive effect per page (two competing effects cancel each other out)
- Must degrade gracefully (check for WebGL support, reduce-motion, etc.)
- Performance budget: 60fps minimum, no layout thrashing
- Must not interfere with content readability or navigation
- The effect should reinforce the design direction, not distract from it
