# ÉLANE Beauty Studio — Client Portfolio Demonstration

<div align="center">

![ÉLANE Beauty Studio Banner](/public/images/hero.jpg)

### **Beauty, refined.**
*Modern beauty rituals designed around you.*

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vanilla CSS](https://img.shields.io/badge/Vanilla_CSS-Design_System-264de4?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-10B981?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

</div>

---

## 📌 Project Overview

**ÉLANE Beauty Studio** is a high-end, responsive digital portfolio demonstration created by **Veyra Studio**. It illustrates the design quality, interactive luxury user experience, and conversion architecture that Veyra Studio crafts for premium salons, aesthetic beauty studios, hair ateliers, and luxury spas.

> **Important Notice:** This is a portfolio demonstration concept. It is not an operating business and does not present fictional details as real-world operational facts. All pricing, hours, testimonials, and booking flows are provided as client demonstration content.

---

## ✨ Design Direction & Brand Aesthetics

Inspired by contemporary editorial beauty publications (*Vogue*, *Kinfolk*, *Cereal*) and modern European salon architecture:

- **Color Palette**:
  - Warm Ivory Base: `#FAF7F2`
  - Soft Alabaster / Secondary: `#F4EFE6`
  - Deep Warm Charcoal Typography: `#1A1816` & `#4A453F`
  - Champagne Accents: `#C2A27A` & `#8C6F48`
  - Subtle Rose Blush: `#F7EFEA`
- **Typography Pairing**:
  - **Editorial Serif**: *Cormorant Garamond* & *Playfair Display* for headlines, statement numbers, and quotes.
  - **Minimal Sans**: *Plus Jakarta Sans* with refined tracking for clean interface labels, buttons, and navigation.
- **Imagery**: Bespoke high-resolution beauty and architectural photography capturing serene travertine styling suites, restorative botanical facial rituals, dimensional balayage, clean nude manicures, and bridal artistry.
- **Visual Balance**: Generous whitespace, thin tactile borders (`1px solid rgba(26,24,22,0.08)`), subtle soft drop shadows, and clean asymmetric layouts rather than repetitive templates.

---

## 🚀 Key Features & Interactive Architecture

### 1. Minimal Sticky Navigation & Mobile Drawer
- Sticky navigation that smoothly compacts on scroll, adding subtle backdrop blur (`backdrop-filter: blur(12px)`).
- Top scroll progress bar tracking reading depth.
- Animated mobile drawer with body scroll locking and keyboard accessibility.

### 2. Full-Screen Editorial Hero
- Split-column layout featuring an architectural studio view and a floating detail card.
- Clear brand hierarchy: eyebrow label (`BEAUTY STUDIO · CONCEPT`), headline, description, dual CTAs, and an animated scroll prompt.

### 3. The ÉLANE Approach (Two-Column Editorial)
- Minimalist typographic section highlighting personalized, unhurried care.

### 4. Interactive Services Menu with Live Pre-filling
- Category tab filtering across **All Rituals**, **Hair**, **Skin**, **Nails**, and **Special Occasions**.
- 17 structured treatments with descriptions, durations, and sample pricing (e.g. `₹1,200 · 60 min`).
- **Interactive "Book Ritual &rarr;" Feature**: Clicking any service instantly scrolls to the appointment section, pre-selects the category, and populates the service notes.

### 5. The ÉLANE Experience (01, 02, 03)
- Three-stage client journey cards:
  - **01 — CONSULT**: Lifestyle, texture assessment, and custom roadmap.
  - **02 — CREATE**: Botanical formulations and gentle artistry.
  - **03 — REVEAL**: Polished confidence and bespoke home-care rituals.

### 6. Asymmetric Editorial Gallery & Full Lightbox
- Magazine-style asymmetric grid with hover zooms and minimalist overlays.
- Full-screen lightbox modal with captioning, Next/Previous controls, keyboard arrow navigation, and `Escape` key support.

### 7. About Studio Sanctuary
- Split layout combining portrait imagery with core philosophy statements and concept metrics (**01 Personalized experience**, **02 Modern beauty rituals**, **03 Client-first approach**).

### 8. Why Clients Choose Us
- 4 luxury feature cards with bespoke SVG line icons (*Personalized*, *Refined*, *Thoughtful*, *Effortless*).

### 9. Client Testimonials
- Curated client reviews with 5-star badges and service tags, clearly identified as sample demonstration feedback.

### 10. Demonstration Appointment Booking Experience
- Input validation for Name, Phone, Email, Service, Date, Time Window, and Notes.
- **Confirmation Modal**: Intercepts submissions to show a demonstration summary card and explain how live production sites connect to WhatsApp Business, email, Google Calendar, or salon management platforms (e.g., Fresha, Vagaro, Mindbody).

### 11. WhatsApp Conversion CTA & Live Smartphone Simulation
- High-visibility conversion section before the footer (*"Prefer to chat first?"*).
- Clicking opens an interactive mockup showing a live preview of the WhatsApp chat window with pre-filled enquiry text.

### 12. Contact & Location
- Concept Location in **Kochi, Kerala** with sample studio operating hours and an architectural vector map preview.

### 13. FAQ Accordion
- Accessible, smooth-expanding accordion addressing appointments, stylist requests, bridal packages, rescheduling, and walk-ins.

### 14. Minimalist Luxury Footer
- Brand statement, quick links, client demonstration disclaimer, and smooth back-to-top button.

---

## 📁 Repository Structure

```
.
├── index.html            # Semantic HTML5 with rich OpenGraph & SEO tags
├── package.json          # Node dependencies & Vite build scripts
├── package-lock.json     # Deterministic lockfile
├── public/
│   └── images/           # High-resolution editorial photography assets
│       ├── hero.jpg             # Studio reception & travertine archways
│       ├── about.jpg            # Scalp & hair consultation ritual
│       ├── gallery-lounge.jpg   # Arched brass vanity styling station
│       ├── gallery-hair.jpg     # Dimensional balayage wave styling
│       ├── gallery-skincare.jpg # Radiant botanical facial ritual
│       ├── gallery-nails.jpg    # Clean minimalist nude sheer manicure
│       ├── gallery-products.jpg # Amber botanical elixir droppers
│       └── gallery-bridal.jpg   # Editorial bridal hair & beauty
└── src/
    ├── style.css         # Complete vanilla CSS design system & responsive layout
    └── main.js           # Interactive modules (booking, tabs, lightbox, modals)
```

---

## 🛠️ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/veyrastudioads-glitch/-LANE-Beauty-Studio.git
   cd -LANE-Beauty-Studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready static assets will be compiled into the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📱 Responsive Testing Viewports

The design is mobile-first and tested across all major device widths:
- **Mobile (Small)**: 375px (iPhone SE, mini)
- **Mobile (Standard)**: 390px – 430px (iPhone 14/15/16, Galaxy S-series)
- **Tablet**: 768px – 834px (iPad, Android tablets)
- **Laptop**: 1024px – 1280px (MacBook Air, Surface)
- **Desktop**: 1440px+ (Ultra-wide & high-DPI displays)

---

## 💼 Client Customization Guide

This template is structured for easy handover to real beauty and wellness businesses:
1. **WhatsApp Integration**: Replace `#whatsappModal` triggers with direct `https://wa.me/<YOUR_NUMBER>?text=Hello%20...` links or connect to WhatsApp Business API.
2. **Booking Engine**: Easily link the appointment CTA to platforms like **Fresha**, **Vagaro**, **Square Appointments**, or a backend API.
3. **Map & Directions**: Replace the architectural preview card with an embedded Google Maps or Apple Maps iframe.
4. **Branding & Palette**: Update the CSS custom properties in `src/style.css` (`--accent-champagne`, `--bg-primary`, `--font-serif`) to instantly adapt to any client's brand guidelines.

---

## 📄 License & Credits

- **Design & Code**: Created by **Veyra Studio** as a client demonstration concept.
- **Imagery**: Bespoke editorial photography created exclusively for the ÉLANE concept demonstration.
- **Fonts**: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), and [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts.
