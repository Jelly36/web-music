import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/searchlist",
    name: "SearchList",
    component: () => import("../views/SearchList.vue"),
  },
  {
    path: "/video",
    name: "Video",
    component: () => import("../views/Video.vue"),
  },
  {
    path: "/playlist",
    name: "PlayList",
    component: () => import("../views/PlayList"),
  },
  {
    path: "/rank",
    name: "Rank",
    component: () => import("../views/Rank"),
  },
  {
    path: "/recommendSheet",
    name: "RecommendSheet",
    component: () => import("../views/RecommendSheet"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
