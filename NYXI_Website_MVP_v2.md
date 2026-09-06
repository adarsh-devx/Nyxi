# NYXI — Website MVP v2
## Neo-Brutalist Marketing Website Specification

> **Status:** MVP specification  
> **Product:** NYXI Chrome Extension  
> **Primary product:** High-quality live wallpapers for Chrome New Tab  
> **Extension UI:** Glassmorphism  
> **Website UI:** Neo-Brutalism + handwritten typography  
> **Design reference:** neobrutalism.dev + user's supplied visual direction

---

# 01. Product Context

## What is NYXI?

NYXI is a Chrome extension that transforms the browser's New Tab into a visually rich experience using high-quality live wallpapers.

The extension itself uses a **glassmorphism-based interface**.

The marketing website should deliberately use a different visual language:

> **Website = Neo-Brutalist**
>
> **Extension = Glassmorphism**

This contrast is intentional and should become part of the product identity.

### Brand idea

**NYXI makes the boring New Tab feel alive.**

Possible positioning:

> **Make your new tab alive.**

Alternative:

> **Your browser. Your atmosphere.**

Alternative:

> **A living wallpaper for every new tab.**

The final tagline should be selected after visual iteration.

---

# 02. Design Reference

The website should use the current NeoBrutalism component ecosystem as a **design-system reference**, not as a template to copy.

The current neobrutalism.dev project describes itself as a collection of Neo-Brutalist components based largely on shadcn/ui, with Tailwind support and customizable styling. The current project uses CSS-variable-based components and has moved to Tailwind v4 / React 19. citeturn1search8turn1search4turn1search2

Reference:

https://www.neobrutalism.dev/

Useful component categories include:

- Button
- Card
- Input
- Textarea
- Badge
- Tabs
- Dialog
- Drawer
- Navigation Menu
- Menubar
- Image Card
- Marquee
- Accordion
- Tooltip
- Sheet
- Carousel

The library also provides dedicated decorative components such as Stars. citeturn1search3turn1search5

### Important

Do not blindly install every component.

Only use components that solve a real UI requirement.

---

# 03. Core Design Philosophy

The website should feel:

- Bold
- Playful
- Raw
- Interactive
- Slightly imperfect
- High contrast
- Modern
- Visual
- Memorable

It should NOT feel:

- Corporate
- Generic SaaS
- Minimalist Apple clone
- Glassmorphism
- Overly polished
- Full of gradients
- Like a component-library demo

### One-line visual rule

> **Clean structure + brutalist components + handwritten personality + cinematic wallpaper visuals.**

---

# 04. Typography

## Primary Font

Use a handwritten font throughout the majority of the marketing website.

The reference sketch's personality should be preserved.

Recommended candidates:

### Option A — Patrick Hand
Most balanced.

### Option B — Kalam
More expressive.

### Option C — Caveat
More casual.

### Option D — Comic Neue
More playful and readable.

### Selection rule

Do not choose the font only because it looks "handwritten".

Choose the one that remains readable at:

- Hero heading sizes
- Navigation sizes
- Buttons
- Cards
- Mobile screens

The website should feel handwritten, **not childish**.

---

# 05. Typography System

Suggested hierarchy:

```text
Hero Heading
font-size: 72–120px desktop

Section Heading
font-size: 48–72px

Card Heading
font-size: 28–40px

Body
font-size: 18–22px

Navigation
font-size: 16–20px

Button
font-size: 18–22px
```

Use responsive `clamp()` values rather than fixed sizes.

Example:

```css
font-size: clamp(3.5rem, 8vw, 8rem);
```

---

# 06. Color Direction

Primary website direction:

```text
Background
#F7F6F0

Foreground
#111111

Border
#111111

Secondary Surface
#FFFFFF

Accent
Choose ONE primary accent.
```

Possible accent directions:

```text
Acid Green
Electric Blue
Bright Yellow
Orange
Purple
```

Do not use all of them.

### Recommendation

Start with:

**Off-white + black + one aggressive accent.**

The wallpaper previews will provide additional color.

---

# 07. Neo-Brutalist Rules

