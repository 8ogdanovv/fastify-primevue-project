export default [
  {
    path: '/',
    component: () => import('./views/index.vue')
  },
  {
    path: '/stats',
    component: () => import('./views/stats.vue')
  },
  {
    path: '/prime',
    component: () => import('./views/prime.vue')
  },
]
