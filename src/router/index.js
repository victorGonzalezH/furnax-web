import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
//import Overlook from "..views/Overlook.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    component: () =>
      import(/* webpackChunkName: "root" */ "../views/Overlook.vue"),
  },
  {
    path: "/overlook",
    name: "overlook",
    component: () =>
      import(/* webpackChunkName: "overlook" */ "../views/Overlook.vue"),
  },
  {
    path: "/taskmaster",
    name: "taskmaster",
    component: () =>
      import(/* webpackChunkName: "taskmaster" */ "../views/Taskmaster.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
