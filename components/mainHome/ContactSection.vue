<template>
  <div class="contact-section">
    <span class="dot"></span>
    <div class="contact__wrapper">
      <div class="contact-form" data-aos="fade-down">
        <p class="form__title">
          {{ $t("contact.title") }}
        </p>
        <div class="input__wrapper">
          <input type="text" :placeholder="$t('contact.nom')" />
          <input type="text" :placeholder="$t('contact.email')" />
        </div>
        <input
          type="text"
          :placeholder="$t('contact.subject')"
          class="form__control"
        />

        <textarea id="story" name="story" placeholder="Message"></textarea>
        <button class="btn__primary">{{ $t("contact.send") }}</button>
      </div>
      <div class="contact-info" data-aos="fade-left">
        <div class="info__property">
          <span class="info__key">{{ $t("contact.phone") }}</span>
          <span class="info__value">06 18 41 90 27</span>
        </div>
        <div class="info__property">
          <span class="info__key">Email</span>
          <span class="info__value">Contact@devfactory.ai</span>
        </div>
        <div class="info__property">
          <span class="info__key">{{ $t("contact.visitOurWebsite") }}</span>
          <span class="info__value">www.sastec-group.com</span>
        </div>
        <div class="info__property">
          <span class="info__key">{{ $t("contact.follow") }}</span>
          <img src="@/assets/img/svg/linkdin.svg" alt="linkdin" class="media" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-section {
  @include flex-center;
  margin: 5% auto;
  position: relative;
  .dot {
    height: 107px;
    width: 107px;
    background-color: $primary;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 0;
    left: 7%;
    transform: translate(0%, -50%);
  }
  .contact__wrapper {
    display: flex;
    width: 80%;
    border-radius: 6px;
    overflow: hidden;
    perspective: 1px;
    box-shadow: 0px 3px 12px -1px $grey04, 0px 2px 4px -1px $grey11;
    .contact-form {
      background: $light;
      width: 60%;
      padding: 6%;
      .form__title {
        font-family: "Poppins-semibold";
        font-size: 1.18rem;
        font-style: normal;
        font-weight: 600;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 20px;
      }
      input,
      textarea {
        @include input;
        display: block;
        margin-bottom: 20px;
      }
      .input__wrapper {
        @include flex-center;
        column-gap: 10px;
        input {
          width: 50%;
        }
      }
      .form__control {
        width: 100%;
      }
      textarea {
        height: 160px;
        padding: 20px;
        width: 100%;
      }
      .btn__primary {
        @include btn;
        padding: 9px;
        width: 100%;
        background: $primary;
        color: $light;
      }
    }
    .contact-info {
      background: $primary;
      width: 40%;
      padding-left: 6%;
      padding-top: 10%;
      .info__property {
        flex-direction: column;
        @include flex-start;
        align-items: flex-start;
        margin-bottom: 35px;
        text-align: start;

        .info__key {
          font-family: "Poppins-semibold";
          font-size: 1.12rem;
          font-style: normal;
          font-weight: 600;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;

          color: $light;
          margin-bottom: 10px;
        }
        .info__value {
          font-family: "Poppins-medium";
          font-size: 0.8rem;
          font-style: normal;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;

          color: $light;
        }
        .media {
          cursor: pointer;
        }
      }
    }
  }
}

@media screen and (max-width: $lg) {
  .dot {
    display: none !important;
  }
}
@media screen and (max-width: $md) {
  .contact-section {
    .contact__wrapper {
      flex-direction: column;
      .contact-form {
        width: 100%;
        .form__title {
          @include small-text;
        }
      }
      .contact-info {
        width: 100%;
      }
    }
    .input__wrapper {
      flex-direction: column;
      max-width: 100%;
      input {
        width: 100% !important;
        display: block;
      }
    }
  }
}
</style>
