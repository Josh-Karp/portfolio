Single-page CV built with **Astro 6** + **Tailwind CSS v4**.

```bash
pnpm install
pnpm dev         # http://localhost:4321
pnpm build       # -> dist/
pnpm preview
```

## Where things live

```
src/
├── data/cv.ts            ← all CV content. Edit here, not in components.
├── styles/global.css     ← design tokens (@theme) + component classes
├── layouts/Base.astro    ← <head>, fonts, meta
├── pages/index.astro     ← section order
└── components/
    ├── Section.astro     ← section scaffold (rule + rotated rail label)
    ├── SectionHead.astro ← kanji + serif heading
    ├── Eyebrow.astro     ← small label row
    ├── Nav.astro  Hero.astro  PortraitPlate.astro
    ├── Statement.astro  Pillars.astro  Stack.astro
    ├── Experience.astro  Toolkit.astro  Marquee.astro
    ├── Education.astro  Faq.astro  Contact.astro
    ├── Footer.astro
    └── Clock.astro       ← inline script, fills [data-clock] slots
```

Content and presentation are fully separated: adding a job or a tool means adding
an object to `src/data/cv.ts` — no component changes.

## Design tokens

Everything visual comes from the `@theme` block in `src/styles/global.css`.
Tailwind v4 generates utilities from those variables automatically:

| Token               | Utilities                           |
| ------------------- | ----------------------------------- |
| `--color-bone`      | `text-bone` `bg-bone` `border-bone` |
| `--color-ink-faint` | `text-ink-faint` …                  |
| `--color-line`      | `border-line` (all hairline rules)  |
| `--font-display`    | `font-display` (Instrument Serif)   |
| `--animate-marquee` | `animate-marquee`                   |

Change the palette in one place and the whole page follows.

## Tailwind setup — read this before upgrading

Tailwind is wired through **PostCSS** (`postcss.config.mjs`), not the
`@tailwindcss/vite` plugin that Tailwind's docs recommend.

The Vite plugin currently fails to build on Astro 6 (rolldown-vite):

```
[@tailwindcss/vite:generate:build] Missing field `tsconfigPaths`
on BindingViteResolvePluginConfig.resolveOptions
```

See https://github.com/withastro/astro/issues/16542. PostCSS is the supported
workaround and compiles identically. Once that's fixed:

```bash
pnpm remove @tailwindcss/postcss && rm postcss.config.mjs
pnpm add -D @tailwindcss/vite
```

…then register it under `vite.plugins` in `astro.config.mjs`.

## Deploying

Static output — `pnpm build` produces `dist/`. Vercel and Netlify both detect
Astro with no config. Set `site` in `astro.config.mjs` to the real domain first.

## Notes

- **Portrait.** `PortraitPlate.astro` is pure SVG — a dot-matrix bust, no image
  asset and no network request. To use a real photo, swap the `<use href="#bust">`
  shape for an `<image>` masked with the same halftone pattern.
- **Motion.** The marquee respects `prefers-reduced-motion` (`motion-reduce:animate-none`).
- **Hairline grids.** Where cells need dividers, the container draws top+left and
  each cell draws right+bottom. That stays correct at any column count, so the
  grids reflow across breakpoints without nth-child rules.
