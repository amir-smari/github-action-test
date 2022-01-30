<template lang="">
  <div>
    <Header />
    <slot/>
    <Footer/>
  </div>
</template>
<script lang='ts' setup>
import Header from "@/layouts/parts/Header.vue";
import Footer from "@/layouts/parts/Footer.vue";
</script>

