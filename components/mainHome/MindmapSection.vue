<template>
  <div id="mindmap" class="mindmap-section">
    <div class="mindmap__content">
      Estimez le temps de développement et le prix de votre solution grâce à
      notre éditeur de cahier des charges nouvelle génération basée sur la
      méthode WBS
    </div>
    <img src="@/assets/img/png/mindmap.png" alt="mindmap" />
    <button class="primary__btn">Démarrez votre CDC</button>
  </div>
</template>
<style lang="scss" scoped>
.mindmap-section {
  background-image: url("@/assets/img/png/icon-bg.png");
  text-align: center;
  @include meduim-text;
}
.mindmap__content {
  width: 70%;
  margin: auto;
  text-align: center;
  margin-bottom: 2%;
  font-family: "Poppins-bold";
  font-size: 1.5rem;
  font-style: bold;
  font-weight: 600;
  line-height: 2.55rem;
  letter-spacing: 0px;
  text-align: center;
  color: $grey1;
}
.primary__btn {
  padding: 10px;
  @include btn;
  background: $primary;
  color: $light;
  margin: auto;
  font-size: 1.66rem;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 10%;
}
img {
  max-width: 90%;
}
@media screen and (max-width: $sm) {
  .primary__btn {
    padding: 8px;
  }
}
</style>
