<template>
  <Header/>
  <router-view />
  <Footer/>
</template>

<script>
import Header from "@/components/layout/header/index.vue";
import Footer from "@/components/layout/footer/index.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
