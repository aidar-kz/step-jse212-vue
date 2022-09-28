import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeView.vue") },
  {
    path: "/directives",
    component: () => import("@/views/DirectivesView.vue"),
  },
  { path: "/shop", component: () => import("@/views/ShopView.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
