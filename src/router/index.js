import VouRouter from "vue-router";
import Store from "../pages/Store.vue";
import Login from "../pages/Login.vue";
/* import store from "../core/stores/index";
 */
const routes = [
  { path: "/login", name: "login", component: Login },

  {
    path: "/store",
    name: "store",
    component: Store,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/",
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

/* router.beforeEach((to, from, next) => {
  if (
    to.matched.some(m => m.meta.requiresAuth) &&
    !store.getters.isAuthenticated
  ) {
    next({ name: "login" });
  } else {
    next();
  }
}); */

export default router;
