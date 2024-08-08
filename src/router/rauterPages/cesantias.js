// routes/pages/cesantias.js
export const CesantiasRoutes = [
  {
    path: '/cesantias', name: 'cesantiasView',
    component: () => import('pages/cesantias/View.vue')
  },
  {
    path: '/cesantias/create', name: 'cesantiasCreate',
    component: () => import('pages/cesantias/Create.vue')
  },
  {
    path: '/cesantias/update', name: 'cesantiasUpdate',
    component: () => import('pages/cesantias/Update.vue')
  }
]
