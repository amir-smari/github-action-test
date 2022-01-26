<template>
  <footer>
    <img src="@/assets/img/svg/footer-logo.svg" alt="logo" />
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

   @include small-text;
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
