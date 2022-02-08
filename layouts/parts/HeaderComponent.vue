<template>
  <header>
    <div class="wrapper">
      <p class="wrapper-announcement">{{ $t("headerAnnouncement") }} !</p>
      <Language />
    </div>
  </header>
</template>
<script lang="ts">
import Language from "@/components/shared/LanguageComponent.vue";

export default {
  components: {
    Language,
  },
};
</script>

<style lang="scss" scoped>
header {
  background: $primary;
  text-align: center;
  @include x-small-text;
  color: #fff;
  // height: 30px;
  @include flex-center;
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 1rem;
    .wrapper-announcement {
      flex-grow: 1;
    }
  }
}
</style>
