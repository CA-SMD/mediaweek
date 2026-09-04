// @ts-check
import { defineConfig, fontProviders, passthroughImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ca-smd.github.io/mediaweek",
  base: "/mediaweek",

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ["**/.direnv/**"],
      },
    },
  },
  image: {
    service: passthroughImageService(),
  },
  integrations: [sitemap(), robotsTxt()],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Jaro",
      cssVariable: "--astro-font-jaro",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Jura",
      cssVariable: "--astro-font-jura",
    },
  ],
});
