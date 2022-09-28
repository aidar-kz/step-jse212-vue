<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import MainNavbar from '@/components/MainNavbar.vue';

const data = ref({
})
</script>

<template>
  <MainNavbar />
  <RouterView />
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.css';

#app {
  width: 300px;
  margin: 0 auto;
}
</style>
