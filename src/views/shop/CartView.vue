<script setup>
import { useShopStore } from "@/stores/shopStore.js";

const store = useShopStore();
</script>

<template>
  <div class="container py-5 px-md-5">
    <h6 v-if="store.cartQuantity === 0">В корзине нет товаров</h6>

    <ul class="list-group">
      <li v-for="product in store.cart" :key="product.id"
        class="list-group-item d-flex justify-content-between align-items-center ps-0">
        <div>
          <button class="btn btn-text" @click="store.deleteFromCart(product.id)">
            <i class="bi bi-x"></i>
          </button>
          {{ product.brand }} {{ product.model }}
        </div>
        <div class="d-flex align-items-center">
          <span v-price="product.price * product.quantity"></span>
          <input type="number" min="1" class="form-control ms-2" v-model.number="product.quantity"
            @change="store.saveCart()">
        </div>
      </li>

      <li class="list-group-item text-end">
        Итого: <span v-price="store.cartTotal"></span>
      </li>
    </ul>

    <div class="d-flex justify-content-between mt-3" v-if="store.cartTotal">
      <button class="btn btn-warning" @click="store.clearCart">Очистить корзину</button>

      <router-link class="btn btn-success" to="/shop/checkout">Оформить заказ</router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
input[type="number"] {
  max-width: 70px;
}
</style>