<template>
  <ul class="lang-menu">
    <li v-for="lang in languages" :class="{active : lang.active}" :key="lang.code" @click="changeLang(lang)">
      {{ lang.code.toUpperCase() }}
    </li>
  </ul>
</template>

<script>
import {loadLanguage} from '@/i18n-setup.js';
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      languages: [
        {
          code: 'es',
          active: true,
        },
        {
          code: 'en',
          active: false,
        },
      ],
    };
  },
  methods: {
    changeLang(lang) {
      let otherLanguages = this.languages.filter((language) => language.code !== lang.code);
      otherLanguages.forEach(language => language.active = false);
      lang.active = true;
      loadLanguage(lang.code);
      this.$store.commit('language', lang.code);
    },
    setDefaultLang(lang) {
      let currentLanguage = this.languages.filter((language) => language.code === lang);
      let otherLanguages = this.languages.filter((language) => language.code !== lang);
      currentLanguage[0].active = true;
      otherLanguages.forEach(language => language.active = false);
      loadLanguage(lang);
      this.$store.commit('language', lang);
    }
  },
  mounted() {
    let defaultLang = (localStorage['lang'] ? localStorage['lang'] : process.env.VUE_APP_LANG);
    this.setDefaultLang(defaultLang);
  },
};
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;

    li {
      display: inline-flex;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 10px;
      }
      &.active {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
</style>
