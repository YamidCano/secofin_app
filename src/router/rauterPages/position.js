// routes/pages/position.js
export const PositionRoutes = [
  {
    path: "position",
    name: "position",
    component: () => import("pages/position/View.vue"),
  },
  {
    path: "position/create",
    name: "positionCreate",
    component: () => import("pages/position/Create.vue"),
  },
]
