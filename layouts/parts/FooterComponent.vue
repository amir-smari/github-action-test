<template>
  <footer>
    <div>
      <img
        src="@/assets/img/svg/footer-logo.svg"
        alt="logo"
        class="footer__logo"
      />
    </div>
    <span>© 2022 DevFactory. Powered by Sastec.</span>
    <div class="contact">
      <img src="@/assets/img/svg/email.svg" alt="email" class="media" />
      <img src="@/assets/img/svg/linkdin.svg" alt="linkdin" class="media" />
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background: $primary;
  height: 80px;
  width: 100%;
  color: $light;
  //styleName: Medium/H3-M;
  font-family: "Poppins-medium";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0px;
  text-align: center;

  .footer__logo {
    cursor: pointer;
  }
  .contact {
    img:first-child {
      margin-right: 10px;
      width: 30px;
    }
    .media {
      cursor: pointer;
    }
  }
}

@media screen and (max-width: $sm) {
  footer {
    @include flex-center;
    flex-direction: column;
    height: auto;
    padding: 15px;
  }
}
</style>
