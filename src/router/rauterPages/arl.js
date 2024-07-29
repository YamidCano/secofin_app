// routes/pages/arl.js
export const ArlRoutes = [
  {
    path: '/arl', name: 'arlView',
    component: () => import('pages/arl/View.vue')
  },
  {
    path: '/arl/create', name: 'arlCreate',
    component: () => import('pages/arl/Create.vue')
  },
  {
    path: '/arl/update', name: 'arlUpdate',
    component: () => import('pages/arl/Update.vue')
  }
]
