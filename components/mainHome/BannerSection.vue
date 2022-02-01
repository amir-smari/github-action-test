<template>
  <div class="banner-section">
    <img src="@/assets/img/svg/studio-logo.svg" alt="logo" />
    <span>
      Un manque de ressources pour développer? Des aléas techniques sur votre
      projet?
    </span>
    <p>
      Accélérez vos développements : Bénéficiez de la puissance de la plateforme
      DevFactory, de ressources dédiées et de notre expertise en nouvelles
      technologies !
    </p>
    <div class="btns__wrapper">
      <button class="primary__btn">Découvrir l’offre</button>
      <button class="primary__btn">Voir le Business case</button>
    </div>
  </div>
</template>

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
