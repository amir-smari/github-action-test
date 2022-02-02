<template>
  <div class="about-section">
    <div class="about">
      <div class="about__wrapper">
        <div class="about__content">
          <p>
            {{ $t("about.WhetherYouAre") }}, {{ $t("about.weHave") }}
            <strong>{{ $t("about.solution") }}</strong>
            {{ $t("about.developApplication") }}.
          </p>
          <p>
            <strong> {{ $t("about.engagezVosPartenaires") }} : </strong>
            {{ $t("about.designYourPrototype") }}
          </p>
        </div>
        <img src="@/assets/img/png/award.png" alt="award" class="about__img" />
        <div class="round-shape">
          <img src="@/assets/img/svg/round-shape.svg" alt="award" />
        </div>
      </div>
      <div class="about__wrapper">
        <img src="@/assets/img/png/stats.png" alt="stats" class="about__img" />
        <div class="about__content">
          {{ $t("about.devFactoryIsWorkflow") }}

          <button class="primary__btn" @click="showModal = true">
            <span> {{ $t("about.learnMore") }} </span>
            <img src="@/assets/img/svg/light-arrow.svg" alt="arrow" />
          </button>
        </div>
        <ModalComponent v-show="showModal" @close-modal="showModal = false">
          <iframe
            src="../assets/pdf/project-genesis.pdf"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>
        </ModalComponent>
        <div class="hexagone-shape">
          <img src="@/assets/img/svg/hexagone-shape.svg" alt="award" />
        </div>
      </div>
    </div>

    <div class="about">
      <div class="about__wrapper">
        <div class="about__content detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum rhoncus
          sed non libero convallis maecenas amet arcu, elit. Enim eget blandit
          elit commodo. Vehicula id ipsum, ligula arcu neque eu. Leo sit turpis
          vitae aenean nec. Nec fringilla egestas pellentesque pretium, ultrices
          viverra.
        </div>
        <img
          src="@/assets/img/png/overview.png"
          alt="overview"
          class="about__img"
        />
      </div>

      <div class="about__wrapper">
        <img
          src="@/assets/img/png/dashboard.png"
          alt="dashboard"
          class="about__img"
        />
        <div class="about__content detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum rhoncus
          sed non libero convallis maecenas amet arcu, elit. Enim eget blandit
          elit commodo. Vehicula id ipsum, ligula arcu neque eu. Leo sit turpis
          vitae aenean nec. Nec fringilla egestas pellentesque pretium, ultrices
          viverra.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ModalComponent from "@/components/shared/ModalComponent.vue";
const showModal = ref(false);
</script>

<style lang="scss" scoped>
.about-section {
  .about:nth-child(1) {
    margin-top: 14%;
  }
  .about {
    margin-bottom: 4rem;
    .about__wrapper {
      @include flex-around;
      position: relative;
      .round-shape {
        position: absolute;
        left: 0;
      }
      .hexagone-shape {
        position: absolute;
        right: 0;
      }
      .about__content {
        width: 33%;
        color: $grey1;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 39px;
        letter-spacing: 0px;
        text-align: left;
        strong {
          font-weight: 700;
          font-size: 1.5rem;
        }

        .primary__btn {
          @include btn;
          background: $primary;
          color: $light;
          margin-top: 15px;
          padding: 0.5rem 1rem;
          box-shadow: 0px 3px 12px -1px rgba(24, 28, 50, 0.4),
            0px 2px 4px -1px rgba(24, 28, 50, 0.1);
          gap: 0.5rem;

          &:hover {
            background: darken($primary, 10%);
          }
          img {
            transform: scale(0.8);
          }
          span {
            font-family: Poppins;
          }
        }
      }

      .detail {
        @include small-text;
        text-align: justify;
        font-weight: 400;
      }
    }
  }
}
@media screen and (max-width: $lg) {
  .about-section {
    .about {
      .about__wrapper:first-child {
        flex-direction: column-reverse;
      }
      .about__wrapper {
        flex-direction: column;
        img {
          max-width: 300px;
        }
        .about__content {
          width: 80%;
          text-align: center;
          .primary__btn {
            margin: 1rem auto;
          }
        }
      }
    }
  }
}
@media screen and (max-width: $sm) {
  .about-section {
    margin-top: 5rem;
    .about {
      .about__wrapper {
        margin: 60px auto;
        .about__img {
          width: 70%;
          max-width: 250px;
        }
        .about__content {
          @include small-text;
          text-align: center;
          .primary__btn {
            margin-top: 15px;
            padding: 8px;
          }
        }
        .detail {
          @include x-small-text;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
