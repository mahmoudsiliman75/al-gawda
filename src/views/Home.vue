<template>
  <div class="home">
    <!-- START:: HOME SLIDER -->
    <home-slider></home-slider>
    <!-- END:: HOME SLIDER -->

    <!-- START:: OUR BRIEF SECTION -->
    <our-brief></our-brief>
    <!-- END:: OUR BRIEF SECTION -->

    <!-- START:: COURSE SELECTION SECTION -->
    <courses-selection></courses-selection>
    <!-- END:: COURSE SELECTION SECTION -->

    <!-- START:: TEAM WORK  SECTION -->
    <team-work></team-work>
    <div class="col-12 view-more-btn">
      <router-link to="/team"> Meet Our Team </router-link>
    </div>
    <!-- END:: TEAM WORK  SECTION -->

    <!-- START:: TESTEMONIALS SECTION -->
    <clients-testemonials></clients-testemonials>
    <!-- END:: TESTEMONIALS SECTION -->

    <!-- STRAT:: MOBILE APP SECTION -->
    <center-mobile-app></center-mobile-app>
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
  },

  data() {
    return {

    };
  },

  provide: {
    members: [
      {
        id: "1",
        imgUrl: "http://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png",
        name: "Mohamed Eid",
        role: "Back-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#",
      },
      {
        id: "2",
        imgUrl: "http://unitedthemes.com/wp-content/uploads/2018/09/team1.jpg",
        name: "Mahmoud siliman",
        role: "Front-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#",
      },
      {
        id: "3",
        imgUrl: "http://d3f86pfw66amx.cloudfront.net/uncode/wp-content/uploads/2015/03/shutterstock_159780776-uai-828x828.jpg",
        name: "Mostafa Emam",
        role: "Back-End Developer",
        faceUrl: "#",
        twitterUrl: "#",
        linkedUrl: "#",
      },
    ],
  },
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