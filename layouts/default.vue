<template lang="">
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Header from "~/layouts/parts/HeaderComponent.vue";
import Footer from "~/layouts/parts/FooterComponent.vue";
</script>
