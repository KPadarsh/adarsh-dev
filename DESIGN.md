# Design System Specification: Minimalist MERN Developer Portfolio

> **Project Source:** Stitch Project `2885479620906715799` ("Minimalist MERN Developer Portfolio")  
> **Design Theme:** Swiss Modernist Engineering / High-Craft Digital Editorial  
> **Target Audience:** Recruiters, Engineering Leaders, and Technical Clients  

---

## 1. Design Philosophy & Aesthetic Identity

This design system embodies a disciplined **Swiss Modernist Editorial** aesthetic tailored for a high-craft Full-Stack MERN Developer portfolio. It combines modern functional minimalism with architectural precision, treating software engineering and full-stack systems with the dignity and restraint of fine print publication.

### Core Principles
- **Uncompromising Clarity:** Elimination of superfluous skeuomorphic decorations, heavy drop shadows, or loud multi-color gradients.
- **Structural Precision:** Crisp 1px hairline rules, disciplined negative space, and strict grid alignments.
- **High-Contrast Monochromatic Base with Surgical Accent:** Pure white and deep ink blacks establish the foundational canvas, accented strictly by an electric cobalt blue for interactive focal points, active states, and code indexes.
- **Typographic Hierarchy:** Dual-type pairing of clean geometric sans-serif for reading and crisp monospace for code indexing, dates, tags, and tabular metadata.
- **Reading Column Constraint:** Single disciplined reading column constrained to `780px` max width (`max-w-[780px]`), providing optimal line lengths and sustained readability across all viewports.

---

## 2. Color Palette & Tokens

### 2.1 Core Palette

| Token Name | Hex Code | Purpose & Usage |
|---|---|---|
| `primary` | `#000000` / `#14161A` | Main display titles, bold text, high-emphasis icons, primary CTA button |
| `secondary` | `#1C3FE7` / `#3D5AFE` | Electric Cobalt Accent — Section indices (`01 //`), active links, hover states, status accents |
| `on-surface` | `#181C21` | Global body text color, high-contrast readable copy |
| `on-surface-variant` | `#45474B` / `#70747C` | Secondary text, narrative summaries, subtitle descriptions, meta details |
| `outline` | `#76777B` | Secondary labels, neutral icon accents, category indicators |
| `outline-variant` | `#C6C6CB` / `#ECECEE` | Hairline border rules (1px), card perimeters, section dividers |
| `background` / `surface` | `#F7F9FF` | Subtle background tone for ambient surfaces |
| `surface-container-lowest` | `#FFFFFF` | Primary canvas background, header backdrop, active cards, form fields |
| `surface-container-low` | `#F0F4FA` | Sub-layer background for technical tags, info badges, and contact cards |
| `surface-container` | `#EAEEF4` | Intermediate container surface |
| `surface-container-high` | `#E5E8EF` | Divider borders and header bottom hairline border |
| `surface-container-highest`| `#DFE3E9` | Disabled states and structural container frames |

### 2.2 Featured Project Dark Container (Contrast Inversion)

The featured project carousel uses a dedicated dark surface to highlight production applications with high visual impact:

| Element | Color / Value | Class / Style |
|---|---|---|
| Card Background | `#0F172A` (Slate 900) | `bg-[#0f172a]` |
| Card Border | `#1E293B` (Slate 800) | `border border-slate-800` |
| Primary Ambient Glow | `rgba(37, 99, 235, 0.20)` | `bg-blue-600/20 blur-3xl` |
| Secondary Ambient Glow | `rgba(99, 102, 241, 0.20)` | `bg-indigo-500/20 blur-3xl` |
| Title Text | `#FFFFFF` | `text-white` |
| Subtitle / Meta Text | `#94A3B8` (Slate 400) | `text-slate-400` |
| Body Description | `#CBD5E1` (Slate 300) | `text-slate-300` |
| Index Watermark | `#475569` with 40% Opacity | `text-slate-600/40 font-display` |
| Primary Demo Button | `#2563EB` &rarr; Hover `#3B82F6` | `bg-blue-600 hover:bg-blue-500 text-white` |
| Code Button | `#1E293B` &rarr; Hover `#334155` | `bg-slate-800 hover:bg-slate-700 border border-slate-700` |

### 2.3 Status & Live Indicators

