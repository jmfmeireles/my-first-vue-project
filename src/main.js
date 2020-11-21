import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./core/stores/index";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import { messages } from "./resources/locales";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq-uEs7xR8JWA9KqJUZeq1GeHPmJ6EieY",
  authDomain: "mymultiplatformproject.firebaseapp.com",
  databaseURL: "https://mymultiplatformproject.firebaseio.com",
  projectId: "mymultiplatformproject",
  storageBucket: "mymultiplatformproject.appspot.com",
  messagingSenderId: "1098832580384",
  appId: "1:1098832580384:web:b7d7763d2cc84e4c325145",
  measurementId: "G-2R8475SYRM"
};

firebase.initializeApp(firebaseConfig);

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
  /* created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
      }
    });
  } */
}).$mount("#app");