The interface should use:

- Thick borders
- Hard offset shadows
- Strong contrast
- Slightly rounded corners
- Large typography
- Oversized buttons
- Asymmetric composition
- Intentional visual interruptions
- Sticker-like labels
- Slight rotations
- Strong hover states

The current NeoBrutalism styling system exposes variables for border radius, box-shadow offsets, colors and typography, which fits this direction. citeturn1search1

### Avoid

- Huge blur effects
- Soft drop shadows
- Excessive rounded cards
- Excessive gradients
- Every element being centered
- Every section looking identical

---

# 08. Global Layout

Desktop:

```text
┌──────────────────────────────────────────────────────────┐
│                         NAVBAR                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                       HERO                               │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                    WALLPAPER SHOWCASE                    │
├──────────────────────────────────────────────────────────┤
│                       FEATURES                           │
├──────────────────────────────────────────────────────────┤
│                    HOW NYXI WORKS                        │
├──────────────────────────────────────────────────────────┤
│                 EXTENSION SHOWCASE                       │
├──────────────────────────────────────────────────────────┤
│                    FINAL CTA                             │
├──────────────────────────────────────────────────────────┤
│                      FOOTER                              │
└──────────────────────────────────────────────────────────┘
```

The entire page should feel like one connected poster rather than a collection of independent SaaS sections.

---

# 09. Navbar

## Layout

Left:

```text
NYXI
```

Center/right:

```text
Wallpapers
Features
How it works
```

CTA:

```text
GET NYXI →
```

### Visual treatment

Navbar should look like a Neo-Brutalist component.

Suggested:

- Black border
- White/off-white surface
- Hard shadow
- Handwritten typography
- Sticky/floating on desktop

### Mobile

```text
NYXI                       ☰
```

Open navigation inside a Drawer.

---

# 10. Hero Section

This is the most important section.

## Primary headline

Possible direction:

> **YOUR NEW TAB  
> IS BORING.**

Then:

> **LET'S FIX THAT.**

Alternative:

> **MAKE YOUR  
> NEW TAB ALIVE.**

The final copy should be selected based on the visual composition.

---

# 11. Hero Composition

Do NOT create a conventional centered SaaS hero.

Use asymmetric composition.

Example:

```text
NYXI

YOUR NEW TAB
IS BORING.

        ┌───────────────────────────────┐
        │                               │
        │       LIVE WALLPAPER          │
        │                               │
        │        Chrome New Tab         │
        │                               │
        └───────────────────────────────┘

[ ADD TO CHROME → ]

                         LIVE
                         BEAUTIFUL
                         YOURS
```

The browser preview should overlap the hero layout.

---

# 12. Hero Browser Mockup

The hero should show the actual product.

The browser mockup contains:

- Chrome-style top bar
- Live wallpaper
- NYXI interface
- Time/date if the extension supports it
- Search/shortcuts if the extension supports them

Do not invent features that don't exist.

### Important

The mockup should use **real NYXI screenshots/video whenever available**.

Fake UI will make the product feel dishonest.

---

# 13. Hero Micro-Interactions

Possible interactions:

### Browser preview

On pointer movement:

- Slight 3D rotation.
- Small translation.
- Wallpaper continues moving.

### CTA

Hover:

```text
Button moves -2px
Shadow becomes visually compressed
```

Click:

```text
Button moves toward shadow
```

### Sticker

Small decorative labels can rotate slightly on hover.

Keep animations fast and purposeful.

---

# 14. Social Proof Strip

Immediately below hero.

Possible content:

```text
LIVE WALLPAPERS
4K QUALITY
CHROME EXTENSION
FREE TO USE
```

These can move horizontally using a marquee.

The NeoBrutalism ecosystem includes a Marquee component that can be used for this type of repeated visual strip. citeturn1search3

Do not claim:

- "10,000+ users"
- "1M downloads"
- "1000+ wallpapers"

unless those numbers are real.

---

# 15. Problem Section

Headline:

> **WHY SHOULD YOUR NEW TAB LOOK DEAD?**

Visual:

