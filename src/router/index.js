import Vue from "vue";
import VueRouter from "vue-router";

import Products from "@/pages/Products";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    beforeEnter: function(to, from, next) {
      next("/products");
    },
  },

  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
