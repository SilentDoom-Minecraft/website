import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from './src/consts';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), partytown(), sitemap(), icon()]
});