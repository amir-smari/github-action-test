<template>
  <div class="welcome-section aos-init aos-animate" data-aos="fade-up">
    <img src="@/assets/img/svg/circle.svg" alt="circle" class="circle" />
    <div class="disque"></div>
    <div class="hexagone"></div>
    <div class="semi-circle"></div>

    <div class="welcome-section__content">
      <div class="welcome-section__header">
        <img src="@/assets/img/svg/header-logo.svg" alt="logo" />
        <p class="title">{{ $t("welcome.workflowsAutomationPlatform") }}</p>
      </div>
      <div class="welcome-section__desc">
        <h1>{{ $t("welcome.title") }}</h1>
        <p>
          <q>
            {{ $t("welcome.description") }}
          </q>
        </p>
      </div>
      <div class="welcome-section_illustrator"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome-section {
  // background-image: url("@/assets/img/png/community-bg.png");
  background-color: #fff;
  height: 85vh;
  position: relative;
  clip-path: ellipse(123% 100% at 50% 0%);
  .disque {
    position: absolute;
    bottom: 20%;
    right: 15%;
    background-color: #7239ea;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .circle {
    position: absolute;
    left: 15%;
    bottom: 20%;
  }
  .hexagone {
    position: absolute;
    left: 15%;
    top: 20%;
    background-image: url("@/assets/img/png/hexagone.png");
    width: 5.7rem;
    height: 6rem;
    background-repeat: no-repeat;
  }

  .semi-circle {
    position: absolute;
    background-image: url("@/assets/img/png/ellipse.png");
    right: 0%;
    top: 10%;
    background-repeat: no-repeat;
    height: 14rem;
    width: 6rem;
  }
  .welcome-section__header {
    padding-bottom: 0;
    .title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-top: 1rem;
    }
    padding: 30px;
    @include flex-center;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: 0px;
    text-align: center;
  }
  .welcome-section__content {
    width: 52%;
    margin: auto;
    text-align: justify;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 3rem;
    .welcome-section__desc {
      text-align: center;
      h1 {
        margin-bottom: 1rem;
        font-weight: 500;
      }
      p {
        font-weight: 600;
        line-height: 26px;
        letter-spacing: 0px;
        color: $grey3;
        text-align: center;
      }
    }
  }
}
.welcome-section_illustrator {
  background-image: url("@/assets/img/png/community.png");
  width: 17rem;
  height: 18rem;
  background-repeat: no-repeat;
}
@media screen and (max-width: $lg) {
  .welcome-section {
    height: auto;
    background-image: $light;

    .disque,
    .circle,
    .hexagone {
      display: none;
    }
    img {
      max-width: 70%;
    }
    .welcome-section__header {
      @include small-text;
      img {
        max-width: 80%;
      }
    }
    .welcome-section__content {
      width: 90%;

      p {
        @include small-text;
      }

      span {
        @include x-small-text;
      }
    }
  }
}
</style>
