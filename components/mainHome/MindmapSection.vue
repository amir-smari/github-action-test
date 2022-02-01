<template>
  <div id="mindmap" class="mindmap-section">
    <div class="mindmap__content">
      {{ $t("mindMap.title") }}
    </div>
    <img
      src="@/assets/img/png/mindmap.png"
      alt="mindmap"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
    />
    <button
      class="primary__btn"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
    >
      {{ $t("mindMap.startYourCdc") }}
    </button>
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
