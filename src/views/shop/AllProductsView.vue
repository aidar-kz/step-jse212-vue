<script setup>
import { onMounted } from 'vue';
import { useShopStore } from "@/stores/shopStore.js";
import ProductCard from '@/components/ProductCard.vue';

const store = useShopStore();

onMounted(() => {
  store.fetchProducts()
})

</script>

<template>
  <div class="container p-5">
    <div class="row g-3">
      <div class="col-12 col-sm-6 col-md-4 d-flex" v-for="product in store.products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>