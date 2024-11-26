import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';
import favicons from 'astro-favicons';

export default defineConfig({
  site: "https://dabble.fyi/",
  integrations: [
    tailwind(), 
    mdx(),
    favicons({
      masterPicture: "./favicon.png",
      emitAssets: true,
      faviconsDarkMode: true,
    }),
  ],
  output: 'server',
  adapter: netlify(),
});