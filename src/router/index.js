import Router from "vue-router";
import Store from "../pages/Store.vue";
import Login from "../pages/Login.vue";

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "login", component: Login },

    {
      path: "/store",
      name: "store",
      component: Store
    }
  ]
});

//https://github.com/aofdev/vue-firebase-auth-vuex/tree/master/src
