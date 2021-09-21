<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "@/pages/Main";

export default {
  name: "App",

  components: {
    Main,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  background: #dbd9e0;
}
</style>
