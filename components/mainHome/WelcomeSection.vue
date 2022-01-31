<template>
  <div class="welcome-section">
    <img src="@/assets/img/svg/circle.svg" alt="circle" class="circle" />
    <div class="disque"></div>
    <div class="hexagone"></div>
    <!-- <img src="@/assets/img/svg/hexagone.svg" alt="hexagone" class="hexagone" /> -->
    <div class="semi-circle"></div>

    <div class="welcome-section__content">
      <div class="welcome-section__header">
        <img src="@/assets/img/svg/header-logo.svg" alt="logo" />
        <p class="title">Workflows Automation Platform</p>
      </div>
      <div class="welcome-section__desc">
        <h1>Programmez autrement, développez plus rapidement</h1>
        <span
          >“500 fonctionnalités font aujourd’hui 80% de tous les développements
          informatiques. Il est donc possible de proposer des solutions
          d’automatisation qui feront gagner un temps considérable aux
          développeurs”.</span
        >
      </div>
      <div class="welcome-section_illustrator">
        <img src="@/assets/img/png/community.png" alt="community" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome-section {
  // background-image: url("@/assets/img/png/community-bg.png");
  background-color: #fff;
  height: 90vh;
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
    background-image: url("@/assets/img/svg/hexagone.svg");
    width: 7rem;
    height: 7rem;
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
    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }
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
  }
  .welcome-section__content {
    width: 52%;
    margin: auto;
    text-align: justify;
    @include flex-evenly;
    flex-direction: column;
    height: 100%;

    .welcome-section__desc {
      text-align: center;
      h1 {
        margin-bottom: 1rem;
      }
    }

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
