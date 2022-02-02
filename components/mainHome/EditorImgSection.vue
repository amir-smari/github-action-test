<template>
  <div class="code-editor">
    <img
      src="@/assets/img/png/code-editor-fr.png"
      alt="problematic"
      class="problematic-img"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      v-if="$i18n.locale === 'fr'"
    />
    <img
      src="@/assets/img/png/code-editor-en.png"
      alt="problematic"
      class="problematic-img"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      v-if="$i18n.locale === 'en'"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.code-editor {
  margin-bottom: 4rem;
  img {
    width: 100%;
    object-fit: contain;
  }
}
</style>
