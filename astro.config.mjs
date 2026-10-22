// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// Avocado writes its own generated config beside this one when it opens the
// project; this is the config `astro build` uses on a machine that has never
// seen Avocado, which is the whole point.
export default defineConfig({
  site: 'https://gdent-khaki.vercel.app',
  integrations: [sitemap(), react(), keystatic()],
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
