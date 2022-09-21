<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss">
.btn {
  min-width: 120px;
  min-height: 40px;
  padding: 0 14px;
  font-size: 14px;
  font-weight: 600;
  color: $grey;
}
</style>