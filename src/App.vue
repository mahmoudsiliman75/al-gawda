<template>
  <div>
    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->
    <nav-bar></nav-bar>
      <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";
import TheFooter from "./components/layouts/TheFooter";
import PreLoader from "./components/ui/PreLoader.vue";

export default {
  components: {
    "nav-bar": NavBar,
    "the-footer": TheFooter,
    "pre-loader": PreLoader,
  },

  data() {
    return {
      preLoader: false,
    }
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

  created() {
    this.preLoader = true;
    var defaultLocale = localStorage.getItem('site_locale');

    if ( defaultLocale ) {
      this.$i18n.locale = defaultLocale;
    }

    if ( defaultLocale == 'en' ) {
      document.querySelector('body').style.direction = "ltr";
    } else if ( defaultLocale == 'ar' ) {
      document.querySelector("body").style.direction = "rtl";
    }
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
