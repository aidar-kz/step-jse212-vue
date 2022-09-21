<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <label>{{ label }}</label>
  <input 
    v-bind="$attrs"
    :placeholder="label" 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<style lang="scss">
input {
  width: 100%;
  line-height: 1.2;
  height: 20px;
  padding: 0 10px;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>