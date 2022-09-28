import { defineStore } from "pinia";

const shopURL = "http://localhost:3000/products";

export const useShopStore = defineStore("shopStore", {
  state: () => ({
    products: [],
    cart: [],
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      const response = await fetch(shopURL);
      const products = await response.json();
      this.products = products;
    },
  },
});
