<script setup>
import { onMounted } from "vue";
import { useShopStore } from "@/stores/shopStore.js";

const store = useShopStore();

onMounted(() => store.loadCart());
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <RouterLink to="/shop">Магазин</RouterLink>
      <RouterLink to="/shop/cart">В корзине: {{ store.cartQuantity }}</RouterLink>
    </div>
    <RouterView />
  </div>
</template>


<style lang="scss" scoped>

</style>