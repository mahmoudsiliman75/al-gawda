import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "../src/assets/sass/main.scss";

import {BootstrapIconsPlugin } from "bootstrap-icons-vue";



createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapIconsPlugin)
  .use($)
  .mount("#app");

