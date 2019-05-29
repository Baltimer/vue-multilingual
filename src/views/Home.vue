<template>
  <div class="home">
    <LanguageSwitcher></LanguageSwitcher>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    LanguageSwitcher,
  },
};
</script>
