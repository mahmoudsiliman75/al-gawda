<template>
  <div>
    <nav-bar></nav-bar>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";
import TheFooter from "./components/layouts/TheFooter";

export default {
  components: {
    "nav-bar": NavBar,
    "the-footer": TheFooter,
  },

  methods: {
    initcart() {
      if ( ! localStorage.getItem('cart') ) {
        var cart = this.$store.state.cart;
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        this.$store.state.cart = JSON.parse( localStorage.getItem('cart') );
      }
    },
  },

  mounted() {
    this.initcart();
  },
};
</script>

<style lang="scss">
html{
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
