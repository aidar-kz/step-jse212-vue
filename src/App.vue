<script setup>
import { ref } from 'vue'
import browsers from '@/assets/browsers';
import ParentComp from '@/components/ParentComp.vue';

const data = ref({
  text: ''
})

const onClick = () => alert('Кнопка нажата!');
</script>

<template>
  <ParentComp />
  <section>
    <h4>v-list</h4>
    <h1 v-list.random="browsers">Hello</h1>
  </section>
  
  <section>
    <h4>v-random-bg</h4>
    <textarea v-model="data.text" v-random-bg></textarea>
  </section>
  
  <section>
    <h4>v-lorem</h4>
    <h2 v-lorem:ru="4"></h2>
    <p v-lorem:ru></p>
  </section>

  <section>
    <h4>v-price</h4>
    <h2 v-price="125000"></h2>
  </section>
</template>

<style>
#app {
  width: 300px;
  margin: 0 auto;
}
</style>
