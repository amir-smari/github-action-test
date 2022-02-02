<template>
  <div class="contact-section">
    <div class="contact__wrapper">
      <div class="contact-form">
        <p class="form__title">
          {{ $t("contact.title") }}
        </p>
        <div class="input__wrapper">
          <input type="text" :placeholder="$t('contact.name')" />
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
      <div class="contact-info">
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
          <a href="www.sastec-group.com" target="_blank">
            <span class="info__value">www.sastec-group.com</span>
          </a>
        </div>
        <div class="info__property">
          <span class="info__key">{{ $t("contact.follow") }}</span>
          <a
            href="https://www.linkedin.com/company/devfactory-ai"
            target="_blank"
          >
            <img
              src="@/assets/img/svg/linkdin.svg"
              alt="linkdin"
              class="media"
            />
          </a>
        </div>
      </div>
      <span class="dot"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-section {
  @include flex-center;
  margin: 4rem;
  position: relative;
  .dot {
    height: 107px;
    width: 107px;
    background-color: $primary;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 0;
    left: -3rem;
    transform: translate(0%, -50%);
    z-index: -1;
  }
  .contact__wrapper {
    position: relative;
    display: flex;
    border-radius: 6px;
    perspective: 1px;
    box-shadow: 0px 3px 12px -1px $grey04, 0px 2px 4px -1px $grey11;
    .contact-form {
      background: $light;
      flex-grow: 1;
      padding: 2rem 3rem;
      border-radius: 6px 0px 0px 6px;
      .form__title {
        font-size: 1.18rem;
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

        &:hover {
          background: darken($primary, 10%);
        }
      }
    }
    .contact-info {
      background: $primary;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2rem 3rem;
      gap: 2rem;
      border-radius: 0px 6px 6px 0px;
      .info__property {
        flex-direction: column;
        @include flex-start;
        align-items: flex-start;
        text-align: start;

        .info__key {
          font-size: 1.12rem;
          font-weight: 600;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;
          color: $light;
        }
        .info__value {
          font-size: 0.8rem;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;
          text-align: left;
          color: $light;
          white-space: nowrap;
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
@media screen and (min-width: $lg) {
  .contact-section {
    margin-top: 6rem;
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
