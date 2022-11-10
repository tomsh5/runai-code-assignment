import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homePage.vue"),
    },
    {
      path: "/company/:id",
      component: () => import("../views/companyManageApp.vue"),
      children: [
        {
          path: "departments",
          component: () => import("../cmps/departments/departmentList.vue"),
        },
        {
          path: "employees",
          component: () => import("../cmps/employees/employeeList.vue"),
        },
      ],
    },
  ],
});

export default router;
