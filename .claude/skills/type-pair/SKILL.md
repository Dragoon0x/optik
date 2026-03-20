---
name: type-pair
description: Recommend font pairings based on the project context. Pairs a distinctive display font with a complementary body font. Never suggests banned fonts.
user-invokable: true
---

# /type-pair — Font Pairing Engine

## Rules
1. Never suggest any banned font (Inter, Roboto, Arial, Helvetica, Open Sans, Lato, Montserrat, Poppins, Nunito, Space Grotesk, Raleway, Source Sans Pro)
2. Pair by contrast: serif display + sans body, or distinctive sans display + neutral sans body
3. Consider the project's aesthetic direction
4. Suggest Google Fonts or commonly available web fonts
5. Provide fallback stack

## Pairing Strategies

**Editorial:** Serif display (Instrument Serif, Newsreader, Fraunces, Playfair Display) + clean sans body (Outfit, DM Sans, General Sans, Satoshi)

**Technical:** Monospace display (JetBrains Mono, Fira Code, IBM Plex Mono) + geometric sans body (Outfit, Sora, Manrope)

**Luxury:** High-contrast serif (Cormorant, Noto Serif Display) + refined sans (DM Sans, Plus Jakarta Sans)

**Playful:** Rounded/soft display (Anybody, Gabarito, Rubik) + friendly body (Nunito Sans, Quicksand)

**Brutalist:** Industrial sans (Archivo, Bebas Neue, Oswald) + sturdy body (Source Code Pro, IBM Plex Sans)

Output 2-3 pairings ranked by fit, with Google Fonts import links and CSS declarations.