```text
BORING TAB

[ plain browser screenshot ]

↓

NYXI

[ live wallpaper screenshot ]
```

This section establishes the transformation.

---

# 16. Wallpaper Showcase

This is one of the most important sections because wallpaper is the actual product.

## Layout

Use asymmetric Image Cards.

Example:

```text
┌──────────────────────┐
│                      │
│      WALLPAPER       │
│                      │
│                      │
└──────────────────────┘

      ┌────────────────────────────┐
      │                            │
      │          WALLPAPER         │
      │                            │
      └────────────────────────────┘

┌───────────────────────┐
│                       │
│       WALLPAPER       │
│                       │
└───────────────────────┘
```

Different card sizes are encouraged.

---

# 17. Wallpaper Categories

Only show categories that actually exist in NYXI.

Potential categories:

```text
ANIME
NATURE
SPACE
CYBERPUNK
GAMING
ABSTRACT
MINIMAL
AESTHETIC
```

If the extension does not currently contain a category, do not advertise it.

---

# 18. Wallpaper Interaction

Desktop:

Hover on wallpaper:

```text
Preview →
```

Possible:

- Scale image slightly
- Reveal title
- Reveal category
- Show play icon
- Show "Use this" if installation/customization flow supports it

Do not make every card constantly animate.

---

# 19. Features Section

Headline:

> **SMALL EXTENSION. BIG DIFFERENCE.**

Use 4 feature blocks.

Suggested:

### 01 — LIVE

High-quality animated wallpapers for your New Tab.

### 02 — BEAUTIFUL

A carefully designed interface instead of the default blank tab.

### 03 — FAST

Designed to remain smooth while you browse.

### 04 — YOURS

Customize the experience around your taste.

Only keep claims that are technically true.

---

# 20. Feature Layout

Avoid a generic 4-card grid.

Use a staggered layout:

```text
┌──────────────────────────────┐
│ 01                           │
│ LIVE                         │
│                              │
│ High-quality live wallpapers │
└──────────────────────────────┘

                    ┌──────────────────────┐
                    │ 02                   │
                    │ BEAUTIFUL            │
                    └──────────────────────┘

┌──────────────────────┐
│ 03                   │
│ FAST                 │
└──────────────────────┘

                    ┌──────────────────────┐
                    │ 04                   │
                    │ YOURS                │
                    └──────────────────────┘
```

---

# 21. "How It Works" Section

Three steps.

```text
01
INSTALL
Add NYXI to Chrome.

02
CHOOSE
Pick your atmosphere.

03
ENJOY
Open a new tab and watch it come alive.
```

Use numbered Neo-Brutalist cards or large typographic blocks.

---

# 22. Extension Showcase

This section connects the website's brutalist design with NYXI's glassmorphism extension.

Headline:

> **BRUTAL OUTSIDE.  
> GLASS INSIDE.**

Show:

```text
WEBSITE
Neo-Brutalism
       ↓
       ↓
       ↓
NYXI EXTENSION
Glassmorphism
```

Then show a large actual extension screenshot/video.

This contrast should become one of the website's strongest visual moments.

---

# 23. Glassmorphism Showcase

The extension preview should NOT be styled like the rest of the website.

It should look exactly like NYXI.

Use:

- Actual extension UI
- Actual wallpaper
- Glass panels
- Blur
- Translucency
- Actual controls

The website frames the product; it should not redesign the product.

---

# 24. Interactive Demo

If technically possible, create a small interactive mock New Tab.

User can:

- Change wallpaper.
- Switch preview.
- Toggle play/pause.
- See glass UI.

If this becomes complex, replace it with a short high-quality video.

For MVP:

**Video is preferred over building a fake interactive product.**

---

# 25. Performance Section

Only include if NYXI has actual performance optimization worth discussing.

Possible copy:

> **BEAUTIFUL DOESN'T HAVE TO MEAN SLOW.**

Then show:

```text
LIVE WALLPAPER
       +
SMOOTH BROWSING
       =
NYXI
```

Do not publish fake FPS or CPU/RAM claims.

If performance benchmarks exist, show actual measurements.

---

# 26. Installation CTA

