// routes/pages/pensiones.js
export const PensionesRoutes = [
  {
    path: '/pensiones', name: 'pensionesView',
    component: () => import('pages/pensiones/View.vue')
  },
  {
    path: '/pensiones/create', name: 'pensionesCreate',
    component: () => import('pages/pensiones/Create.vue')
  },
  {
    path: '/pensiones/update', name: 'pensionesUpdate',
    component: () => import('pages/pensiones/Update.vue')
  }
]
