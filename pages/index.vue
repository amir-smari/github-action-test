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
    <MindmapSection/>
    <BannerSection/>
    
  </div>
</template>
<script>
import WelcomeSection from "@/components/mainHome/WelcomeSection.vue";
import RegisterSection from "@/components/mainHome/RegisterSection.vue";
import AboutSection from "@/components/mainHome/AboutSection.vue";

import MindmapSection from "@/components/mainHome/MindmapSection.vue";
import BannerSection from "~/components/mainHome/BannerSection.vue";


export default defineComponent({
  components: {
    WelcomeSection,
    RegisterSection,
    AboutSection,
    MindmapSection,
    BannerSection
},
});
</script>
<style lang="scss" scoped>
.problematic-img {
  width: 100%;
  margin: auto;
  @include flex-center;
}
</style>
