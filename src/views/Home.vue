<template>
  <div class="home">

    <!-- START:: PRELOADER COMPONENT -->
    <pre-loader></pre-loader>
    <!-- END:: PRELOADER COMPONENT -->

    <!-- START:: HOME SLIDER -->
    <home-slider :data="pageData"></home-slider>
    <!-- END:: HOME SLIDER -->

    <!-- START:: OUR BRIEF SECTION -->
    <our-brief :data="pageData"></our-brief>
    <!-- END:: OUR BRIEF SECTION -->

    <!-- START:: COURSE SELECTION SECTION -->
    <courses-selection :data="pageData.categorires"></courses-selection>
    <!-- END:: COURSE SELECTION SECTION -->

    <!-- START:: TEAM WORK  SECTION -->
    <team-work :allInstructors="pageData.instructors"></team-work>
    <div class="col-12 view-more-btn d-flex justify-content-center">
      <router-link to="/team" v-if=" pageData.instructors.length != 0 "> {{ $t('meet_team') }} </router-link>
    </div>
    <!-- END:: TEAM WORK  SECTION -->

    <!-- START:: TESTEMONIALS SECTION -->
    <clients-testemonials :data="pageData"></clients-testemonials>
    <!-- END:: TESTEMONIALS SECTION -->

    <!-- STRAT:: MOBILE APP SECTION -->
    <center-mobile-app :data="pageData.download"></center-mobile-app>
    <!-- END:: MOBILE APP SECTION -->

    <!-- START:: CONTACT US SECTION -->
    <contact-us></contact-us>
    <!-- END:: CONTACT US SECTION -->
  </div>
</template>

<script>
import HomeSlider from "../components/ui/HomeSlider.vue";
import CoursesSelection from "../components/CoursesSelection.vue";
import OurBrief from "../components/OurBrief.vue";
import TeamWork from "../components/TeamWork.vue";
import clientsTestemonials from "../components/ClientsTestemonials.vue";
import CenterMobileApp from "../components/CenterMobileApp.vue";
import ContactUs from "../components/ContactUs.vue";
import PreLoader from "../components/ui/PreLoader.vue";
import axios from 'axios';

export default {
  name: "Home",

  components: {
    "home-slider": HomeSlider,
    "courses-selection": CoursesSelection,
    "our-brief": OurBrief,
    "team-work": TeamWork,
    "clients-testemonials": clientsTestemonials,
    "center-mobile-app": CenterMobileApp,
    "contact-us": ContactUs,
    "pre-loader": PreLoader,
  },

  data() {
    return {
      pageData: {},
    }
  },

  methods: {
    getHomePageData() {
      axios.get(this.$store.state.api_link+'api/setting/home',{
        headers: {
          lang: localStorage.getItem('site_locale') ?? 'en',
        }
      })
      .then( res => this.pageData = res.data.data )
      .catch( error => console.log(error) )
    },
  },

  mounted() {
    this.getHomePageData();
  }

};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE
.view-more-btn {
  a {
    text-decoration: none;
    display: inline-block;
    color: $mainColor;
    font-weight: bold;
    margin: 15px 0;
    padding: 5px 10px;
    border: 2px solid $mainColor;
    @include borderRadius(20px);
    @include transitioning();
    &:hover {
      color: #fff;
      background-color: $mainColor;
    }
  }
}
</style>
