import Vue from "vue";
import App from "../src/App.vue";
import router from "../src/router/index.js";
import store from "../src/store/index";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "../src/assets/sass/main.scss";

import icons from "v-svg-icons";

Vue.config.productionTip = false;
Vue.component("icon", icons);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

