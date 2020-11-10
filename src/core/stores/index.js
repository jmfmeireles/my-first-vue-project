import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import catalog from "./modules/catalog.store";
import shoppingCart from "./modules/shoppingCart.store";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
const loggerOptions = {};

export default new Vuex.Store({
  modules: {
    catalog,
    shoppingCart
  },
  strict: debug,
  plugins: debug ? [createLogger(loggerOptions)] : []
});