Large section.

Headline:

> **READY TO MAKE  
> YOUR TAB ALIVE?**

CTA:

```text
┌─────────────────────────────┐
│     ADD NYXI TO CHROME  →   │
└─────────────────────────────┘
```

Secondary:

```text
Explore wallpapers
```

---

# 27. Footer

Minimal.

```text
NYXI

Make your new tab alive.

PRODUCT
Wallpapers
Features
How it works

SUPPORT
FAQ
Contact

LEGAL
Privacy
Terms

© 2026 NYXI
```

Do not overload the footer.

---

# 28. Recommended Neo-Brutalism Components

## High priority

### Button
Use for:

- Add to Chrome
- Explore
- Preview
- Install

The current library provides multiple button variants including default, reverse, no-shadow, neutral and icon variations. citeturn0search2

### Card
Use for:

- Feature blocks
- Information sections
- Small supporting content

The current Card component follows the Neo-Brutalist/shadcn approach and supports structured header/content/footer composition. citeturn0search1

### Image Card
Use for:

- Wallpaper showcase

### Badge
Use for:

- LIVE
- 4K
- NEW
- CATEGORY

### Marquee
Use for:

- Feature strip
- Wallpaper category strip
- Small brand statements

### Tabs
Use only if wallpaper filtering genuinely benefits from tabs. The library provides Tabs for switching between content panels. citeturn0search3

### Drawer
Use for:

- Mobile navigation

### Dialog
Use for:

- Wallpaper preview
- Optional installation explanation

### Tooltip
Use for:

- Icon-only controls

### Stars / decorative shapes
Use sparingly as visual accents.

---

# 29. Component Usage Rule

The component library is a foundation.

It is NOT the design.

The implementation should customize:

- Size
- Typography
- Border thickness
- Shadow offset
- Colors
- Spacing
- Rotation
- Animation

to make the components feel like **NYXI**.

---

# 30. Suggested Component Architecture

```text
src/
│
├── components/
│   ├── ui/
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── badge.jsx
│   │   ├── marquee.jsx
│   │   ├── tabs.jsx
│   │   ├── drawer.jsx
│   │   ├── dialog.jsx
│   │   └── tooltip.jsx
│   │
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── BrowserMockup.jsx
│   ├── MarqueeStrip.jsx
│   ├── ProblemSection.jsx
│   ├── WallpaperGallery.jsx
│   ├── WallpaperCard.jsx
│   ├── FeaturesSection.jsx
│   ├── HowItWorks.jsx
│   ├── ExtensionShowcase.jsx
│   ├── FinalCTA.jsx
│   └── Footer.jsx
│
├── data/
│   ├── wallpapers.js
│   └── features.js
│
├── assets/
│   ├── wallpapers/
│   ├── screenshots/
│   └── branding/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 31. Data Structure

Wallpaper:

```js
{
  id: "wallpaper-01",
  title: "Cyber City",
  category: "Cyberpunk",
  image: "/wallpapers/cyber-city.webp",
  video: "/wallpapers/cyber-city.mp4",
  isNew: true
}
```

Feature:

```js
{
  id: 1,
  number: "01",
  title: "LIVE",
  description: "High-quality animated wallpapers for your New Tab."
}
```

Do not hardcode repeated UI content directly inside JSX.

---

# 32. Tech Stack

Recommended:

```text
React
Vite
Tailwind CSS v4
NeoBrutalism components
shadcn/ui primitives where required
Lucide React
```

The current NeoBrutalism project is updated for Tailwind v4 and React 19, so the project should follow the current component version rather than old v3 instructions. citeturn1search2turn1search6

---

# 33. Installation Strategy

Initialize the project normally.

Then add only the NeoBrutalism components actually required.

The current installation documentation says the latest components use CSS variables and can be installed through the shadcn CLI or manually. citeturn1search4

Do not copy the entire component library into the project.

---

# 34. Animation System

Use animation with purpose.

## Page entrance

```text
opacity: 0 → 1
translateY: 20px → 0
```

## Card hover

```text
translate(-2px, -2px)
```

## Button press

```text
translate(2px, 2px)
shadow reduces
```

## Wallpaper hover

```text
scale(1.03)
```

## Marquee

Slow continuous movement.

## Decorative elements

Occasional subtle rotation.

---

# 35. Scroll Behavior

The page should feel dynamic while scrolling.

Potential:

- Section reveal
- Slight image movement
- Sticky elements
- Horizontal marquee
- Browser mockup entering viewport

Do NOT animate every element.

If the user notices the animation more than the product, it is too much.

---

# 36. Mobile Design

Desktop is the primary design target.

But mobile must remain usable.

## Mobile Hero

```text
NYXI

