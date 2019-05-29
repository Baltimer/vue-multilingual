import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: 'es'
  },
  mutations: {
    language(state, language) {
      state.language = language;
    }
  },
  actions: {

  },
  getters: {
    language: state => state.language
  }
});
