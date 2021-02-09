<template>
  <div class="home">
    <home-slider></home-slider>

    <our-brief></our-brief>

    <courses-selection></courses-selection>
  </div>
</template>

<script>
import HomeSlider from "../components/ui/HomeSlider.vue";
import CoursesSelection from "../components/CoursesSelection.vue";
import OurBrief from "../components/OurBrief.vue";

export default {
  name: "Home",

  components: {
    "home-slider": HomeSlider,
    "courses-selection": CoursesSelection,
    "our-brief": OurBrief,
  }
};
</script>

<style lang="scss" scoped>

</style>