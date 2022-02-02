<template>
  <header>
    <div>{{ $t("headerAnnouncement") }} !</div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $primary;
  text-align: center;
  @include x-small-text;
  color: #fff;
  height: 30px;
  @include flex-center;
}
</style>
