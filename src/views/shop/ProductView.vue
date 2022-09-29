<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useShopStore } from "@/stores/shopStore.js";

const store = useShopStore();
const route = useRoute();
const product = ref({})

onMounted(() => {
  const { id } = route.params;
  store.fetchProduct(id).then(fetchedProduct => {
    product.value = fetchedProduct;
  })
})
</script>

<template>
  <div class="container p-5">
    <h1>{{ product.brand }} {{ product.model }} {{ product.storage }} ГБ</h1>

    <div class="d-flex mt-4">
      <img :src="product.image" />

      <div class="ms-3">
        <ul>
          <li>Размер оперативной памяти: {{ product.ram }}</li>
          <li>Технология nfc: {{ product.nfc ? 'да': 'нет' }}</li>
          <li>Тип экрана: {{ product.screenType }}</li>
          <li>Размер экрана: {{ product.screenSize }}</li>
          <li>Процессор: {{ product.cpu }}</li>
          <li>Объем встроенной памяти: {{ product.storage }} ГБ</li>
          <li>Емкость аккумулятора: {{ product.battery }} мАч</li>
        </ul>

        <div class="ms-3">
          <h5>Цена: <span v-price="product.price"></span></h5>

          <button class="btn btn-success" @click="store.addToCart(product)">В корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-height: 300px;
}
</style>