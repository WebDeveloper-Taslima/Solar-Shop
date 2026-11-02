# ☀️ Solar Shop New Zealand — Official Website & Hero Redesign

> **"Reliable solar solutions from a trusted brand."**  
> *Powered by Trilect — Over 28 years of Master Electrician excellence across New Zealand.*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20%7C%20Tablet%20%7C%20Desktop-2D6A4F?style=for-the-badge)](https://solarshop.co.nz)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 📌 Project Overview

This repository contains the complete, modern, responsive website redesign for **[Solar Shop New Zealand](https://solarshop.co.nz/)** (Powered by **Trilect**).

The project was meticulously engineered based on real client requirements:
1. **Compact 1/3 Hero Section:** A sleek, high-impact hero section condensed to ~390px (one-third the height of legacy bulky banners), ensuring CTAs and value propositions are immediately visible above the fold.
2. **Authentic Natural Photography:** Zero AI cartoon illustrations, zero Midjourney renders, and zero oversaturated fake gradients. Uses authentic New Zealand daylight photography of monocrystalline solar panels on modern architectural roofs.
3. **Interactive Mega Menus:** Pixel-perfect 1:1 match with the live `solarshop.co.nz` navigation system featuring soft sage containers (`#EEF3EC`), featured cards, and dual-column category breakdowns.
4. **Interactive Money Saving Calculator:** Real dynamic mathematical calculations estimating annual power savings, solar self-consumption, and payback periods based on New Zealand energy tariffs (28c - 35c/kWh).
5. **Certified Vector Accreditations:** Razor-sharp SVG badges representing Master Electricians NZ, SEANZ, Mastercraft Electrical, IMPAC PREQUAL, Site Safe, and the Electrical Workers Registration Board (EWRB).

---

## 🚀 Key Features

### 1. 🗂️ Interactive Multi-Column Mega Menus
- **Hover & Pill Transitions:** Nav items smoothly transform into rounded pills (`#E2ECE0`) while the chevron rotates 180° on hover.
- **Featured Image Showcase:** Each mega menu displays a featured photography card with a floating description card and direct `Explore →` link.
- **Two-Column Sub-Navigation:**
  - `Considering Solar ⌄` → Solar explained, Calculator, Retailer rates, Green loans, Investment payback, Monitoring.
  - `Building your system ⌄` → Solar panels, Inverters, Smart controllers, Batteries, EV chargers, Tier-1 brands.
  - `The right home system ⌄` → Grid-tied (Panels only), Hybrid (Solar + Battery), Off-grid, Free roof assessment.
  - `Commercial and Farm ⌄` → Dairy sheds, Commercial roofs, 3-phase machinery solar, 3-5 year commercial ROI.

### 2. ⚡ Redesigned 1/3 Compact Hero Section
- **Primary Message:** *"Reliable solar solutions from a trusted brand."*
- **Brand Tagline:** *"Powered by Trilect"* woven seamlessly into the copy, highlighting 28+ years of heritage and 80+ licensed Kiwi electricians nationwide.
- **Dynamic Intent Pills:** Switch value copy and imagery instantly for **Residential Home**, **Dairy Farm**, **Commercial**, and **Battery Storage**.

### 3. 🧮 Dynamic Solar Return Calculator
- Interactive monthly bill slider ($150 to $1,000+/mo).
- Property type selection (Residential, Farm, Commercial, Battery Only).
- Real-time calculations:
  - Estimated annual dollar savings ($NZD).
  - Recommended system size (kWp).
  - Estimated return on investment (ROI %).
  - Typical payback period (years).

### 4. 🛡️ Official Industry Accreditation Badges
- Six handcrafted, infinitely scalable vector SVGs:
  - **Master Electricians NZ** (Electrical Contractors Association of NZ)
  - **SEANZ Accredited** (Sustainable Energy Association New Zealand)
  - **Mastercraft Electrical**
  - **IMPAC PREQUAL** (Safe Contractor Certification)
  - **Site Safe** (Building Health & Safety)
  - **EWRB** (Electrical Workers Registration Board)

### 5. 🌐 Social Media & Contact Integration
- Working social media channels in the footer:
  - **Facebook:** [Solar Shop NZ](https://www.facebook.com/solarshopnz/)
  - **LinkedIn:** [Trilect Engineering](https://www.linkedin.com/company/trilect-engineering/)
  - **Instagram:** [Solar Shop NZ](https://www.instagram.com/solarshopnz/)
  - **YouTube:** [Solar Shop NZ](https://www.youtube.com/@solarshopnz)
- Freephone nationwide click-to-call: `0800 874 532`.

---

## 🛠️ Tech Stack & Architecture

- **Markup:** Semantic **HTML5** with high accessibility (ARIA labels, roles, and landmarks).
- **Styling:** Pure **CSS3** (Custom Properties, Flexbox, CSS Grid, smooth cubic-bezier transitions).
- **Interactions:** Lightweight **Vanilla JavaScript** (Zero external libraries, no bloated dependencies, instant load time).
- **Graphics:** High-resolution photography (1376×768) + razor-sharp standalone **SVG** vector assets.

---

## 📂 Project Structure

```bash
Solar-Shop-Hero-Section-Design/
├── index.html                   # Main production website markup
├── styles.css                   # Complete design system & responsive styling
├── app.js                       # Calculator logic, mega menus, accordions, modals
├── README.md                    # Repository documentation
├── FIGMA_DESIGN_SYSTEM.md       # Figma handoff tokens (colors, typography, grid)
├── FREELANCER_CONTEST_ENTRY.md  # Client pitch proposal & verification notes
└── assets/                      # Production assets
    ├── solarshop-trilect-logo.png     # Official 1024x305 co-branded logo
    ├── hero-solar-roof.jpg            # High-res residential solar roof (1376x768)
    ├── commercial-solar.jpg           # High-res commercial installation (1376x768)
    ├── farm-solar-shed.jpg            # High-res rural agribusiness solar (1376x768)
    ├── cert-master-electricians.svg   # Vector Master Electricians badge
    ├── cert-seanz.svg                 # Vector SEANZ accreditation badge
    ├── cert-mastercraft.svg           # Vector Mastercraft Electrical badge
    ├── cert-impac.svg                 # Vector +IMPAC PREQUAL badge
    ├── cert-sitesafe.svg              # Vector Site Safe Certified badge
    └── cert-ewrb.svg                  # Vector EWRB Licensed badge
```

---

## 💻 How to Run Locally

No package managers or build tools required. Runs immediately in any modern web browser:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/solar-shop-nz-redesign.git
   ```
2. **Navigate into the project folder:**
   ```bash
   cd solar-shop-nz-redesign
   ```
3. **Open in browser:**
   - Double-click `index.html`, or
   - Use VS Code Live Server extension, or
   - Run a quick local server:
     ```bash
     python -m http.server 8000
     # Or: npx serve
     ```
   - Open `http://localhost:8000` in your browser.

---

## 🎨 Design Tokens

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Solar Olive Green** | `#466035` | Primary brand accent & headers |
| **Shop Vivid Blue** | `#0077C8` | Secondary logo blue & links |
| **Sunrise Gold** | `#F5A823` | Rating stars & highlight tags |
| **Quote Button Green** | `#2D6A4F` | Primary CTA buttons & icons |
| **Dark Forest Green** | `#172319` | Difference bar & footer background |
| **Sage Cream Tint** | `#EEF3EC` | Mega menu dropdown background |
| **Canvas Off-White** | `#FBFBF9` | Main website background canvas |

---

## 📄 License & Credits

- Designed for **Solar Shop New Zealand** (Powered by **Trilect Engineering Ltd**).
- Open-sourced under the [MIT License](LICENSE).
