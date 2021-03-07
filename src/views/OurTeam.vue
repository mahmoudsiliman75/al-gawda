<template>
  <div class="our-team">
    <team-work></team-work>
  </div>
</template>

<script>
import TeamWork from "../components/TeamWork.vue";

export default {
  components: {
    "team-work": TeamWork
  },
};
</script>

<style lang="scss" scoped>
// START:: IMPORTING MAIN FILE
@import "../assets/sass/main.scss";
// END:: IMPORTING MAIN FILE
.our-team {
  min-height: 80vh;
  padding-bottom: 60px;
}
</style>
