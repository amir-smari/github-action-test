<template>
  <div class="banner-section">
    <img src="@/assets/img/svg/studio-logo.svg" alt="logo" data-aos="fade-down"/>
    <span>
      {{ $t("banner.lackOfResources") }} ? {{ $t("banner.technicalHazard") }} ?
    </span>
    <p>{{ $t("banner.description") }} !</p>
    <div class="btns__wrapper">
      <button class="primary__btn" @click="openModal('flyerModal')" data-aos="fade-right">
        {{ $t("banner.discoverTheOffer") }}
      </button>
      <button class="primary__btn" @click="openModal('businessModal')" data-aos="fade-left">
        {{ $t("banner.businessCase") }}
      </button>
    </div>
    <ModalComponent v-show="showModal" @close-modal="showModal = false">
      <iframe
        :src="
          id == 'flyerModal'
            ? '../assets/pdf/flyer.pdf'
            : '../assets/pdf/business-case.pdf'
        "
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </ModalComponent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ModalComponent from "@/components/shared/ModalComponent.vue";
const showModal = ref(false);
const id = ref("");
const openModal = (modalId: string): void => {
  showModal.value = true;
  id.value = modalId;
};
</script>

<style lang="scss" scoped>
.banner-section {
  background: $primary;
  text-align: center;
  padding: 3rem 0;
  margin: 2% auto;
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
      padding: 0.75rem 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: center;
      box-shadow: 0px 1.31818px 5.27273px -1.31818px rgba(24, 28, 50, 0.2);
      color: $grey2;
      &:hover {
        background: darken($light, 10%);
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .banner-section {
    img {
      width: 80%;
    }
    span {
      @include small-text;
      margin: 2% auto;
    }
    p {
      @include x-small-text;
    }
    .btns__wrapper {
      @include flex-center;
      flex-direction: column;
      row-gap: 10px;
      .primary__btn {
        padding: 8px;
      }
    }
  }
}
</style>
