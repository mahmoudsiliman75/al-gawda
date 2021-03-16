//
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      api_link: 'http://api.jawda-academy.com/',
      cart: [],
      api_token: localStorage.getItem('user_token'),
    };
  },
  mutations: {},
  actions: {},
  modules: {}
});
//
