<template>
  <div class="home">
    <home-slider></home-slider>

    <our-brief></our-brief>

    <courses-selection></courses-selection>

    <team-work></team-work>

    <clients-testeemonials></clients-testeemonials>
  </div>
</template>

<script>
import HomeSlider from "../components/ui/HomeSlider.vue";
import CoursesSelection from "../components/CoursesSelection.vue";
import OurBrief from "../components/OurBrief.vue";
import TeamWork from "../components/TeamWork.vue";
import clientsTestemonials from "../components/ClientsTestemonials.vue";

export default {
  name: "Home",

  components: {
    "home-slider": HomeSlider,
    "courses-selection": CoursesSelection,
    "our-brief": OurBrief,
    "team-work": TeamWork,
    "clients-testeemonials": clientsTestemonials,
  }
};
</script>

<style lang="scss" scoped>

</style>