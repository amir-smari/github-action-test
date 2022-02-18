<template>
  <div class="animation_wrapper">
    <Vue3Lottie
      @onComplete="onComplete"
      :animationData="currentAnimation"
      :loop="false"
      ref="customControl"
      v-if="windowTop > 200"
      @click="showModal = true"
    />
    <ModalComponent v-show="showModal" @close-modal="closeModal" :fit="true">
      <video controls height="400px" autoplay muted>
        <source src="assets/videos/demo.mp4" type="video/mp4" />
      </video>
    </ModalComponent>
  </div>
</template>

<script>
import Vue3Lottie from "vue3-lottie";
import animationMobileEn from "@/assets/animation/mobile/animationMobileEn.json";
import animationMobileFr from "@/assets/animation/mobile/animationMobileFr.json";
import animationEn from "@/assets/animation/desktop/animationEn.json";
import animationFr from "@/assets/animation/desktop/animationFr.json";
import ModalComponent from "../shared/ModalComponent.vue";

export default {
  components: {
    Vue3Lottie,
    ModalComponent,
  },
  data() {
    return {
      playState: false,
      animationMobileEn,
      animationMobileFr,
      animationEn,
      animationFr,
      windowTop: 0,
      showModal: false,
    };
  },
  computed: {
    currentAnimation() {
      let anim;
      if (screen.width > 992 && this.$i18n.locale == "en") {
        return (anim = animationEn);
      }
      if (screen.width > 992 && this.$i18n.locale == "fr") {
        return (anim = animationFr);
      }
      if (screen.width < 992 && this.$i18n.locale == "en") {
        return (anim = animationMobileEn);
      }
      if (screen.width < 992 && this.$i18n.locale == "fr") {
        return (anim = animationMobileFr);
      } else return anim;
    },
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.scrollY;
    },
    onComplete() {
      this.$refs["customControl"]?.playSegments([[210, 250]], true);
    },
    closeModal() {
      this.showModal = false;
    },
  },
  mounted() {
    this.windowTop = window.scrollY;
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
<style lang="scss" scoped>
.animation_wrapper {
  width: 100%;
  height: 350px;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    height: 600px;
  }
}
</style>