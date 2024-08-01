// routes/pages/eps.js
export const EpsRoutes = [
  {
    path: '/eps', name: 'epsView',
    component: () => import('pages/eps/View.vue')
  },
  {
    path: '/eps/create', name: 'epsCreate',
    component: () => import('pages/eps/Create.vue')
  },
  {
    path: '/eps/update', name: 'epsUpdate',
    component: () => import('pages/eps/Update.vue')
  }
]
