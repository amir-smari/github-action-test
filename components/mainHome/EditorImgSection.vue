<template>
  <div class="code-editor">
    <div class="desktop-img">
      <img
        src="/assets/images/code-editor-en.png"
        alt="problematic"
        class="problematic-img"
        v-if="$i18n.locale == 'en'"
      />
      <img
        src="/assets/images/code-editor-fr.png"
        alt="problematic"
        class="problematic-img"
        v-if="$i18n.locale == 'fr'"
      />
    </div>
    <div class="mobile-img">
      <img
        src="/assets/images/code-editor-mobile-en.png"
        alt="problematic"
        class="problematic-img"
        v-if="$i18n.locale == 'en'"
      />
      <img
        src="/assets/images/code-editor-mobile-fr.png"
        alt="problematic"
        class="problematic-img"
        v-if="$i18n.locale == 'fr'"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.code-editor {
  margin-bottom: 1rem;
  margin-top: 1rem;
  img {
    width: 100%;
    object-fit: contain;
  }
}
.desktop-img {
  display: none;
}
@media screen and (min-width: $md) {
  .code-editor {
    margin-bottom: 4rem;
    margin-top: 3rem;
  }
  .desktop-img {
    display: block;
  }
  .mobile-img {
    display: none;
  }
}
</style>
