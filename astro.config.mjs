import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
export default defineConfig({
  legacy: {
    collections: true, // Enable legacy collections mode
  },
  site: 'https://fintechguy.me',
  integrations: [mdx(), sitemap(), tailwind()]
});