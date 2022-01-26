<template lang="">
  <div class="contact-section">
    <div class="contact-section__title">
      Estimez le temps de développement et le coût de votre projet
    </div>
    <button class="access-btn">
      <span> Accédez à votre éditeur de CDC</span>
      <img src="@/assets/img/svg/arrow.svg" alt="arrow" />
    </button>
    <div class="contact-section__form">
      <span>Version Saas disponible en avril 2022, soyez les premiers ! </span>
      <span>Inscrivez-vous sur la liste d'attente pour une démo</span>
      <input type="text" placeholder="Entrez votre email" />
      <button>Notifiez-moi</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.contact-section {
  background-image: url("@/assets/img/png/contact-bg.png");
  background-size: cover;
  text-align: center;
  color: $light;
  position: relative;
  margin: 30px auto;
  height: 400px;
  padding-top: 76px;
  .contact-section__title {
    @include large-text;
    font-weight: 500;
  }
  .access-btn {
    color: $primary;
    background: $light;
    @include btn;
    margin: auto;
  }
  .contact-section__form {
  }
}
</style>
