# Signal House - Website

Marketing site for **Signal House**, a LinkedIn growth agency for B2B founders & CEOs.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion.

> ⚠️ This uses **Next.js 16**, which has breaking changes vs. older versions you may
> know. If you (or an AI assistant) get stuck on framework APIs, check the bundled
> docs in `node_modules/next/dist/docs/` rather than guessing. See `AGENTS.md`.

---

## Prerequisites

- **Node.js 20+** and npm
- That's it: no database, no API keys required to run locally.

## Run locally

```bash
npm install      # install dependencies (first time only)
npm run dev      # start dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build (run build first)
npm run lint     # ESLint
```

The dev server hot-reloads on save.

---

## Project structure

```
app/                 # routes (App Router) - one folder per page
  layout.tsx         # root layout: fonts, <Header/> + <Footer/>, site metadata
  page.tsx           # home page (composes the section components)
  globals.css        # Tailwind import + design tokens (@theme block)
  about/  audit/  book/  services/   # the other routes
components/          # React components
  ui/                # small primitives (Button, Section, Reveal)
  Icons.tsx          # inline SVG icon set (Icon name="...")
  *.tsx              # page sections (Hero, ServicesGrid, Testimonials, ...)
lib/
  content.ts         # ⭐ ALL site copy, services, stats, testimonials, config
public/              # static assets
```

## Pages

| Route       | Purpose                                                       |
| ----------- | ------------------------------------------------------------- |
| `/`         | Home - hero, positioning, services, how-we-work, proof, CTA   |
| `/services` | All seven services in detail                                  |
| `/about`    | Who we are & what we believe                                  |
| `/book`     | **Book a Discovery Call** (primary CTA)                       |
| `/audit`    | **Get a Free LinkedIn Audit** (secondary CTA)                 |

---

## How to edit the app

Most changes need only **one file**:

| I want to change…                          | Edit this                                            |
| ------------------------------------------ | ---------------------------------------------------- |
| Copy, services, stats, testimonials, nav   | `lib/content.ts`                                     |
| The booking calendar (Calendly/TidyCal)    | Set `NEXT_PUBLIC_SCHEDULER_URL` (see below)          |
| Brand colours & shadows                    | `app/globals.css` → the `@theme` block               |
| Fonts                                      | `next/font` imports in `app/layout.tsx` (Inter + Fraunces) |
| Logo                                       | `components/Logo.tsx` (placeholder wordmark + mark)  |
| Page layout / section order                | the relevant `app/*/page.tsx`                         |
| A section's markup                         | the matching component in `components/`              |
| Icons                                      | `components/Icons.tsx`                               |

### Connecting the booking calendar

The booking pages embed a scheduler when `NEXT_PUBLIC_SCHEDULER_URL` is set; until
then they show a styled fallback card. Create a `.env.local` in the project root:

```bash
# .env.local
NEXT_PUBLIC_SCHEDULER_URL=https://calendly.com/your-handle/discovery-call
```

Restart `npm run dev` after adding it. Works with Calendly, TidyCal, or any
embeddable scheduler URL.

### Styling

Tailwind CSS v4 - utility classes in JSX. Custom colours/tokens (e.g. `bg-brand`,
`text-ink`, `bg-mist`) are defined in the `@theme` block of `app/globals.css`, not
in a `tailwind.config` file. Add a token there and it becomes a utility class.

---

## ⚠️ Before launch - placeholders to replace

These are intentionally fake and must be swapped for real content:

- **Testimonials**, **client logos**, and **stats** → `lib/content.ts`
- **Logo** → `components/Logo.tsx`
- **Brand colours/fonts** → currently HubSpot-inspired (orange + warm cream,
  Inter + Fraunces); finalise in `app/globals.css` and `app/layout.tsx`.
- **Contact email / LinkedIn URL** → `SITE` object in `lib/content.ts`

---

## Deploy

Any Next.js host works (Vercel is the simplest, connect the repo and it builds
automatically). Set `NEXT_PUBLIC_SCHEDULER_URL` in the host's environment
variables. Otherwise: `npm run build` then `npm start` behind a reverse proxy.
