<template>
  <div class="welcome-section">
    <img src="@/assets/img/svg/circle.svg" alt="circle" class="circle" />
    <img src="@/assets/img/svg/disque.svg" alt="disque" class="disque" />
    <img src="@/assets/img/svg/hexagone.svg" alt="hexagone" class="hexagone" />
    <div class="welcome-section__header">
      <img src="@/assets/img/svg/header-logo.svg" alt="logo" />
      <div class="title">{{ $t("welcome.workflowsAutomationPlatform") }}</div>
    </div>
    <div class="welcome-section__content">
      <p>{{ $t("welcome.title") }}</p>
      <span>
        <q> {{ $t("welcome.description") }}</q>
      </span>
    </div>
    <img src="@/assets/img/png/community.png" alt="community" />
  </div>
</template>

<style lang="scss" scoped>
.welcome-section {
  background-image: url("@/assets/img/png/community-bg.png");
  background-size: 100vw 100%;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  height: 765px;
  position: relative;
  .disque {
    position: absolute;
    right: 138px;
    top: 119px;
  }
  .circle {
    position: absolute;
    left: 302px;
    top: 123px;
  }
  .hexagone {
    position: absolute;
    left: 98px;
    bottom: 225px;
  }

  .welcome-section__header {
    padding: 30px;
    @include flex-center;
    flex-direction: column;
    font-family: "Poppins-semibold";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: 0px;
    text-align: center;

    img {
      margin-bottom: 20px;
    }
  }
  .welcome-section__content {
    width: 57.8%;
    margin: auto;
    text-align: center;

    span {
      font-family: "Poppins-semibold";
      font-size: 1.08rem;
      font-style: normal;
      font-weight: 600;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: center;
      color: $grey3;
      text-align: justify;
    }
    p {
      font-family: "Poppins-medium";
      font-size: 2rem;
      font-style: medium;
      font-weight: 500;
      line-height: 48px;
      letter-spacing: 0px;
      text-align: center;
      color: $grey1;
      margin-top: 3%;
      margin-bottom: 2%;
    }
  }
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
