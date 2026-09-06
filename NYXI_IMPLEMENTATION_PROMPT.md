# NYXI — Master Website Implementation Prompt

## ROLE

You are a senior frontend engineer, UI/UX designer, and product-focused web developer.

Your job is to build the **NYXI marketing website** from the provided project specification and design direction.

Before writing code:

1. Read `NYXI_Website_MVP_v2.md` completely.
2. Treat that file as the source of truth for product requirements.
3. If `DESIGN_SYSTEM.md` exists, read it before implementation.
4. Inspect all available NYXI assets before inventing any visuals.
5. Do not invent product features, statistics, testimonials, performance claims, or wallpaper categories that are not confirmed.

The final website must feel like a real, launch-ready product website — not an AI-generated template.

---

# 1. PRODUCT

NYXI is a Chrome extension that transforms the Chrome New Tab into a visually rich experience using high-quality live wallpapers.

The NYXI extension uses **glassmorphism**.

The marketing website intentionally uses:

**Neo-Brutalism + handwritten typography + NYXI product visuals.**

Core brand idea:

> Make your new tab alive.

Visual contrast:

> **Brutal outside. Glass inside.**

---

# 2. SOURCE OF TRUTH

Follow this priority order:

```text
1. Actual NYXI assets / screenshots / product behavior
2. NYXI_Website_MVP_v2.md
3. Design system files
4. Existing project configuration
5. Your own implementation judgment
```

Never override real product behavior with assumptions.

If something is unspecified, choose the simplest solution that preserves the established design language.

---

# 3. TECH STACK

Use:

- React
- Vite
- Tailwind CSS v4
- React-compatible Neo-Brutalism components
- Lucide React where icons are required

Do not introduce unnecessary libraries.

Do not install a state-management library for a static marketing website unless there is a real need.

Use reusable React components.

---

# 4. PROJECT RULES

## General

Write production-quality code.

Keep the code:

- readable
- modular
- maintainable
- responsive
- accessible
- performant

Do not create one enormous `App.jsx`.

Do not duplicate the same markup unnecessarily.

Do not hardcode repeated cards directly when they can be rendered from data.

Use arrays/data objects for:

- wallpapers
- features
- navigation links
- steps
- badges

---

# 5. DESIGN DIRECTION

The website should be:

- Neo-Brutalist
- Bold
- Playful
- Handwritten
- High contrast
- Visual
- Product-focused
- Slightly imperfect
- Modern

It must NOT look like:

- Generic SaaS
- Corporate landing page
- Apple clone
- Glassmorphism website
- Component-library documentation
- AI-generated template
- Excessively rounded dashboard
- Gradient-heavy startup website

---

# 6. TYPOGRAPHY

Use a handwritten font similar to the supplied reference image.

Preferred candidates:

1. Patrick Hand
2. Kalam
3. Caveat
4. Comic Neue
5. Indie Flower

Choose the font that provides the best combination of personality and readability.

The handwritten font should be used throughout the marketing UI.

However:

- code uses monospace
- technical metadata may use a clean sans-serif
- tiny text must remain highly readable

Do not make the website look childish.

The goal is:

> hand-drawn product design

not:

> children's website.

---

# 7. COLOR SYSTEM

Start with:

```text
Background: #F7F6F0
Foreground: #111111
Surface: #FFFFFF
Border: #111111
```

Use one primary accent color.

Do not use five different accent colors.

Wallpaper images may introduce their own colors.

The UI itself should remain visually controlled.

---

# 8. NEO-BRUTALISM

Use:

- strong black borders
- hard offset shadows
- bold typography
- slightly rounded corners
- high contrast
- asymmetric layouts
- large buttons
- sticker-like labels
- occasional rotation
- intentional visual interruptions

Avoid:

- soft shadows
- excessive blur
- excessive rounded corners
- excessive gradients
- excessive glass effects
- identical card grids
- everything centered

Important:

Do not apply the same brutalist treatment to every element.

Visual hierarchy matters.

---

