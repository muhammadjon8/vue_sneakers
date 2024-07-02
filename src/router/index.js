import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/favourites",
    component: () => import("../components/favorites.vue"),
  },
  { path: "/", component: () => import("../components/Main.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
