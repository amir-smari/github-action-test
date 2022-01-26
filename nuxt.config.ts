import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  modules: [],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";@import "@/assets/scss/mixins.scss";',
        },
      },
    },
  },
});
