import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeViews/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
    },

    // auth-system routes
    {
      path: '/auth',
      name: 'auth',
      children: [
        {
          path: 'sign-in/',
          component: () => import('../views/AuthViews/LoginView.vue'),
        },
        {
          path: 'sign-up/',
          component: () => import('../views/AuthViews/RegisterView.vue'),
        }
      ]
    }, 

    // admin-system routes
    {
      path: '/admin-panel',
      name: 'adminPanel',
      children: [
        {
          path: 'dashboard/',
          component: () => import('../views/AdminViews/AdminDashboard.vue'),
        },
      ]
    }, 

    // unknown routes
    {
      path: '/:pathMatch(.*)*',
      name: 'notFoundRoute',
      component: () => import('../views/ErrorViews/NotFoundView.vue'),
    }
  ]
})

export default router