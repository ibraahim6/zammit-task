import Vue from "vue";
import Vuex from "vuex";
import productsModule from "@/store/modules/productsModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Products: productsModule,
  },
  state: {},
  mutations: {},
  actions: {},
});
