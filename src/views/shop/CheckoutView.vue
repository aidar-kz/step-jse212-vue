<script setup>
import { ref } from "vue";
import { useShopStore } from "@/stores/shopStore.js";

const store = useShopStore();

const isLoading = ref(false)

async function checkout() {
  const baseUrl = "https://jse-211.herokuapp.com";
  const res = await fetch(baseUrl + '/api/shop/checkout', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: store.cart,
      successUrl: 'http://127.0.0.1:5173/shop/success',
      cancelUrl: 'http://127.0.0.1:5173/shop/checkout',
    })
  })

  if (res.status === 200) {
    const { url } = await res.json();
    window.location.href = url;
  } else {
    alert('Что-то пошло не так');
  }
}
</script>

<template>
  <div class="container py-5 px-md-5">
    <div class="col col-lg-8 mx-auto">
      <table class="table table striped">
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in store.cart" :key="product.id">
            <td>{{ product.brand }} {{ product.model }}</td>
            <td v-price="product.price" />
            <td>{{ product.quantity }}</td>
            <td class="text-end" v-price="product.price * product.quantity" />
          </tr>
          <tr>
            <td colspan="3" class="text-end">Сумма к оплате</td>
            <td class="text-end" v-price="store.cartTotal" />
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-between mt-3">
        <router-link to="/shop/cart" class="btn">
          <i class="bi bi-arrow-left-short" />
          <span>Назад</span>
        </router-link>

        <button v-if="isLoading" class="btn btn-primary" disabled>
          <span class="spinner-border spinner-border-sm"></span>
          <span class="ms-1">Загрузка...</span>
        </button>

        <button v-else class="btn btn-success" @click="checkout">Оплатить</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>