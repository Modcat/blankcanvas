import Vue from "nativescript-vue";
import App from "./components/App";

import { store } from "./store.js";

require("nativescript-platform-css");

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = true;

new Vue({
  store,
  render: h => h("frame", [h(App)])
}).$start();
