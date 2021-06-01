import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Machine from "../views/Machine.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/machine/:id", name: "machine", component: Machine }
];

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

export default router;
