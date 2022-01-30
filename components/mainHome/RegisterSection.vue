<template lang="">
  <div class="register-section">
    <div class="register-section__title">
      Estimez le temps de développement et le coût de votre projet
    </div>
    <a href="#mindmap">
      <button class="outline__btn">
        <span> Accédez à votre éditeur de CDC</span>
        <img src="@/assets/img/svg/arrow.svg" alt="arrow" />
      </button>
    </a>
    <div class="register-section__form">
      <span class="form-title"
        >Version Saas disponible en <span>avril 2022</span>, soyez les premiers
        !
      </span>
      <span class="form-title-muted"
        >Inscrivez-vous sur la liste d'attente pour une démo</span
      >
      <div class="form__wrapper">
        <input type="text" placeholder="Entrez votre email" />
        <button class="primary__btn">Notifiez-moi</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register-section {
  background-image: url("@/assets/img/png/register-bg.png");
  background-size: 100vw 100%;
  background-repeat: no-repeat;
  text-align: center;
  color: $light;
  position: relative;
  margin: 30px auto;
  height: 400px;
  padding-top: 4%;
  a {
    text-decoration: none;
  }
  .register-section__title {
    //styleName: SemiBold/H2-SB;
    font-family: "Poppins-semibold";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: center;
  }
  .outline__btn {
    color: $primary;
    background: $light;
    @include btn;
    @include small-text;
    margin: 26px auto;
    font-weight: 600 !important;
  }
  .register-section__form {
    width: 80%;
    margin: auto;
    background: $light;
    color: $dark;
    @include flex-center;
    flex-direction: column;
    margin-top: 65px;
    box-shadow: 0px 10px 20px $dark01;
    border-radius: 12px;
    padding: 3%;
    .form-title {
      font-family: "Poppins-medium";
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 3rem;
      letter-spacing: 0px;
      span {
        font-family: "Poppins-bold";
        color: $primary;
        font-weight: 700;
      }
    }
    .form-title-muted {
      font-family: "Poppins-medium";
      font-size: 1.05rem;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: 0px;
      text-align: center;

      color: $grey3;
    }
    .form__wrapper {
      @include flex-center;
      column-gap: 10px;
      margin-top: 30px;
      margin-bottom: 3%;
      .primary__btn {
        @include btn;
        padding: 12px;
        background: $primary;
        color: $light;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
      }
      input {
        @include input;
      }
    }
  }
}
@media screen and (max-width: $lg) {
  .register-section {
    .register-section__title {
      @include small-text;
    }
    .outline__btn {
      padding: 9px;
      @include x-small-text;
    }
    .register-section__form {
      .form-title {
        @include meduim-text;
      }

      .form-title-muted {
        @include x-small-text;
      }

      .form__wrapper {
        flex-direction: column;
        .primary__btn {
          width: 290px;
          margin-top: 15px;
        }
      }
    }
  }
}
@media screen and (max-width: $sm) {
  .register-section {
    .register-section__form {
      .form__wrapper {
        .primary__btn input {
          width: 270px;
        }
      }
      .form-title {
        font-size: 1rem !important;
        line-height: 1.5rem !important;
      }
    }
  }
}
</style>
