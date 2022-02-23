import VueGtag from "vue-gtag-next";
import { defineNuxtPlugin, useRuntimeConfig } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: config.GA_MEASUREMENT_ID,
    },
    useDebugger: true,
  });
});
