import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; // เช็กว่ามีไฟล์นี้จริงๆ
import MyCollection from "../views/MyCollection.vue"; // เพิ่มการนำเข้า MyCollection.vue
import AnimeDetail from "../views/animedetail.vue"; // เพิ่มการนำเข้า AnimeDetail.vue
import Animedetail from "../views/animedetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/mycollection",
      name: "mycollection",
      component: MyCollection,
    },
    {
      path: "/anime-detail",
      name: "anime-detail",
      component: Animedetail,
    },
  ],
});

export default router;
