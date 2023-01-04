import { createRouter, createWebHistory } from "vue-router";

export const constantRoutes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    hidden: true,
    meta: { guest: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { title: "Dashboard" },
  },
];

const createRouters = () =>
  new createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: constantRoutes,
  });

const router = createRouters();

export default router;
