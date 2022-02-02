<template>
  <div>
    <div
      class="button"
      v-for="(lang, index) in $i18n.availableLocales"
      :key="index"
    >
      <input
        type="radio"
        :id="lang"
        :value="lang"
        name="check-substitution-2"
        v-model="$i18n.locale"
      />
      <label class="btn btn-default" :for="lang">{{ lang }}</label>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.button {
  float: left;
  position: relative;
}

.button label,
.button input {
  padding: 0.5rem 1rem;
  text-transform: capitalize;
}

.button input[type="radio"] {
  opacity: 0.011;
  z-index: 100;
}

.button input[type="radio"]:checked + label {
  background: #fff;
  color: $primary;
  border-radius: 6px;
}
.button label {
  cursor: pointer;
  z-index: 90;
}
</style>
