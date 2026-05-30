# interkom-homepage

Marketing site for **Interkom** — a private social network for your company.
Lives at **[interkom.app](https://interkom.app)**.

Built with **Vite + React 19 + TypeScript + Tailwind v4**, deployed to
**GitHub Pages** via GitHub Actions on every push to `main`.

## Develop

```sh
npm install
npm run dev        # Vite dev server on :5173
```

## Build

```sh
npm run build      # tsc -b && vite build, then copies dist/index.html → dist/404.html
npm run preview    # serve the production build locally
```

The build uses a relative `base` (`./`, see `vite.config.ts`), so it works
regardless of the path GitHub Pages serves from.

## Routing

It's a single-page app with lightweight client routing — `src/App.tsx`
switches on `window.location.pathname`:

- `/` — the landing page (all the sections below).
- `/privacy` — privacy policy (`PrivacyPolicy.tsx`).
- `/billing` — the page Stripe Checkout returns to; reads
  `?billing=success|cancelled` (`BillingResult.tsx`).

`npm run build` copies `index.html` to `404.html` so deep links like
`/privacy` resolve on GitHub Pages (which would otherwise 404 on a refresh).

## Layout

```
index.html                 Document head: SEO meta, Open Graph / Twitter cards, JSON-LD
src/App.tsx                Path-based page switch + section composition
src/components/             One file per section / piece of UI
public/                     Static assets copied verbatim into the build
```

Landing-page sections (in order), each a `#`-anchored `<section>` the nav and
footer link to: Hero (`#top`) · Pillars (`#product`) · Stories (`#stories`) ·
Encryption (`#encryption`) · Workspaces (`#workspaces`) · Identity
(`#identity`) · Notes (`#notes`) · Apps (`#apps`) · Pricing (`#pricing`).
Plus `Marquee`, `Nav`, `Footer`, `PhoneMock`, and the shared `Wordmark` logo.

CTAs point at the web app (`web.interkom.app/sign-in`, `/sign-up`); the
Enterprise plan links to `sales@interkom.app`.

## Static assets (`public/`)

- `og-image.png` / `og-image.svg` — 1200×630 social-share card. The PNG is
  the shipped artifact; regenerate it from the SVG with an SVG renderer that
  flows `<tspan>`s correctly (e.g. resvg) — ImageMagick's built-in renderer
  stacks them and breaks the headline.
- `favicon.svg`, `icon.png`, `icon-glyph.svg`, `site.webmanifest` — app/site icons.
- `sitemap.xml`, `robots.txt` — SEO.
- `mac/appcast.xml` — **Sparkle appcast for the macOS app**, served at
  `interkom.app/mac/appcast.xml`. Binaries themselves live in the public
  `interkom-app/interkom-releases` repo; this file points Sparkle at them.

## Deploy to GitHub Pages

Automatic — `.github/workflows/deploy.yml` builds and publishes on every push
to `main` (no local deploy step). The custom domain `interkom.app` is
configured in **Settings → Pages**. First-time setup: set **Source** to
**GitHub Actions** there.

## Related repos

- `interkom-web` — the Next.js web client at `web.interkom.app`.
- `interkom-app/interkom-releases` — public host for macOS app binaries
  (referenced by `public/mac/appcast.xml`).
</content>
