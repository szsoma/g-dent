---
version: alpha
name: Buddleskincare
description: |
  Buddle Skincare's design system embodies gentle luxury and botanical
  authenticity. The visual language prioritizes warmth, calm, and
  approachability through a carefully curated palette of earthy neutrals paired
  with a distinctive deep burgundy brand accent. The aesthetic combines refined
  serif typography for headings with clean, accessible sans-serif body copy,
  creating a sense of premium wellness that feels neither clinical nor
  overwrought. Soft, light backgrounds (#FBF8F5) and alternating surface bands
  provide visual rhythm without harshness. The color story—rooted in natural
  materials like terracotta, sage, and cream—reinforces the brand's commitment
  to botanical, dermatologist-approved formulations. Minimal shadows and flat
  surfaces emphasize clarity and trust, while playful accent colors appear
  sparingly as decorative flourishes on product imagery and badges, evoking the
  brand's baby-care heritage and gentle positioning.
source:
  url: "https://buddleskincare.com"
  pagesAnalyzed: 1
  extractedAt: 2026-10-12
  tokensMeasured: true
colors:
  primary: "#660013"
  canvas: "#FBF8F5"
  surface-alt: "#F4EDE6"
  ink: "#524B4B"
  hairline: "#000000"
  accent-1: "#133E36"
  accent-2: "#7A4A0A"
  accent-3: "#3C3489"
  neutral-1: "#FFFFFF"
typography:
  heading-lg:
    fontFamily: ivyjournal
    fontSize: 39.056px
    fontWeight: 300
    lineHeight: 1.11
    letterSpacing: 0px
  heading-lg-strong:
    fontFamily: "Instrument Sans"
    fontSize: 39.056px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0px
  heading-md:
    fontFamily: ivyjournal
    fontSize: 31.248px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm:
    fontFamily: ivyjournal
    fontSize: 24.96px
    fontWeight: 300
    lineHeight: 1.33
    letterSpacing: -0.62px
  heading-sm-2:
    fontFamily: ivyjournal
    fontSize: 24.96px
    fontWeight: 300
    lineHeight: 1.33
    letterSpacing: 0px
  heading-xs:
    fontFamily: ivyjournal
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0px
  body-xl:
    fontFamily: "Instrument Sans"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0px
  body-xl-loose:
    fontFamily: "Instrument Sans"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  body-lg:
    fontFamily: "Instrument Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-md:
    fontFamily: "Instrument Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0px
  body-md-tight:
    fontFamily: "Instrument Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0px
  body-md-uppercase:
    fontFamily: "Instrument Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.7px
    textTransform: uppercase
  button:
    fontFamily: "Instrument Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0px
  caption-sm:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0px
  caption-sm-tight:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px
  caption-sm-uppercase:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 1.2px
    textTransform: uppercase
  caption-sm-2:
    fontFamily: "Instrument Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0.6px
    textTransform: uppercase
  caption-xs:
    fontFamily: "Instrument Sans"
    fontSize: 10.08px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 8px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 36px
  section: 40px
  band: 44px
borderWidths:
  thin: 1px
shadows:
  sm: "oklab(0.322485 0.120975 0.0468844 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
  md: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px"
  lg: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px"
elevationStrategy: layered-micro
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#FBF8F5"
    surface: "#F4EDE6"
    surfaceRaised: "#EEE7E0"
    text: "#524B4B"
    textMuted: "#8D8887"
    border: "#000000"
    accent: "#660013"
    accentFg: "#FFFFFF"
    focusRing: "#660013"
    elevation: shadow
  dark:
    bg: "#130C0E"
    surface: "#211B1C"
    surfaceRaised: "#2D2729"
    text: "#F9F5F6"
    textMuted: "#A29C9E"
    border: "#393335"
    accent: "#F5002E"
    accentFg: "#0B0B0C"
    focusRing: "#CC0026"
    elevation: "border+surface"
  contrastFailures:
    - "light: muted on bg = 3.31:1 (needs 4.5:1)"
components:
  button-primary:
    typography: "{typography.body-lg}"
    textColor: "rgb(244, 241, 238)"
    height: 52px
    padding: "14px 14px 14px 14px"
    rounded: "{rounded.xs}"
    backgroundColor: "{colors.primary}"
  button-filled:
    typography: "{typography.body-lg}"
    textColor: "{colors.primary}"
    height: 52px
    padding: "14px 14px 14px 14px"
    rounded: "{rounded.xs}"
    backgroundColor: "rgb(244, 241, 238)"
  button-icon:
    typography: "{typography.body-lg}"
    textColor: "oklch(0.216 0.006 56.043)"
    height: 40px
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px"
    rounded: "3.35544e+07px"
    backgroundColor: "oklab(0.995564 0.00207609 0.00064826 / 0.9)"
  button-text:
    typography: "{typography.button}"
    textColor: "{colors.primary}"
    height: 40px
    padding: "0px 12px 0px 12px"
    rounded: "{rounded.xs}"
  button-text-sm:
    typography: "{typography.button}"
    textColor: "{colors.primary}"
    height: 36px
    padding: "6px 10px 6px 10px"
  badge-filled:
    typography: "{typography.body-lg}"
    textColor: "{colors.primary}"
    height: 40px
    padding: "8px 14px 8px 14px"
    rounded: "3.35544e+07px"
    backgroundColor: "rgb(255, 253, 253)"
  badge-filled-2:
    typography: "{typography.caption-xs}"
    textColor: "{colors.primary}"
    padding: "2px 10px 2px 10px"
    rounded: "3.35544e+07px"
    backgroundColor: "rgb(255, 253, 253)"
  navigation:
    typography: "{typography.body-lg}"
    textColor: "oklch(0.205 0 0)"
    height: 71px
  link:
    typography: "{typography.body-lg}"
    textColor: "oklch(0.205 0 0)"
    padding: "24px 24px 24px 24px"
    rounded: 12px
    backgroundColor: "rgb(244, 241, 238)"
  link-sm:
    typography: "{typography.body-lg}"
    textColor: "oklch(0.205 0 0)"
states:
  other-hover:
    target: other
    state: hover
    opacity: 1
  other-focus:
    target: other
    state: focus
    outline: "{colors.neutral-1} solid 2px"
    outlineColor: "{colors.neutral-1}"
    outlineWidth: 2px
  other-focus-visible:
    target: other
    state: focus-visible
    outlineWidth: 2px
  other-disabled:
    target: other
    state: disabled
    opacity: 0.4
  button-hover:
    target: button
    state: hover
    backgroundColor: "color-mix(in srgb, {colors.primary} 80%, transparent)"
  link-hover:
    target: link
    state: hover
    transform: "scale(1)"
breakpoints:
  - width: 375
    containerWidth: 335
    gridColumns: 2
    navLinksVisible: 1
    menuToggleVisible: true
    headingPx: 31
    bodyPx: 16
    sectionPaddingX: 0
  - width: 768
    containerWidth: 728
    gridColumns: 2
    navLinksVisible: 1
    menuToggleVisible: true
    headingPx: 31
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 960
    gridColumns: 5
    navLinksVisible: 5
    menuToggleVisible: true
    headingPx: 39
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1216
    gridColumns: 3
    navLinksVisible: 5
    menuToggleVisible: true
    headingPx: 39
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1376
    gridColumns: 3
    navLinksVisible: 5
    menuToggleVisible: true
    headingPx: 39
    bodyPx: 16
    sectionPaddingX: 0
coverage:
  statesFound: 61
  gradientsFound: 0
  rolesUnassigned: 4
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Buddle Skincare

## 1. Visual Theme & Atmosphere

Buddle Skincare's design system embodies gentle luxury and botanical authenticity. The visual language prioritizes warmth, calm, and approachability through a carefully curated palette of earthy neutrals paired with a distinctive deep burgundy brand accent. The aesthetic combines refined serif typography for headings with clean, accessible sans-serif body copy, creating a sense of premium wellness that feels neither clinical nor overwrought. Soft, light backgrounds (`{colors.canvas}` — `#FBF8F5`) and alternating surface bands provide visual rhythm without harshness. The color story—rooted in natural materials like terracotta, sage, and cream—reinforces the brand's commitment to botanical, dermatologist-approved formulations. Minimal shadows and flat surfaces emphasize clarity and trust, while playful accent colors appear sparingly as decorative flourishes on product imagery and badges, evoking the brand's baby-care heritage and gentle positioning.

**Key Characteristics**
- Warm, creamy neutral palette anchored by natural beige and ivory tones
- Deep burgundy (`{colors.primary}` — `#660013`) as the single dominant brand accent for CTAs and brand identity
- Serif headlines (Ivy Journal) paired with geometric sans-serif (Instrument Sans) for contrast and hierarchy
- Minimal, almost-imperceptible shadows; depth achieved through surface color blocking
- Rounded corners on interactive elements; sharp, image-like edges on product cards
- Generous whitespace and calm visual rhythm suitable for parental trust and botanical storytelling

## 2. Color Palette & Roles

### Primary

- **Brand / Primary CTA** (`{colors.primary}` — `#660013`): Deep burgundy used for primary buttons, active states, brand mark, and hero accents. Conveys trust, sophistication, and botanical warmth.

### Accent Colors

- **Accent – Sage** (`{colors.accent-1}` — `#133E36`): Muted teal-green; appears as a decorative accent in product imagery and brand iconography. No structural role in UI.
- **Accent – Terracotta** (`{colors.accent-2}` — `#7A4A0A`): Warm brown; decorative accent visible in product palette and illustrative elements. No functional role.
- **Accent – Indigo** (`{colors.accent-3}` — `#3C3489`): Deep purple; decorative accent present in product imagery and badge variants. No assigned UI role.

### Neutral Scale

- **Canvas** (`{colors.canvas}` — `#FBF8F5`): Warm off-white page background. Default surface for all content areas.
- **Surface Alt** (`{colors.surface-alt}` — `#F4EDE6`): Slightly warmer alternate surface for section bands and card backgrounds. Creates subtle visual separation.
- **Ink** (`{colors.ink}` — `#524B4B`): Warm charcoal-brown used for headings and primary body text. Softer than pure black, reinforcing the botanical, approachable tone.
- **Neutral – White** (`{colors.neutral-1}` — `#FFFFFF`): Pure white for button fills, text overlays, and high-contrast accents.

### Hairline & Borders

- **Hairline** (`{colors.hairline}` — `#000000`): Pure black reserved for 1px borders, dividers, and fine structural lines. Sparingly used.

## 3. Typography Rules

### Font Family

**Primary Display & Headings:** Ivy Journal  
Fallback: Georgia, serif

**Body, UI, & Navigation:** Instrument Sans  
Fallback: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display / Hero Heading | Ivy Journal | 39.056px | 300 | 1.11 | 0px | Large serif display; measured on h2 and heading contexts |
| Display – Strong | Instrument Sans | 39.056px | 400 | 1.25 | 0px | Bold display variant for emphasis |
| Heading – Large | Ivy Journal | 31.248px | 300 | 1.2 | 0px | Serif heading measured on mid-level heading tags |
| Heading – Medium | Ivy Journal | 24.96px | 300 | 1.33 | -0.62px | Serif with subtle negative tracking; measured on h4 |
| Heading – Medium Alt | Ivy Journal | 24.96px | 300 | 1.33 | 0px | Serif variant without tracking adjustment |
| Heading – Small | Ivy Journal | 16px | 300 | 1.5 | 0px | Serif for subsection titles |
| Body – XL | Instrument Sans | 20px | 400 | 1.38 | 0px | Large body copy for featured content |
| Body – XL Loose | Instrument Sans | 20px | 400 | 1.4 | 0px | Large body with relaxed line spacing |
| Body – Large | Instrument Sans | 16px | 400 | 1.5 | 0px | Standard body text and navigation links |
| Body – Medium | Instrument Sans | 14px | 400 | 1.43 | 0px | Secondary body copy, product descriptions |
| Body – Medium Tight | Instrument Sans | 14px | 400 | 1.38 | 0px | Compact body for space-constrained contexts |
| Body – Medium Uppercase | Instrument Sans | 14px | 400 | 1.43 | 0.7px | Labels and small UI text with letter-spacing |
| Button / UI | Instrument Sans | 16px | 400 | 1.38 | 0px | Action text and button labels |
| Caption – Small | Instrument Sans | 12px | 400 | 1.38 | 0px | Fine print and metadata |
| Caption – Small 2 | Instrument Sans | 12px | 400 | 1.38 | 0.6px | Small UI labels with spacing |
| Caption – Small Uppercase | Instrument Sans | 12px | 400 | 1.38 | 1.2px | Uppercase badges and tags |
| Caption – Small Tight | Instrument Sans | 12px | 400 | 1.33 | 0px | Compact caption variant |
| Caption – XS | Instrument Sans | 10.08px | 400 | 1.5 | 0px | Smallest text role; used sparingly |

### Principles

- **Serif-Sans Contrast:** Ivy Journal (light, 300-weight) handles all headings, creating a warm, editorial tone. Instrument Sans serves all body and interactive text, ensuring clarity and modern UI readability.
- **Negative Tracking on Display:** The medium heading (24.96px) includes -0.62px letter-spacing, a defining refinement that prevents the light serif from appearing loose.
- **Generous Line Height:** Body copy runs at 1.4–1.5 line height, supporting readability on small screens and reducing visual density.
- **Uppercase for Emphasis:** Captions and UI labels use letter-spacing (0.6px–1.2px) and uppercase transformation to signal secondary hierarchy and button states.
- **No Script or Decorative Fonts:** Typography emphasizes approachability and trust, avoiding overly stylized faces.

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `{colors.primary}` (`#660013`)
- Text Color: `{colors.neutral-1}` (`#FFFFFF`)
- Padding: `{spacing.md}` (`16px`)
- Border Radius: `{rounded.xs}` (`8px`)
- Font: `{typography.button}` (16px, weight 400)
- Border: None
- Box Shadow: None
- Hover: `background-color: color-mix(in srgb, rgb(102, 0, 19) 80%, transparent)` (darker blend)

**Secondary / Filled Button**
- Background: `{colors.surface-alt}` (`#F4EDE6`)
- Text Color: `{colors.primary}` (`#660013`)
- Padding: `{spacing.md}` (`16px`)
- Border Radius: `{rounded.xs}` (`8px`)
- Font: `{typography.button}` (16px, weight 400)
- Border: None
- Box Shadow: None
- Hover: `background-color: color-mix(in oklab, var(--color-bg) 80%, transparent)` (lighter surface)

**Text Button**
- Background: Transparent
- Text Color: `{colors.primary}` (`#660013`)
- Padding: `{spacing.xs}` (`8px`) `{spacing.sm}` (`12px`)
- Border Radius: `{rounded.xs}` (`8px`)
- Font: `{typography.button}` (16px, weight 400)
- Border: `1px solid {colors.primary}` (`#660013`)
- Box Shadow: `rgb(102, 0, 19) 0px 0px 0px 1px`
- Hover: `border-color` and `background-color` shift to darker blend

**Text Button – Small**
- Background: Transparent
- Text Color: `{colors.primary}` (`#660013`)
- Padding: `{spacing.xs}` (`8px`) `{spacing.xs}` (`8px`)
- Border Radius: `{rounded.none}` (`0px`)
- Font: `{typography.body-lg}` (16px, weight 400)
- Border: None
- Box Shadow: None
- Hover: `opacity: 0.75`

**Icon Button**
- Background: Semi-transparent white (`oklab(0.995564 0.00207609 0.00064826 / 0.9)`)
- Text Color: `oklch(0.216 0.006 56.043)` (warm gray)
- Width / Height: `40px`
- Padding: `0px`
- Border Radius: `{rounded.full}` (`9999px`)
- Font: `{typography.button}`
- Box Shadow: `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`
- Hover: `opacity: 1`

### Badges

**Filled Badge – Large**
- Background: `rgb(255, 253, 253)` (off-white)
- Text Color: `{colors.primary}` (`#660013`)
- Padding: `{spacing.xs}` (`8px`) `{spacing.md}` (`16px`)
- Height: `40px`
- Border Radius: `{rounded.full}` (`9999px`)
- Font: `{typography.button}` (16px, weight 400)
- Border: None
- Use: Promotional labels (e.g., "Best Seller", "Gift Ready")

**Filled Badge – Small**
- Background: `rgb(255, 253, 253)` (off-white)
- Text Color: `{colors.primary}` (`#660013`)
- Padding: `{spacing.xxs}` (`4px`) `{spacing.xs}` (`8px`)
- Height: Auto
- Border Radius: `{rounded.full}` (`9999px`)
- Font: `{typography.caption-xs}` (10.08px, weight 400)
- Border: None
- Use: Inline product tags and metadata

### Cards & Containers

**Product Card**
- Background: `{colors.canvas}` (`#FBF8F5`)
- Border Radius: `{rounded.none}` (`0px`)
- Padding: `{spacing.xl}` (`24px`)
- Border: None
- Box Shadow: None
- Hover: `background-color` shifts; no elevation increase
- Use: Product grid items; clean, sharp presentation

**Section Band / Alt Surface**
- Background: `{colors.surface-alt}` (`#F4EDE6`)
- Border Radius: `{rounded.none}` (`0px`)
- Padding: `{spacing.band}` (`44px`) top/bottom; `0px` left/right
- Border: None
- Box Shadow: None
- Use: Alternating section backgrounds to create visual rhythm

### Inputs & Forms

**Text Input / Form Field**
- Background: `{colors.neutral-1}` (`#FFFFFF`)
- Text Color: `{colors.ink}` (`#524B4B`)
- Padding: `{spacing.md}` (`16px`)
- Border: `1px solid {colors.hairline}` (`#000000`)
- Border Radius: `{rounded.xs}` (`8px`)
- Font: `{typography.body-lg}` (16px, weight 400)
- Focus: `outline: 2px solid transparent; border-color: var(--color-berry)` (brand accent)
- Disabled: `opacity: 0.4–0.5`

### Navigation

**Navigation Bar**
- Background: Transparent
- Text Color: `{colors.ink}` (`#524B4B`)
- Height: `71px`
- Padding: `0px`
- Border Radius: `0px`
- Font: `{typography.body-lg}` (16px, weight 400)
- Border: None
- Box Shadow: None
- Layout: Flex, horizontal link list; links collapse to icon menu toggle at `768px` breakpoint

**Navigation Link**
- Text Color: `{colors.ink}` (`#524B4B`)
- Hover: `color` and `background-color` shift with transparency blend
- Active: Underline or background highlight (measured in interaction data)
- Padding: `{spacing.md}` (`16px`) horizontal

## 5. Layout Principles

### Spacing System

Buddle uses an 8px-based modular scale:

- `{spacing.xxs}` = `4px` – Micro-adjustments between elements
- `{spacing.xs}` = `8px` – Tight spacing for icon/text pairs, badge padding
- `{spacing.sm}` = `12px` – Small gaps, form field labels
- `{spacing.md}` = `16px` – Default padding for buttons, input fields, body text margins
- `{spacing.lg}` = `20px` – Medium gaps between sections
- `{spacing.xl}` = `24px` – Card internal padding, subsection spacing
- `{spacing.xxl}` = `32px` – Larger section breaks
- `{spacing.xxxl}` = `36px` – Extra-large gaps
- `{spacing.section}` = `40px` – Soft section padding
- `{spacing.band}` = `44px` – Full-width section band padding (top/bottom)

**Usage Context:**
- Typography margins: `{spacing.lg}`–`{spacing.xl}`
- Button/form padding: `{spacing.md}`
- Card internal spacing: `{spacing.xl}`
- Section breaks: `{spacing.section}`–`{spacing.band}`

### Grid & Container

- **Max Content Width:** `1376px` (at 1440px viewport)
- **Section Padding:** `0px` horizontal (full-width bands); `{spacing.band}` (`44px`) vertical
- **Column Layout:**
  - Mobile (375px): Single-column, content ~335px
  - Tablet (768px): 2-column grid, content ~728px
  - Desktop (1024px+): 3–5-column grid, content ~960px–1376px
- **Alternating Section Pattern:** Content sections alternate between `{colors.canvas}` and `{colors.surface-alt}` to create visual rhythm without borders

### Whitespace Philosophy

Whitespace is generous and intentional, reflecting the brand's commitment to calm, clarity, and botanical authenticity. Sections breathe with `{spacing.band}` (`44px`) of vertical padding. Horizontal gaps never pinch—even on mobile, cards and content maintain breathing room. This restraint avoids visual clutter and invites users to focus on product imagery and gentle copy. Light backgrounds (`{colors.canvas}` and `{colors.surface-alt}`) are close in value, so contrast comes from shape and typography, not harsh color shifts.

### Border Radius Scale

- `{rounded.none}` = `0px` – Product cards, images, section bands (sharp, clean presentation)
- `{rounded.xs}` = `8px` – Interactive elements: buttons, text inputs, small cards
- `{rounded.full}` = `9999px` – Badges, icon buttons, pill-shaped UI elements

**Component Contexts:**
- Images: `{rounded.none}` (sharp edge preserves product integrity)
- Buttons: `{rounded.xs}` (soft corner, not overly rounded)
- Badges: `{rounded.full}` (fully rounded pill for emphasis)
- Card corners: `{rounded.none}` (crisp, rectangular product presentation)
- Input fields: `{rounded.xs}` (matches button radius for consistency)

### Border Widths

- **Thin:** `1px` – Default border weight for inputs, text buttons, and hairline dividers
- No thicker stroke weights are used in the system; focus remains on minimalist, refined presentation

## 6. Depth & Elevation

Buddle's depth strategy prioritizes **color blocking over shadow**. Surfaces are distinguished primarily by background color shifts between `{colors.canvas}` and `{colors.surface-alt}`, rather than layered shadows. Where shadows appear, they are minimal and nearly imperceptible, used only on interactive elements like icon buttons and dropdowns.

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow; solid background | Product cards, section bands, buttons (default) |
| Micro (sm) | `rgb(102, 0, 19) 0px 0px 0px 1px` (brand accent hairline) | Text button border emphasis |
| Subtle (md) | `oklab(0.322485 0.120975 0.0468844 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` | Dropdowns, overlays (rarely used) |
| Soft (lg) | `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` | Modals, high-elevation containers |
| Delicate (xl) | `rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | Icon buttons, small interactive lifts |

**Shadow Philosophy:**
Shadows are nearly translucent and applied sparingly—mostly to convey hover states and interactive affordance. The system favors surface color and typography contrast over dramatic depth. This restraint reinforces the botanical, approachable brand identity and avoids visual heaviness.

### Opacity Levels

- **50% (`0.50`)**: Used for subtle hover and disabled states
- **60% (`0.60`)**: Used for secondary interactions and overlays

### Z-index / Layering

- **Base:** `1–3` – Content, cards, section bands
- **Dropdown:** `10–50` – Menus, popovers, expanded navigation
- **Sticky:** `100` – Sticky headers, persistent navigation, floating CTAs
- **Modal / Overlay:** Not explicitly layered in extracted data; inferred to sit above dropdown stack

## 7. Do's and Don'ts

### Do

- **Use serif headings (Ivy Journal, 300 weight) for all h1–h4 contexts** to create warmth and editorial authority. Pair with sans-serif body copy for maximum readability.
- **Leverage `{colors.primary}` (`#660013`) for all primary CTAs, links, and brand accents.** It is the single dominant UI color and should be unmissable.
- **Apply `{spacing.band}` (`44px`) vertical padding to full-width section bands.** This creates the signature visual rhythm and breathing room.
- **Use `{colors.surface-alt}` (`#F4EDE6`) for alternating section backgrounds** to create subtle, organic rhythm without harsh borders.
- **Maintain `{rounded.xs}` (`8px`) corners on all interactive elements** (buttons, inputs, small cards) for visual consistency.
- **Keep shadows nearly invisible**—use only on icon buttons and dropdowns; rely on color and typography for depth.
- **Use badges (`{rounded.full}`) for promotional labels** ("Best Seller", "Gift Ready", "New") to draw attention without overwhelming.
- **Test button hover states with color-mix blends**—primary button hover uses 80% opacity primary color blended with transparent, softening the accent.
- **Respect minimum touch targets: 40px × 40px for icon buttons, 52px height for standard buttons.**
- **Stack badges and metadata in uppercase (`{typography.caption-sm-uppercase}`)** with `1.2px` letter-spacing for clear secondary hierarchy.

### Don't

- **Don't use sans-serif for headings.** The serif/sans contrast is foundational to brand identity.
- **Don't apply rounded corners to product images or full-width section backgrounds.** Keep these sharp (`{rounded.none}`) for editorial clarity.
- **Don't invent new accent colors beyond the four-color palette** (`{colors.primary}`, `{colors.accent-1}`, `{colors.accent-2}`, `{colors.accent-3}`). Accent colors are decorative; don't assign them functional roles in UI.
- **Don't use pure black (`#000000`) for body text.** Use `{colors.ink}` (`#524B4B`) instead for warmth and readability on cream backgrounds.
- **Don't layer heavy shadows or gradients.** Shadows should be barely perceptible (`0.1` opacity); gradients don't appear in the system.
- **Don't increase button border-radius beyond `{rounded.xs}` (`8px`).** The design avoids pill-shaped buttons outside of badges and icon buttons.
- **Don't omit letter-spacing on caption and button text.** Tracking (0.6px–1.2px) is intentional and reinforces UI hierarchy.
- **Don't nest more than two levels of interactive depth** (base content → dropdown → modal). The system prioritizes simplicity and clarity.
- **Don't use hover states that dramatically change color.** Blends (color-mix at 70–80% opacity) are preferred over flat color swaps to maintain visual continuity.
- **Don't resize typography below `{typography.caption-xs}` (`10.08px`).** Smaller text sacrifices legibility and accessibility.

## 8. Responsive Behavior

### Breakpoints

| Viewport | Content Width | Grid Columns | Menu Visibility | Heading Size | Body Size | Notes |
|---|---|---|---|---|---|---|
| 375px (Mobile) | 335px | 2 | Menu toggle visible | 31px (Ivy Journal, 300) | 16px | Single-column layout; nav links collapse to hamburger |
| 768px (Tablet) | 728px | 2 | Menu toggle visible | 31px | 16px | Two-column product grid; nav links remain collapsed |
| 1024px (Desktop) | 960px | 5 | 5 nav links visible | 39px (Ivy Journal, 300) | 16px | Full navigation revealed; larger heading sizes |
| 1280px (Large) | 1216px | 3 | 5 nav links visible | 39px | 16px | Max-width containers; expanded horizontal breathing room |
| 1440px (XL) | 1376px | 3 | 5 nav links visible | 39px | 16px | Maximum content width reached |

**Derivation Notes:**
- Nav collapse occurs between 768px and 1024px. At 768px, the menu toggle is visible; at 1024px, 5 nav links are displayed inline.
- Heading typography changes from 31px to 39px at the 1024px breakpoint (large display serif).
- Body typography remains 16px across all breakpoints.
- Product grid shifts from 2-column (375px–768px) to 3–5-column (1024px+).

### Touch Targets

- **Minimum tap target:** `40px × 40px` (icon buttons, link hotspots)
- **Standard button height:** `52px` (primary and secondary buttons)
- **Link/card hit area:** `{spacing.xl}` (`24px`) padding minimum around interactive elements
- **Form input height:** `52px` (matches button for visual consistency)

### Collapsing Strategy

- **Mobile (375px–767px):**
  - Single-column layout; content width: ~335px
  - Navigation collapses to icon button (hamburger menu toggle)
  - Full-width section bands remain; padding shrinks only if needed
  - Product cards stack vertically; image previews scale down
  - Button widths auto-size to fill available space or shrink to content width

- **Tablet (768px–1023px):**
  - Two-column product grid
  - Navigation toggle remains active (menu not inline)
  - Content width: ~728px
  - Section bands remain full-width with `{spacing.band}` padding
  - Buttons may pair side-by-side or stack depending on context

- **Desktop (1024px+):**
  - 3–5 column grid; full navigation revealed inline
  - Content width reaches max (~1376px at 1440px viewport)
  - All section bands and spacing scale proportionally
  - Hero imagery and product displays expand to fill grid
  - Button and form widths stabilize at fixed or max-content sizes

## 9. Agent Prompt Guide

### Quick Color Reference

Use this condensed mapping when implementing UI:

- **Primary CTA / Brand Accent:** `{colors.primary}` (`#660013`)
- **Page Background:** `{colors.canvas}` (`#FBF8F5`)
- **Alternate Section Band:** `{colors.surface-alt}` (`#F4EDE6`)
- **Heading & Body Text:** `{colors.ink}` (`#524B4B`)
- **Button Fill / Text Overlay:** `{colors.neutral-1}` (`#FFFFFF`)
- **Borders & Dividers:** `{colors.hairline}` (`#000000`, 1px only)
- **Decorative Accents (non-functional):** `{colors.accent-1}` (`#133E36`), `{colors.accent-2}` (`#7A4A0A`), `{colors.accent-3}` (`#3C3489`)

### Iteration Guide

1. **Typography First:** All headings use Ivy Journal (300 weight, serif). All body and UI text uses Instrument Sans (400 weight, sans-serif). Never swap these roles.
2. **Color Hierarchy:** Primary (`#660013`) is the only UI accent color. All other colors are either neutral or decorative. Limit palette; avoid color overload.
3. **Spacing Discipline:** Use the 8px scale (`{spacing.xxs}`–`{spacing.band}`) consistently. No custom gaps outside this set.
4. **Border Radius Rules:** Buttons and inputs = `8px`; badges = `9999px` (pill); cards/images = `0px` (sharp). Follow this religiously.
5. **Shadow Minimalism:** Avoid heavy shadows. Use color blocking (background shifts) for depth. Reserve shadows for icon buttons and dropdowns only—and keep them faint (`0.1` opacity).
6. **Responsive Breakpoints:** Nav collapses at 768px. Heading size increases at 1024px. Grid columns adjust at three tiers (2 → 5 → 3). Follow the measured breakpoints exactly.
7. **Interactive States:** Hover = lighter color blend (`color-mix` at 70–80% opacity), not a flat color swap. Focus = brand-color outline (`2px`). Disabled = reduced opacity (`0.4–0.5`).
8. **Button Styles:** Primary (solid burgundy + white text), Secondary (surface-alt background + burgundy text), Text (transparent + border), Icon (semi-transparent white + gray icon).
9. **Letter-Spacing on UI:** Captions and button labels include tracking (`0.6px–1.2px`). Don't omit; it defines the refined, botanical aesthetic.
10. **Touch Targets:** Minimum `40px × 40px` for all interactive elements. Standard buttons = `52px` tall. Form inputs = `52px` tall. Respect these minimums for accessibility.

## 10. Known Gaps

- **Interaction states not fully captured:** The extraction identified some hover, focus, and disabled states in the CSS, but not all possible permutations (e.g., visited link styles, loading states, error feedback on form fields) were observable. Assume the styles listed under Section 4 are exhaustive; others should defer to brand guidelines or be derived from the primary interaction patterns provided.
- **No semantic status colors (error, success, warning, info):** The site does not expose a dedicated error/success/warning palette. If validation feedback is needed, extend the system by defining these roles relative to the primary accent or neutral scale; they are not pre-built into this extraction.
- **Four accent colors lack assigned roles:** `{colors.accent-1}` (sage), `{colors.accent-2}` (terracotta), and `{colors.accent-3}` (indigo) appear only in decorative product imagery and badge variants. No structural UI role was measured for these. Treat them as a decorative palette only; do not assign them functional meaning.
- **No dark mode or theme variants:** Only one theme (light) was extracted. The extraction data does not include measurements of a dark-mode counterpart or alternate color scheme. If dark mode is required, it is outside the scope of this document.
- **Gradients and decorative meshes not observed:** The system relies on flat colors and subtle borders. No gradients, meshes, or blended backgrounds were found on the measured page.
- **Cross-origin stylesheets partially unreadable:** Some CSS declarations may exist on linked stylesheets or dynamic styles that the extraction tool could not fully access. Component styling is based on inline and readable external styles only.
- **Surfaces behind authentication not visited:** The analysis covered only publicly visible pages. Logged-in experiences, account settings, and post-purchase flows were not captured.
- **Scrolling and animation behavior not specified:** The document captures static styles only. Scroll animations, transitions, and keyframe animations are not included; infer from standard web patterns or consult brand motion guidelines separately.
- **Icon library not inventoried:** Icon usage and sizing were observed (e.g., icon buttons at `40px`), but the specific icon set is not catalogued here. Reference brand asset repositories for the approved icon collection.
