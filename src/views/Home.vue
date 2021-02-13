<template>
  <div class="home">
    <home-slider></home-slider>

    <our-brief></our-brief>

    <courses-selection></courses-selection>

    <team-work></team-work>

    <clients-testemonials></clients-testemonials>

    <center-mobile-app></center-mobile-app>

    <contact-us></contact-us>
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
  }
};
</script>

<style lang="scss" scoped>

</style>