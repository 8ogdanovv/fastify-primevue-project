export default [
  {
    path: '/',
    component: () => import('./views/index.vue')
  },
  {
    path: '/form',
    component: () => import('./views/form.vue')
  },
  {
    path: '/stats',
    component: () => import('./views/stats.vue')
  },
  {
    path: '/prime',
    component: () => import('./views/prime.vue')
  },
  {
    path: '/vue',
    component: () => import('./views/vue.vue')
  },
  {
    path: '/vite',
    component: () => import('./views/vite.vue')
  },
  {
    path: '/fastify',
    component: () => import('./views/fastify.vue')
  },
  {
    path: '/vercel',
    component: () => import('./views/vercel.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('./views/404.vue')
  }
]