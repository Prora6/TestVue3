<template>
  <Header/>
  <router-view />
</template>

<script>
import Header from "@/components/layout/header/index.vue";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
  background-color: #E1DEFF;
  height: 100vh;
}
li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
}
h1, h2, h3, p, span {
  margin: 0;
  padding: 0;
}
</style>