# 9. COMPONENT LIBRARY

Use the NeoBrutalism component ecosystem as a foundation.

Potential components:

- Button
- Card
- Image Card
- Badge
- Marquee
- Tabs
- Dialog
- Drawer
- Tooltip

Use only components that actually improve the interface.

Do not install or use every available component.

Customize component styling to fit NYXI.

The website should not look like a demo of the component library.

---

# 10. PAGE STRUCTURE

Build the page in this exact conceptual order:

```text
01 Navbar

02 Hero

03 Marquee / Brand Strip

04 Problem / Transformation

05 Wallpaper Showcase

06 Features

07 How It Works

08 Extension Showcase

09 Optional Performance Section

10 Final CTA

11 Footer
```

---

# 11. NAVBAR

Desktop:

```text
NYXI

Wallpapers
Features
How it works

GET NYXI →
```

Requirements:

- Neo-Brutalist visual treatment
- handwritten typography
- responsive
- sticky/floating if it fits the design
- clear CTA

Mobile:

```text
NYXI                         ☰
```

Use a Drawer for mobile navigation.

Do not make the navbar oversized.

---

# 12. HERO

The hero is the highest-priority section.

Do NOT create a generic centered SaaS hero.

Use asymmetric composition.

Primary copy direction:

> YOUR NEW TAB  
> IS BORING.

Then:

> LET'S FIX THAT.

Alternative:

> MAKE YOUR  
> NEW TAB ALIVE.

Select whichever composition works best visually.

Hero must include:

- strong headline
- short product explanation
- primary CTA
- browser/product mockup
- real NYXI visuals where available

Primary CTA:

```text
ADD TO CHROME →
```

Secondary CTA:

```text
EXPLORE WALLPAPERS
```

Do not add unnecessary buttons.

---

# 13. HERO PRODUCT MOCKUP

The browser mockup is critical.

It should visually demonstrate the actual NYXI experience.

Include only real product capabilities.

If NYXI provides:

- clock
- search
- shortcuts
- settings
- glass panels

then show them.

If it does not, do not invent them.

Prefer real screenshots or captured product media over fabricated UI.

---

# 14. HERO INTERACTION

Add subtle pointer interaction.

Possible:

- small 3D rotation
- slight translation
- gentle parallax

Keep it subtle.

Do not make the mockup spin dramatically.

CTA interaction:

Normal:

```text
button + hard shadow
```

Hover:

```text
button moves slightly upward/left
```

Active:

```text
button moves toward its shadow
```

The interaction should feel physical.

---

# 15. MARQUEE

Use a small horizontal visual strip after the hero.

Example:

```text
LIVE • BEAUTIFUL • YOURS • LIVE • BEAUTIFUL • YOURS
```

Other factual phrases may be used if supported by the product.

Keep the marquee visually strong but not distracting.

Respect reduced-motion preferences.

---

# 16. PROBLEM SECTION

Message:

> WHY SHOULD YOUR NEW TAB LOOK DEAD?

Show the contrast:

```text
DEFAULT CHROME TAB
        ↓
     NYXI
        ↓
LIVE WALLPAPER EXPERIENCE
```

The purpose is to communicate the transformation immediately.

Use actual screenshots when possible.

Do not over-explain.

---

# 17. WALLPAPER SHOWCASE

This is one of the most important sections.

Show actual NYXI wallpapers.

Use asymmetric image cards.

Do not create a boring uniform 3-column grid.

Use different card dimensions while preserving alignment.

Each wallpaper card can contain:

- image
- title
- category
- optional badge
- preview interaction

Potential interaction:

```text
hover → image zoom
hover → reveal title
hover → reveal PREVIEW
```

Do not autoplay every wallpaper video.

---

# 18. WALLPAPER PERFORMANCE

Wallpaper media can be expensive.

Use:

- WebP/AVIF where appropriate
- optimized thumbnails
- lazy loading
- poster images
- video-on-interaction where possible

Avoid loading many large videos immediately.

Preferred strategy:

