import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeViews/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
      meta: {

      },
    },


  ]
})

export default router
