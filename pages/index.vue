<template>
  <div class="home">
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
    <div class="scroll__wrapper">
      <button class="scroll-btn" @click="scrollToTop">
        <img src="@/assets/img/svg/light-arrow.svg" alt="arrow" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import WelcomeSection from "@/components/mainHome/WelcomeSection.vue";
import RegisterSection from "@/components/mainHome/RegisterSection.vue";
import AboutSection from "@/components/mainHome/AboutSection.vue";
import MindmapSection from "@/components/mainHome/MindmapSection.vue";
import BannerSection from "@/components/mainHome/BannerSection.vue";
import ContactSection from "@/components/mainHome/ContactSection.vue";
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>
<style lang="scss" scoped>
.scroll__wrapper {
  display: flex;
  justify-content: flex-end;
  .scroll-btn {
    @include btn;
    background: $primary;
    padding: 8px;
    margin-right: 24px;
    margin-bottom: 21px;

    img {
      transform: rotate(270deg);
    }
  }
}
.problematic-img {
  width: 100%;
  margin: auto;
  @include flex-center;
  margin: 8% auto;
}
</style>
