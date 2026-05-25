# Propsoch — Improved Landing Page

A redesigned, performance-optimized landing page for [Propsoch](https://www.propsoch.com/), built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

> **Live Site**: _[https://propsoch-assignment-one.vercel.app/][https://propsoch-assignment-one.vercel.app/]

---

## Part 1: Complete Analysis

### Estimated Lighthouse Scores (Original)

| Category        | Est. Score | Notes                                                      |
|-----------------|------------|-------------------------------------------------------------|
| Performance     | ~55-65     | Heavy unoptimized images, large JS bundle, no lazy-loading  |
| Accessibility   | ~70-75     | Missing alt text, low contrast CTAs, no skip-navigation     |
| Best Practices  | ~80-85     | Mixed content, third-party tracking scripts                 |
| SEO             | ~85-90     | Decent schema, but multiple H1 tags & broken heading hierarchy |

### 5 UX/UI Issues and Fixes

| # | Issue | Impact | Fix Applied |
|---|-------|--------|-------------|
| 1 | **Overwhelming Hero Section** — Search bar, tagline, sub-tagline, stats, and multiple CTAs all compete for attention in the same viewport | Users struggle to identify the primary action | Clean hero with single headline, supporting text, city selector, and exactly 1 CTA. Stats moved to a separate section below. |
| 2 | **Poor Visual Hierarchy & Section Separation** — Sections blend together without clear visual breaks; inconsistent spacing and typography sizing | Hard to scan; users don't know where one section ends and the next begins | Alternating `bg-white` / `bg-surface-alt` backgrounds, consistent section padding, clear section headers with label + heading pattern |
| 3 | **Cluttered Navigation with Multiple CTAs** — "Login", "Get Started", "Check Fair Price" banner, and hero CTAs all fight for clicks | Decision paralysis; conversion suffers | Simplified sticky navbar: orange top banner + logo + 4 nav links + single "Get Started" CTA. Login as text link. |
| 4 | **Weak Mobile Responsiveness** — Side-by-side service cards, comparison tables, and hero elements don't adapt well to small screens | Cramped layouts, horizontal scrolling, tiny tap targets | Responsive grid (`grid-cols-1` → `grid-cols-2` → `grid-cols-3+`), stacked mobile layouts, minimum 44px touch targets |
| 5 | **No Micro-Interactions or Visual Polish** — Static page with no hover states or transitions | Low engagement; doesn't convey premium quality | Added CSS animations (`fade-in-up`, `float`), hover transforms on cards, hover state color changes, smooth scroll, testimonial carousel |

---

## Part 2: What Was Built

### Sections Implemented (matching real PropSoch, enhanced)

| Section | Description |
|---------|-------------|
| **Navbar** | Orange top banner + sticky white nav with logo, dropdown links, search/share/heart icons, "Get Started" CTA, mobile hamburger menu |
| **Hero** | White bg, orange tagline, bold heading, city selector (Bangalore/Mumbai), "Book An Appointment" CTA, right-side feature card |
| **Stats** | 4-column stats bar: 2750+ Hours, 520M+ Sq Ft, 210+ Builders, 500+ Projects |
| **Testimonials** | Horizontal scrollable cards with left/right arrows, colored avatars, italic "know if" orange accent text |
| **Working** | 6-step journey cards with numbered steps, icons, hover effects |
| **Comparison** | Propsoch vs Online Portals / Local Brokers table with tab toggle, orange-highlighted Propsoch column |
| **Services** | GHB + POM feature cards with checklists + 6 extra services grid |
| **Resources** | 3 blog cards with gradient image areas |
| **Footer** | Dark Hometrust Collective community CTA + WhatsApp links + 4-column link grid |

---

## Part 3: Why These Improvements

| Improvement | Rationale |
|-------------|-----------|
| **Matching Brand Colors** | Used PropSoch's actual orange `#F26522` palette for visual consistency and brand recognition |
| **Focused Hero** | Clean left-aligned layout with one CTA removes decision paralysis |
| **Stats Section** | Separated from hero to give trust signals their own breathing room |
| **Comparison Table** | Makes the value proposition concrete and instantly scannable |
| **Testimonial Carousel** | Social proof with real reviews builds trust for high-ticket purchases |
| **Responsive-First** | Every component uses responsive grid breakpoints (mobile → tablet → desktop) |
| **Component Architecture** | 9 isolated components make the codebase maintainable and testable |

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Inter (via `next/font/google`)
- **Icons**: Heroicons (inline SVGs)

## Getting Started

```bash
npm install
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production server
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
app/
├── globals.css              # Design system (colors, animations)
├── layout.tsx               # Root layout with metadata & fonts
├── page.tsx                 # Landing page (composes 9 sections)
└── components/
    ├── Navbar.tsx            # Orange banner + sticky nav + mobile menu
    ├── Hero.tsx              # Hero with city selector + feature card
    ├── Stats.tsx             # 4-column trust metrics
    ├── Testimonials.tsx      # Horizontal scroll testimonial carousel
    ├── Working.tsx        # 6-step journey card grid
    ├── Comparison.tsx        # Propsoch vs competitors table
    ├── Services.tsx          # GHB + POM cards + extras grid
    ├── Resources.tsx         # 3 blog resource cards
    └── Footer.tsx            # Community CTA + link columns
```

## Deployment

```bash
npx vercel
```

