import VouRouter from "vue-router";
import Store from "../pages/Store.vue";
import Login from "../pages/Login.vue";
const routes = [
  { path: "/", name: "login", component: Login },

  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/store",
    name: "store",
    component: Store,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VouRouter({
  mode: "history",
  routes
});

export default router;
