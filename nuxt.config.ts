import type { IntlifyModuleOptions } from "@intlify/nuxt3";
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["@intlify/nuxt3"],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/main.css"],
  // env variable
  publicRuntimeConfig: {
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
  privateRuntimeConfig: {
    SMTP_ADMIN_EMAIL: process.env.SMTP_ADMIN_EMAIL,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    CONTACT_FORM_SEND_TO: process.env.CONTACT_FORM_SEND_TO,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
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
  intlify: {
    vueI18n: {
      locale: "fr",
    },
  },
});

declare module "@nuxt/schema" {
  export interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}
