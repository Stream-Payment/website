# AGENTS.md

Guidance for working in the Stream marketing site.

## Project overview

A one-page, server-rendered marketing site for Stream Payments.

- Nuxt 4 + Vue 3, SSR enabled (`ssr: true`)
- Tailwind CSS 4 through `@tailwindcss/vite`
- TypeScript strict mode
- Deployed on Vercel as a Nitro serverless build

## Commands

```bash
npm install
npm run dev         # http://localhost:3000
npm run typecheck   # nuxt typecheck (vue-tsc)
npm run build       # .output/ production build
npm run preview     # serve the production build
```

## Layout

- `app/pages/index.vue` — page composition and all SEO metadata / JSON-LD.
- `app/utils/site.ts` — canonical copy for nav, features, steps, endpoints,
  security points, and FAQs. Add or edit content there, not inline in markup
  (FAQ structured data reuses it).
- `app/components/*Section.vue` — one component per page section.
- `app/assets/css/main.css` — Tailwind entry, brand tokens, base and utility
  classes.
- `server/routes/robots.txt.ts`, `server/routes/sitemap.xml.ts` — crawler files.
- `public/` — favicon, apple touch icon, OG image, web manifest.

## Design standards

- **Primary brand color:** `#1B4EF5` (`brand-600`). Use the `brand-*` tokens in
  `main.css`. Never substitute indigo, another blue, or arbitrary hex values.
- **Semantic colors:** slate for neutrals; red, amber, and emerald only for
  error, warning, and success.
- **Corner radius:** 8px maximum. Use `rounded-lg` for surfaces, cards, inputs,
  buttons, and badges. Do not use `rounded-xl` or larger. `rounded-full` is
  reserved for dots and circular indicators.
- Keep the visual language quiet: white surfaces, hairline slate borders,
  generous spacing, one accent color.

## SEO rules

- Every page must render meaningful HTML on the server. Do not add
  client-only content that matters to search.
- Keep `useSeoMeta` (title, description, canonical, OG/Twitter) and the JSON-LD
  graph in `app/pages/index.vue` in sync with the visible copy.
- URLs in canonical/OG tags come from `NUXT_PUBLIC_SITE_URL`; never hardcode a
  production domain.
- Update `server/routes/sitemap.xml.ts` when adding routes.

## Content rules

- Do not invent customer logos, testimonials, uptime numbers, pricing, or
  unsupported feature claims. Use facts from the platform and SDK docs.
- British-leaning prose is fine; keep sentences short and concrete.
- Use `Stream` (capitalised) and `pk_` / `sk_` for keys.

## Environment

| Variable                    | Purpose                             |
| --------------------------- | ----------------------------------- |
| `NUXT_PUBLIC_SITE_URL`      | Canonical origin for SEO files      |
| `NUXT_PUBLIC_DASHBOARD_URL` | Sign-in / dashboard link destination |

Both are public and read through `useRuntimeConfig().public`.
