<template>
  <top-nav></top-nav>
  <router-view/>
  <footer-nav></footer-nav>
</template>
<script>
// @ is an alias to /src

import top from './components/TopNav.vue'
import Footer from './components/FooterNav.vue'
export default {
  name: 'App',
  components: {
    TopNav: top,
    FooterNav: Footer,
  }
}
</script>
<style>
body{
  margin: 0%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
