    
<script setup>
function onEnter() {
  console.log('onEnter')
}

function onLeave() {
  console.log('onLeave')
}
</script>

<template>
  <Transition name="my-transition" @enter="onEnter" @leave="onLeave">
    <slot></slot>
  </Transition>
</template>

<style>
/*
  Necessary CSS...
  Note: avoid using <style scoped> here since it
  does not apply to slot content.
*/
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 1s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
</style>