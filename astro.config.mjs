// @ts-check
import { defineConfig, fontProviders /*passthroughImageService*/ } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ca-smd.github.io/",
  base: "/mediaweek/",

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ["**/.direnv/**"],
      },
    },
  },
  integrations: [sitemap(), robotsTxt()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Passion One",
      cssVariable: "--astro-font-passion-one",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Jura",
      cssVariable: "--astro-font-jura",
    },
    {
      provider: fontProviders.local(),
      name: "Chido",
      cssVariable: "--astro-font-chido",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/chido.otf"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
  ],
});