| Indicator | Colors | Representation |
|---|---|---|
| **Available for Work Badge** | BG: `#ECFDF5`, Border: `#A7F3D0`, Text: `#047857`, Dot: `#10B981` (Emerald) | Live availability status in header |
| **Hero Availability Dot** | BG: `#1C3FE7` (Secondary Cobalt) | Hero section pulse indicator |
| **Live Clock Indicator** | BG: `#1C3FE7` (Secondary Cobalt) | Live IST time clock in footer |

---

## 3. Typography System

### 3.1 Typefaces
- **Primary / Prose:** `Inter` (sans-serif) — Clean, highly legible modernist geometric sans for all editorial headings, display typography, prose, and UI buttons.
- **Code / Monospace:** `JetBrains Mono` (monospace) — Used for numerical indices, section headers, technical badges, dates, tabular numbers, and live clock strings.
- **Icons:** `Material Symbols Outlined` (Google Fonts) — Consistent, lightweight icon set (14px – 18px).

### 3.2 Typographic Hierarchy & Scale

| Style Token | Font Family | Size | Line Height | Letter Spacing | Weight | Typical Usage |
|---|---|---|---|---|---|---|
| `display` | Inter | `54px` (Desktop)<br>`38px` (Mobile) | `1.08`<br>`1.12` | `-0.03em`<br>`-0.025em` | 800 (ExtraBold) | Hero main heading ("Full Stack Developer"), About statement |
| `headline-lg` | Inter | `32px` (Desktop)<br>`26px` (Mobile) | `1.2`<br>`1.25` | `-0.025em`<br>`-0.02em` | 700 (Bold) | Project title in dark card, Contact heading |
| `headline-sm` | Inter | `20px` / `17px` | `1.3` | `-0.015em` | 600 / 700 (SemiBold/Bold) | Experience job titles, tech stack card headers, logo |
| `body-lg` | Inter | `17px` | `1.6` | `-0.01em` | 400 (Regular) | Hero lead paragraph, about paragraph |
| `body-md` | Inter | `15px` / `14px` | `1.55` | `-0.005em` | 400 (Regular) | Experience descriptions, bullet list items, form inputs |
| `label-sm` | Inter | `13px` | `1.4` | `0` | 500 (Medium) | Nav buttons, action CTAs ("View Projects", "Let's Talk") |
| `mono-counter`| JetBrains Mono | `12px` | `1.0` | `0.04em` | 500 (Medium) | Slide pagination counter (`01 / 02`) |
| `mono-tag` | JetBrains Mono | `12px` / `11px` | `1.2` | `0.02em` | 500 (Medium) | Tech stack tags, metadata chips, status tags, timestamps |

---

## 4. Spacing & Sizing System

### 4.1 Spacing Scale

| Token | Value | Tailwind / Pixels | Usage |
|---|---|---|---|
| `space-xs` | `0.25rem` | `4px` | Micro gaps between icons and adjacent text |
| `space-sm` | `0.5rem` | `8px` | Gap between section prefix and title, intra-card badges |
| `space-md` | `1rem` | `16px` | Inner padding of standard cards, grid gaps |
| `space-lg` | `1.5rem` | `24px` | Padding between content groups, hero top padding |
| `space-xl` | `5.5rem` | `88px` | Major section top/bottom padding cadence |
| `margin` | `1.5rem` | `24px` | Container horizontal padding (`px-margin`) |
| `gutter` | `1.5rem` | `24px` | Grid column gutters |

### 4.2 Layout Dimensions
- **Header Height:** `4rem` (`64px` / `h-16`)
- **Container Max Width:** `780px` (`max-w-[780px]`) centered via `mx-auto`
- **Main Container Viewport Min Height:** `min-h-[calc(100vh-4rem)]`

---

## 5. Border Radius System

| Token | CSS Value | Usage |
|---|---|---|
| `none` (`0px`) | `0px` | Section dividers, top/bottom layout boundaries |
| `sm` / `DEFAULT` | `0.125rem` / `0.25rem` (`2px` - `4px`) | Technical badges, form inputs, hero action buttons (`rounded`) |
| `md` / `lg` | `0.375rem` / `0.5rem` (`6px` - `8px`) | Project buttons, tech category cards, contact cards |
| `xl` / `2xl` | `0.75rem` / `1rem` (`12px` - `16px`) | Dark project showcase container (`rounded-2xl`), image containers (`rounded-xl`) |
| `full` | `9999px` (`rounded-full`) | Status pills, header CTA buttons, carousel controls, dot indicators |

