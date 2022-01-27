<template>
  <div class="mindmap-section">
    <div class="mindmap__content">
      Estimez le temps de développement et le prix de votre solution grâce à
      notre éditeur de cahier des charges nouvelle génération basée sur la
      méthode WBS
    </div>
    <img src="@/assets/img/svg/mindmap.svg" alt="mindmap" />
    <button class="primary__btn">Démarrez votre CDC</button>
  </div>
</template>

<style lang="scss" scoped>
.mindmap-section{
text-align: center;
@include meduim-text;
}
.mindmap__content{
    width: 70%;
    margin: auto;
    text-align: center;
    margin-bottom: 2%;
    @include small-text;
}
.primary__btn{
    // @include flex-center;
    @include btn;
    background: $primary;
    color: $light;
    margin: auto;
    font-weight: 700;
}
img{
    max-width: 90%;
}
</style>
