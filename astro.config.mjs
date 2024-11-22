import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://klpod221.site',
  integrations: [
    tailwind(),
    icon({
      iconDir: {
        mdi: "*", // Include all icons from the Material Design Icons set
        tabler: "*", // Include all icons from the Tabler Icons set
        "fa6-brands": "*", // Include all icons from the Font Awesome 6 Brands set
        "simple-icons": "*", // Include all icons from the Simple Icons set
      },
    }),
  ],
});
