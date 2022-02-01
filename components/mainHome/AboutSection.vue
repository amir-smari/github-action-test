<template>
  <div class="about-section">
    <div class="about">
      <div class="about__wrapper">
        <div class="about__content">
          <p>
            Que vous soyez une Start Up, un éditeur ou bien un entrepreneur,
            nous avons <strong>La Solution</strong> pour développer vos
            applications web.
          </p>
          <p>
            <strong>Engagez vos partenaires : </strong> Concevez plus rapidement
            votre prototype, étape clé pour une levée de fonds.
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
          DevFactory est une plateforme d’automatisation des workflows, axée
          autour d’une méthodologie innovante de programmation
          <button class="primary__btn">
            <span> En savoir plus </span>
            <img src="@/assets/img/svg/light-arrow.svg" alt="arrow" />
          </button>
        </div>
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

<style lang="scss" scoped>
.about-section {
  margin-top: 10%;
  .about {
    margin-bottom: 10%;
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
        font-family: "Poppins-semibold";
        font-size: 1.3rem;
        font-style: normal;
        font-weight: 600;
        line-height: 39px;
        letter-spacing: 0px;
        text-align: left;
        strong {
          font-family: "Poppins-bold";
          font-weight: 800;
          font-size: 1.5rem;
          font-style: bold;
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

        .about__content {
          width: 80%;
          text-align: center;
          .primary__btn {
            margin: auto;
          }
        }
      }
    }
  }
}
@media screen and (max-width: $sm) {
  .about-section {
    margin-top: 40%;
    .about {
      .about__wrapper {
        margin: 60px auto;
        .about__img {
          width: 70%;
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