```text
static image
     ↓
user interaction
     ↓
video preview
```

Do not sacrifice page performance for unnecessary visual effects.

---

# 19. WALLPAPER FILTERING

If enough wallpaper categories exist, provide filtering.

Possible categories:

```text
ALL
ANIME
NATURE
SPACE
CYBERPUNK
GAMING
ABSTRACT
```

Only show categories that actually exist.

If filtering is not necessary because the wallpaper collection is small, do not force tabs into the design.

---

# 20. FEATURES

Headline:

> SMALL EXTENSION.  
> BIG DIFFERENCE.

Use approximately four major features.

Suggested structure:

```text
01
LIVE

High-quality animated wallpapers for your New Tab.

02
BEAUTIFUL

A carefully designed experience instead of a boring default tab.

03
FAST

Designed to stay smooth while you browse.

04
YOURS

Customize the experience around your taste.
```

Only use claims that are technically true.

---

# 21. FEATURE LAYOUT

Do not use a generic 4-card SaaS grid.

Use:

- staggered blocks
- large typography
- numbered sections
- varying widths
- intentional whitespace

The section should feel like a poster.

---

# 22. HOW IT WORKS

Three simple steps:

```text
01 — INSTALL

Add NYXI to Chrome.

02 — CHOOSE

Pick your atmosphere.

03 — ENJOY

Open a new tab and watch it come alive.
```

Keep this section extremely easy to understand.

Do not add unnecessary explanation.

---

# 23. EXTENSION SHOWCASE

This section is strategically important.

Headline:

> BRUTAL OUTSIDE.  
> GLASS INSIDE.

The website should transition visually from:

```text
Neo-Brutalism
       ↓
       ↓
       ↓
Glassmorphism
```

Show the actual extension.

The extension UI should remain visually authentic.

Do not redesign the extension just to match the website.

This section should make the contrast feel intentional.

---

# 24. OPTIONAL PERFORMANCE SECTION

Only build this section if there are legitimate technical performance claims or measurements.

Potential concept:

> BEAUTIFUL DOESN'T HAVE TO MEAN SLOW.

Never fabricate:

- FPS
- CPU usage
- RAM usage
- performance percentages
- benchmarks

If no real measurements exist, remove this section entirely.

---

# 25. FINAL CTA

Large, dramatic section.

Copy direction:

> READY TO MAKE  
> YOUR TAB ALIVE?

Primary:

```text
ADD NYXI TO CHROME →
```

Secondary:

```text
EXPLORE WALLPAPERS
```

This should be one of the strongest visual moments on the page.

---

# 26. FOOTER

Keep it simple.

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

Only include links that actually exist.

---

# 27. RESPONSIVE DESIGN

Desktop is the primary design target.

But the website must be fully responsive.

Breakpoints should be determined by layout requirements rather than arbitrary device names.

## Desktop

Use asymmetric compositions and large typography.

## Tablet

Reduce:

- spacing
- typography
- mockup size

## Mobile

Use:

- single-column layouts
- mobile drawer navigation
- stacked CTAs
- readable hero
- controlled wallpaper cards

Do not simply shrink desktop.

Recompose the layout.

---

# 28. MOBILE HERO

Recommended structure:

```text
NYXI

YOUR NEW TAB
IS BORING.

[ browser preview ]

[ ADD TO CHROME → ]
```

Headline must never overflow.

Use responsive typography such as:

```css
font-size: clamp(...);
```

---

# 29. ACCESSIBILITY

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible buttons
- alt text
- proper heading hierarchy
- accessible navigation
- reduced-motion support
- sufficient contrast

Do not use an icon without an accessible label when the icon is the only control.

---

# 30. REDUCED MOTION

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Disable or simplify decorative motion when required.

---

# 31. ANIMATION RULES

Animations should make the interface feel alive.

Use:

- fade + translate entrance
- subtle card movement
- button press
- wallpaper hover zoom
- controlled marquee
- subtle mockup parallax

Avoid:

- constant bouncing
- excessive scroll effects
- huge rotations
- animation on every element
- slow transitions that delay interaction

