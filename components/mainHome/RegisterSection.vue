<template lang="">
  <div class="register-section">
    <p class="register-section__title">
      {{ $t("register.title") }}
    </p>
    <a href="#mindmap" class="outline__btn">
      <span>  {{ $t("mindMap.createWebApp") }}</span>
      <img src="@/assets/img/svg/arrow.svg" alt="arrow" />
    </a>
    <div
      class="register-section__form"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <span class="form-title"
        >{{ $t("register.disponible") }}
        <span>{{ $t("register.April") }} 2022</span>,
        {{ $t("register.beFirst") }}
        !
      </span>
      <span class="form-title-muted"> {{ $t("register.formTitle") }}</span>
      <div class="form__wrapper">
        <div class="register-input">
          <input
            type="email"
            :placeholder="$t('register.placeholderEmail')"
            v-model="formValue.email"
          />
          <span class="required-input" v-show="checkInput.isEmailValid"
            >{{$t('contact.email') + ' ' + $t('isRequired')}}</span
          >
        </div>
        <button class="primary__btn" @click="handelRegisterBtn">
          {{ $t("register.notifyMe") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let checkInput = ref({
  isEmailValid: false,
});
const formValue = ref({
  email: "",
});
const handelRegisterBtn = (event) => {
  event.preventDefault();
  //mailAddress Validation
  const regEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!regEmail.test(formValue.value.email)) {
    checkInput.value.isEmailValid = true;
  } else checkInput.value.isEmailValid = false;
  if (!checkInput.value.isEmailValid) {
    console.log("submited");
    formValue.value.email = "";
  }
};
</script>

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
  padding: 4% 0.5rem 0 0.5rem;
  a {
    text-decoration: none;
    width: fit-content;
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
      display: flex;
      gap: 1rem;
      align-items: baseline;
      margin-top: 30px;
      margin-bottom: 0.5rem;
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
.register-input {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.25rem;
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
