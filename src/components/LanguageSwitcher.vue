<template>
  <ul class="lang-menu">
    <li v-for="lang in languages" :class="{active : lang.active}" :key="lang.code" @click="changeLang(lang)">
      {{ lang.code.toUpperCase() }}
    </li>
  </ul>
</template>

<script>
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
      this.$i18n.locale = lang.code;
      let otherLanguages = this.languages.filter((language) => language.code !== lang.code);
      otherLanguages.forEach(language => language.active = false);
      lang.active = true;
      this.$store.commit('language', lang.code);
    },
  },
  mounted() {
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
      }
    }
  }
</style>
