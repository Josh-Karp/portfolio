/**
 * Tailwind v4 via PostCSS.
 *
 * Note: Tailwind's Vite plugin (@tailwindcss/vite) is the "preferred" setup in
 * Tailwind's docs, but it currently fails to build on Astro 6 (rolldown-vite):
 *   "Missing field `tsconfigPaths` on BindingViteResolvePluginConfig.resolveOptions"
 * See https://github.com/withastro/astro/issues/16542
 *
 * PostCSS is the supported workaround and compiles identically. Once that issue
 * is fixed you can swap back: delete this file, install @tailwindcss/vite, and
 * register it under `vite.plugins` in astro.config.mjs.
 */
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
