import type { IntlifyModuleOptions } from "@intlify/nuxt3";
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["@intlify/nuxt3"],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/variables.scss";@import "@/assets/scss/mixins.scss";@import "@/assets/fonts/style.css";',
        },
      },
    },
  },
});

declare module "@nuxt/schema" {
  export interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}
