<template>
  <div class="banner-section">
    <img src="@/assets/img/svg/studio-logo.svg" alt="logo" />
    <span>
      {{ $t("banner.lackOfResources") }} ? {{ $t("banner.technicalHazard") }} ?
    </span>
    <p>{{ $t("banner.description") }} !</p>
    <div class="btns__wrapper">
      <button class="primary__btn">{{ $t("banner.discoverTheOffer") }}</button>
      <button class="primary__btn">{{ $t("banner.businessCase") }}</button>
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
    font-family: "Poppins-medium";
    font-size: 1.3rem;
    font-style: normal;
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
      padding: 16px;
      font-size: 1.31rem;
      font-style: normal;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: center;

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
      .primary__btn {
        padding: 8px;
      }
    }
  }
}
</style>
