import { createRouter, createWebHistory } from 'vue-router'
import landingpage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: landingpage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path : '/market',
      name : 'market',
      // component : 
    },
    {
      path : '/FAQ',
      name : 'Tanya Jawab',
      // component :
    },
    {
      path : '/services',
      name : 'layanan kami',
      // component :
    },
  ]
})

export default router
