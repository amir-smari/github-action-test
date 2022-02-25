<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" :class="fit ? 'fit-content' : ''">
      <slot></slot>
    </div>
    <div class="close"></div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  // display: flex;
  // justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.modal {
  @include flex-center;
  text-align: center;
  background-color: white;
  width: 80%;
  margin: auto;
  height: 95%;
  border-radius: 6px;
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.fit-content {
  height: fit-content;
}
</style>
<script>
export default {
  props: {
    fit: {
      type: Boolean,
      default: false,
    },
  },
};
</script>