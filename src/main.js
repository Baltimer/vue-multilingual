import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';

// Parse JSON with the translations
const es = require('./locales/es.json');
const en = require('./locales/en.json');

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages: { 
    es: es,
    en: en
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