Rule:

> If the animation becomes more noticeable than NYXI, reduce it.

---

# 32. SEO

Implement:

```text
Title:
NYXI — Make Your New Tab Alive

Description:
Transform your Chrome New Tab with high-quality live wallpapers using NYXI.
```

Also add:

- Open Graph metadata
- social preview image
- favicon
- canonical URL
- proper semantic headings

Do not use claims that aren't verified.

---

# 33. ASSET RULES

Before creating placeholders:

1. Inspect available assets.
2. Reuse real NYXI assets.
3. Optimize them.
4. Use placeholders only where necessary.

Do not use random stock images for the core product showcase.

The wallpaper gallery should represent the actual product.

---

# 34. FAVICON / BRANDING

Use the actual NYXI logo if available.

Do not create a random favicon.

If the final logo is not available yet, use a temporary text/shape treatment that can be replaced without changing the architecture.

Keep branding centralized.

Example:

```text
src/assets/branding/
```

---

# 35. COMPONENT ARCHITECTURE

Use a structure similar to:

```text
src/
│
├── components/
│   ├── ui/
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
│   ├── features.js
│   └── navigation.js
│
├── assets/
│   ├── wallpapers/
│   ├── screenshots/
│   ├── videos/
│   └── branding/
│
├── App.jsx
├── main.jsx
└── index.css
```

Adapt this if the existing project structure has a better organization.

---

# 36. DATA-DRIVEN UI

Use arrays for repeated content.

Example:

```js
const features = [
  {
    number: "01",
    title: "LIVE",
    description: "..."
  },
  ...
];
```

Render with `.map()`.

Do not duplicate four almost-identical JSX blocks unnecessarily.

---

# 37. CSS / TAILWIND

Use Tailwind for layout and component styling.

Keep global CSS for:

- font loading
- design tokens
- global body styles
- special hand-drawn effects
- reusable utilities that genuinely need CSS

Do not create hundreds of custom CSS classes when Tailwind is enough.

---

# 38. DESIGN TOKENS

Centralize major values.

Conceptually:

```text
background
foreground
surface
border
accent
radius
shadow offset
```

The exact values may be adjusted during visual refinement.

The entire site should be easy to retheme.

---

# 39. HAND-DRAWN FEEL

The handwritten font alone is not enough.

The hand-drawn character should also appear through:

- typography
- border treatment
- occasional irregular radius
- sticker labels
- small rotations
- illustration accents
- micro-interactions

But do NOT intentionally make the layout sloppy.

The product should feel:

> intentionally imperfect

not:

> poorly designed.

---

# 40. VISUAL HIERARCHY

Every section needs one clear focal point.

For example:

Hero:
```text
YOUR NEW TAB IS BORING.
```

Gallery:
```text
WALLPAPERS
```

Features:
```text
SMALL EXTENSION. BIG DIFFERENCE.
```

Showcase:
```text
BRUTAL OUTSIDE. GLASS INSIDE.
```

CTA:
```text
MAKE YOUR TAB ALIVE.
```

Do not give every element the same visual weight.

---

# 41. DO NOT OVERDESIGN

Do not add:

- unnecessary testimonials
- fake statistics
- fake logos
- fake reviews
- pricing tables
- newsletter forms
- giant FAQ sections
- random 3D objects
- excessive gradients
- unnecessary blobs
- random illustrations

Every section must serve the product story.

---

# 42. IMPLEMENTATION ORDER

Build in this order:

## Step 1

Set up project and dependencies.

## Step 2

Create global design tokens and typography.

## Step 3

Build Navbar.

## Step 4

Build Hero.

## Step 5

Build BrowserMockup.

## Step 6

Build Marquee.

## Step 7

Build ProblemSection.

## Step 8

Build WallpaperGallery.

## Step 9

Build FeaturesSection.

## Step 10

Build HowItWorks.

## Step 11

Build ExtensionShowcase.

## Step 12

Build FinalCTA.

## Step 13

