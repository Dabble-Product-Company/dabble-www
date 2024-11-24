import { defineConfig } from 'astro/config'; // import lit from '@astrojs/lit';

import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://dabble.fyi/",
  integrations: [sitemap(), tailwind()],
  output: 'server',
  adapter: netlify(),
});