<script setup>
defineProps({
  primary: Boolean,
  secondary: Boolean,
  big: Boolean,
  small: Boolean
})
</script>

<template>
  <button type="button" class="btn" :class="[
    { primary },
    { secondary },
    { big },
    { small },
  ]">
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
  background: transparent;
  border-radius: 6px;
  border: 1px solid #0000001F;
  box-shadow: 0px 1px 4px #0000000d;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: $primary;
    border-color: $primary;
  }
}

.primary {
  color: $white;
  background: $primary;

  &:hover {
    color: $white;
    background: lighten($primary, 10);
  }
}

.secondary {
  color: $white;
  background: $secondary;

  &:hover {
    color: $white;
    background: lighten($secondary, 10);
  }
}

.big {
  min-width: 140px;
  min-height: 50px;
}

.small {
  min-width: 80px;
  min-height: 30px;
}
</style>