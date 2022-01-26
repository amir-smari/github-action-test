<template>
  <div class="home">
    <WelcomeSection />
    <img
      src="@/assets/img/png/problematic.png"
      alt="problematic"
      class="problematic-img"
    />
    <ContactSection/>
  </div>
</template>
<script>
import WelcomeSection from "@/components/main-home/WelcomeSection.vue";
import ContactSection from '~/components/main-home/ContactSection.vue';

export default {
  components: {
    WelcomeSection,
    ContactSection,
  },
};
</script>
<style lang="scss">
.problematic-img {
  width: 100%;
  margin: auto;
  @include flex-center;
}
</style>
