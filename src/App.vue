<template>
  <header>
    <the-header />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <new-letter />
  </footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import NewLetter from "./components/NewLetter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    NewLetter,
  },
  data() {
    return {
      cartList: [],
    };
  },
};
</script>

<style>
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