---

## 6. Button & Interactive Component Styles

### 6.1 Header Action Buttons
- **Primary Pill ("Let's Talk"):**  
  `inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-all shadow-sm group`  
  *Hover Effect:* Background switches to electric cobalt (`#1C3FE7`), right arrow translates `+2px` (`group-hover:translate-x-0.5`).
- **Secondary Outline Pill ("Resume"):**  
  `hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-outline-variant hover:border-primary font-label-sm text-label-sm text-primary hover:bg-surface-container-low transition-all`.

### 6.2 Hero Action Buttons
- **Primary Solid Button ("View Projects"):**  
  `inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-secondary transition-all group`  
  *Hover Effect:* Background changes to cobalt, downward arrow translates down (`group-hover:translate-y-0.5`).
- **Secondary Bordered Button ("Get in Touch"):**  
  `inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-surface-container-lowest text-primary border border-outline-variant hover:border-primary hover:bg-surface-container-low font-label-sm text-label-sm transition-all group`.

### 6.3 Project Showcase Buttons (Dark Card)
- **Live Demo Link:** `inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md`
- **GitHub Repository Link:** `inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all`
- **Slider Circular Navigation:** `w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors`

### 6.4 Form & Input Controls
- **Inputs & Textarea:**  
  `px-3 py-2 bg-surface-container-lowest border border-outline-variant/60 rounded text-body-md font-body-md text-primary focus:outline-none focus:border-secondary transition-colors`
- **Form Submit Button:**  
  `px-5 py-2 bg-primary text-on-primary rounded hover:bg-secondary transition-colors font-label-sm text-label-sm inline-flex items-center gap-2`

---

## 7. Navigation Structure

### 7.1 Fixed Header (`<header>`)
- **Positioning:** `fixed top-0 left-0 right-0 z-50`
- **Surface:** `bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-container-high`
- **Layout:** `h-16 max-w-[780px] mx-auto px-margin flex items-center justify-between gap-space-md`

```
+---------------------------------------------------------------------------------------+
|  [Adarsh K P] [● Available for work]    Work  About  Stack  Experience  Contact    [↓ Resume] [Let's Talk →] |
+---------------------------------------------------------------------------------------+
```

- **Branding (Left):**
  - Name link: `Adarsh K P` in `font-headline-sm font-bold text-primary hover:text-secondary`
  - Pill Badge: `Available for work` in `#047857` with emerald animated pulse dot (`w-1.5 h-1.5`)
- **Nav Links (Center — Hidden on mobile, visible on `md:`):**
  - `Work` (`#projects` / Active state: `text-primary font-semibold`)
  - `About` (`#about` / Default: `text-on-surface-variant hover:text-secondary`)
  - `Stack` (`#stack`)
  - `Experience` (`#experience`)
  - `Contact` (`#contact`)
- **Actions (Right):**
  - "Resume" download button (outline pill, hidden on extra small screens)
  - "Let's Talk" CTA button (solid black pill with forward arrow)

---

## 8. Page Section Breakdown

The single-page portfolio consists of 7 structured sections, separated by `pt-space-xl border-t border-outline-variant/40`:

### `00 // HERO SECTION`
- **Availability Marker:** Pulse dot (`w-2 h-2 rounded-full bg-secondary animate-pulse`) + uppercase tracking tag: `AVAILABLE FOR FULL-TIME ROLES`.
- **Display Heading:** `Full Stack Developer` (Inter 54px ExtraBold, `leading-[1.08]`).
- **Tagline:** *"I build responsive interfaces, robust APIs, and reliable full-stack applications with modern web technologies."*
- **Call-to-Action Group:** "View Projects" and "Get in Touch" buttons.
- **Quick Contact Pill Strip:**
  - Email badge with inline one-click copy button (`adarshak1128@gmail.com`).
  - Clickable phone link (`+91 8129440790`).
  - Location badge (`Chemmad, Kerala (IST)`).

### `01 // ABOUT SECTION`
- **Header:** Monospace index `01 //` in cobalt + uppercase `ABOUT` label.
- **Hero Statement:** `Building thoughtful web experiences from interface to backend.` (5xl Display).
- **Prose Narrative:** End-to-end full-stack summary highlighting React, Next.js, TypeScript, Node.js, Express.js, MongoDB, clean RESTful architectures, and database integration.

