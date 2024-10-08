import { ArlRoutes } from 'src/router/rauterPages/arl'
import { EpsRoutes } from 'src/router/rauterPages/eps'
import { FunctionaryRoutes } from './rauterPages/functionary';
import { PositionRoutes } from './rauterPages/position';
import { PayrollRoutes } from './rauterPages/payroll';
import { AfpRoutes } from './rauterPages/afp';

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/IndexPage.vue"),
      },
      // Router functionary
      ...FunctionaryRoutes,

      // Router position
      ...PositionRoutes,

      // Router payroll
      ...PayrollRoutes,

      // Router arl
      ...ArlRoutes,

      // Router Eeps
      ...EpsRoutes,

      // Router pensiones
      ...AfpRoutes,
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
