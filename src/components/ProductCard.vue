<script setup>
import { useShopStore } from "@/stores/shopStore.js";

const store = useShopStore();

defineProps({
  product: {
    type: Object,
    required: true
  }
})    
</script>

<template>
  <div class="card w-100">
    <router-link :to="`/shop/${product.id}`" class="mx-auto">
      <img :src="product.image" />
    </router-link>

    <div class="card-body d-flex flex-column">
      <router-link :to="`/shop/${product.id}`" class="text-decoration-none">
        <h6 class="card-title">{{ product.brand }} {{ product.model }}</h6>
      </router-link>

      <p class="card-text" v-price="product.price" />

      <button class="btn btn-primary mt-auto align-self-end" @click="store.addToCart(product)">В
        корзину</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-height: 200px;
  object-fit: contain;
}
</style>