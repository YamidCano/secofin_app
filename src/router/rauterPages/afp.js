// routes/pages/afp.js
export const AfpRoutes = [
  {
    path: '/afp', name: 'afpView',
    component: () => import('pages/afp/View.vue')
  },
  {
    path: '/afp/create', name: 'afpCreate',
    component: () => import('pages/afp/Create.vue')
  },
  {
    path: '/afp/update', name: 'afpUpdate',
    component: () => import('pages/afp/Update.vue')
  }
]
