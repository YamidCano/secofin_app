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
      {
        path: "functionary",
        name: "functionary",
        component: () => import("pages/functionary/View.vue"),
      },
      {
        path: "functionary/create",
        name: "functionaryCreate",
        component: () => import("pages/functionary/Create.vue"),
      },
      {
        path: "position",
        name: "position",
        component: () => import("pages/position/View.vue"),
      },
      {
        path: "payroll",
        name: "payroll",
        component: () => import("pages/payroll/View.vue"),
      },
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
