<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal">
      <slot></slot>
    </div>
    <div class="close"></div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 2;
}

.modal {
  @include flex-center;
  text-align: center;
  background-color: white;
  width: 80%;
  margin: auto;
  height: 95%;

  z-index: 3;
}
</style>
