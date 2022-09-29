import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeView.vue") },
  {
    path: "/directives",
    component: () => import("@/views/DirectivesView.vue"),
  },
  {
    path: "/shop",
    component: () => import("@/views/shop/ShopLayout.vue"),
    children: [
      {
        path: "",
        name: "all-products",
        component: () => import("@/views/shop/AllProductsView.vue"),
      },
      {
        path: ":id",
        name: "product-view",
        component: () => import("@/views/shop/ProductView.vue"),
      },
      {
        path: "cart",
        name: "cart-view",
        component: () => import("@/views/shop/CartView.vue"),
      },
      {
        path: "checkout",
        name: "checkout-view",
        component: () => import("@/views/shop/CheckoutView.vue"),
      },
      {
        path: "success",
        name: "success-view",
        component: () => import("@/views/shop/SuccessView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
