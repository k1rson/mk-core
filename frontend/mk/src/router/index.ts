import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeViews/HomeView.vue'),
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