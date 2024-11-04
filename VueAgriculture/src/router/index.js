import { createRouter, createWebHistory } from "vue-router";
import landingpage from "../views/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: landingpage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutUs.vue"),
    },
    {
      path: "/market",
      name: "market",
      component: () => import("../views/Market.vue"),
    },
    {
      path: "/FAQ",
      name: "Tanya Jawab",
      component: () => import("../views/FAQ.vue"),
    },
    {
      path: "/services",
      name: "layanan kami",
      // component :
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
