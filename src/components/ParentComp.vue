<script setup>
import ChildComp from './ChildComp.vue';

const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <ChildComp :vFocus="vFocus" />
</template>
