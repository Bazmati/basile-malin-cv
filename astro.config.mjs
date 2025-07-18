import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://bazmati.github.io',
  base: 'basile-malin-cv',
  trailingSlash: "always",
  integrations: [tailwind()],
});
