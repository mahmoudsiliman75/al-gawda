<template>
  <div class="home">
    <home-slider></home-slider>
    
    <courses-selection></courses-selection>
  </div>
</template>

<script>
import HomeSlider from "../components/ui/HomeSlider.vue";
import CoursesSelection from "../components/CoursesSelection.vue";
export default {
  name: "Home",

  components: {
    "home-slider": HomeSlider,
    "courses-selection": CoursesSelection,
  }
};
</script>

<style lang="scss" scoped>

</style>