<template>
  <div class="banner-section">
    <img src="@/assets/img/svg/studio-logo.svg" alt="logo" />
    <span>
      {{ $t("banner.lackOfResources") }} ? {{ $t("banner.technicalHazard") }} ?
    </span>
    <p>{{ $t("banner.description") }} !</p>
    <div class="btns__wrapper">
      <button class="primary__btn" @click="openModal('flyer')">
        {{ $t("banner.discoverTheOffer") }}
      </button>
      <button class="primary__btn" @click="openModal('business-case')">
        {{ $t("banner.businessCase") }}
      </button>
    </div>
    <ModalComponent v-show="showModal" @close-modal="closeModal">
      <iframe :src="src" frameborder="0" width="100%" height="100%"></iframe>
    </ModalComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ModalComponent from "@/components/shared/ModalComponent.vue";
const showModal = ref(false);
// const id = ref("");
const src = ref("");
const openModal = (modalId: string): void => {
  showModal.value = true;
  src.value = `../assets/pdf/${modalId}.pdf`;
};

const closeModal = () => {
  showModal.value = false;
  src.value = "";
};
</script>

<style lang="scss" scoped>
.banner-section {
  background: $primary;
  text-align: center;
  padding: 3rem 0.75rem;
  margin: 2rem auto;
  @include flex-center;
  flex-direction: column;
  text-align: center;
  span {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0px;
    text-align: center;
    margin: 2% auto;
  }
  p {
    width: 65%;
    font-size: 1.29rem;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: center;
  }
  color: $light;
  .btns__wrapper {
    margin-top: 3%;
    @include flex-center;
    column-gap: 10px;
    .primary__btn {
      @include btn;
      @include btn-font;
      padding: 0.75rem 2rem;
      font-weight: 600;
      box-shadow: 0px 1.31818px 5.27273px -1.31818px rgba(24, 28, 50, 0.2);
      color: $grey2;
      &:hover {
        background: darken($light, 10%);
      }
    }
  }
}
.btns__wrapper {
  button {
    @media screen and (min-width: 600px) {
      width: fit-content;
    }
  }
}
@media screen and (max-width: 600px) {
  .banner-section {
    img {
      width: 65%;
    }
    span {
      @include small-text;
      margin: 1rem auto;
    }
    p {
      @include x-small-text;
      margin-bottom: 1rem;
      text-align: justify;
    }
    .btns__wrapper {
      @include flex-center;

      .primary__btn {
        padding: 8px;
      }
    }
  }
}
</style>
