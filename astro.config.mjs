import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://klpod221.com",
  integrations: [icon()],
  vite: {
    plugins: [
      tailwindcss({
        config: "./tailwind.config.mjs",
      }),
    ],
  },
});
