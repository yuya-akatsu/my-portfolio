import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), react()],
  build: {
    // srcDir: 'src',
    // entryPoints: ['script.ts'],
    // assets: 'src/scripts',
  },
});