YOUR NEW TAB
IS BORING.

[ browser preview ]

[ ADD TO CHROME → ]
```

## Mobile Gallery

One-column or controlled two-column layout.

## Mobile Navbar

Use Drawer.

## Mobile Typography

Hero should use:

```css
font-size: clamp(3rem, 15vw, 5rem);
```

Do not allow text to overflow.

---

# 37. Accessibility

Required:

- Semantic HTML.
- Keyboard-accessible navigation.
- Focus states.
- Accessible buttons.
- Meaningful alt text.
- Reduced-motion support.
- Sufficient contrast.
- Mobile touch targets.

The NeoBrutalism component project states that its components follow WAI-ARIA patterns; retain those accessibility behaviors when adapting components. citeturn1search8

---

# 38. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
    scroll-behavior: auto;
    transition-duration: 0.01ms;
  }
}
```

Live wallpaper/video previews should also avoid unnecessary autoplay behavior when motion preferences indicate reduction.

---

# 39. SEO MVP

Required:

```text
<title>NYXI — Make Your New Tab Alive</title>

<meta
  name="description"
  content="Transform your Chrome New Tab with high-quality live wallpapers using NYXI."
/>
```

Also include:

- Open Graph image
- Twitter/X card metadata
- Favicon
- Canonical URL
- Proper heading hierarchy

Only make claims that match the actual extension.

---

# 40. Analytics

For MVP, analytics are optional.

If added:

Track only useful events:

```text
page_view
click_install
click_wallpaper
click_preview
```

Do not add complicated analytics before launch.

---

# 41. Performance Requirements

This website is image/video heavy, so performance matters.

Required:

- WebP/AVIF images where appropriate.
- Lazy-load below-the-fold images.
- Compress wallpapers.
- Use poster images for video.
- Avoid loading every wallpaper video immediately.
- Responsive image sizes.
- Avoid huge unoptimized MP4 files.
- Use intersection observers where appropriate.

### Important

Do not put 20 autoplay videos in the DOM and expect the website to remain fast.

For the gallery:

**Static image first → video on hover/interaction** is the safer MVP strategy.

---

# 42. Content Rules

Every claim must be true.

Do not write:

> 4K wallpapers

unless actual wallpapers are 4K.

Do not write:

> Zero performance impact

unless measured and defensible.

Do not write:

> Millions of users

unless true.

Do not write:

> 1000+ wallpapers

unless true.

Marketing should be impressive because the product is good, not because the copy lies.

---

# 43. MVP Scope

## MUST HAVE

- Navbar
- Hero
- Chrome/browser mockup
- Install CTA
- Problem/transformation section
- Wallpaper showcase
- Features
- How it works
- Extension showcase
- Final CTA
- Footer
- Responsive layout
- Handwritten typography
- Neo-Brutalist component system
- Real product screenshots/media
- Basic animations

---

# 44. SHOULD HAVE

- Wallpaper category filtering
- Wallpaper preview dialog
- Marquee
- Mobile drawer
- Reduced-motion support
- SEO metadata
- Social preview image

---

# 45. NOT REQUIRED FOR MVP

- User accounts
- Login
- Wallpaper upload
- Community profiles
- Likes
- Comments
- Wallpaper marketplace
- Subscription system
- Payment
- Admin dashboard
- User-generated wallpaper marketplace
- Advanced analytics
- Blog CMS
- Internationalization

---

# 46. Development Phases

## Phase 1 — Foundation

