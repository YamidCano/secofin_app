// routes/pages/functionary.js
export const FunctionaryRoutes = [
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
  path: "functionary/update",
  name: "functionaryUpdate",
  component: () => import("src/pages/functionary/Update.vue"),
}
]
