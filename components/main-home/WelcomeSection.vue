<template>
  <div class="welcome-section">
    <div class="welcome-section__header">
      <img src="@/assets/img/svg/header-logo.svg" alt="logo" />
      <div class="title">Workflows Automation Platform</div>
    </div>
    <div class="welcome-section__content">
      <span>Un game changer pour vos développements web</span>
      <span
        >"500 fonctionnalités font aujourd’hui 80 % de tous les développements
        informatiques. Il est donc possible de proposer des solutions
        d’automatisation qui feront gagner un temps considérable aux
        développeurs."</span
      >
    </div>
    <img src="@/assets/img/png/community.png" alt="community" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.welcome-section {
  background-image: url("@/assets/img/png/community-bg.png");
  background-size: 100vw 100%;
  background-repeat: no-repeat;
  text-align: center;
  margin: auto;
  height: 765px;

  .welcome-section__header {
    padding: 30px;
    @include flex-center;
    flex-direction: column;
    @include meduim-text;
    img {
      margin-bottom: 20px;
    }
  }
  .welcome-section__content {
    text-align: justify;
    width: 50%;
    margin: auto;
    color:$grey3;
    @include large-text;
    span {
      @include small-text;
    }
  }
}
@media screen and (max-width: $medium) {
  .welcome-section {
    height: auto;
    background-image: url("@/assets/img/png/community-bg.png");
    background-size: cover;
    .welcome-section__header {
      @include small-text;
    }
    .welcome-section__content {
      width: 100%;
      @include small-text; 
      span {
        @include x-small-text;
      }
    }
  }
}
</style>
