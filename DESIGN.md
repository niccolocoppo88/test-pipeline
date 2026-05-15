---
version: alpha
name: Faber Castell meets Linear
description: Precision craftsmanship meets modern SaaS — a professional drawing tool that feels tactile and inviting. Clean surfaces, confident typography, a single blue accent that guides without shouting.
colors:
  primary: "#1A1A1A"
  secondary: "#6B7280"
  tertiary: "#3B82F6"
  neutral: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F9FAFB"
  border: "#E5E7EB"
  text: "#1A1A1A"
  text-muted: "#6B7280"
  on-primary: "#FFFFFF"
  on-tertiary: "#FFFFFF"
typography:
  h1:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: 600
    letterSpacing: "0.06em"
    lineHeight: 1.4
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.md}"
    padding: "0 16px"
  button-primary-hover:
    backgroundColor: "#2563EB"
  button-primary-active:
    backgroundColor: "#1D4ED8"
  button-primary-disabled:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "0 16px"
  button-secondary-hover:
    backgroundColor: "{colors.border}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    padding: "0 12px"
  button-ghost-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
  button-icon:
    backgroundColor: transparent
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    size: "32px"
    padding: "0"
  button-icon-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
  slider-track:
    backgroundColor: "{colors.border}"
    rounded: "{rounded.full}"
    height: "4px"
  slider-thumb:
    backgroundColor: "{colors.tertiary}"
    rounded: "{rounded.full}"
    size: "16px"
  slider-thumb-hover:
    backgroundColor: "#2563EB"
  toolbar:
    backgroundColor: "{colors.background}"
    height: "48px"
    padding: "0 16px"
  canvas-area:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.lg}"
  sidebar-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  color-swatch:
    backgroundColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    size: "28px"
  color-swatch-selected:
    backgroundColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
    size: "28px"
  focus-ring:
    backgroundColor: "{colors.tertiary}"
    rounded: "{rounded.sm}"
    padding: "2px"
  overlay:
    backgroundColor: "rgba(0,0,0,0.04)"
---

## Overview

A minimal, professional drawing app with immediate usability — no signup, no friction. The visual language borrows from **Faber Castell's** precision and craftsmanship (warmth, tactile confidence) and **Linear's** clean SaaS UI (crisp surfaces, confident type, a single electric-blue accent). The overall impression should feel like a well-made physical tool rendered in software: certain, quiet, capable.

---

## Colors

