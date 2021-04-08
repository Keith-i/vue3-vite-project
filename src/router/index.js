import { createRouter, createWebHashHistory } from "vue-router";

const history = createWebHashHistory();

const routes = [
  {
    path: "/",
    name: "indexpage",
    component: () => import("/@/view/indexPage.vue"),
    children: [],
  },
  {
    path: "/two",
    name: "two",
    component: () => import("/@/view/index2.vue"),
    children: [],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("/@/view/login"),
    children: [],
  },
];

let router = createRouter({
  history: history,
  routes,
});

export default router;
