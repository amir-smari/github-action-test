<template>
  <div class="home">
    <!-- <Language /> -->
    <WelcomeSection />
    <img
      src="@/assets/img/png/problematic.png"
      alt="problematic"
      class="problematic-img"
    />
    <RegisterSection />
    <AboutSection />
    <img
      src="@/assets/img/png/code-editor.png"
      alt="problematic"
      class="problematic-img"
    />
    <MindmapSection />
    <BannerSection />
    <ContactSection />
    <div class="scroll__wrapper" :class="windowTop > 500 ? 'show-scroll' : ''">
      <button class="scroll-btn" @click="scrollToTop">
        <img src="@/assets/img/svg/light-arrow.svg" alt="arrow" />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import WelcomeSection from "@/components/mainHome/WelcomeSection.vue";
import RegisterSection from "@/components/mainHome/RegisterSection.vue";
import AboutSection from "@/components/mainHome/AboutSection.vue";
import MindmapSection from "@/components/mainHome/MindmapSection.vue";
import BannerSection from "@/components/mainHome/BannerSection.vue";
import ContactSection from "@/components/mainHome/ContactSection.vue";
// import Language from "~/components/LanguageComponent.vue";

export default {
  components: {
    WelcomeSection,
    RegisterSection,
    MindmapSection,
    ContactSection,
    AboutSection,
    BannerSection,
  },
  data() {
    return {
      windowTop: 0,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      console.log(this.windowTop);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
.scroll__wrapper {
  position: fixed;
  right: 2rem;
  bottom: -20%;
  transition: all 400ms ease-in-out;
  .scroll-btn {
    @include btn;
    background: $primary;
    padding: 8px;
    margin-right: 24px;
    margin-bottom: 21px;

    img {
      transform: rotate(270deg);
    }
    &:hover {
      background: darken($primary, 10%);
    }
  }
}
.problematic-img {
  width: 100%;
  margin: auto;
  @include flex-center;
  margin: 8% auto;
}
.show-scroll {
  bottom: 5rem;
}
</style>