Build Footer.

## Step 14

Implement responsive behavior.

## Step 15

Implement animations.

## Step 16

Optimize assets.

## Step 17

Accessibility pass.

## Step 18

Final visual QA.

---

# 43. DEVELOPMENT BEHAVIOR

Do not try to write the entire website blindly in one huge file.

Work section-by-section.

After each major section:

1. Check layout.
2. Check spacing.
3. Check typography.
4. Check responsiveness.
5. Check visual hierarchy.
6. Check whether it still feels like NYXI.

Then continue.

---

# 44. QUALITY BAR

The result should look like a designer and frontend engineer intentionally built it.

It should NOT have:

- inconsistent spacing
- random font sizes
- broken mobile layouts
- placeholder text left behind
- fake product features
- inconsistent border widths
- random shadow styles
- unnecessary dependencies
- console errors
- broken links
- missing alt text

---

# 45. FINAL QA CHECKLIST

Before considering the website complete, verify:

## Product

- [ ] NYXI purpose is obvious within 5 seconds.
- [ ] Actual product visuals are shown.
- [ ] Install CTA is obvious.
- [ ] No false claims.

## Design

- [ ] Neo-Brutalism is consistent.
- [ ] Handwritten font is consistent.
- [ ] Website does not look generic.
- [ ] Extension showcase clearly looks glassmorphic.
- [ ] Contrast between website and extension feels intentional.

## UX

- [ ] Navigation works.
- [ ] CTAs work.
- [ ] Wallpaper interactions work.
- [ ] Mobile navigation works.
- [ ] No dead buttons.

## Responsive

- [ ] Desktop works.
- [ ] Tablet works.
- [ ] Mobile works.
- [ ] No horizontal overflow.

## Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus states exist.
- [ ] Alt text exists.
- [ ] Reduced motion is respected.

## Performance

- [ ] Images optimized.
- [ ] Videos not unnecessarily loaded.
- [ ] Lazy loading used where appropriate.
- [ ] No unnecessary heavy dependency.

## Code

- [ ] Components are reusable.
- [ ] Repeated content is data-driven.
- [ ] No giant component.
- [ ] No console errors.
- [ ] No unused imports.
- [ ] No obvious dead code.

---

# 46. FINAL CREATIVE TEST

After implementation, ask:

### Question 1

Can someone understand what NYXI does without reading the entire website?

If no → fix the hero.

### Question 2

Does the website look like NYXI or merely like NeoBrutalism components?

If it looks like a component demo → redesign the composition.

### Question 3

Does the handwritten font add personality without hurting readability?

If no → change the font.

### Question 4

Are the live wallpapers visually dominant enough?

If no → increase their visual importance.

### Question 5

Does the glassmorphism extension showcase feel like a deliberate contrast?

If no → redesign that transition.

### Question 6

Does the website feel memorable after 10 seconds?

If no → improve the visual concept, not just the shadows/colors.

---

# 47. NON-NEGOTIABLE RULES

1. **Do not invent product features.**
2. **Do not fabricate statistics.**
3. **Do not use random stock imagery for core NYXI visuals.**
4. **Do not turn the website into a NeoBrutalism component showcase.**
5. **Do not use handwritten typography for code.**
6. **Do not overload the page with animations.**
7. **Do not sacrifice performance for visual effects.**
8. **Do not build unnecessary features.**
9. **Do not ignore mobile.**
10. **Do not stop at a static visual mockup.**
11. **Do not leave placeholder content in the final build.**
12. **Do not add dependencies without a reason.**

---

# 48. FINAL TARGET

The final result should communicate this in a few seconds:

> **NYXI turns your boring Chrome New Tab into a living visual experience.**

The website should look:

> **Neo-Brutalist. Handwritten. Bold. Visual. Product-focused.**

The extension should look:

> **Glassmorphic. Cinematic. Smooth. Immersive.**

And the transition between the two should feel intentional:

# **BRUTAL OUTSIDE. GLASS INSIDE.**

Build the website around that idea.
