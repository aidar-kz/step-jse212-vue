import { defineStore } from "pinia";

const shopURL = "http://localhost:3000/products";

export const useShopStore = defineStore("shopStore", {
  state: () => ({
    products: [],
    cart: [],
  }),
  getters: {
    cartQuantity() {
      return this.cart.reduce((acc, product) => acc + product.quantity, 0);
    },
  },
  actions: {
    async fetchProducts() {
      const response = await fetch(shopURL);
      const products = await response.json();
      this.products = products;
    },
    async fetchProduct(id) {
      console.log(`fetchProduct(${id})`);
      const response = await fetch(shopURL + "/" + id);
      const product = await response.json();
      return product;
    },
    addToCart(newProduct) {
      const index = this.cart.findIndex(
        product => product.id === newProduct.id
      );

      if (index === -1) {
        this.cart.push(newProduct);
      } else {
        this.cart[index].quantity++;
      }

      this.saveCart();
    },
    saveCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    loadCart() {
      const cart = localStorage.getItem("cart");
      if (cart) {
        this.cart = JSON.parse(cart);
      }
    },
  },
});