- **Primary (#1A1A1A):** Near-black for text and high-emphasis elements. Warm enough to avoid harshness.
- **Secondary (#6B7280):** Cool gray for supporting text, labels, and muted UI chrome.
- **Tertiary (#3B82F6):** Electric blue — the sole interactive accent. Used for active tools, selected states, and CTAs. This is the *only* color that carries semantic meaning; treat it as a spotlight.
- **Neutral / Background (#FFFFFF):** The page canvas — pure white, like paper.
- **Surface (#F9FAFB):** Whisper-light gray for panels and secondary surfaces.
- **Border (#E5E7EB):** Light dividers — visible enough to structure, subtle enough to stay quiet.
- **Text Muted (#6B7280):** Labels and metadata that guide without competing.

---

## Typography

**Font:** Inter (Google Fonts) — weights 400, 500, 600, 700.

Inter is neutral and legible at every size. Weight and scale carry hierarchy; no decorative variants needed. This is a tool, not a magazine.

| Role | Size | Weight | Line-height | Letter-spacing |
|------|------|--------|-------------|----------------|
| H1 (app title) | 2rem / 32px | 700 | 1.2 | -0.02em |
| H2 (section title) | 1.25rem / 20px | 600 | 1.3 | — |
| Body | 0.9375rem / 15px | 400 | 1.5 | — |
| Body Small | 0.8125rem / 13px | 400 | 1.5 | — |
| Label Caps | 0.6875rem / 11px | 600 | 1.4 | 0.06em |

---

## Layout & Spacing

**Baseline grid:** 4px. All spacing values are multiples of 4.

**Layout structure:**
- `toolbar` — fixed top, full-width. Contains brand, drawing tools, and actions.
- `canvas area` — fills remaining viewport below the toolbar. The canvas is the product; chrome stays out of its way.
- `footer` — minimal strip, single line of text.

**Toolbar height:** 48px (desktop), 44px (mobile).

**Responsive breakpoints:**
- **≥ 769px:** Full layout with toolbar + canvas.
- **≤ 768px:** Mobile — toolbar adjusts, canvas fills screen.

**Spacing scale:** `xs=4px`, `sm=8px`, `md=16px`, `lg=24px`, `xl=40px`, `2xl=64px`.

---

## Shapes

- **Ink / interactive elements:** `sm` (4px) — small, precise.
- **Cards / panels:** `md` (8px) — calm, structured.
- **Large containers (canvas area):** `lg` (12px) — breathing room.
- **Pills / avatars:** `full` (9999px) — only if needed.

---

## Components

### Button Primary
High-emphasis action. Blue fill, white text. Used sparingly — ideally one per screen. Hover darkens to `#2563EB`, active to `#1D4ED8`. Disabled uses gray border for background with dark text for WCAG AA compliance.

### Button Secondary
Medium emphasis. Surface fill, border, dark text. Used for secondary actions alongside a primary button.

### Button Ghost
Low emphasis. No background; text color is muted. Used for toolbar tool icons. Hover reveals surface background.

### Button Icon
Square 32×32px, icon-only. Same ghost behavior as ghost button — transparent by default, surface on hover. Used in the toolbar for color pickers, eraser, clear, download.

### Slider (Brush Size)
Horizontal range input. Track is light gray; thumb is the tertiary blue. Thumb darkens on hover. The slider controls stroke width — a core drawing affordance. Range: 2px to 48px.

### Toolbar
Full-width bar, white background, 1px bottom border. Brand name on the left, tools in the center, actions on the right. Sticky positioning keeps it always visible.

### Canvas Area
Full-bleed white surface behind the `<canvas>` element. Rounded corners (12px) and a subtle border create the "paper on desk" feel. Minimum size of 320×320px prevents collapse on very small screens.

### Color Swatch
28×28px rounded square. Default: white fill with a border. Selected state: blue background (filled). The color palette is a fixed set of swatches in the toolbar.

### Focus Ring
2px blue outline, 2px offset on all interactive elements via `:focus-visible`. Accessibility: ensures keyboard navigation is usable.

### Overlay
Semi-transparent white wash with blur, used for modal/dialog backgrounds.

---

## Interaction States

| Element | Default | Hover | Active / Pressed | Disabled | Focus |
|---------|---------|-------|------------------|----------|-------|
| Button Primary | Blue fill, white text | Darker blue | Darkest blue | Gray fill, dark text | Blue ring |
| Button Secondary | Surface fill, border | Border darkens | Surface darkens | 40% opacity | Blue ring |
| Button Ghost/Icon | Transparent, muted text | Surface background | Darker surface | 40% opacity | Blue ring |
| Slider Thumb | Blue circle | Darker blue | Darkest blue | Gray thumb | Blue ring |
| Color Swatch | White + border | Slight shadow lift | — | — | Blue ring |

---

## Icon Set

**Lucide** (https://lucide.dev) — consistent 24px grid, 1.5px stroke weight.

Icons used in the toolbar:
- `pencil` — drawing/pen tool
- `eraser` — eraser tool
- `trash-2` — clear canvas
- `download` — save as PNG

All icons rendered at 18–20px within 32×32px button containers.

---

## Do's and Don'ts

- **Do** use token references (`{colors.tertiary}`) in component definitions instead of literal hex values.
- **Do** keep the canvas area visually dominant — toolbar and footer should recede.
- **Do** use the ghost/secondary/primary hierarchy so the user's eye always knows where the primary action is.
- **Don't** introduce additional accent colors beyond `#3B82F6`. If you need more states, use opacity or weight.
- **Don't** add decorative elements, gradients, or illustrations — this is a tool, not a marketing page.
- **Don't** nest component variants. `button-primary-hover` is a sibling entry, not a child of `button-primary`.