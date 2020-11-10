import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./core/stores/index";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import { messages } from "./resources/locales";
import router from "./router.ts";

Vue.use(VueI18n);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

// Create VueI18n instance with options
const i18n = new VueI18n({
  messages // set locale messages
});

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
