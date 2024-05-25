import { createRouter, createWebHistory } from 'vue-router'

// route enums
import { RouteNamesEnum } from '../enums/routeNames.enum'
import { AppLayoutsEnum } from '../enums/appLayouts.enum'

// router middlewares
import { loadLayoutMiddleware } from '../middlewares/router/loadLayout.middleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNamesEnum.home,
      component: () => import('../views/HomeViews/HomeView.vue'),
      meta: {
        layout: AppLayoutsEnum.default 
      }
    },

    // auth-system routes
    {
      path: '/auth',
      name: RouteNamesEnum.auth,
      children: [
        {
          path: 'sign-in/',
          component: () => import('../views/AuthViews/LoginView.vue'),
          name: RouteNamesEnum.login,
          meta: {
            layout: AppLayoutsEnum.auth,
          }
        },
        {
          path: 'sign-up/',
          component: () => import('../views/AuthViews/RegisterView.vue'),
          name: RouteNamesEnum.register,
          meta: {
            layout: AppLayoutsEnum.auth,
          }
        }
      ]
    }, 

    // admin-system routes
    {
      path: '/admin-panel',
      name: RouteNamesEnum.admin,
      children: [
        {
          path: 'dashboard/',
          component: () => import('../views/AdminViews/AdminDashboard.vue'),
          name: RouteNamesEnum.adminDashboard,
          meta: {
            layout: AppLayoutsEnum.admin
          }
        },
      ]
    }, 

    // unknown routes
    {
      path: '/:pathMatch(.*)*',
      name: RouteNamesEnum.notFoundRoute,
      component: () => import('../views/ErrorViews/NotFoundView.vue'),
      meta: {
        layout: AppLayoutsEnum.error
      }
    }
  ]
})

router.beforeEach(loadLayoutMiddleware);

export default router