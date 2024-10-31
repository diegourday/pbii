// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  env: {
    schema: {
      DOMAIN_URL: envField.string({ context: "server", access: "public" }),
      API_URL: envField.string({ context: "client", access: "public" }),
    },
  },
});
