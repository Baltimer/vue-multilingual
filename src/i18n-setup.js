//i18n-setup.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import axios from 'axios'

Vue.use(VueI18n)

// Retrieve the last language slected by the user (if exists)
let defaultLang = (localStorage['lang'] ? localStorage['lang'] : process.env.VUE_APP_LANG);
let messages = require(`@/locales/${defaultLang}`).default;

export const i18n = new VueI18n({
  locale: defaultLang, // set locale
  fallbackLocale: defaultLang,
  messages // set locale messages
})

const loadedLanguages = [defaultLang] // our default language that is preloaded 

function setI18nLanguage (lang) {
  i18n.locale = lang
  localStorage['lang'] = lang;
  // axios.defaults.headers.common['Accept-Language'] = lang // Use it to set up axios language header
  // document.querySelector('html').setAttribute('lang', lang) // Set language as querystring parameter
  return lang
}

export function loadLanguage(lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      const messages = require(`@/locales/${lang}`).default;
      i18n.setLocaleMessage(lang, messages[lang])
      loadedLanguages.push(lang);
      return setI18nLanguage(lang);
    } 
    return Promise.resolve(setI18nLanguage(lang, messages));
  }
  return Promise.resolve(lang);
}
