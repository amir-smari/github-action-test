<template lang="">
  <div class="register-section">
    <div class="register-section__title">
      Estimez le temps de développement et le coût de votre projet
    </div>
    <button class="outline__btn">
      <span> Accédez à votre éditeur de CDC</span>
      <img src="@/assets/img/svg/arrow.svg" alt="arrow" />
    </button>
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
  .register-section__title {
    @include meduim-text;
    font-weight: 600;
  }
  .outline__btn {
    color: $primary;
    background: $light;
    @include btn;
    margin: 26px auto;
  }
  .register-section__form {
    width: 80%;
    margin: auto;
    background: $light;
    color: $dark;
    @include flex-center;
    flex-direction: column;
    margin-top: 30px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding-top: 3%;
    .form-title {
      @include large-text;
      font-weight: 700;
      span {
        color: $primary;
      }
    }
    .form-title-muted {
      @include small-text;
      color: $grey3;
    }
    .form__wrapper {
      @include flex-center;
      column-gap: 10px;
      margin-top: 30px;
      margin-bottom: 3%;
      .primary__btn {
        @include btn;
        padding: 9px;
        background: $primary;
        color: $light;
      }
      input {
       @include input;
      }
    }
  }
}
@media screen and (max-width: $medium) {
  .register-section {
    .outline__btn {
      padding: 12px;
    }
    .register-section__form {
      .register-section__title {
        @include small-text;
      }
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
@media screen and (max-width: $small) {
  .register-section {
    .form-title {
      font-size: 1rem !important;
      line-height: 1.5rem !important;
    }
  }
}
</style>
