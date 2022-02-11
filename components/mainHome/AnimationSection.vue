<template>
  <div class="animation_wrapper">
    <Vue3Lottie
      :animationData="animation"
      :loop="false"
      ref="customControl"
      v-if="windowTop > 200"
    />
  </div>
</template>

<script>
import Vue3Lottie from "vue3-lottie";
import animation from "@/assets/animation/data.json";

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      playState: false,
      animation,
      windowTop: 0,
    };
  },
  methods: {
    onScroll(e) {
      this.windowTop = window.scrollY;
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
  height: 600px;
}
</style>