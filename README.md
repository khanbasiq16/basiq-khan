# Basiq Khan — Premium Portfolio

Production-ready portfolio built from the supplied homepage design. Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis and Embla.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

Node 18.17+ required. The first build fetches Inter from Google Fonts, so it needs network access.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        Fonts, metadata, JSON-LD Person schema, smooth scroll
│   ├── page.tsx          Section composition
│   ├── globals.css       Design tokens, base type, component utilities
│   ├── sitemap.ts        Auto-generated sitemap.xml
│   └── robots.ts         Auto-generated robots.txt
├── components/
│   ├── providers/
│   │   ├── smooth-scroll.tsx   Lenis wired into the GSAP ticker
│   │   └── page-transition.tsx Single page-load wipe
│   ├── sections/               One file per section, all self-contained
│   │   navbar · hero · trusted-by · services · projects · about
│   │   process · testimonials · faq · contact · cta · footer
│   └── ui/                     Reusable primitives
│       button · reveal · section-heading · counter · accordion
│       badge · device-mockup
├── data/site.ts          ← ALL content lives here
├── hooks/                use-active-section · use-mouse-parallax
└── lib/utils.ts          cn() + shared motion variants
```

## Editing content

Everything readable on the page comes from `src/data/site.ts` — name, email, phone,
services, projects, stats, process steps, testimonials, FAQs, budget ranges. Change
it there and every section updates. No copy is hard-coded inside components except
the two hero/about paragraphs.

## Design tokens

Defined once in `tailwind.config.ts`:

| Token | Value | Usage |
| --- | --- | --- |
| `brand-500` | `#4F6BFF` | Primary |
| `accent` | `#6C63FF` | Gradient partner |
| `surface` | `#FFFFFF` | Page background |
| `surface-muted` | `#F8FAFF` | Alternating sections |
| `ink` | `#111827` | Body text |
| `ink-muted` | `#6B7280` | Secondary text |
| `hairline` | `#E5E7EB` | Borders |

Shadows (`soft` → `card` → `lift` → `glass`), radii and the `ease-premium`
cubic-bezier are also tokenised, so the whole site restyles from one file.

## Animation

- **Lenis** smooth scroll, synced to GSAP's ticker so ScrollTrigger stays accurate.
- **Framer Motion** for entrances (`<Reveal>`), word-by-word headline reveals
  (`<TextReveal>`), the navbar active pill (`layoutId`), scroll progress bar and the
  count-up stats.
- **GSAP + ScrollTrigger** registered in the smooth-scroll provider for timeline work.
- Magnetic buttons and click ripples live in `<Button magnetic={8}>`.
- Mouse parallax on the hero via `useMouseParallax`, disabled below 1024px.
- Every animation is transform/opacity only — no layout thrash, so it holds 60fps.
- `prefers-reduced-motion` disables Lenis, counters, parallax and all CSS animation.

## Assets

No stock imagery. The hero laptop/tablet/phone, the project thumbnails and the FAQ
illustration are all rendered in CSS + SVG, which keeps LCP low and stays sharp on
any display. Drop real screenshots in later by replacing the `<Thumb>` component in
`src/components/sections/projects.tsx` with `next/image`.

Your portrait lives at `public/portrait.jpg` and is served through `next/image` with
AVIF/WebP output.

## Before you deploy

1. `src/data/site.ts` — swap in your real email, phone, socials and project links.
2. `src/components/sections/contact.tsx` — replace the mocked submit with your real
   endpoint (Resend, Formspree, or a route handler at `app/api/contact/route.ts`).
3. Add `public/opengraph-image.png` at 1200×630.
4. Update `site.url` so canonical URLs, OG tags and the sitemap point at your domain.
5. Newsletter form in the footer — wire to your provider.

## Accessibility

Skip link, semantic landmarks, labelled form fields, `aria-current` on the active nav
item, visible focus rings, dialog-free mobile menu with `aria-expanded`, alt text on
the portrait and `aria-hidden` on every decorative element.