### `02 // TECH STACK SECTION`
- **Header:** `02 // TECH STACK` + Right-aligned sub-label `SKILLS & TOOLS`.
- **3-Column Category Grid:**
  1. **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS, Context API.
  2. **Backend & APIs:** Node.js, Express.js, RESTful APIs, JWT Auth, bcrypt.
  3. **Database & Tools:** MongoDB, Git & GitHub, Postman, Cloudinary, Vite.
- **Card Styling:** `p-space-md rounded border border-outline-variant/40 bg-surface-container-lowest`.
- **Chip Styling:** `px-2 py-1 bg-surface-container-low border border-outline-variant/40 rounded font-mono-tag text-mono-tag text-on-surface`.

### `03 // WORKS (PROJECTS) SECTION`
- **Header:** `03 // WORKS` + Headline `Featured production applications & systems.`.
- **Interactive Dark Showcase Component:**
  - Deep Navy/Slate container (`bg-[#0f172a]`) with blur orbs.
  - Multi-slide carousel structure:
    - **Slide 01 — Fragranzia (E-Commerce Perfume Platform):** Full-stack perfume e-commerce web application with cart, order flow, JWT authentication, bcrypt, Cloudinary, and RESTful CRUD APIs. (Tags: React.js, Node.js, Express.js, MongoDB, JWT Auth, Tailwind CSS).
    - **Slide 02 — Task Matrix (MERN Task Management Workspace):** Full-stack task manager with CRUD operations, real-time responsive UI state, Express/Node.js REST API, and MongoDB document storage. (Tags: React.js, Node.js, Express.js, MongoDB, RESTful APIs, Tailwind CSS).
  - **Slide Controls Bar:**
    - Active expanded dot (`w-8 h-2 rounded-full bg-blue-500`) vs inactive dot (`w-2 h-2 rounded-full bg-slate-700`).
    - Tabular Slide Counter (`01 / 02`).
    - Circular Prev / Next arrow buttons.

### `04 // EXPERIENCE SECTION`
- **Header:** `04 // EXPERIENCE` + Right-aligned sub-label `PRACTICE & INTERNSHIPS`.
- **Two-Column Timeline Row:**
  - **Left Sidebar (w-36):** Period (`08/2025`), Location (`Calicut, Kerala`), and badge (`Internship`).
  - **Right Content:** Title `MERN Full Stack Intern — Softroniics`, bullet points with cobalt markers (`▸`) and bolded technical keywords, followed by tech badge chips (React.js, Node.js, Express.js, MongoDB, JWT Auth, Cloudinary).

### `05 // EDUCATION SECTION`
- **Header:** `05 // EDUCATION` + Right-aligned sub-label `FOUNDATIONS`.
- **Two-Column Timeline Row:**
  - **Left Sidebar (w-36):** Period (`2022 — 2025`), Location (`Malappuram, Kerala`).
  - **Right Content:** `Diploma in Computer Engineering` from *Ma'din Polytechnic College, Malappuram*, detailing coursework in fundamentals, DSA, DBMS, Web Architecture, and Software Engineering.

### `06 // GET IN TOUCH (CONTACT) SECTION`
- **Header:** `06 // GET IN TOUCH` + Subheading `Let's build something reliable together.`.
- **2x2 Quick Contact Grid:**
  1. **Direct Email Card:** `adarshak1128@gmail.com` + `< 24 hrs` response tag + inline `Copy` button.
  2. **Voice & WhatsApp Card:** `+91 8129440790` + `India (UTC+5:30)` tag + `Chat ↗` WhatsApp link.
  3. **GitHub Card:** Monogram `GH` badge + `@adarshak1128` + `north_east` external icon.
  4. **LinkedIn Card:** Monogram `in` badge + `Adarsh K P` + `north_east` external icon.
- **Embedded Contact Form:**
  - Name and Email input row (2 columns on desktop).
  - Message textarea (3 rows, non-resizable).
  - Footer with dynamic status feedback text + Submit button with send icon (`mailto:` fallback integration).

