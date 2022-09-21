<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/elements/BaseButton.vue';
import BaseInput from './components/elements/BaseInput.vue';

const data = ref({
  name: '',
  email: '',
  password: ''
})

const onClick = () => alert('Кнопка нажата!');
</script>

<template>
  <BaseButton primary big @click="onClick">
    Моя кнопка
  </BaseButton>

  <br>
  <br>

  <BaseInput type="text" label="Имя:" v-model="data.name" />
  <BaseInput type="email" label="Эл.почта:" v-model="data.email" />
  <BaseInput type="password" label="Пароль:" v-model="data.password" />
</template>

<style>
#app {
  width: 300px;
  margin: 0 auto;
}
</style>
