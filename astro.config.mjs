import { defineConfig } from 'astro/config'; // import lit from '@astrojs/lit';
import netlify from '@astrojs/netlify';

import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-minimal-starter.netlify.app/",
  integrations: [sitemap(), tailwind(),],
  output: 'server',
  adapter: netlify()
});