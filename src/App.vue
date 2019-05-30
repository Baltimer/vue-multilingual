<template>
  <div id="app">
    <div id="nav">
      <div class="nav__links-section">
        <router-link to="/">{{ $t('home') }}</router-link> |
        <router-link to="/about">{{ $t('about') }}</router-link>
      </div>
      <LanguageSwitcher></LanguageSwitcher>
    </div>
    <router-view/>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
export default {
  components: {
    LanguageSwitcher
  }
}
</script>

<style lang="scss">
html, body, #app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  box-sizing: border-box;
  position: relative;
  padding: 15px 40px;
  // margin: 0 10%;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:first-child {
      margin-right: 5px;
    }
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
  ul {
    margin: 0px;
    padding: 0px;
    li {
      margin: 0px;
      &:not(:first-child) {
      margin-left: 10px;
    }
    }
  }
}
</style>
