<template>
  <div id="mindmap" class="mindmap-section">
    <div class="mindmap__content">
      <h3>{{ $t("mindMap.title") }}</h3>
    </div>
    <img
      src="@/assets/img/png/mindmap.png"
      alt="mindmap"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    />
    <button class="primary__btn" @click="openMindmapInNewTab">{{ $t("mindMap.createWebApp") }}</button>
    <ModalComponent v-show="showModal" @close-modal="closeModal">
      <iframe allowfullscreen :src="src" frameborder="0" width="100%" height="100%"></iframe>
    </ModalComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ModalComponent from "@/components/shared/ModalComponent.vue";
const showModal = ref(false);
const src = ref("");
const openModal = () => {
  if (screen.width < 992) {
    return alert("this option is not available in the phone");
  } else {
    showModal.value = true;
    src.value = "";
  }
};
const closeModal = () => {
  showModal.value = false;
  src.value = "";
};
const openMindmapInNewTab = () => {
 window.open('https://admin.devfactory.ai/#/mindmap-demo') 
}
</script>
<style lang="scss" scoped>
.mindmap-section {
  background-image: url("@/assets/img/png/icon-bg.png");
  text-align: center;
  @include meduim-text;
  @media screen and (min-width: $md) {
    margin-bottom: 3rem;
  }
}
.mindmap__content {
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    @media screen and (min-width: $md) {
      font-size: 1.25rem;
    }
    @media screen and (min-width: $lg) {
      font-size: 1.5rem;
      margin-bottom: 5rem;
    }
  }
}
.primary__btn {
  padding: 10px;
  @include btn;
  @include btn-font;
  background: $primary;
  color: $light;
  margin: auto;
  padding: 0.5rem 1rem;
  font-weight: 600;

  &:hover {
    background: darken($primary, 10%);
  }
  @media screen and (min-width: $lg) {
    padding: 1rem 1.5rem;
  }
}
img {
  max-width: 90%;
}
@media screen and(min-width:$lg) {
  .mindmap-section {
    margin-top: 7rem;
  }
}
</style>
