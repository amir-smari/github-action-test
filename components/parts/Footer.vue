<template>
  <footer>
    <img src="@/assets/img/svg/devfactoryLogo.svg" alt="logo" />
    <span>© 2022 DevFactory. Powered by Sastec.</span>
    <div class="contact">
      <img src="@/assets/img/svg/email.svg" alt="" />
      <img src="@/assets/img/svg/linkdin.svg" alt="" />
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  @include flex-around;
  background: $primary;
  height: 80px;
  width: 100%;
  color: $light;

  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0;
  .contact {
    img:first-child {
      margin-right: 10px;
      width: 30px;
    }
  }
}
@media screen and (max-width: $small) {
  footer {
    @include flex-center;
    flex-direction: column;
    height: auto;
    padding:15px;
  }
}
</style>