### `FOOTER`
- **Divider:** `border-t border-surface-container-high mt-space-xl py-space-xl bg-surface-container-lowest`.
- **Left Column:** Name + `— MERN Stack Developer` subtitle, Location (`Chemmad, Kerala, India • IST (UTC +5:30)`).
- **Right Column:** Live ticking clock (`Kerala, IN — HH:MM:SS IST`) with cobalt indicator dot + Copyright notice (`© 2025 Adarsh K P. All rights reserved.`).

---

## 9. Responsive Layout Architecture

### 9.1 Desktop Layout (`>= 768px`)
- Standard central column constraint: `max-w-[780px] mx-auto px-6`.
- Header reveals full 5-link text navigation bar and "Resume" outline button.
- Tech Stack renders as a clean 3-column equal grid (`grid-cols-3`).
- Featured Project displays a 12-column split: 6 columns for text/badges/actions, 6 columns for screenshot preview.
- Experience & Education render as horizontal two-column split (`w-36` metadata sidebar + fluid details container).
- Contact cards render in a 2x2 symmetrical grid (`grid-cols-2`).
- Contact form inputs (Name & Email) sit side-by-side in 2 columns.
- Footer aligns items in a clean space-between row (`flex-row justify-between`).

### 9.2 Mobile & Tablet Layout (`< 768px`)
- Navigation compresses: hides center text links and secondary resume button; preserves logo, live badge, and primary "Let's Talk" CTA.
- Display typography scales gracefully:
  - Hero display scales from `54px` to `38px`.
  - Section titles scale down from `5xl` to `2xl` / `3xl`.
- Grids stack vertically:
  - Tech stack switches to single column (`grid-cols-1`).
  - Featured Project card stacks vertically, placing project info above the preview image.
  - Timeline sections (Experience & Education) stack the date/location directly above the title.
  - Contact cards stack to 1 column.
  - Form fields stack vertically in single column.
  - Footer stacks left-aligned metadata over right-aligned clock/copyright (`flex-col gap-space-lg`).

---

## 10. Key Visual Effects & Interactive Micro-Patterns

1. **Frosted Glass Navigation:**  
   `bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-container-high` — Crisp blur effect maintaining legibility over scroll content.
2. **Ambient Dark Glow Effect:**  
   `w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none` — Soft atmospheric illumination within the dark project showcase card.
3. **Image Zoom on Hover:**  
   `group-hover:scale-105 transition-transform duration-500` inside `overflow-hidden rounded-xl` container.
4. **Live Timekeeper Clock:**  
   Real-time IST clock synchronization using `Intl.DateTimeFormat` with `Asia/Kolkata` timezone updated every second.
5. **Dynamic Clipboard Copy Feedback:**  
   One-click copy of `adarshak1128@gmail.com` with transient icon swap (`content_copy` &rarr; `done`) and temporary toast message in the form feedback anchor.
6. **Animated Pulse Dots:**  
   `w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse` for work availability and `w-2 h-2 rounded-full bg-secondary animate-pulse` for hero role status.
7. **Interactive Carousel Pagination:**  
   Active pill dot expands to `w-8` in `#3B82F6` while inactive dots remain `w-2` in `#334155`. Synchronized counter updates from `01 / 02` to `02 / 02`.

---

## 11. Reusable UI Patterns & Component Recipe Summary

```
+--------------------------------------------------------------------+
| 01 // SECTION HEADER PATTERN                                       |
| [ 01 // (Cobalt Monospace) ] [ SECTION TITLE (Bold Uppercase) ]    |
| ------------------------------------------------------------------ |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
| MONOSPACE METADATA BADGE PATTERN                                   |
| [ React.js ] [ Node.js ] [ MongoDB ]                               |
| (bg-surface-container-low border border-outline-variant/40 rounded)|
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
| TWO-COLUMN TIMELINE PATTERN                                        |
| 08/2025              | MERN Full Stack Intern — Softroniics        |
| Calicut, Kerala      | ▸ Built responsive full-stack applications  |
| [Internship]         | ▸ Architected RESTful APIs with JWT Auth    |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
| QUICK CONTACT CARD PATTERN                                         |
| DIRECT EMAIL                                                       |
| adarshak1128@gmail.com                                             |
| ------------------------------------------------------------------ |
| Response < 24 hrs                                    [Copy ❐]      |
+--------------------------------------------------------------------+
```

---

*This specification is the official design system blueprint for implementing the Minimalist MERN Developer Portfolio.*
