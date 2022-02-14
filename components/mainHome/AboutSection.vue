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
            <!-- <strong> {{ $t("about.engagezVosPartenaires") }} : </strong>
            {{ $t("about.designYourPrototype") }}
          </p> -->
          </p>

          <p class="about-feedback">
            <q>{{ $t("about.appoloFeedback") }}</q>
          </p>
          <a
            href="https://apollo-immo.fr"
            class="btn-discover_appolo"
            target="_blank"
            >{{ $t("discoverThePlatform") }}</a
          >
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

          <button class="primary__btn" @click="openModal">
            <span> {{ $t("about.learnMore") }} </span>
            <img src="@/assets/img/svg/light-arrow.svg" alt="arrow" />
          </button>
        </div>
        <ModalComponent v-show="showModal" @close-modal="closeModal">
          <iframe
            :src="src"
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
        <div class="viewer_wrapper">
          <div v-viewer="options" class="images images_wrapper" ref="images">
            <img
              src="@/assets/img/png/tickets-kanban.png"
              alt="overview"
              class="about__img image"
            />
            <img
              src="@/assets/img/png/tickets.png"
              alt="overview"
              class="about__img image"
            />
            <img
              src="@/assets/img/png/tickets-tables.png"
              alt="overview"
              class="about__img image"
            />
          </div>
          <img
            src="@/assets/img/svg/view.svg"
            alt="view image"
            class="view-icon"
            @click="show"
          />
        </div>
      </div>

      <div class="about__wrapper">
        <!-- <img
          src="@/assets/img/png/dashboard.png"
          alt="dashboard"
          class="about__img"
        /> -->

        <div class="viewer_wrapper">
          <div v-viewer="options" class="images images_wrapper" ref="images">
            <img
              src="@/assets/img/png/tickets-kanban.png"
              alt="overview"
              class="about__img image"
            />
            <img
              src="@/assets/img/png/tickets.png"
              alt="overview"
              class="about__img image"
            />
            <img
              src="@/assets/img/png/tickets-tables.png"
              alt="overview"
              class="about__img image"
            />
          </div>
          <img
            src="@/assets/img/svg/view.svg"
            alt="view image"
            class="view-icon"
            @click="show"
          />
        </div>

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
const images = ref<any>();
const options = ref({
  toolbar: true,
  title: false,
  movable: false,
  rotatable: false,
  scalable: false,
});
const showModal = ref(false);
const src = ref("");
const openModal = () => {
  showModal.value = true;
  src.value = "../assets/pdf/project-genesis.pdf";
};
const closeModal = () => {
  showModal.value = false;
  src.value = "";
};
const show = () => {
  const viewer = images.value.$viewer;
  viewer.show();
};
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
      margin-bottom: 5rem;

      .round-shape {
        position: absolute;
        left: 0;
        z-index: 50;
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
        z-index: 100;
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
          margin-top: 5rem;
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
.image {
  width: 300px;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}
.images_wrapper {
  position: relative;

  img:nth-child(1) {
    position: absolute;
    top: 25%;
    left: 25%;
  }
}
.viewer_wrapper {
  position: relative;
  .view-icon {
    position: absolute;
    top: 40%;
    left: 45%;
    cursor: pointer;
  }
}
.about-feedback {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.8rem;
  margin-bottom: 1rem;
}
.btn-discover_appolo {
  background-color: #0b3d91;
  border-radius: 6px;
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0px 3px 12px -1px rgb(24 28 50 / 40%),
    0px 2px 4px -1px rgb(24 28 50 / 10%);
  &:hover {
    background-color: darken(#0b3d91, 10%);
  }
}
</style>
