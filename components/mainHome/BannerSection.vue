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
  padding: 5%;
  margin: 2% auto;
  @include flex-center;
  flex-direction: column;
  text-align: center;
  span {
    @include meduim-text;
    margin: 2% auto;
  }
  p {
    @include small-text;
  }
  color: $light;
  .btns__wrapper {
    margin-top: 2%;
    @include flex-center;
    column-gap: 10px;
    .primary__btn {
      @include btn;
      @include small-text;
      color: $grey2;
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
      .primary__btn{
          padding: 8px;
      }
    }
  }
}
</style>
