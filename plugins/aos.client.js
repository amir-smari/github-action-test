import AOS from "aos";
import "aos/dist/aos.css";

// import { defineNuxtPlugin } from "#app";

// export default defineNuxtPlugin((nuxtApp) => {
//   // Doing something with nuxtApp
//   nuxtApp.use(AOS.init());
// });
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  AOS.init({
    startEvent: "DOMContentLoaded",
    initClassName: true,
    once: false,
  });
  // AOS.refresh();
  // AOS.refreshHard();
});
