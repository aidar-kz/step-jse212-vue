<!-- SFC Single-file components -->
<script>

// Options API
export default {
  data() {
    return {
      count: 0, // this.count
    };
  },

  // Функции меняющие состояние
  methods: {
    increment() {
      this.count++
    }
  },

  // Хуки жизненного цикла
  mounted() {
    console.log(`Значние count ${this.count}`);
  }
}
</script>

<template>
  <div id="app">
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<style>
button {
  font-weight: bold;
}
</style>