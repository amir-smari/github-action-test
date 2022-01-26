<template lang="">
  <div>
    <Header />
    <slot/>
    <Footer/>
  </div>
</template>
<script lang='ts'>
import Header from "@/components/parts/Header.vue";
import Footer from "@/components/parts/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
};
</script>

