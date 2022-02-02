import AOS from "aos";
import "aos/dist/aos.css";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  AOS.init({
    startEvent: "DOMContentLoaded",
    initClassName: true,
    once: true,
  });
});
