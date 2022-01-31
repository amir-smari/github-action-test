<template>
  <header>
    <div>{{ $t("headerAnnouncement") }} !</div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background: $primary;
  margin-top: 0;
  text-align: center;
  @include x-small-text;
  color: #fff;
  height: 30px;
  @include flex-center;
}
</style>
