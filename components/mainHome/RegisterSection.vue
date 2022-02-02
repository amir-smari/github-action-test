<template lang="">
  <div class="register-section">
    <div class="register-section__title">
      {{ $t("register.title") }}
    </div>
    <a href="#mindmap">
      <button class="outline__btn">
        <span> {{ $t("register.goToEditor") }}</span>
        <img src="@/assets/img/svg/arrow.svg" alt="arrow" />
      </button>
    </a>
    <div class="register-section__form">
      <span class="form-title"
        >{{ $t("register.disponible") }}
        <span>{{ $t("register.April") }} 2022</span>,
        {{ $t("register.beFirst") }}
        !
      </span>
      <span class="form-title-muted"> {{ $t("register.formTitle") }}</span>
      <div class="form__wrapper">
        <input type="text" :placeholder="$t('register.placeholderEmail')" />
        <button class="primary__btn">{{ $t("register.notifyMe") }}</button>
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
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0px;
    text-align: center;
  }
  .outline__btn {
    color: $primary;
    background: $light;
    @include btn;
    margin: 26px auto;
    font-weight: 500;
    gap: 0.5rem;
    box-shadow: 0px 3.85714px 15.4286px -1.28571px rgba(24, 28, 50, 0.4),
      0px 2.57143px 5.14286px -1.28571px rgba(24, 28, 50, 0.1);
    &:hover {
      background: darken($light, 10%);
    }
    span {
      font-family: Poppins;
    }
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
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      letter-spacing: 0px;
      span {
        color: $primary;
        font-weight: 700;
      }
    }
    .form-title-muted {
      font-size: 1.05rem;
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
        box-shadow: 0px 1px 4px -1px rgba(24, 28, 50, 0.2);
        &:hover {
          background: darken($primary, 10%);
        }
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
