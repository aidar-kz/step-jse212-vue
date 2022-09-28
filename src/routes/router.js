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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;