```text
1. Vite + React
2. Tailwind v4
3. NeoBrutalism components
4. Global CSS variables
5. Handwritten font
6. Base layout
```

---

## Phase 2 — Hero

```text
1. Navbar
2. Hero typography
3. Browser mockup
4. CTA
5. Hero animations
```

---

## Phase 3 — Product Showcase

```text
1. Problem section
2. Wallpaper gallery
3. Wallpaper cards
4. Hover preview
5. Category filters
```

---

## Phase 4 — Information

```text
1. Features
2. How it works
3. Extension showcase
4. Performance section if justified
```

---

## Phase 5 — Conversion

```text
1. Final CTA
2. Footer
3. Install links
4. SEO
```

---

## Phase 6 — Polish

```text
1. Responsive fixes
2. Animation tuning
3. Performance optimization
4. Accessibility
5. Browser testing
6. Lighthouse check
```

---

# 47. Final Page Order

The recommended final order is:

```text
01  NAVBAR

02  HERO
    "YOUR NEW TAB IS BORING."

03  MARQUEE
    "LIVE • BEAUTIFUL • YOURS"

04  PROBLEM
    "WHY SHOULD YOUR NEW TAB LOOK DEAD?"

05  WALLPAPER SHOWCASE
    Actual wallpapers

06  FEATURES
    LIVE / BEAUTIFUL / FAST / YOURS

07  HOW IT WORKS
    INSTALL → CHOOSE → ENJOY

08  EXTENSION SHOWCASE
    "BRUTAL OUTSIDE. GLASS INSIDE."

09  OPTIONAL PERFORMANCE
    Only if real data exists

10  FINAL CTA
    "MAKE YOUR TAB ALIVE."

11  FOOTER
```

---

# 48. Brand Personality

NYXI should communicate:

```text
PLAYFUL
      +
BOLD
      +
VISUAL
      +
TECHNICAL
      +
YOUTHFUL
```

But not:

```text
CHILDISH
      or
MEME WEBSITE
      or
GENERIC SAAS
```

The handwritten typography creates personality.

Neo-Brutalism creates visual attitude.

Live wallpapers create the visual product identity.

All three should work together.

---

# 49. The Most Important Rule

Do not build the website first and then try to "put NYXI into it."

Build the website **around NYXI**.

The order of importance is:

```text
NYXI PRODUCT
     ↓
LIVE WALLPAPERS
     ↓
PRODUCT EXPERIENCE
     ↓
NEO-BRUTALIST VISUAL LANGUAGE
     ↓
HANDWRITTEN PERSONALITY
```

Not:

```text
COOL UI
   ↓
ANIMATIONS
   ↓
CARDS
   ↓
"oh yeah, this is for a wallpaper extension"
```

---

# 50. Definition of Done

The MVP is complete when:

- [ ] NYXI is immediately understandable within 5 seconds.
- [ ] Hero clearly communicates the product.
- [ ] Actual live wallpaper visuals are visible.
- [ ] Install CTA is obvious.
- [ ] Website consistently uses Neo-Brutalist styling.
- [ ] Handwritten typography is consistent.
- [ ] Extension's glassmorphism is clearly showcased.
- [ ] Wallpaper gallery works.
- [ ] Mobile layout works.
- [ ] Keyboard navigation works.
- [ ] Reduced motion is respected.
- [ ] Images/videos are optimized.
- [ ] No fake marketing claims exist.
- [ ] The website feels like a NYXI product rather than a NeoBrutalism component demo.

---

# 51. Final Creative Direction

The final visual story should be:

```text
                 BORING WEB
                     ↓
              "YOUR TAB IS DEAD."
                     ↓
                    NYXI
                     ↓
             LIVE WALLPAPERS
                     ↓
           BEAUTIFUL NEW TAB
                     ↓
        NEO-BRUTALIST WEBSITE
                     ↓
          GLASSMORPHISM PRODUCT
```

### Brand statement

> **NYXI — Make your new tab alive.**

### Visual statement

> **Brutal outside. Glass inside.**

### Product statement

> **High-quality live wallpapers for your Chrome New Tab.**
