# Solar Shop NZ — Figma Handover & Design System Guide

> **Project:** Solar Shop Hero Section Redesign (Powered by Trilect)  
> **Client Domain:** [www.solarshop.co.nz](http://www.solarshop.co.nz)  
> **Supplied Assets Utilized:** 
> - Official Logo: `assets/solarshop-trilect-logo.png`
> - Official Certifications: `assets/certifications-bar.png`  
> **Mandated Height:** Exactly ~1/3 of the previous bulky website hero (~390px - 410px Desktop)  
> **Visual Style:** 100% Natural Photography, zero AI illustrations, elegant warm cream & moss/blue palette matching the live site.

---

## 1. Exact Brand Color Palette (Extracted from Client Assets)

| Token Name | Hex Code | Source & Role |
| :--- | :--- | :--- |
| `--color-solar-olive` | `#466035` | "solar" logo text, primary brand identity, active pills |
| `--color-shop-blue`   | `#0077C8` | "shop" logo text, Trilect chevron mark, links |
| `--color-sun-gold`    | `#F5A823` | Sunrise accent inside "o", star ratings, trust badges |
| `--color-quote-green` | `#2D6A4F` | Client's signature "Get a free quote" button & phone circle |
| `--color-diff-green`  | `#2A4A33` | "The Solar Shop Difference" header background |
| `--color-canvas-warm` | `#FBFBF9` | Warm off-white site background canvas (from client screenshot) |
| `--color-text-dark`   | `#172319` | Deep forest dark tone for ultra-crisp headline legibility |
| `--color-text-body`   | `#475569` | Neutral slate body text for high reading comfort |
| `--color-border-light`| `#E7E9E3` | Subtle warm border for cards and dividers |

---

## 2. Typography Scale (Editable Hierarchy)

* **Primary Sans-Serif:** `Plus Jakarta Sans` (Google Fonts, 100% free)
* **Italic Serif Accents:** `Playfair Display` (matching client's live italic accents: *"trusted brand."*, *"we use."*, *"matters."*)

| Element | Desktop Size / Line-Height | Mobile Size / Line-Height | Font Weight |
| :--- | :--- | :--- | :--- |
| **H1 Headline** | 40px / 46px | 26px / 32px | 800 (Extra Bold) |
| **Headline Accent** | 42px / 46px (Italic) | 28px / 32px | 700 (Italic Serif) |
| **Hero Lead Copy** | 15px / 24px | 14px / 22px | 400 Regular / 700 Bold |
| **CTA Buttons** | 14.5px / 16px | 14px / 16px | 700 (Bold Rounded Pill) |
| **Solution Pills** | 12px / 16px | 11px / 15px | 600 (Semi Bold) |

---

## 3. Layout Grid & Height Constraint

* **Desktop Frame:** `1440px` canvas, `1240px` content container.
* **Hero Height:** `~400px` (Complies strictly with the **1/3 height requirement**, down from previous ~680px).
* **Grid Split:**
  * **Left Column (Messaging & CTAs):** `57%`
  * **Right Column (Authentic Photography Card):** `43%`
* **Mobile Frame:** `390px` single-column stack.

---

## 4. Supplied Assets Integration

* **Logo:** Embedded without any distortion from `assets/solarshop-trilect-logo.png`.
* **Certifications:** Embedded directly from `assets/certifications-bar.png` (Master Electricians NZ, SEANZ, Mastercraft, IMPAC PREQUAL, Site Safe, Electrical Workers Registration Board).
